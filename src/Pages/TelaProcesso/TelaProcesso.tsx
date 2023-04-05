import React, { useState, useEffect, MouseEventHandler, SetStateAction, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { getNomeComponente, urlValida, getIconeArquivo, getBeneficiosPorTipo, getKeyEnum, getValueEnum } from '../../utils';
import { Dayjs } from 'dayjs';
import { sessaoTI, StatusComponenteProcesso, TamanhoComponenteProcesso, TarefaExecucao, TipoComponenteProcesso } from '../../constants/enuns';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Toolbar from '../../Components/Toolbar/Toolbar';
import SelectBox from '../../Components/SelectBox/SelectBox'
import TabelaBeneficios from "../../Components/Tabelas/TabelaBeneficios/TabelaBeneficios";
import TabelasCusto from '../../Components/Tabelas/TabelaCentroCusto/TabelaCentroCusto';
import ConteudoModalConfirmacao from '../../Components/ConteudoModalConfirmacao/ConteudoModalConfirmacao';
import {
    Alert, Badge, Box, Checkbox, Container, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText,
    Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Radio, RadioGroup, SelectChangeEvent, Snackbar, TextField, Typography
} from '@mui/material';
import ChatBubbleRounded from '@mui/icons-material/ChatBubbleRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider, MuiPickersAdapterContext } from '@mui/x-date-pickers';
import { BoxContainer, BoxConteudo, BotaoTerciario, BotaoPrimario, BotaoSecundario } from "../App.styles"
import {
    BotaoIcone, BotaoPrimarioHeader, BotaoSecundarioHeader, BotaoTerciarioHeader, BoxAviso, BoxBotoes, BoxHeader, BoxTabela, CircleIconPonto,
    GridItemFooter, GridPequenosAtributos, TypographyTexto,
    TypographyTitulo, TypographyTituloAtributo, BoxConteudoModal, TypographyTituloModal, BoxTituloModal,
    BoxBotoesModal, BoxInfoModal, BoxAtributosInfoModal, BoxAtributoInfoModal, BoxBUsBeneficiadas, BoxSessaoTI,
    BoxAtributoInfoModal2, TypographyTituloAtributoModal, TextFieldURL
} from './TelaProcesso.styles';
import ContainerProcesso from '../../Components/ContainerProcesso/ContainerProcesso';
import api, { pegarAnalistaTIResponsavel, pegarGerenteSolicitante, pegarGerenteTISolicitante, pegarUltimoHistorico, verificarHistoricoAprovado } from '../../api/api';
import { TypographyTituloDecisao } from '../TelaColecaoProcesso/TelaColecaoProcesso.styles';
// import EsqueletoPDFVersaoDemanda from '../../Components/EsqueletoPDF/EsqueletoPDFVersaoDemanda/EsqueletoPDFVersaoDemanda';

const valoresInputBU: any[] = [
    { idBU: 1, nomeBU: 'Motores Industrial' },
    { idBU: 2, nomeBU: ' Motores Comercial' },
    { idBU: 3, nomeBU: 'Energia' },
    { idBU: 4, nomeBU: 'Automação' },
    { idBU: 5, nomeBU: 'Digital e Sistemas' },
    { idBU: 6, nomeBU: ' Drives e Controls' },
    { idBU: 7, nomeBU: 'Tintas' },
    { idBU: 8, nomeBU: 'Transmissão e Distribuição' }
]

/**
 * Componente principal das páginas de proposta de demanda sendo dinâmico conforme
 * as informações vão sendo inseridas
 * 
 * @param props 
 * @returns 
 */
export default function TelaComponenteProcesso(props: { sidebarAberta: boolean }) {
    const [modalAberto, setModalAberto] = useState(false)
    const [conteudoModal, setConteudoModal] = useState(<div />)
    const [feedbackAberto, setFeedbackAberto] = useState(false)
    const [conteudoFeedback, setConteudoFeedback] = useState(<div />)
    const location = useLocation().pathname
    const processoLocalStorage = localStorage.getItem(`${getNomeComponente(location)}ESCOLHIDA`)
    const informacaoProcesso = JSON.parse(processoLocalStorage != null ? processoLocalStorage : "");

    return (
        <>
            <Header informacaoProcesso={informacaoProcesso} setModalAberto={setModalAberto} setConteudoModal={setConteudoModal} setFeedbackAberto={setFeedbackAberto} setConteudoFeedback={setConteudoFeedback} sidebarAberta={props.sidebarAberta} />
            <BoxConteudo >
                <BoxContainer>
                    <Container >
                        <ContainerProcessoPrincipal informacaoProcesso={informacaoProcesso} setModalAberto={setModalAberto} setConteudoModal={setConteudoModal} />
                        <Dialog open={modalAberto} sx={{ '& .MuiPaper-root': { minWidth: "35vw" } }}>
                            {conteudoModal}
                        </Dialog>
                        <Snackbar
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            autoHideDuration={3000}
                            open={feedbackAberto}
                            onClose={() => { setFeedbackAberto(false) }}
                        >
                            {conteudoFeedback}
                        </Snackbar>
                    </Container>
                </BoxContainer>
            </BoxConteudo>
        </>
    )
}

// /**
//  * Componente para o header da página que controlará os botões que aparecerão
//  * de acordo com o status atual daquele processo, informações do processo
//  * e a pessoa tualmente logada
//  * 
//  * @param props 
//  * @returns 
//  */
export function Header(props: {
    informacaoProcesso: any,
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoModal: React.Dispatch<React.SetStateAction<JSX.Element>>,
    setFeedbackAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoFeedback: React.Dispatch<React.SetStateAction<JSX.Element>>,
    sidebarAberta: boolean
}) {
    const [tempoExcedido, setTempoExcedido] = useState(false)
    const [aprovadoGerente, setAprovadoGerente] = useState(false)
    const [ultimoHistorico, setUltimoHistorico] = useState<any>({})
    const [gerenteSolicitante, setGerenteSolicitante] = useState<any>(null)
    const [gerenteTISolicitante, setGerenteTISolicitante] = useState<any>(null)
    const [analistaTIResponsavel, setAnalistaTIResponsavel] = useState<any>(null)
    const { pathname } = useLocation()
    const processo = props.informacaoProcesso;
    const prazoElaboracao = processo.prazoElaboracao
    const tipoProcesso = processo.tipo
    const idAnalista = localStorage.getItem("IDPESSOALOGADA") || 3

    const listaBotoes = getBotoesPagina(
        processo,
        [
            irChat, aprovarDemanda, reprovarDemanda, devolverDemanda, verHistorico, adicionarInformacoesDemanda,
            criarNovaProposta, iniciarNovoWorkflow, verDemandaProposta, criarNovaPauta, avaliarWorkflow
        ],
        aprovadoGerente,
        ultimoHistorico
    )

    useEffect(() => {
        try {
            verificarHistoricoAprovado(processo.id, setAprovadoGerente)
        } catch (erro: any) {
            console.log(erro);
        }

        try {
            pegarUltimoHistorico(processo.id, setUltimoHistorico)
        } catch (erro: any) {
            console.log(erro);
        }

        try {
            pegarGerenteSolicitante(processo.usuario.idUsuario, setGerenteSolicitante)
        } catch (erro: any) {
            console.log(erro);
        }
        
        try {
            pegarGerenteTISolicitante(processo.usuario.idUsuario, setGerenteTISolicitante)
        } catch (erro: any) {
            console.log(erro);
        }

        try {
            pegarAnalistaTIResponsavel(processo.id, setAnalistaTIResponsavel)
        } catch (erro: any) {
            console.log(erro);
        }
        
        if (prazoElaboracao < new Date() && prazoElaboracao && tipoProcesso == "Demanda") {
            setTempoExcedido(true)
        }
    }, [])

    function abrirModal() {
        props.setModalAberto(true)
    }

    function fecharModal() {
        props.setModalAberto(false)
    }

    function abrirFeedback(conteudoFeedback: JSX.Element) {
        props.setConteudoFeedback(conteudoFeedback)
        props.setFeedbackAberto(true)
        fecharModal()
    }

    function recarregarPaginaDemanda(conteudo: JSX.Element) {
        if (processo.tipo == TipoComponenteProcesso.Demanda) {
            api.get(`/sod/demanda/${processo.id}`).then((response: any) => {
                const demanda = response.data
                demanda.tipo = TipoComponenteProcesso.Demanda
                demanda.id = demanda.idDemanda
                localStorage.setItem("DEMANDAESCOLHIDA", JSON.stringify(demanda))
                abrirFeedback(conteudo)
                location.reload()
            }).catch((err: any) => {
                console.log(err);
            })
        } else {
            api.get(`/sod/proposta/${processo.id}`).then((response: any) => {
                const proposta = response.data
                proposta.tipo = TipoComponenteProcesso.Proposta
                proposta.id = proposta.idProposta
                localStorage.setItem("PROPOSTAESCOLHIDA", JSON.stringify(proposta))
                abrirFeedback(conteudo)
                location.reload()
            }).catch((err: any) => {
                console.log(err);
            })
        }
    }

    //funções dos botões
    function irChat() {
        localStorage.setItem("IDCHATESCOLHIDO", processo.id)
        location.href = "/chats";
    } //feito

    function aprovarDemanda() {
        function novoModal(conteudo: JSX.Element) {
            props.setConteudoModal(conteudo)
        }

        function finalizarAprovacao(conteudo: JSX.Element) {
            const tamanhoDemanda = document.getElementById("input-tamanho")?.innerText
            const nomeBUSolicitante = document.getElementById("input-bu-solicitante")?.innerText
            const busBeneficiadas = document.getElementsByClassName("bu-beneficiada")
            const sessaoTIResponsavel = document.getElementById("input-sessao-ti")?.innerText
            const busBeneficiadasEscolhidas: any[] = []

            for (const buBeneficiada of busBeneficiadas) {
                if ((buBeneficiada.children[0] as HTMLInputElement).checked) {
                    busBeneficiadasEscolhidas.push({ idBU: buBeneficiada.children[0].id })
                }
            }

            const formDataHistorico = new FormData()
            formDataHistorico.append("historico", JSON.stringify(
                {
                    tarefa: "CLASSIFICARDEMANDA",
                    demanda: { idDemanda: processo.idDemanda },
                    usuario: { idUsuario: idAnalista },
                    acaoFeitaHistoricoAnterior: "APROVARDEMANDA"
                }
            ))

            const formDataDemanda = new FormData()
            //arrumar isso auqi
            const bu = valoresInputBU.find(bu => bu.nomeBU == nomeBUSolicitante)
            formDataDemanda.append("demanda", JSON.stringify(
                {
                    tamanho: getKeyEnum(TamanhoComponenteProcesso, tamanhoDemanda).toUpperCase(),
                    busolicitante: { idBU: bu.idBU },
                    busBeneficiadas: busBeneficiadasEscolhidas,
                    secaoTIResponsavel: getKeyEnum(sessaoTI, sessaoTIResponsavel),
                    classificando: true
                }
            ))

            // Depois que conseguir fazer o arquivo de versionamento esse get não será mais necessário 
            api.get(`/sod/historicoWorkflow/arquivo/11`).then((responseArquivo: any) => {
                //colocar pdf
                formDataDemanda.append("pdfVersaoHistorico", new File([responseArquivo.data.arquivo], "versaoHistorico.pdf"))

                // faz a atualização do histórico da demanda
                api.post(`/sod/historicoWorkflow/${idAnalista}`, formDataHistorico).then(() => {
                    // atualiza informações de demanda
                    api.put(`/sod/demanda/${processo.idDemanda}/${idAnalista}`, formDataDemanda, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    }).then(() => {
                        recarregarPaginaDemanda(conteudo)
                    }).catch((err: any) => {
                        console.log(err);
                    })
                }).catch((err: any) => {
                    console.log(err);
                })
            }).catch((err: any) => {
                console.log(err);

            })
        }

        const segundaParteAprovacao = <ModalClassificacaoDemanda abrirFeedback={finalizarAprovacao} fecharModal={fecharModal} setFeedbackAberto={props.setFeedbackAberto} />

        props.setConteudoModal(
            <ConteudoModalConfirmacao
                tituloModal='Quer aprovar essa demanda?'
                abrirProximoComponente={novoModal}
                conteudoProximoComponente={segundaParteAprovacao}
                descricaoModal="Caso confirme, a demanda continuará para o processo de avaliação"
                fecharModal={fecharModal}
            />
        )

        abrirModal()
    } //feito

    function reprovarDemanda() {
        const conteudoFeedback = (
            <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                Reprovação concluída
            </Alert>
        )

        function finalizarReprovacao(conteudoFeedback: JSX.Element) {
            const formDataHistorico = new FormData()
            formDataHistorico.append("historico", JSON.stringify(
                {
                    acaoFeita: "REPROVARDEMANDA",
                    demanda: { idDemanda: processo.idDemanda },
                    usuario: { idUsuario: idAnalista },
                    statusHistorico: "CONCLUIDO"
                }
            ))

            api.put(`/sod/historicoWorkflow/demanda/${processo.id}`, formDataHistorico).then((response: any) => {
                recarregarPaginaDemanda(conteudoFeedback)
            }).catch((err: any) => {
                console.log(err);
            })
        }

        props.setConteudoModal(
            <ConteudoModalConfirmacao
                tituloModal='Quer reprovar essa demanda?'
                abrirProximoComponente={finalizarReprovacao}
                conteudoProximoComponente={conteudoFeedback}
                descricaoModal="Caso confirme, a demanda não poderá mais ser avaliada novamente"
                fecharModal={fecharModal}
            />
        )

        abrirModal()
    }// feito

    function devolverDemanda() {
        function finalizarDevolucao(conteudoFeedback: JSX.Element) {
            const elementoMotivoDevolucao = document.getElementById("textareaMotivo") as HTMLInputElement

            const formDataHistorico = new FormData()
            formDataHistorico.append("historico", JSON.stringify(
                {
                    tarefa: "REENVIARDEMANDA",
                    acaoFeitaHistoricoAnterior: "DEVOLVERDEMANDA",
                    demanda: { idDemanda: processo.idDemanda },
                    usuario: { idUsuario: processo.usuario.idUsuario },
                    motivoDevolucaoAnterior: elementoMotivoDevolucao.value
                }
            ))

            api.post(`/sod/historicoWorkflow/${idAnalista}`, formDataHistorico).then((response: any) => {
                recarregarPaginaDemanda(conteudoFeedback)
            }).catch((err: any) => {
                console.log(err);
            })
        }

        props.setConteudoModal(<ModalMotivoDevolucao abrirFeedback={finalizarDevolucao} fecharModal={fecharModal} setFeedbackAberto={props.setFeedbackAberto} />)

        abrirModal()
    }// feito

    function verHistorico() {
        location.href = pathname + "/history"
    } //feito

    function adicionarInformacoesDemanda() {
        function finalizarAdicaoDeInformacoes(conteudo: JSX.Element) {
            const prazoElaboracao = (document.getElementById("inputDataInformacoes") as HTMLInputElement).value
            const códigoPPM = (document.getElementById("inputCodigoPPM") as HTMLInputElement).value
            const linkJira = (document.getElementById("inputLinkJira") as HTMLInputElement).value
            const botoesStatus = document.getElementsByClassName("radio-status")
            let prazoElaboracaoCerto = prazoElaboracao.slice(6) + "/" + prazoElaboracao.slice(0, 5)
            prazoElaboracaoCerto = prazoElaboracaoCerto.replaceAll("/", "-")
            let status = ""

            for (let botao of botoesStatus) {
                if ((botao.children[0].children[0] as HTMLInputElement).checked) {
                    status = (botao.children[1] as HTMLInputElement).innerText;
                }
            }

            const formDataHistorico = new FormData()
            formDataHistorico.append("historico", JSON.stringify(
                {
                    tarefa: "CRIARPROPOSTA",
                    demanda: { idDemanda: processo.idDemanda },
                    usuario: { idUsuario: idAnalista },
                    acaoFeitaHistoricoAnterior: "ADICIONARINFORMACOESDEMANDA"
                }
            ))

            const formDataDemanda = new FormData()
            formDataDemanda.append("demanda", JSON.stringify(
                {
                    prazoElaboracao: prazoElaboracaoCerto,
                    codigoPPM: códigoPPM,
                    linkJira: linkJira,
                    statusDemanda: getKeyEnum(StatusComponenteProcesso, status),
                    adicionandoInformacoes: true
                }
            ))


            // Depois que conseguir fazer o arquivo de versionamento esse get não será mais necessário 
            api.get(`/sod/historicoWorkflow/arquivo/11`).then((responseArquivo: any) => {
                //colocar pdf
                formDataDemanda.append("pdfVersaoHistorico", new File([responseArquivo.data.arquivo], "versaoHistorico.pdf"))

                // faz a atualização do histórico da demanda
                api.post(`/sod/historicoWorkflow/${idAnalista}`, formDataHistorico).then(() => {
                    // atualiza informações de demanda
                    api.put(`/sod/demanda/${processo.idDemanda}/${idAnalista}`, formDataDemanda, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    }).then(() => {
                        recarregarPaginaDemanda(conteudo)
                    }).catch((err: any) => {
                        console.log(err);
                    })
                }).catch((err: any) => {
                    console.log(err);
                })
            }).catch((err: any) => {
                console.log(err);
            })
        }

        props.setConteudoModal(<ModalAdiconarInformações abrirFeedback={finalizarAdicaoDeInformacoes} fecharModal={fecharModal} setFeedbackAberto={props.setFeedbackAberto} />)

        abrirModal()
    } // feito

    function criarNovaProposta() {
        localStorage.setItem("DEMANDACRIARPROPOSTA", processo.idDemanda)

        location.href = "/createproposal"
    } //feito

    //testar depois de já ter como cadastrar proposta
    function iniciarNovoWorkflow() {
        const conteudoFeedback = (
            <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                Workflow iniciado
            </Alert>
        )

        function iniciarWorkflowAprovacao(conteudo: JSX.Element) {
            const formDataHistorico = new FormData()
            formDataHistorico.append("historico", JSON.stringify(
                {
                    tarefa: "AVALIARWORKFLOW",
                    demanda: { idDemanda: processo.id },
                    usuario: { idUsuario: gerenteSolicitante.idUsuario },
                    acaoFeitaHistoricoAnterior: "INICIARWORKFLOW"
                }
            ))

            api.post(`/sod/historicoWorkflow/${idAnalista}`, formDataHistorico).then((response: any) => {
                recarregarPaginaDemanda(conteudo)
            }).catch((err: any) => {
                console.log(err);
            })
        }

        props.setConteudoModal(
            <ConteudoModalConfirmacao
                tituloModal='Quer iniciar esse worflow?'
                abrirProximoComponente={iniciarWorkflowAprovacao}
                conteudoProximoComponente={conteudoFeedback}
                descricaoModal="Caso confirme, a proposta será enviada e avaliada pelos gerentes envolvidos a ela"
                fecharModal={fecharModal}
            />
        )

        abrirModal()

    } //feito

    function verDemandaProposta() {
        api.get(`/sod/demanda/${processo.idProposta}`).then((response: any) => {
            const demanda = response.data
            demanda.tipo = TipoComponenteProcesso.Demanda

            localStorage.setItem("DEMANDAESCOLHIDA", JSON.stringify(demanda))
            location.href = pathname + "/demand";
        }).catch((err: any) => {
            console.log(err);
        })
    } //feito

    function criarNovaPauta() {
        localStorage.setItem("PROPOSTACRIARPAUTA", processo.idProposta)
        location.href = "/createagenda"
    } //feito

    //testar depois de já ter como cadastrar proposta
    function avaliarWorkflow() {
        const conteudoFeedbackAprovado = (
            <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                Workflow aprovado
            </Alert>
        )

        const conteudoFeedbackReprovado = (
            <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="info" sx={{ width: '100%' }}>
                Workflow reprovado
            </Alert>
        )

        function aprovarWorkflow(conteudoFeedback: JSX.Element) {
            const tipoUsuario = localStorage.getItem("TIPOUSUARIO")
            const formDataHistorico = new FormData()

            if (tipoUsuario == "GerenteTI") {
                formDataHistorico.append("historico", JSON.stringify(
                    {
                        tarefa: "CRIARPAUTA",
                        demanda: { idDemanda: processo.id },
                        usuario: { idUsuario: analistaTIResponsavel.idUsuario },
                        acaoFeitaHistoricoAnterior: "APROVARWORKFLOW"
                    }
                ))
            } else {
                formDataHistorico.append("historico", JSON.stringify(
                    {
                        tarefa: "AVALIARWORKFLOW",
                        demanda: { idDemanda: processo.id },
                        usuario: { idUsuario: gerenteTISolicitante.idUsuario },
                        acaoFeitaHistoricoAnterior: "APROVARWORKFLOW"
                    }
                ))
            }

            api.post(`/sod/historicoWorkflow/${idAnalista}`, formDataHistorico).then((response) => {
                console.log(response.data);
                recarregarPaginaDemanda(conteudoFeedback)
            }).catch((err) => {
                console.log(err);
            })
        }

        function reprovarWorkflow(conteudoFeedback: JSX.Element) {
            const tipoUsuario = localStorage.getItem("TIPOUSUARIO")
            const formDataHistorico = new FormData()

            if (tipoUsuario == "GerenteTI") {
                formDataHistorico.append("historico", JSON.stringify(
                    {
                        tarefa: "CRIARPAUTA",
                        demanda: { idDemanda: processo.id },
                        usuario: { idUsuario: analistaTIResponsavel.idUsuario },
                        acaoFeitaHistoricoAnterior: "REPROVARWORKFLOW"
                    }
                ))
            } else {
                formDataHistorico.append("historico", JSON.stringify(
                    {
                        tarefa: "AVALIARWORKFLOW",
                        demanda: { idDemanda: processo.id },
                        usuario: { idUsuario: gerenteTISolicitante.idUsuario },
                        acaoFeitaHistoricoAnterior: "REPROVARWORKFLOW"
                    }
                ))
            }

            api.post(`/sod/historicoWorkflow/${idAnalista}`, formDataHistorico).then((response) => {
                console.log(response.data);
                recarregarPaginaDemanda(conteudoFeedback)
            }).catch((err) => {
                console.log(err);
            })

        }

        const modalAprovar = (
            <ConteudoModalConfirmacao
                tituloModal='Quer aprovar esse workflow?'
                abrirProximoComponente={aprovarWorkflow}
                conteudoProximoComponente={conteudoFeedbackAprovado}
                descricaoModal="Caso confirme, a proposta será adicionada a proxima pauta a ser tratada em uma comissão"
                fecharModal={fecharModal}
            />
        )

        const modalReprovar = (
            <ConteudoModalConfirmacao
                tituloModal='Quer reprovar esse workflow?'
                abrirProximoComponente={reprovarWorkflow}
                conteudoProximoComponente={conteudoFeedbackReprovado}
                descricaoModal="Caso confirme, o workflow de aprovação dessa proposta irá ser interrompido"
                fecharModal={fecharModal}
            />
        )

        props.setConteudoModal(
            <BoxConteudoModal>
                <BoxTituloModal >
                    <TypographyTituloModal variant='h5' >
                        Processo de workflow de aprovação
                    </TypographyTituloModal>
                    <IconButton onClick={fecharModal}>
                        <CloseIcon />
                    </IconButton>
                </BoxTituloModal>
                <Typography variant='subtitle2' sx={{ marginBottom: "30px" }}>
                    Escolha se essa proposta continuará o seu flow de aprovação ou se será interrompida
                </Typography>
                <BoxBotoesModal>
                    <BotaoSecundario onClick={() => { props.setConteudoModal(modalReprovar) }} variant='outlined'>
                        Reprovar
                    </BotaoSecundario>
                    <BotaoPrimario onClick={() => { props.setConteudoModal(modalAprovar) }} variant="contained" sx={{ marginLeft: "20px" }}>
                        Aprovar
                    </BotaoPrimario>
                </BoxBotoesModal>
            </BoxConteudoModal>
        )

        abrirModal()
    } //feito

    return (
        <>
            <BoxHeader sx={{ width: (props.sidebarAberta ? "88.35%" : "96.5%") }}>
                <Breadcrumb />
                <ButtonsHeader listaBotoes={listaBotoes} />
            </BoxHeader>
            <Toolbar />
            {tempoExcedido &&
                <BoxAviso>
                    <WarningRoundedIcon />
                    Tempo excedido!
                </BoxAviso>
            }
        </>
    )
}

