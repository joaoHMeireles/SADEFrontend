import React, { useState, useEffect, MouseEventHandler, SetStateAction, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { getNomeComponente, urlValida, getIconeArquivo } from '../../Utils';
import Dayjs from '@date-io/dayjs'
import { sessaoTI, TipoComponenteProcesso } from '../../Constants/enuns';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Toolbar from '../../Components/Toolbar/Toolbar';
import SelectBox from '../../Components/SelectBox/SelectBox'
import TabelaBeneficios from "../../Components/Tabelas/TabelaBeneficios/TabelaBeneficios";
import TabelasCusto from '../../Components/Tabelas/TabelaCentroCusto/TabelaCentroCusto';
import ConteudoModalConfirmacao from '../../Components/ConteudoModalConfirmacao/ConteudoModalConfirmacao';
import {
    Alert, Badge, Box, Checkbox, Container, Dialog, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText,
    Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, SelectChangeEvent, Snackbar, TextField, Typography
} from '@mui/material';
import ChatBubbleRounded from '@mui/icons-material/ChatBubbleRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { BoxContainer, BoxConteudo, BotaoTerciario, BotaoPrimario, BotaoSecundario } from "../App.styles"
import {
    BotaoIcone, BotaoPrimarioHeader, BotaoSecundarioHeader, BotaoTerciarioHeader, BoxAviso, BoxBotoes, BoxHeader, BoxTabela, CircleIconPonto,
    GridItemFooter, GridPequenosAtributos, TypographyTexto,
    TypographyTitulo, TypographyTituloAtributo, BoxConteudoModal, TypographyTituloModal, BoxTituloModal,
    BoxBotoesModal, BoxInfoModal, BoxAtributosInfoModal, BoxAtributoInfoModal, BoxBUsBeneficiadas, BoxSessaoTI,
    BoxAtributoInfoModal2, TypographyTituloAtributoModal, TextFieldURL
} from './TelaProcesso.styles';
import ContainerProcesso from '../../Components/ContainerProcesso/ContainerProcesso';

/**
 * Componente principal das páginas de proposta de demanda sendo dinâmico conforme
 * as informações vão sendo inseridas
 * 
 * @param props 
 * @returns 
 */
export default function TelaComponenteProcesso(props: any) {
    const [modalAberto, setModalAberto] = useState(false)
    const [conteudoModal, setConteudoModal] = useState(<div />)
    const [feedbackAberto, setFeedbackAberto] = useState(false)
    const [conteudoFeedback, setConteudoFeedback] = useState(<div />)
    const location = useLocation().pathname
    const idLocalStorage = localStorage.getItem(`${getNomeComponente(location)}ESCOLHIDA`)
    const informacaoProcesso = JSON.parse(idLocalStorage != null ? idLocalStorage : "");

    return (
        <>
            <Header informacaoProcesso={informacaoProcesso} setModalAberto={setModalAberto} setConteudoModal={setConteudoModal} setFeedbackAberto={setFeedbackAberto} setConteudoFeedback={setConteudoFeedback} />
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
    setConteudoFeedback: React.Dispatch<React.SetStateAction<JSX.Element>>
}) {
    const [tempoExcedido, setTempoExcedido] = useState(false)
    const { pathname } = useLocation()
    const processo = props.informacaoProcesso;
    const tipoPessoa = localStorage.getItem("TIPOUSUARIO")
    const tipoProcesso = processo.tipo
    const tamanho = processo.tamanho
    const aprovadoGerente = processo.aprovadoGerente
    const linkJira = processo.linkJira
    const prazoElaboracao = processo.prazoElaboracao
    const estaEmWorkflow = processo.workflowIniciado
    const aprovadoWorkflow = processo.aprovadoWorkflow
    const workflowDeadline = processo.prazoWorkflow
    let listaBotoes: Botao[] = [{ nome: "chat", function: irChat }]

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

    //funções dos botões
    function irChat() {
        localStorage.setItem("IDCHATESCOLHIDO", processo.id + "")
        location.href = "/chats";
    }

    function aprovarDemanda() {
        function novoModal(conteudo: JSX.Element) {
            props.setConteudoModal(conteudo)
        }

        const segundaParteAprovacao = <ModalClassificacaoDemanda abrirFeedback={abrirFeedback} fecharModal={fecharModal} setFeedbackAberto={props.setFeedbackAberto} />


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
    }

    function reprovarDemanda() {
        const conteudoFeedback = (
            <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                Reprovação concluída
            </Alert>
        )

        props.setConteudoModal(
            <ConteudoModalConfirmacao
                tituloModal='Quer reprovar essa demanda?'
                abrirProximoComponente={abrirFeedback}
                conteudoProximoComponente={conteudoFeedback}
                descricaoModal="Caso confirme, a demanda não poderá mais ser avaliada novamente"
                fecharModal={fecharModal}
            />
        )

        abrirModal()
    }

    function devolverDemanda() {

        props.setConteudoModal(<ModalMotivoDevolucao abrirFeedback={abrirFeedback} fecharModal={fecharModal} setFeedbackAberto={props.setFeedbackAberto} />)

        abrirModal()
    }

    function verHistorico() {
        location.href = pathname + "/history"
    }

    function adicionarInformacoesDemanda() {
        props.setConteudoModal(<ModalAdiconarInformações abrirFeedback={abrirFeedback} fecharModal={fecharModal} setFeedbackAberto={props.setFeedbackAberto} />)

        abrirModal()
    }

    function criarNovaProposta() {
        location.href = "/createproposal"
    }

    function iniciarNovoWorkflow() {
        const conteudoFeedback = (
            <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                Workflow iniciado
            </Alert>
        )

        props.setConteudoModal(
            <ConteudoModalConfirmacao
                tituloModal='Quer iniciar esse worflow?'
                abrirProximoComponente={abrirFeedback}
                conteudoProximoComponente={conteudoFeedback}
                descricaoModal="Caso confirme, a proposta será enviada e avaliada pelos gerentes envolvidos a ela"
                fecharModal={fecharModal}
            />
        )

        abrirModal()

    }

    function verDemandaProposta() {


        //futuramente a proposta terá o mesmo id que a demanda a que se refere
        //futuramente vai precisar fazer um fetch pra ver qual as informações da demanda escolhida
        // localStorage.setItem("DEMANDAESCOLHIDA", (processo.id - 1) + "")
        location.href = pathname + "/demand";
    }

    function criarNovaPauta() {
        location.href = "/createagenda"
    }

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

        const modalAprovar = (
            <ConteudoModalConfirmacao
                tituloModal='Quer aprovar esse workflow?'
                abrirProximoComponente={abrirFeedback}
                conteudoProximoComponente={conteudoFeedbackAprovado}
                descricaoModal="Caso confirme, a proposta será adicionada a proxima pauta a ser tratada em uma comissão"
                fecharModal={fecharModal}
            />
        )

        const modalReprovar = (
            <ConteudoModalConfirmacao
                tituloModal='Quer reprovar esse workflow?'
                abrirProximoComponente={abrirFeedback}
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
        const aprovar = { nome: "aprovar", function: aprovarDemanda }
        const reprovar = { nome: "reprovar", function: reprovarDemanda }

        if (!tamanho) {
            if (tipoPessoa == "analista" || tipoPessoa == "gerenteTI") {
                const devolver = { nome: "devolver", function: devolverDemanda }

                listaBotoes.push(reprovar, devolver, aprovar)
            }
        } else {
            const historico = { nome: "historico", function: verHistorico }

            listaBotoes.push(historico)

            if (tipoPessoa == "gerenteNegocio") {
                if (!aprovadoGerente) {
                    listaBotoes.push(reprovar, aprovar)
                }
            } else if (tipoPessoa == "analista" || tipoPessoa == "gerenteTI") {
                if (aprovadoGerente) {
                    if (!linkJira) {
                        const adicionarInfo = { nome: "adicionarInfo", function: adicionarInformacoesDemanda }

                        listaBotoes.push(adicionarInfo)
                    } else {
                        let criarProposta: Botao = { nome: " ", function: criarNovaProposta }
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
    } else {
        const historico = { nome: "historico", function: verHistorico }
        const verDemanda = { nome: "verDemanda", function: verDemandaProposta }
        const criarPauta = { nome: "criarPauta", function: criarNovaPauta }

        listaBotoes.push(historico)
        if (!estaEmWorkflow) {
            if (tipoPessoa == "analista" || tipoPessoa == "gerenteTI") {
                const iniciarWorkflow = { nome: "iniciarworkflow", function: iniciarNovoWorkflow }

                listaBotoes.push(iniciarWorkflow, verDemanda, criarPauta)
            } else if (tipoPessoa == "gerenteNegocio") {
                listaBotoes.push(verDemanda)
            }
        } else {
            if (aprovadoWorkflow) {
                listaBotoes.push(verDemanda)
                if (tipoPessoa == "analista" || tipoPessoa == "gerenteTI") {
                    listaBotoes.push(criarPauta)
                }
            } else {
                if (workflowDeadline < new Date()) {
                    if (tipoPessoa == "gerenteTI" || tipoPessoa == "gerenteNegocio") {
                        const workflow = { nome: "workflow!", function: avaliarWorkflow }

                        listaBotoes.push(workflow)
                    }
                } else {
                    if (tipoPessoa == "gerenteTI" || tipoPessoa == "gerenteNegocio") {
                        const workflow = { nome: "workflow", function: avaliarWorkflow }

                        listaBotoes.push(workflow)
                    }
                }
                listaBotoes.push(verDemanda)
            }
        }
    }

    useEffect(() => {
        if (prazoElaboracao < new Date() && prazoElaboracao && tipoProcesso == "Demanda") {
            setTempoExcedido(true)
        }
    }, [])

    return (
        <>
            <BoxHeader>
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
    const [BUSolicitante, setBUSolicitante] = useState("Motores")
    const [sessaoTIescolhida, setSessaoTI] = useState("AAS")
    const valoresInputTamanho = ["Muito pequeno", "Pequeno", "Médio", "Grande", "Muito grande"]
    const valoresInputBU = ["Motores", "Digital", "Energia", "Corporativo", "Diretoria"]
    const keysSessaoTI = Object.keys(sessaoTI)
    const valoresSessaoTI = Object.values(sessaoTI)

    function selecionarTamanho(event: SelectChangeEvent) {
        setTamanhoDemanda(event.target.value)
    }

    function selecionarBU(event: SelectChangeEvent) {
        setBUSolicitante(event.target.value)
    }

    function selecionarSessaoTI(event: SelectChangeEvent) {
        setSessaoTI(event.target.value)
    }

    const BUsbeneficiadas = valoresInputBU.map((bu: string, index: number) => {

        if (index + 1 == valoresInputBU.length) {
            return (
                <Grid key={index} item xs={6}>
                    <FormControl {...BUsBeneficiadasErro.html} variant="standard">
                        <FormControlLabel control={<Checkbox />} label={bu} className="buBeneficiada" />
                        <FormHelperText>{BUsBeneficiadasErro.helperText}</FormHelperText>
                    </FormControl>
                </Grid>
            )
        }


        return (
            <Grid key={index} item xs={6}>
                <FormControlLabel control={<Checkbox />} label={bu} className="buBeneficiada" />
            </Grid>
        )
    })

    const conteudoFeedbackFinalizacao = (
        <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
            Aprovação concluída
        </Alert>
    )

    function finalizarAcao() {
        const BUsBeneficiadas = document.getElementsByClassName("buBeneficiada")

        for (let buBeneficiada of BUsBeneficiadas) {
            if ((buBeneficiada.children[0].children[0] as HTMLInputElement).checked) {
                props.abrirFeedback(conteudoFeedbackFinalizacao)
            }
        }

        setBUsBeneficiadasErro({
            html: { error: true },
            helperText: "Nenhuma BU selecionada"
        })
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
                        <SelectBox listaLabelValores={valoresInputTamanho} listaValores={valoresInputTamanho} mudarValor={selecionarTamanho} valorInicial={tamanhoDemanda} />
                    </BoxAtributoInfoModal>
                    <BoxAtributoInfoModal>
                        <TypographyTituloAtributo variant='body1'>
                            BU Solicitante:
                        </TypographyTituloAtributo>
                        <SelectBox listaLabelValores={valoresInputBU} listaValores={valoresInputBU} mudarValor={selecionarBU} valorInicial={BUSolicitante} />
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
                    <SelectBox listaLabelValores={valoresSessaoTI} listaValores={keysSessaoTI} mudarValor={selecionarSessaoTI} valorInicial={sessaoTIescolhida} maxWidth="none" />
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
            <InfoGeral processo={informacaoProcesso} />
            <Divider />
            <InfoComercial processo={informacaoProcesso} />
            <Divider />
            <Contextualizacao processo={informacaoProcesso} setModalAberto={props.setModalAberto} setConteudoModal={props.setConteudoModal} />
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
    const atributosPequenos = {
        numero: props.processo.id,
        status: props.processo.status,
        solicitante: props.processo.solicitante,
        departamento: props.processo.departamento,
        gerenteResponsavel: props.processo.gerenteResponsavel,
        frequenciaDeUso: props.processo.frequenciaUso,
        tamanho: props.processo.tamanho,
        sessaoTIResponsavel: props.processo.secaoTIResponsavel,
        BUSolicitante: props.processo.BUSolicitante,
        payback: props.processo.payback,
        prazoElaboracao: props.processo.prazoElaboracao,
        codigoPPM: props.processo.codigoPPM
    }

    const atributosGrandes = {
        centrosDeCusto: props.processo.centrosDeCusto,
        BUsBeneficiadas: props.processo.BUsBeneficiadas,
        periodoDeExecucao: props.processo.periodoExecucao,
        responsaveis: props.processo.responsaveis
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
        }

        gridAtributosGrandes.push(
            <Grid key={chaveComponente} item xs={6} >
                <TypographyTituloAtributo variant='body1'>
                    {nomeAtributo}
                </TypographyTituloAtributo>
                <AtributeList valorAtributo={valorAtributo} />
            </Grid>
        )
    }

    const beneficiosQualitativos = props.processo.beneficiosQualitativos.map((beneficio: string, index: number) => {
        return (
            <ListItem key={index} sx={{ textAlign: "justify" }}>
                <ListItemIcon>
                    <CircleIconPonto />
                </ListItemIcon>
                {beneficio}
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
            <Grid item>
                <TypographyTexto variant='body1' >
                    <b>{getNomeAtributo("beneficiosQualitativos")}</b>
                </TypographyTexto>
                <List>
                    {beneficiosQualitativos}
                </List>
            </Grid>
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
    const valores = props.valorAtributo.map((valor, index) => {
        if (typeof valor === typeof new Date()) {
            contadorPeriodoExecucao++
            const valorData: Date = valor
            return (
                <ListItem key={index}>
                    <ListItemIcon>
                        <CircleIconPonto />
                    </ListItemIcon>
                    {contadorPeriodoExecucao == 1 ? "Início: " : "Fim: "}
                    {valorData.toLocaleDateString()}
                </ListItem>
            )
        }

        return (
            <ListItem key={index}>
                <ListItemIcon>
                    <CircleIconPonto />
                </ListItemIcon>
                {valor}
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
function InfoComercial(props: { processo: any }) {
    const atributos = {
        beneficiosReais: props.processo.beneficiosReais,
        beneficiosPotenciais: props.processo.beneficiosPotenciais,
        tabelasCusto: props.processo.tabelasCusto
    }

    let elementosTabelaCusto

    if (atributos.tabelasCusto) {
        elementosTabelaCusto = <TabelasCusto tabelasCusto={atributos.tabelasCusto} />
    }

    return (
        <Box sx={{ marginY: "20px" }}>
            <TypographyTitulo variant='h5'>
                Informações Comerciais
            </TypographyTitulo>
            <TabelaBeneficios title='Benefícios reais' atributos={atributos.beneficiosReais} />
            <TabelaBeneficios title='Benefícios potenciais' atributos={atributos.beneficiosPotenciais} />
            {atributos.tabelasCusto &&
                <BoxTabela>
                    <TypographyTitulo variant='subtitle1'>
                        Tabelas de custo
                    </TypographyTitulo>
                    {elementosTabelaCusto}
                </BoxTabela>
            }
        </Box >
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
            <Footer link={link} tipo={props.processo.tipo} anexos={props.processo.anexos} setModalAberto={props.setModalAberto} setConteudoModal={props.setConteudoModal} />
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

    function mostrarAnexos() {
        const anexos = props.anexos.map((anexo: any, index: number) => {
            const IconeAnexo = getIconeArquivo(anexo.nome)

            return (
                <ListItem key={index}
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" type='submit' onClick={() => { window.open('C:\\Users\\joao_hm_silva\\Pictures\\Saved Pictures\\fror.jpg') }}>
                            <FileDownloadRoundedIcon />
                        </IconButton>
                    }>
                    <ListItemIcon>
                        <IconeAnexo />
                    </ListItemIcon>
                    <ListItemText
                        primary={anexo.nome}
                        secondary={"Anexado por Emanuel da Costa em 20/12/22 as 15:07"}
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