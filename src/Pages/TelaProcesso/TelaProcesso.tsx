import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import api, { pegarAnalistaTIResponsavel, pegarGerenteSolicitante, pegarGerenteTISolicitante, pegarUltimoHistorico, verificarHistoricoAprovado } from '../../api/api';
import {
    getNomeComponente, getIconeArquivo, getBeneficiosPorTipo, getKeyEnum, getValueEnum,
    baixarArquivo, getBotoesPagina, getNomeAtributo
} from '../../utils';
import { sessaoTI, StatusComponenteProcesso, TamanhoComponenteProcesso, TipoComponenteProcesso } from '../../constants/enuns';
import { TextReaderContext } from '../../Components/TextReaderContext/TextReaderContext';
import ModalClassificacaoDemanda from '../../Components/Modais/ModalClassificacaoDemanda/ModalClassificacaoDemanda';
import ModalMotivoDevolucao from '../../Components/Modais/ModalMotivoDevolucao/ModalMotivoDevolucao';
import ModalAdiconarInformacoes from '../../Components/Modais/ModalAdicionarInformacoes/ModalAdicionarInformacoes';
import ButtonsHeader from '../../Components/ButtonsHeader/ButtonsHeader';
import ContainerProcesso from '../../Components/ContainerProcesso/ContainerProcesso';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Toolbar from '../../Components/Toolbar/Toolbar';
import TabelaBeneficios from "../../Components/Tabelas/TabelaBeneficios/TabelaBeneficios";
import TabelasCusto from '../../Components/Tabelas/TabelaCentroCusto/TabelaCentroCusto';
import ConteudoModalConfirmacao from '../../Components/ConteudoModalConfirmacao/ConteudoModalConfirmacao';
import {
    Alert, Box, Container, Dialog, Divider, Grid, IconButton, List, ListItem, ListItemIcon,
    ListItemText, Snackbar, Typography
} from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { BoxContainer, BoxConteudo, BotaoTerciario, BotaoPrimario, BotaoSecundario } from "../App.styles"
import {
    BoxAviso, BoxHeader, BoxTabela, CircleIconPonto, GridItemFooter, GridPequenosAtributos, TypographyTexto,
    TypographyTitulo, TypographyTituloAtributo, BoxConteudoModal, TypographyTituloModal, BoxTituloModal,
    BoxBotoesModal, TypographyBeneficioQualitativo
} from './TelaProcesso.styles';
import imagemSemNada from "../../Assets/emptyFolder.png"
import ResultadoVazio from '../../Components/ResultadoVazio/ResultadoVazio';
import TopicoAtributos from '../../Components/TopicoAtributos/TopicoAtributos';