function ModalClassificacaoDemanda(props: Modal) {
    const [BUsBeneficiadasErro, setBUsBeneficiadasErro] = useState({ html: { error: false }, helperText: "" })
    const [tamanhoDemanda, setTamanhoDemanda] = useState("Médio")
    const [BUSolicitante, setBUSolicitante] = useState("Energia")
    const [sessaoTIescolhida, setSessaoTI] = useState("AAS")
    const valoresInputTamanho = ["Muito pequeno", "Pequeno", "Médio", "Grande", "Muito grande"]
    const keysSessaoTI = Object.keys(sessaoTI)
    const valoresSessaoTI = Object.values(sessaoTI)
    const nomesBU = valoresInputBU.map((bu) => {
        return bu.nomeBU
    })

    const BUsbeneficiadas = valoresInputBU.map((bu: any, index: number) => {

        if (index + 1 == valoresInputBU.length) {
            return (
                <Grid key={index} item xs={6}>
                    <FormControl {...BUsBeneficiadasErro.html} variant="standard">
                        <FormControlLabel control={<Checkbox id={bu.idBU + ""} className="bu-beneficiada" />} label={bu.nomeBU} className="buBeneficiada" />
                        <FormHelperText>{BUsBeneficiadasErro.helperText}</FormHelperText>
                    </FormControl>
                </Grid>
            )
        }

        return (
            <Grid key={index} item xs={6}>
                <FormControlLabel control={<Checkbox id={bu.idBU + ""} className="bu-beneficiada" />} label={bu.nomeBU} className="buBeneficiada" />
            </Grid>
        )
    })

    const conteudoFeedbackFinalizacao = (
        <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
            Aprovação concluída
        </Alert>
    )


    function selecionarTamanho(event: SelectChangeEvent) {
        setTamanhoDemanda(event.target.value)
    }

    function selecionarBU(event: SelectChangeEvent) {
        setBUSolicitante(event.target.value)
    }

    function selecionarSessaoTI(event: SelectChangeEvent) {
        setSessaoTI(event.target.value)
    }

    function finalizarAcao() {
        const BUsBeneficiadas = document.getElementsByClassName("buBeneficiada")
        let contador = 0

        for (let buBeneficiada of BUsBeneficiadas) {
            if (!(buBeneficiada.children[0].children[0] as HTMLInputElement).checked) {
                contador++
            }
        }

        if (contador == 8) {
            setBUsBeneficiadasErro({
                html: { error: true },
                helperText: "Nenhuma BU selecionada"
            })
            return
        }

        props.abrirFeedback(conteudoFeedbackFinalizacao)
    }

    return (
        <BoxConteudoModal>
            <BoxTituloModal >
                <TypographyTituloModal variant='h5' >
                    Processo de aprovação
                </TypographyTituloModal>
                <IconButton onClick={props.fecharModal}>
                    <CloseIcon />
                </IconButton>
            </BoxTituloModal>
            <BoxInfoModal>
                <BoxAtributosInfoModal >
                    <BoxAtributoInfoModal>
                        <TypographyTituloAtributo variant='body1'>
                            Tamanho:
                        </TypographyTituloAtributo>
                        <SelectBox listaLabelValores={valoresInputTamanho} listaValores={valoresInputTamanho} mudarValor={selecionarTamanho} valorInicial={tamanhoDemanda} chave="input-tamanho" />
                    </BoxAtributoInfoModal>
                    <BoxAtributoInfoModal>
                        <TypographyTituloAtributo variant='body1'>
                            BU Solicitante:
                        </TypographyTituloAtributo>
                        <SelectBox listaLabelValores={nomesBU} listaValores={nomesBU} mudarValor={selecionarBU} valorInicial={BUSolicitante} chave="input-bu-solicitante" />
                    </BoxAtributoInfoModal>
                </BoxAtributosInfoModal>
                <BoxBUsBeneficiadas>
                    <TypographyTituloAtributo variant='body1'>
                        BUs beneficiadas:
                    </TypographyTituloAtributo>
                    <FormGroup>
                        <Grid container>
                            {BUsbeneficiadas}
                        </Grid>
                    </FormGroup>
                </BoxBUsBeneficiadas >
                <BoxSessaoTI>
                    <TypographyTituloAtributo variant='body1'>
                        Sessão TI responsável:
                    </TypographyTituloAtributo>
                    <SelectBox listaLabelValores={valoresSessaoTI} listaValores={keysSessaoTI} mudarValor={selecionarSessaoTI} valorInicial={sessaoTIescolhida} maxWidth="none" chave="input-sessao-ti" />
                </BoxSessaoTI>
            </BoxInfoModal>
            <BoxBotoesModal>
                <BotaoSecundario onClick={props.fecharModal} variant='outlined'>
                    Cancelar
                </BotaoSecundario>
                <BotaoPrimario onClick={finalizarAcao} variant="contained" sx={{ marginLeft: "20px" }}>
                    Enviar
                </BotaoPrimario>
            </BoxBotoesModal>
            {/* <EsqueletoPDFVersaoDemanda demanda={data} /> */}
        </BoxConteudoModal>
    )
}

function ModalMotivoDevolucao(props: Modal) {
    const [erroMotivoDevolucao, setErroMotivoDevolucao] = useState({ error: false, helperText: "" })
    const conteudoFeedback = (
        <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
            Motivo da devolução enviado
        </Alert>
    )

    function finalizarAcao() {
        const textarea = (document.getElementById("textareaMotivo") as HTMLInputElement).value

        if (textarea == "") {
            setErroMotivoDevolucao({
                error: true,
                helperText: "Motivo não informado"
            })
            return
        } else {
            setErroMotivoDevolucao({
                error: false,
                helperText: ""
            })
        }

        props.abrirFeedback(conteudoFeedback)
    }

    return (
        <BoxConteudoModal>
            <BoxTituloModal >
                <TypographyTituloModal variant='h5' >
                    Informe o motivo da devolução
                </TypographyTituloModal>
                <IconButton onClick={props.fecharModal}>
                    <CloseIcon />
                </IconButton>
            </BoxTituloModal>
            <TextField
                id='textareaMotivo'
                placeholder='Informe o motivo'
                multiline
                rows={7}
                sx={{ marginBottom: "30px" }}
                {...erroMotivoDevolucao}
            />
            <BoxBotoesModal>
                <BotaoSecundario onClick={props.fecharModal} variant='outlined'>
                    Cancelar
                </BotaoSecundario>
                <BotaoPrimario onClick={finalizarAcao} variant="contained" sx={{ marginLeft: "20px" }}>
                    Enviar
                </BotaoPrimario>
            </BoxBotoesModal>
        </BoxConteudoModal>
    )
}