const valoresInputBU: any[] = [
    { idBU: 1, nomeBU: 'Motores Industrial' },
    { idBU: 2, nomeBU: 'Motores Comercial' },
    { idBU: 3, nomeBU: 'Energia' },
    { idBU: 4, nomeBU: 'Automação' },
    { idBU: 5, nomeBU: 'Digital e Sistemas' },
    { idBU: 6, nomeBU: ' Drives e Controles' },
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
    const location = useLocation()
    const processoLocalStorage = localStorage.getItem(`${getNomeComponente(location.pathname)}ESCOLHIDA`)
    const informacaoPadrao = {
        usuario: {
            nomeUsuario: "",
            departamento: ""
        },
        beneficiosDemanda: []
    }
    const [informacaoProcesso, setInformacaoProcesso] = useState(processoLocalStorage == null ? informacaoPadrao : JSON.parse(processoLocalStorage));

    useEffect(() => {
        if (location.search) {
            let idProposta = location.search.replace("?", "")

            api.get("/sod/proposta/" + idProposta).then((res) => {
                const proposta = res.data

                for (let atributo in proposta.demanda) {
                    console.log(atributo);

                    proposta[atributo] = proposta.demanda[atributo]
                }

                proposta.tipo = TipoComponenteProcesso.Proposta
                proposta.id = proposta.idProposta

                console.log(proposta);


                setInformacaoProcesso(proposta)

                localStorage.setItem("PROPOSTAESCOLHIDA", JSON.stringify(proposta))
            })
        }
    }, [])


    return (
        <>
            <Header informacaoProcesso={informacaoProcesso} setModalAberto={setModalAberto} setConteudoModal={setConteudoModal} setFeedbackAberto={setFeedbackAberto} setConteudoFeedback={setConteudoFeedback} sidebarAberta={props.sidebarAberta} />
            <BoxConteudo >
                <BoxContainer>
                    <Container >
                        <ContainerProcesso informacaoProcesso={informacaoProcesso}>
                            <Divider />
                            <Contextualizacao processo={informacaoProcesso} setModalAberto={setModalAberto} setConteudoModal={setConteudoModal} />
                            <Divider />
                            <InfoGeral processo={informacaoProcesso} />
                            <Divider />
                            <InfoComercial processo={informacaoProcesso} setModalAberto={setModalAberto} setConteudoModal={setConteudoModal} />
                        </ContainerProcesso >
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

/**
 * Componente para o header da página que controlará os botões que aparecerão
 * de acordo com o status atual daquele processo, informações do processo
 * e a pessoa tualmente logada
 * 
 * @param props 
 * @returns 
 */
export function Header(props: {
    informacaoProcesso: any,
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoModal: React.Dispatch<React.SetStateAction<JSX.Element>>,
    setFeedbackAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoFeedback: React.Dispatch<React.SetStateAction<JSX.Element>>,
    sidebarAberta: boolean
}) {
    const { lerTexto } = useContext(TextReaderContext) as any
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
    const idAnalista = localStorage.getItem("IDUSUARIO")


    const listaBotoes = getBotoesPagina(
        processo,
        [
            irChat, aprovarDemanda, reprovarDemanda, devolverDemanda, verHistorico, adicionarInformacoesDemanda,
            criarNovaProposta, iniciarNovoWorkflow, verDemandaProposta, criarNovaPauta, avaliarWorkflow, criarChat
        ],
        aprovadoGerente,
        ultimoHistorico
    )

    useEffect(() => {
        try {
            console.log("processo", processo);

            verificarHistoricoAprovado(processo.idDemanda, setAprovadoGerente)
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
            api.get(`/sade/demanda/${processo.id}`).then((response: any) => {
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
            api.get(`/sade/proposta/${processo.id}`).then((response: any) => {
                const proposta = response.data

                for (let atributo in proposta.demanda) {
                    proposta[atributo] = proposta.demanda[atributo]
                }

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
        if (localStorage.getItem("TIPOUSUARIO") == "AnalistaTI" || localStorage.getItem("TIPOUSUARIO") == "GerenteTI") {

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

                // console.log(nomeBUSolicitante);

                // console.log("bu ta aqui");

                // console.log(bu);


                formDataDemanda.append("demanda", JSON.stringify(
                    {
                        tamanho: getKeyEnum(TamanhoComponenteProcesso, tamanhoDemanda).toUpperCase(),
                        busolicitante: { idBU: bu.idBU, nomeBU: bu.nomeBU },
                        busBeneficiadas: busBeneficiadasEscolhidas,
                        secaoTIResponsavel: getKeyEnum(sessaoTI, sessaoTIResponsavel),
                        classificando: true
                    }
                ))

                // Depois que conseguir fazer o arquivo de versionamento esse get não será mais necessário 
                // api.get(`/sade/historicoWorkflow/arquivo/11`).then((responseArquivo: any) => {
                //     //colocar pdf
                //     formDataDemanda.append("pdfVersaoHistorico", new File([responseArquivo.data.arquivo], "versaoHistorico.pdf"))

                // faz a atualização do histórico da demanda
                api.post(`/sade/historicoWorkflow/${idAnalista}`, formDataHistorico).then(() => {
                    // atualiza informações de demanda
                    api.put(`/sade/demanda/${processo.idDemanda}/${idAnalista}`, formDataDemanda, {
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
                // }).catch((err: any) => {
                //     console.log(err);

                // })
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
        } else {
            const conteudoFeedback = (
                <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                    Aprovação concluída
                </Alert>
            )

            function finalizarAprovacao(conteudo: JSX.Element) {
                api.get("/sade/historicoWorkflow/demanda/ultimo/" + processo.id).then((response) => {
                    const formDataHistorico = new FormData()
                    formDataHistorico.append("historico", JSON.stringify(
                        {
                            tarefa: "ADICIONARINFORMACOESDEMANDA",
                            demanda: { idDemanda: processo.idDemanda },
                            usuario: { idUsuario: response.data.usuario.idUsuario },
                            acaoFeitaHistoricoAnterior: "APROVARDEMANDA"
                        }
                    ))

                    // faz a atualização do histórico da demanda
                    api.post(`/sade/historicoWorkflow/${idAnalista}`, formDataHistorico).then(() => {
                        recarregarPaginaDemanda(conteudo)
                    }).catch((err: any) => {
                        console.log(err);
                    })
                })
            }

            props.setConteudoModal(
                <ConteudoModalConfirmacao
                    tituloModal='Quer aprovar essa demanda?'
                    abrirProximoComponente={finalizarAprovacao}
                    conteudoProximoComponente={conteudoFeedback}
                    descricaoModal="Caso confirme, a demanda continuará para o processo de avaliação"
                    fecharModal={fecharModal}
                />
            )
        }

        abrirModal()
    } //feito

    function reprovarDemanda() {
        if (localStorage.getItem("TIPOUSUARIO") == "AnalistaTI" || localStorage.getItem("TIPOUSUARIO") == "GerenteTI") {
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
                        status: "CONCLUIDO"
                    }
                ))

                api.put(`/sade/historicoWorkflow/demanda/${processo.id}`, formDataHistorico).then((response: any) => {
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
        } else {
            function finalizarReprovacao(conteudoFeedback: JSX.Element) {
                const elementoMotivoDevolucao = document.getElementById("textareaMotivo") as HTMLInputElement
                const formDataHistorico = new FormData()

                formDataHistorico.append("historico", JSON.stringify(
                    {
                        acaoFeita: "REPROVARDEMANDA",
                        demanda: { idDemanda: processo.idDemanda },
                        usuario: { idUsuario: idAnalista },
                        status: "CONCLUIDO",
                        motivoDevolucao: elementoMotivoDevolucao.value
                    }
                ))

                api.put(`/sade/historicoWorkflow/demanda/${processo.id}`, formDataHistorico).then((response: any) => {
                    recarregarPaginaDemanda(conteudoFeedback)
                }).catch((err: any) => {
                    console.log(err);
                })
            }

            function novoModal(conteudo: JSX.Element) {
                props.setConteudoModal(conteudo)
            }

            const segundaParteAprovacao = <ModalMotivoDevolucao abrirFeedback={finalizarReprovacao} fecharModal={fecharModal} setFeedbackAberto={props.setFeedbackAberto} />

            props.setConteudoModal(
                <ConteudoModalConfirmacao
                    tituloModal='Quer reprovar essa demanda?'
                    abrirProximoComponente={novoModal}
                    conteudoProximoComponente={segundaParteAprovacao}
                    descricaoModal="Caso confirme, a demanda não poderá mais ser avaliada novamente"
                    fecharModal={fecharModal}
                />
            )

        }

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

            api.post(`/sade/historicoWorkflow/${idAnalista}`, formDataHistorico).then((response: any) => {
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
            api.get(`/sade/historicoWorkflow/arquivo/11`).then((responseArquivo: any) => {
                //colocar pdf
                formDataDemanda.append("pdfVersaoHistorico", new File([responseArquivo.data.arquivo], "versaoHistorico.pdf"))

                // faz a atualização do histórico da demanda
                api.post(`/sade/historicoWorkflow/${idAnalista}`, formDataHistorico).then(() => {
                    // atualiza informações de demanda
                    api.put(`/sade/demanda/${processo.idDemanda}/${idAnalista}`, formDataDemanda, {
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

        props.setConteudoModal(<ModalAdiconarInformacoes abrirFeedback={finalizarAdicaoDeInformacoes} fecharModal={fecharModal} setFeedbackAberto={props.setFeedbackAberto} />)

        abrirModal()
    } // feito

    function criarNovaProposta() {
        localStorage.setItem("DEMANDACRIARPROPOSTA", processo.idDemanda)
        localStorage.setItem("DEMANDASELECIONADA", JSON.stringify(processo))

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
            const formData = new FormData()

            formData.append("proposta", JSON.stringify({
                emWorkflow: true
            }))

            // formDataHistorico.append("historico", JSON.stringify(
            //     {
            //         tarefa: "AVALIARWORKFLOW",
            //         demanda: { idDemanda: processo.id },
            //         usuario: { idUsuario: gerenteSolicitante.idUsuario },
            //         acaoFeitaHistoricoAnterior: "INICIARWORKFLOW"
            //     }
            // ))

            api.put(`/sade/proposta/${processo.id}/${idAnalista}`, formData).then((res) => {
                recarregarPaginaDemanda(conteudo)
            }).catch((err) => {
                console.log(err);
            })
            // api.post(`/sade/historicoWorkflow/${idAnalista}`, formDataHistorico).then((response: any) => {
            //     recarregarPaginaDemanda(conteudo)
            // }).catch((err: any) => {
            //     console.log(err);
            // })
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
        api.get(`/sade/demanda/${processo.idProposta}`).then((response: any) => {
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

            api.post(`/sade/historicoWorkflow/${idAnalista}`, formDataHistorico).then((response) => {
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

            api.post(`/sade/historicoWorkflow/${idAnalista}`, formDataHistorico).then((response) => {
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
    }

    function criarChat() {
        const conteudoFeedback = (
            <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                Chat iniciado
            </Alert>
        )

        function iniciarWorkflowAprovacao(conteudo: JSX.Element) {
            const chatBody = {
                ativo: true,
                demanda: { idDemanda: processo.id }
            }

            api.post(`/sade/chat/${idAnalista}`, chatBody).then((response: any) => {
                irChat()
            }).catch((err: any) => {
                console.log(err);
            })

        }

        props.setConteudoModal(
            <ConteudoModalConfirmacao
                tituloModal='Quer iniciar esse chat?'
                abrirProximoComponente={iniciarWorkflowAprovacao}
                conteudoProximoComponente={conteudoFeedback}
                descricaoModal="Caso confirme, será criado um chat vinculado a essa demanda para os envolvidos a ela"
                fecharModal={fecharModal}
            />
        )

        abrirModal()
    }

    return (
        <>
            <BoxHeader sx={{ width: (props.sidebarAberta ? "88.35%" : "96.5%") }}>
                <Breadcrumb />
                <ButtonsHeader listaBotoes={listaBotoes} />
            </BoxHeader>
            <Toolbar />
            {tempoExcedido &&
                <BoxAviso onClick={lerTexto}>
                    <WarningRoundedIcon />
                    Tempo excedido!
                </BoxAviso>
            }
        </>
    )
}

function Contextualizacao(props: {
    processo: any,
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoModal: React.Dispatch<React.SetStateAction<JSX.Element>>
}) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const atributos = {
        objetivo: props.processo.objetivo,
        situacaoAtual: props.processo.situacaoAtual,
        escopo: props.processo.escopo,
        motivoDevolucao: props.processo.motivoDevolucao
    }
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
                    <TypographyTexto variant='body1' onClick={lerTexto}>
                        <b>{getNomeAtributo(atributo)}</b> {valor} <b> - {props.processo.pessoaDevolucao}</b>
                    </TypographyTexto>
                </Grid>
            )
            continue
        }

        contextos.push(
            <Grid item xs={12} sx={{ marginBottom: "20px" }} key={chaveComponentes}>
                <TypographyTexto variant='body1' onClick={lerTexto}>
                    <b>{getNomeAtributo(atributo)}</b> {valor}
                </TypographyTexto>
            </Grid>
        )
    }

    return (
        <Grid container sx={{ marginY: "20px" }}>
            <TypographyTitulo variant='h5' onClick={lerTexto}>
                Contextualização
            </TypographyTitulo>
            {contextos}
        </Grid>
    )
}

/**
 * Componente dinâmico das informações gerais de um processo
 * 
 * @param props 
 * @returns 
 */
function InfoGeral(props: { processo: any }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const processo = props.processo
    const atributosPequenos = {
        numero: (processo.idDemanda ? processo.idDemanda : processo.idProposta),
        status: processo.statusDemanda,
        solicitante: processo.usuario.nomeUsuario ,
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
    const beneficiosQualitativos = getBeneficiosPorTipo(processo.beneficiosDemanda, "QUALITATIVO")
    const componenteBeneficiosQualitativos = beneficiosQualitativos.map((beneficio: any, index: number) => {
        return (
            <ListItem key={index} sx={{ textAlign: "justify" }} onClick={lerTexto}>
                <ListItemIcon>
                    <CircleIconPonto />
                </ListItemIcon>
                <TypographyBeneficioQualitativo>
                    {beneficio.descricao}
                </TypographyBeneficioQualitativo>
            </ListItem>
        )
    })
    const gridAtributosPequenos = []
    const gridAtributosGrandes = []
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
                <TypographyTituloAtributo variant='body1' onClick={lerTexto}>
                    {nomeAtributo}
                </TypographyTituloAtributo>
                <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }} onClick={lerTexto}>
                    {valorAtributo}
                </TypographyTexto>
            </GridPequenosAtributos>
        )
    }

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
                <TypographyTituloAtributo variant='body1' onClick={lerTexto}>
                    {nomeAtributo}
                </TypographyTituloAtributo>
                <TopicoAtributos valorAtributo={valorAtributo} />
            </Grid>
        )
    }


    return (
        <Grid container sx={{ marginY: "20px" }}>
            <TypographyTitulo variant='h5' onClick={lerTexto}>
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
                    <TypographyTexto variant='body1' onClick={lerTexto}>
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
    const { lerTexto } = useContext(TextReaderContext) as any
    const link = props.processo.linkJira
    const atributos = {
        beneficiosReais: getBeneficiosPorTipo(props.processo.beneficiosDemanda, "REAL"),
        beneficiosPotenciais: getBeneficiosPorTipo(props.processo.beneficiosDemanda, "POTENCIAL"),
        tabelasCusto: props.processo.tabelasCustoProposta
    }
    let elementosTabelaCusto


    if (atributos.beneficiosReais.length == 0 && atributos.beneficiosPotenciais.length == 0 && atributos.tabelasCusto == null) {
        return <></>
    }

    if (atributos.tabelasCusto) {
        elementosTabelaCusto = <TabelasCusto tabelasCusto={atributos.tabelasCusto} />
    }

    return (
        <>
            <Box sx={{ marginY: "20px" }}>
                <TypographyTitulo variant='h5' onClick={lerTexto}>
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
                        <TypographyTitulo variant='h6' onClick={lerTexto}>
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

function Footer(props: {
    link: string,
    tipo: TipoComponenteProcesso,
    anexos: [],
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>,
    setConteudoModal: React.Dispatch<React.SetStateAction<JSX.Element>>
}) {
    const { lerTexto } = useContext(TextReaderContext) as any

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
                        onClick={lerTexto}
                        primary={anexo.nome}
                        secondary={`Anexado por ${anexo.insersor.nomeUsuario}`}
                    />
                </ListItem >
            )
        })

        props.setConteudoModal(
            <>
                <BoxConteudoModal>
                    <BoxTituloModal >
                        <TypographyTituloModal variant='h5' onClick={lerTexto}>
                            Anexos da {props.tipo.toLowerCase()}
                        </TypographyTituloModal>
                        <IconButton onClick={() => { props.setModalAberto(false) }}>
                            <CloseIcon />
                        </IconButton>
                    </BoxTituloModal>
                    {anexos == null || anexos.length < 1 ?
                        <ResultadoVazio imagem={imagemSemNada} legenda={"Sem anexos aqui!"} />
                        :
                        <List>
                            {anexos}
                        </List>
                    }
                </BoxConteudoModal>
            </>
        )

        props.setModalAberto(true)
    }

    return (
        <Grid container>
            <Grid item xs={8} />

            <GridItemFooter item xs={3.5} >
                {props.link ?
                    <a href={props.link} target='_blank' onClick={lerTexto}>Ver projeto Jira</a>
                    :
                    <div></div>
                }
                <BotaoTerciario variant='outlined' onClick={(e: any) => { lerTexto(e); mostrarAnexos() }}>
                    Ver anexos
                </BotaoTerciario>
            </GridItemFooter>
        </Grid>
    )
}