function ModalAdiconarInformações(props: Modal) {
    const [valorData, setValorData] = useState<Dayjs | null>(null)
    const [erroObjectPrazo, setErroObjectPrazo] = useState({ error: false, helperText: "" })
    const [erroObjectCodigoPPM, setErroObjectCodigoPPM] = useState({ error: false, helperText: "" })
    const [erroObjectLink, setErroObjectLink] = useState({ error: false, helperText: "" })
    const conteudoFeedback = (
        <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
            Informações adicionadas
        </Alert>
    )

    function checarValor(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const valor = Number.parseInt(e.target.value)
        if (valor < 0) {
            e.target.value = 0 + ""
        }
    }

    function finalizarAcao() {
        const inputPrazoElaboracao = (document.getElementById("inputDataInformacoes") as HTMLInputElement).value
        const inputCodigPPM = (document.getElementById("inputCodigoPPM") as HTMLInputElement).value
        const inputLinkJira = (document.getElementById("inputLinkJira") as HTMLInputElement).value

        if (inputPrazoElaboracao == "" || inputCodigPPM == "" || inputLinkJira == "") {
            if (inputPrazoElaboracao == "") {
                setErroObjectPrazo({
                    error: true,
                    helperText: "Data não informada"
                })
            } else {
                setErroObjectPrazo({
                    error: false,
                    helperText: ""
                })
            }

            if (inputCodigPPM == "") {
                setErroObjectCodigoPPM({
                    error: true,
                    helperText: "Código não informado"
                })
            } else {
                setErroObjectCodigoPPM({
                    error: false,
                    helperText: ""
                })
            }

            if (inputLinkJira == "") {
                setErroObjectLink({
                    error: true,
                    helperText: "Link não informado"
                })
            } else {
                setErroObjectLink({
                    error: false,
                    helperText: ""
                })
            }

            return
        } else {
            setErroObjectPrazo({
                error: false,
                helperText: ""
            })

            setErroObjectCodigoPPM({
                error: false,
                helperText: ""
            })

            setErroObjectLink({
                error: false,
                helperText: ""
            })
        }

        if (!urlValida(inputLinkJira)) {
            setErroObjectLink({
                error: true,
                helperText: "Texto informado não é um link"
            })

            return
        } else {
            setErroObjectLink({
                error: false,
                helperText: ""
            })
        }

        if (!inputLinkJira.includes("jira")) {
            setErroObjectLink({
                error: true,
                helperText: "Link informado é inválido"
            })

            return
        } else {
            setErroObjectLink({
                error: false,
                helperText: ""
            })
        }

        props.abrirFeedback(conteudoFeedback)
    }

    return (
        <BoxConteudoModal>
            <BoxTituloModal >
                <TypographyTituloModal variant='h5' >
                    Informações
                </TypographyTituloModal>
                <IconButton onClick={props.fecharModal}>
                    <CloseIcon />
                </IconButton>
            </BoxTituloModal>
            <BoxInfoModal>
                <BoxAtributosInfoModal >
                    <BoxAtributoInfoModal2 sx={{ width: "60%" }}>
                        <TypographyTituloDecisao variant="body1">
                            Status escolhido:
                        </TypographyTituloDecisao>
                        <FormControl error sx={{ display: "flex", flexDirection: "row" }}>
                            <RadioGroup sx={{ display: "flex", flexDirection: "row" }}>
                                <FormControlLabel
                                    className='radio-status'
                                    value="Assesment"
                                    control={<Radio sx={{ "&.Mui-checked": { color: "#595959" } }} />}
                                    label="Assesment"
                                />
                                <FormControlLabel
                                    className='radio-status'
                                    value="Business Case"
                                    control={<Radio sx={{ "&.Mui-checked": { color: "#FFD600" } }} />}
                                    label="Business Case"
                                />
                            </RadioGroup>
                        </FormControl>
                    </BoxAtributoInfoModal2>
                </BoxAtributosInfoModal>
                <BoxAtributosInfoModal >
                    <BoxAtributoInfoModal2 sx={{ width: "50%" }}>
                        <TypographyTituloAtributoModal variant='body1'>
                            Prazo de elaboração:
                        </TypographyTituloAtributoModal>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={valorData}
                                onChange={(newValue) => {
                                    setValorData(newValue);
                                }}
                                renderInput={(params) => <TextField id='inputDataInformacoes' {...params} {...erroObjectPrazo} />}
                            />
                        </LocalizationProvider>
                    </BoxAtributoInfoModal2>
                    <BoxAtributoInfoModal2>
                        <TypographyTituloAtributoModal variant='body1'>
                            Código PPM:
                        </TypographyTituloAtributoModal>
                        <TextField type='number' id='inputCodigoPPM' onChange={checarValor} {...erroObjectCodigoPPM} />
                    </BoxAtributoInfoModal2>
                </BoxAtributosInfoModal>
                <Box sx={{ width: "100%" }}>
                    <TypographyTituloAtributoModal variant='body1'>
                        Link Jira:
                    </TypographyTituloAtributoModal>
                    <TextFieldURL placeholder='https://exemplo.com' type={'url'} id="inputLinkJira" {...erroObjectLink} />
                </Box>
            </BoxInfoModal>
            <BoxBotoesModal>
                <BotaoSecundario onClick={props.fecharModal} variant='outlined'>
                    Cancelar
                </BotaoSecundario>
                <BotaoPrimario onClick={finalizarAcao} variant="contained" sx={{ marginLeft: "20px" }}>
                    Enviar
                </BotaoPrimario>
            </BoxBotoesModal>
        </BoxConteudoModal>
    )
}

function ButtonsHeader(props: { listaBotoes: Botao[] }) {
    let contagemBotoesAcoes = 0
    let botoes = []

    for (let i = props.listaBotoes.length - 1; i >= 0; i--) {
        const componenteBotao = props.listaBotoes[i]
        const botao = componenteBotao.nome
        const nomeBotao = getTituloBotao(botao)

        if (botao == "chat" || botao == "historico" || botao.includes("workflow")) {
            const iconeBotao = getBotao(botao)

            if (botao.includes("!")) {
                botoes.push(
                    <BotaoIcone key={i} onClick={componenteBotao.function}>
                        <Badge badgeContent={<ErrorRoundedIcon fontSize='small' sx={{ color: "#FAD271" }} />}>
                            {iconeBotao}
                        </Badge>
                    </BotaoIcone>
                )
                continue
            }

            botoes.push(
                <BotaoIcone key={i} onClick={componenteBotao.function}>
                    {iconeBotao}
                </BotaoIcone>
            )
        } else {
            contagemBotoesAcoes++
            switch (contagemBotoesAcoes) {
                case 1:
                    botoes.push(
                        <BotaoPrimarioHeader variant='contained' key={i} onClick={componenteBotao.function}>
                            {nomeBotao}
                        </BotaoPrimarioHeader>
                    )
                    break
                case 2:
                    botoes.push(
                        <BotaoSecundarioHeader variant='outlined' key={i} onClick={componenteBotao.function}>
                            {nomeBotao}
                        </BotaoSecundarioHeader>
                    )
                    break
                case 3:
                    botoes.push(
                        <BotaoTerciarioHeader variant='outlined' key={i} onClick={componenteBotao.function}>
                            {nomeBotao}
                        </BotaoTerciarioHeader>
                    )
                    break
            }
        }

    }

    return (
        <BoxBotoes>
            {botoes}
        </BoxBotoes>
    )
}

/**
 * Container principal para todas as informações de uma proposta/demanda
 * 
 * @param props 
 * @returns 
 */
function ContainerProcessoPrincipal(props: {
    informacaoProcesso: any,
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoModal: React.Dispatch<React.SetStateAction<JSX.Element>>
}) {
    const informacaoProcesso = props.informacaoProcesso

    return (
        <ContainerProcesso informacaoProcesso={informacaoProcesso}>
            <Divider />
            <Contextualizacao processo={informacaoProcesso} setModalAberto={props.setModalAberto} setConteudoModal={props.setConteudoModal} />
            <Divider />
            <InfoGeral processo={informacaoProcesso} />
            <Divider />
            <InfoComercial processo={informacaoProcesso} setModalAberto={props.setModalAberto} setConteudoModal={props.setConteudoModal} />
        </ContainerProcesso >
    )
}


/**
 * Componente dinâmico das informações gerais de um processo
 * 
 * @param props 
 * @returns 
 */
function InfoGeral(props: { processo: any }) {
    const processo = props.processo

    const atributosPequenos = {
        numero: (processo.idDemanda ? processo.idDemanda : processo.idProposta),
        status: processo.statusDemanda,
        solicitante: processo.usuario.nomeUsuario,
        departamento: processo.usuario.departamento,
        //num sei oq é iso
        // gerenteResponsavel: processo.gerenteResponsavel,
        frequenciaDeUso: processo.frequenciaUso,
        tamanho: getValueEnum(TamanhoComponenteProcesso, processo.tamanho),
        sessaoTIResponsavel: getValueEnum(sessaoTI, processo.secaoTIResponsavel),
        BUSolicitante: processo.busolicitante ? processo.busolicitante.nomeBU : null,
        payback: processo.payback,
        prazoElaboracao: processo.prazoElaboracao ? new Date(processo.prazoElaboracao) : null,
        codigoPPM: processo.codigoPPM
    }

    const atributosGrandes = {
        centrosDeCusto: processo.centroCustoDemanda,
        BUsBeneficiadas: processo.busBeneficiadas,
        periodoDeExecucao: processo.periodoExecucao,
        responsaveis: processo.responsaveis
    }

    const gridAtributosPequenos = []
    let chaveComponente = 0

    for (let atributo in atributosPequenos) {
        chaveComponente++
        const nomeAtributo = getNomeAtributo(atributo)
        let valorAtributo = (atributosPequenos as any)[atributo]

        if (!valorAtributo) {
            continue
        }

        if (typeof valorAtributo === typeof new Date()) {
            valorAtributo = valorAtributo.toLocaleDateString()
        }

        gridAtributosPequenos.push(
            <GridPequenosAtributos key={chaveComponente} item xs={6}>
                <TypographyTituloAtributo variant='body1'>
                    {nomeAtributo}
                </TypographyTituloAtributo>
                <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
                    {valorAtributo}
                </TypographyTexto>
            </GridPequenosAtributos>
        )
    }

    const gridAtributosGrandes = []
    chaveComponente = 0

    for (let atributo in atributosGrandes) {
        chaveComponente++
        const nomeAtributo = getNomeAtributo(atributo)
        let valorAtributo = (atributosGrandes as any)[atributo]

        if (!valorAtributo) {
            continue
        } else if (valorAtributo.length == 0) {
            continue
        }

        // let datasPeriodoExecucao = []

        // for(let periodo of processo.periodoExecucao){
        //     datasPeriodoExecucao.push(new Date(periodo))
        // }

        gridAtributosGrandes.push(
            <Grid key={chaveComponente} item xs={6} >
                <TypographyTituloAtributo variant='body1'>
                    {nomeAtributo}
                </TypographyTituloAtributo>
                <AtributeList valorAtributo={valorAtributo} />
            </Grid>
        )
    }

    const beneficiosQualitativos = getBeneficiosPorTipo(processo.beneficiosDemanda, "QUALITATIVO")

    const componenteBeneficiosQualitativos = beneficiosQualitativos.map((beneficio: any, index: number) => {
        return (
            <ListItem key={index} sx={{ textAlign: "justify" }}>
                <ListItemIcon>
                    <CircleIconPonto />
                </ListItemIcon>
                {beneficio.descricao}
            </ListItem>
        )
    })


    return (
        <Grid container sx={{ marginY: "20px" }}>
            <TypographyTitulo variant='h5'>
                Informações Gerais
            </TypographyTitulo>
            <Grid item xs={12} sx={{ marginBottom: "8px" }}>
                <Grid container spacing={1}>
                    {gridAtributosPequenos}
                </Grid>
            </Grid >
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    {gridAtributosGrandes}
                </Grid>
            </Grid >
            {componenteBeneficiosQualitativos.length != 0 &&
                <Grid item>
                    <TypographyTexto variant='body1' >
                        <b>{getNomeAtributo("beneficiosQualitativos")}</b>
                    </TypographyTexto>
                    <List>
                        {componenteBeneficiosQualitativos}
                    </List>
                </Grid>
            }
        </Grid >
    )
}


/**
 * Componente dos atributos em lista das informações gerais
 * 
 * @param props 
 * @returns 
 */
function AtributeList(props: { valorAtributo: [] }) {
    let contadorPeriodoExecucao = 0
    const valores = props.valorAtributo.map((valor: any, index) => {
        //ver condição para data
        // if (typeof valor === typeof new Date()) {
        //     contadorPeriodoExecucao++
        //     const valorData: Date = valor
        //     return (
        //         <ListItem key={index}>
        //             <ListItemIcon>
        //                 <CircleIconPonto />
        //             </ListItemIcon>
        //             {contadorPeriodoExecucao == 1 ? "Início: " : "Fim: "}
        //             {valorData.toLocaleDateString()}
        //         </ListItem>
        //     )
        // }

        const nomeMostrar = valor.nomeCentroCusto ? valor.nomeCentroCusto : valor.nomeBU

        return (
            <ListItem key={index}>
                <ListItemIcon>
                    <CircleIconPonto />
                </ListItemIcon>
                {nomeMostrar}
            </ListItem>
        )
    })


    return (
        <List>
            {valores}
        </List>
    )
}

/**
 * Componente dinâmico das informações comerciais de um processo
 * 
 * @param props 
 * @returns 
 */
function InfoComercial(props: {
    processo: any,
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoModal: React.Dispatch<React.SetStateAction<JSX.Element>>
}) {
    const link = props.processo.linkJira
    const atributos = {
        beneficiosReais: getBeneficiosPorTipo(props.processo.beneficiosDemanda, "REAL"),
        beneficiosPotenciais: getBeneficiosPorTipo(props.processo.beneficiosDemanda, "POTENCIAL"),
        tabelasCusto: props.processo.tabelasCustoProposta
    }

    if (atributos.beneficiosReais.length == 0 && atributos.beneficiosPotenciais.length == 0 && atributos.tabelasCusto == null) {
        return <></>
    }


    let elementosTabelaCusto

    if (atributos.tabelasCusto) {
        elementosTabelaCusto = <TabelasCusto tabelasCusto={atributos.tabelasCusto} />
    }

    return (
        <>
            <Box sx={{ marginY: "20px" }}>
                <TypographyTitulo variant='h5'>
                    Informações Comerciais
                </TypographyTitulo>
                {atributos.beneficiosReais.length != 0 &&
                    <TabelaBeneficios title='Benefícios reais' atributos={atributos.beneficiosReais} />
                }
                {atributos.beneficiosPotenciais.length != 0 &&
                    <TabelaBeneficios title='Benefícios potenciais' atributos={atributos.beneficiosPotenciais} />
                }
                {atributos.tabelasCusto &&
                    <BoxTabela>
                        <TypographyTitulo variant='subtitle1'>
                            Tabelas de custo
                        </TypographyTitulo>
                        {elementosTabelaCusto}
                    </BoxTabela>
                }
            </Box >
            <Footer link={link} tipo={props.processo.tipo} anexos={props.processo.arquivosDemanda} setModalAberto={props.setModalAberto} setConteudoModal={props.setConteudoModal} />
        </>
    )

}

function Contextualizacao(props: {
    processo: any,
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoModal: React.Dispatch<React.SetStateAction<JSX.Element>>
}) {
    const atributos = {
        objetivo: props.processo.objetivo,
        situacaoAtual: props.processo.situacaoAtual,
        escopo: props.processo.escopo,
        motivoDevolucao: props.processo.motivoDevolucao
    }
    const link = props.processo.linkJira
    let contextos = []
    let chaveComponentes = 0

    for (let atributo in atributos) {
        let valor = (atributos as any)[atributo];

        if (!valor) {
            continue
        }
        chaveComponentes++

        if (atributo == "motivoDevolucao") {
            contextos.push(
                <Grid item xs={12} sx={{ marginBottom: "20px" }} key={chaveComponentes}>
                    <TypographyTexto variant='body1' >
                        <b>{getNomeAtributo(atributo)}</b> {valor} <b> - {props.processo.pessoaDevolucao}</b>
                    </TypographyTexto>
                </Grid>
            )
            continue
        }

        contextos.push(
            <Grid item xs={12} sx={{ marginBottom: "20px" }} key={chaveComponentes}>
                <TypographyTexto variant='body1' >
                    <b>{getNomeAtributo(atributo)}</b> {valor}
                </TypographyTexto>
            </Grid>
        )
    }

    return (
        <Grid container sx={{ marginY: "20px" }}>
            <TypographyTitulo variant='h5'>
                Contextualização
            </TypographyTitulo>
            {contextos}
            {/* <Footer link={link} tipo={props.processo.tipo} anexos={props.processo.arquivosDemanda} setModalAberto={props.setModalAberto} setConteudoModal={props.setConteudoModal} /> */}
        </Grid>
    )
}

function Footer(props: {
    link: string,
    tipo: TipoComponenteProcesso,
    anexos: [],
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoModal: React.Dispatch<React.SetStateAction<JSX.Element>>
}) {
    function baixarArquivo(anexo: any) {
        const url = window.URL.createObjectURL(new Blob([anexo.arquivo]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', anexo.nome);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function mostrarAnexos() {
        const anexos = props.anexos.map((anexo: any, index: number) => {
            const IconeAnexo = getIconeArquivo(anexo.nome)

            return (
                <ListItem key={index}
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" type='button' onClick={() => { baixarArquivo(anexo) }} >
                            <FileDownloadRoundedIcon />
                        </IconButton>
                    }>
                    <ListItemIcon>
                        <IconeAnexo />
                    </ListItemIcon>
                    <ListItemText
                        primary={anexo.nome}
                        secondary={`Anexado por ${anexo.insersor.nomeUsuario}`}
                    />
                </ListItem >
            )
        })

        props.setConteudoModal(
            <BoxConteudoModal>
                <BoxTituloModal >
                    <TypographyTituloModal variant='h5' >
                        Anexos da {props.tipo.toLowerCase()}
                    </TypographyTituloModal>
                    <IconButton onClick={() => { props.setModalAberto(false) }}>
                        <CloseIcon />
                    </IconButton>
                </BoxTituloModal>
                <List>
                    {anexos}
                </List>
            </BoxConteudoModal>
        )

        props.setModalAberto(true)
    }

    return (
        <Grid container>
            <Grid item xs={8} />
            <GridItemFooter item xs={3.5} >
                {props.link ?
                    <a href={props.link}>Ver projeto Jira</a>
                    :
                    <div></div>
                }
                <BotaoTerciario variant='outlined' onClick={mostrarAnexos}>
                    Ver anexos
                </BotaoTerciario>
            </GridItemFooter>
        </Grid>
    )
}

function getBotoesPagina(processo: any, funcoes: MouseEventHandler<HTMLButtonElement>[], aprovadoGerente: boolean, ultimoHistorico: any) {
    const tipoPessoa = localStorage.getItem("TIPOUSUARIO")
    const tipoProcesso = processo.tipo
    const statusProcesso = processo.statusDemanda
    const tamanho = processo.tamanho
    const linkJira = processo.linkJira
    const prazoElaboracao = processo.prazoElaboracao
    const estaEmWorkflow = processo.workflowIniciado
    const aprovadoWorkflow = processo.aprovadoWorkflow
    const workflowDeadline = processo.prazoWorkflow
    const estaEmProposta = processo.pertenceUmaProposta
    const estaEmPauta = processo.estaEmPauta
    let listaBotoes: Botao[] = [{ nome: "chat", function: funcoes[0] }]


    /**
     *  1º chat, reprovar, devolver, aprovar (Analista de TI, demanda)
        2º chat, histórico, reprovar aprovar (Gerente de negócio, demanda)
        3º chat, histórico, adicionar informações (Analista de TI, demanda)
        4º chat, histórico, criar proposta (Analista de TI, demanda)
        5º chat, histórico, criar proposta sinalização da atraso (Analista de TI, demanda)
        6º chat, histórico, iniciar workflow, ver demanda, criar pauta (Analista de TI, proposta)
        7º chat, histórico, ver demanda (Gerente de negócio, proposta)
        8º chat, histórico, workflow, ver demanda (Gerente de negócio, proposta)
        9º chat, histórico, workflow (notificaçãozinha que ta atrasado), ver demanda (Gerente de negócio, proposta)
        10º chat, histórico, workflow, ver demanda, criar pauta (Gerente de TI, proposta)
        11º chat, histórico, workflow (notificaçãozinha que ta atrasado), ver demanda, criar pauta (Gerente de TI, proposta)
     */
    if (tipoProcesso == "Demanda") {
        const aprovar = { nome: "aprovar", function: funcoes[1] }
        const reprovar = { nome: "reprovar", function: funcoes[2] }
        const historico = { nome: "historico", function: funcoes[4] }

        if (estaEmProposta) {
            listaBotoes.push(historico)
        } else {
            if (statusProcesso == "CANCELED" || ultimoHistorico.tarefa == "REENVIARDEMANDA") {
                listaBotoes.push(historico)
            } else {

                if (!tamanho) {
                    if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                        const devolver = { nome: "devolver", function: funcoes[3] }

                        listaBotoes.push(reprovar, devolver, aprovar)
                    }
                } else {
                    listaBotoes.push(historico)

                    if (tipoPessoa == "GerenteNegocio") {
                        if (aprovadoGerente) {
                            listaBotoes.push(reprovar, aprovar)
                        }
                    } else if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                        if (!aprovadoGerente) {
                            if (!linkJira) {
                                const adicionarInfo = { nome: "adicionarInfo", function: funcoes[5] }

                                listaBotoes.push(adicionarInfo)
                            } else {
                                let criarProposta: Botao = { nome: " ", function: funcoes[6] }
                                if (prazoElaboracao < new Date()) {
                                    criarProposta.nome = "criarProposta!"
                                } else {
                                    criarProposta.nome = "criarProposta"
                                }
                                listaBotoes.push(criarProposta)
                            }
                        }
                    }
                }
            }
        }
    } else {
        const historico = { nome: "historico", function: funcoes[4] }
        const verDemanda = { nome: "verDemanda", function: funcoes[8] }
        const criarPauta = { nome: "criarPauta", function: funcoes[9] }

        listaBotoes.push(historico)
        if (estaEmPauta) {
            listaBotoes.push(verDemanda)
        }
        else {
            if (!estaEmWorkflow) {
                if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                    const iniciarWorkflow = { nome: "iniciarworkflow", function: funcoes[7] }
                    listaBotoes.push(iniciarWorkflow, verDemanda)

                    if (!estaEmPauta) {
                        listaBotoes.push(criarPauta)
                    }
                } else if (tipoPessoa == "GerenteNegocio") {
                    listaBotoes.push(verDemanda)
                }
            } else {
                if (aprovadoWorkflow) {
                    listaBotoes.push(verDemanda)
                    if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                        if (!estaEmPauta) {
                            listaBotoes.push(criarPauta)
                        }
                    }
                } else {
                    if (workflowDeadline < new Date()) {
                        if (tipoPessoa == "GerenteTI" || tipoPessoa == "GerenteNegocio") {
                            const workflow = { nome: "workflow!", function: funcoes[10] }

                            listaBotoes.push(workflow)
                        }
                    } else {
                        if (tipoPessoa == "GerenteTI" || tipoPessoa == "GerenteNegocio") {
                            const workflow = { nome: "workflow", function: funcoes[10] }

                            listaBotoes.push(workflow)
                        }
                    }
                    listaBotoes.push(verDemanda)
                }
            }
        }
    }

    return listaBotoes
}

/**
 * Função que retorna o Título formatado de acordo com o atributo de um processo 
 * que receber
 * 
 * @param nomeAtributo 
 * @returns 
 */
function getNomeAtributo(nomeAtributo: any) {
    const nomesAtributos = {
        numero: "Número do processo:",
        status: "Status:",
        solicitante: "Solicitante:",
        departamento: "Departamento:",
        gerenteResponsavel: "Gerente responsável:",
        frequenciaDeUso: "Frequência de uso:",
        tamanho: "Tamanho:",
        sessaoTIResponsavel: "Sessão de TI Responsável:",
        BUSolicitante: "BU Solicitante:",
        prazoElaboracao: "Prazo de elaboração:",
        codigoPPM: "Código PPM:",
        centrosDeCusto: "Centros de custo:",
        beneficiosQualitativos: "Benefícios qualitativos:",
        BUsBeneficiadas: "BUs beneficiadas:",
        payback: "Payback:",
        periodoDeExecucao: "Período de execução:",
        responsaveis: "Responsáveis:",
        objetivo: "Objetivos:",
        situacaoAtual: "Situação atual:",
        escopo: "Escopo:",
        motivoDevolucao: "Motivo Devolução"
    }

    if (nomeAtributo != undefined) {
        return (nomesAtributos as any)[nomeAtributo]
    }
}

function getBotao(botao: string) {
    if (botao == "chat") {
        return <ChatBubbleRounded />
    } else if (botao == "historico") {
        return <HistoryRoundedIcon />
    } else {
        return <LanRoundedIcon />
    }
}

function getTituloBotao(botao: string) {
    const nomeBotao = botao.replace("!", "")
    const titulos = {
        reprovar: "Reprovar",
        devolver: "Devolver",
        aprovar: "Aprovar",
        adicionarInfo: "Adicionar informações",
        criarProposta: "Criar proposta",
        verDemanda: "Ver demanda",
        criarPauta: "Criar pauta"
    }

    return (titulos as any)[nomeBotao]
}

interface Modal {
    fecharModal: MouseEventHandler<HTMLButtonElement>,
    abrirFeedback: Function,
    setFeedbackAberto: React.Dispatch<SetStateAction<boolean>>
}

interface Botao {
    nome: string,
    function: MouseEventHandler<HTMLButtonElement>
}