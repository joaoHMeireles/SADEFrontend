import React, { useState, useEffect, MouseEventHandler, SetStateAction } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Toolbar from '../../Components/Toolbar/Toolbar';
import SelectBox from '../../Components/SelectBox/SelectBox';
import ConteudoModalConfirmacao from '../../Components/ConteudoModalConfirmacao/ConteudoModalConfirmacao';
import {
    Alert, Badge, Box, Checkbox, Container, Dialog, Divider, FormControlLabel, FormGroup, Grid, IconButton, List, ListItem, ListItemIcon, SelectChangeEvent,
    Snackbar, Table, TableBody, TableHead, TableRow, TextField, Typography
} from '@mui/material';
import ChatBubbleRounded from '@mui/icons-material/ChatBubbleRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CloseIcon from '@mui/icons-material/Close';
import { BoxContainer, BoxConteudo, BotaoTerciario, BotaoPrimario, BotaoSecundario } from "../App.styles"
import {
    BotaoIcone, BotaoPrimarioHeader, BotaoSecundarioHeader, BotaoTerciarioHeader, BoxAviso, BoxBandeira, BoxBotoes,
    BoxCentroCusto, BoxContainerBandeira, BoxContainerCentroCusto, BoxContainerTabela, BoxCorStatus, BoxHeader,
    BoxTabela, BoxTabelaCusto, BoxTitulosCentroCusto, BoxTrianguloBandeira, CircleIconPonto, GridContainer,
    GridContainerHeader, GridInformacao, GridItemFooter, GridPequenosAtributos, GridTitulo, TableCellEstilzada,
    TableContainerEstilizado, TableRowEstilizada, TypographyTexto, TypographyTitulo, TypographyTituloAtributo,
    BoxConteudoModal, TypographyTituloModal, BoxTituloModal, BoxBotoesModal, BoxInfoModal, BoxAtributosInfoModal,
    BoxAtributoInfoModal
} from './TelaProcesso.styles';


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
    const idLocalStorage = localStorage.getItem(`${getComponentName(location)}ESCOLHIDA`)
    const informacaoProcesso = JSON.parse(idLocalStorage != null ? idLocalStorage : "");

    return (
        <>
            <Header informacaoProcesso={informacaoProcesso} modalAberto={modalAberto} setModalAberto={setModalAberto} setConteudoModal={setConteudoModal} setFeedbackAberto={setFeedbackAberto} setConteudoFeedback={setConteudoFeedback} />
            <BoxConteudo >
                <BoxContainer>
                    <Container>
                        <ContainerProcesso informacaoProcesso={informacaoProcesso} />
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
function Header(props: {
    informacaoProcesso: any,
    modalAberto: boolean,
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
                opcaoPrimaria="Sim"
                opcaoSecundaria='Não'
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
                opcaoPrimaria="Sim"
                opcaoSecundaria='Não'
            />
        )

        abrirModal()
    }

    function devolverDemanda() {
        const conteudoFeedback = (
            <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                Motivo da devolução enviado
            </Alert>
        )

        props.setConteudoModal(
            <BoxConteudoModal>
                <BoxTituloModal >
                    <TypographyTituloModal variant='h5' >
                        Informe o motivo da devolução
                    </TypographyTituloModal>
                    <IconButton onClick={fecharModal}>
                        <CloseIcon />
                    </IconButton>
                </BoxTituloModal>
                <TextField
                    placeholder='Informe o motivo'
                    multiline
                    rows={7}
                    maxRows={Infinity}
                    sx={{ marginBottom: "30px" }}
                />
                <BoxBotoesModal>
                    <BotaoSecundario onClick={fecharModal} variant='outlined'>
                        Cancelar
                    </BotaoSecundario>
                    <BotaoPrimario onClick={() => { abrirFeedback(conteudoFeedback) }} variant="contained" sx={{ marginLeft: "20px" }}>
                        Enviar
                    </BotaoPrimario>
                </BoxBotoesModal>
            </BoxConteudoModal>
        )

        abrirModal()
    }

    function verHistorico() {
        location.href = pathname + "/history"
    }

    function adicionarInformacoesDemanda() {
        abrirModal()

    }

    function criarNovaProposta() {
        location.href = "/createproposal"
    }

    function iniciarNovoWorkflow() {
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
                opcaoPrimaria="Sim"
                opcaoSecundaria='Não'
            />
        )

        abrirModal()

    }

    function verDemandaProposta() {
        console.log("Aaaaaaaaaaa");


        //futuramente a proposta terá o mesmo id que a demanda a que se refere
        //futuramente vai precisar fazer um fetch pra ver qual as informações da demanda escolhida
        // localStorage.setItem("DEMANDAESCOLHIDA", (processo.id - 1) + "")
        location.href = pathname + "/demand";
    }

    function criarNovaPauta() {
        location.href = "/createagenda"
    }

    function avaliarWorkflow() {
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

function ModalClassificacaoDemanda(props: { fecharModal: MouseEventHandler<HTMLButtonElement>, abrirFeedback: Function, setFeedbackAberto: React.Dispatch<SetStateAction<boolean>> }) {
    const [tamanhoDemanda, setTamanhoDemanda] = useState("Médio")
    const [BUSolicitante, setBUSolicitante] = useState("Motores")
    const valoresInputTamanho = ["Muito pequeno", "Pequeno", "Médio", "Grande", "Muito grande"]
    const valoresInputBU = ["Motores", "Digital", "Energia", "Corporativo", "Diretoria"]
    const BUsbeneficiadas = valoresInputBU.map((bu) => {
        return (
            <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label={bu} />
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

    function selecionaBU(event: SelectChangeEvent) {
        setBUSolicitante(event.target.value)
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
                    <BoxAtributoInfoModal sx={{ marginLeft: "20px" }}>
                        <TypographyTituloAtributo variant='body1'>
                            BU Solicitante:
                        </TypographyTituloAtributo>
                        <SelectBox listaLabelValores={valoresInputBU} listaValores={valoresInputBU} mudarValor={selecionaBU} valorInicial={BUSolicitante} />
                    </BoxAtributoInfoModal>
                </BoxAtributosInfoModal>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TypographyTituloAtributo variant='body1'>
                        BUs beneficiadas:
                    </TypographyTituloAtributo>
                    <Grid container>
                        {/* <FormGroup> */}
                            {BUsbeneficiadas}
                        {/* </FormGroup> */}
                    </Grid>
                </Box >
            </BoxInfoModal>
            <BoxBotoesModal>
                <BotaoSecundario onClick={props.fecharModal} variant='outlined'>
                    Cancelar
                </BotaoSecundario>
                <BotaoPrimario onClick={() => { props.abrirFeedback(conteudoFeedbackFinalizacao) }} variant="contained" sx={{ marginLeft: "20px" }}>
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
function ContainerProcesso(props: { informacaoProcesso: any }) {
    const informacaoProcesso = props.informacaoProcesso

    return (
        <GridContainer container>
            <Grid item xs={0.2}>
                <BoxCorStatus sx={{ backgroundColor: getColorStatus(informacaoProcesso?.status) }} ></BoxCorStatus>
            </Grid>
            <GridInformacao item xs={11.8}>
                <GridContainerHeader container>
                    <GridTitulo item xs={10} >
                        <Typography variant='h4'>
                            {informacaoProcesso?.titulo}
                        </Typography>
                    </GridTitulo>
                    <Grid item xs={2}>
                        <Bandeira cor={getColorType(informacaoProcesso?.tipo)} />
                    </Grid>
                </GridContainerHeader>
                <Divider />
                <InfoGeral processo={informacaoProcesso} />
                <Divider />
                <InfoComercial processo={informacaoProcesso} />
                <Divider />
                <Contextualizacao processo={informacaoProcesso} />
            </GridInformacao>
        </GridContainer>
    )
}

/**
 * Componente da bandeira que altera a cor de acordo com o valor que recebe e que
 * se localiza no canto superior direito container principal
 * 
 * @param props 
 * @returns 
 */
function Bandeira(props: { cor: string }) {
    return (
        <BoxContainerBandeira >
            <BoxBandeira sx={{ backgroundColor: props.cor }}>
                <BoxTrianguloBandeira />
            </BoxBandeira>
        </BoxContainerBandeira>
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
                    <b>{getNomeAtributo("beneficioQualitativo")}</b> {props.processo.beneficioQualitativo}
                </TypographyTexto>
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

    const beneficiosReais = atributos.beneficiosReais.map((beneficio: { descricao: string, moeda: string, valor: string, memoriaCalculo: string }, index: number) => {
        const valor = "R$" + beneficio.valor

        return (
            <TableRowEstilizada key={index}>
                <TableCellEstilzada align='center' >{beneficio.descricao}</TableCellEstilzada>
                <TableCellEstilzada align='center'>{beneficio.moeda}</TableCellEstilzada>
                <TableCellEstilzada align='center'>{valor}</TableCellEstilzada>
                <TableCellEstilzada align='center'>{beneficio.memoriaCalculo}</TableCellEstilzada>
            </TableRowEstilizada>
        )
    })

    const potencialBenefits = atributos.beneficiosPotenciais.map((beneficio: { descricao: string, moeda: string, valor: string, memoriaCalculo: string }, index: number) => {
        const valor = "R$" + beneficio.valor

        return (
            <TableRowEstilizada key={index}>
                <TableCellEstilzada align='center' >{beneficio.descricao}</TableCellEstilzada>
                <TableCellEstilzada align='center'>{beneficio.moeda}</TableCellEstilzada>
                <TableCellEstilzada align='center'>{valor}</TableCellEstilzada>
                <TableCellEstilzada align='center'>{beneficio.memoriaCalculo}</TableCellEstilzada>
            </TableRowEstilizada>
        )
    })

    let elentosTabelasCusto

    if (atributos.tabelasCusto) {
        elentosTabelasCusto = atributos.tabelasCusto.map((tabela: any, index: number) => {
            let tempoTotal = 0, valorTotal = 0

            const linhasTabela = tabela.linhas.map((linha: { recurso: string, esforco: number, valor: number }, indexLinha: number) => {
                const total = linha.valor * linha.esforco
                tempoTotal += linha.esforco
                valorTotal += total

                return (
                    <TableRowEstilizada key={indexLinha}>
                        <TableCellEstilzada align='center'>{linha.recurso}</TableCellEstilzada>
                        <TableCellEstilzada align='center'>{linha.esforco}{!tabela.isLicenca ? "h" : ""} </TableCellEstilzada>
                        <TableCellEstilzada align='center'>R$ {linha.valor}</TableCellEstilzada>
                        <TableCellEstilzada align='center'>R$ {total}</TableCellEstilzada>
                    </TableRowEstilizada>
                )
            })

            const centrosCusto = tabela.centrosCusto.map((centroDeCusto: any, indexcentroCusto: number) => {
                const porcentagem = centroDeCusto.porcentagem * 100

                return (
                    <Typography key={indexcentroCusto} variant="body1" sx={{ color: "#595959" }}>
                        {centroDeCusto.centroCusto} - {porcentagem}%
                    </Typography>
                )
            })

            return (
                <BoxTabelaCusto key={index} >
                    <BoxContainerTabela>
                        <TableContainerEstilizado sx={{ width: "auto" }}>
                            <TableHead >
                                <TableRow >
                                    <TableCellEstilzada align='center'>{tabela.titulo}</TableCellEstilzada>
                                    <TableCellEstilzada align='center'>{!tabela.isLicenca ? "Esforço" : "Licenças"}</TableCellEstilzada>
                                    <TableCellEstilzada align='center'>Valor </TableCellEstilzada>
                                    <TableCellEstilzada align='center'>Total</TableCellEstilzada>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {linhasTabela}
                                <TableRowEstilizada>
                                    <TableCellEstilzada align='center'> <b>Total {tabela.titulo}</b></TableCellEstilzada>
                                    <TableCellEstilzada align='center'> <b>{tempoTotal}{!tabela.isLicenca ? "h" : ""}</b></TableCellEstilzada>
                                    <TableCellEstilzada align='center'> </TableCellEstilzada>
                                    <TableCellEstilzada align='center'> <b>R$ {valorTotal}</b></TableCellEstilzada>
                                </TableRowEstilizada>
                            </TableBody>
                        </TableContainerEstilizado>
                    </BoxContainerTabela>
                    <BoxContainerCentroCusto>
                        <BoxTitulosCentroCusto>
                            Centros de Custo
                        </BoxTitulosCentroCusto>
                        <BoxCentroCusto>
                            {centrosCusto}
                        </BoxCentroCusto>
                    </BoxContainerCentroCusto>
                </BoxTabelaCusto>
            )
        })
    }



    return (
        <Box sx={{ marginY: "20px" }}>
            <TypographyTitulo variant='h5'>
                Informações Comerciais
            </TypographyTitulo>
            <StyledBenefitTable title='Benefícios reais' valuesList={beneficiosReais} />
            <StyledBenefitTable title='Benefícios potenciais' valuesList={potencialBenefits} />
            {atributos.tabelasCusto &&
                <BoxTabela>
                    <TypographyTitulo variant='subtitle1'>
                        Tabelas de custo
                    </TypographyTitulo>
                    {elentosTabelasCusto}
                </BoxTabela>
            }
        </Box >
    )

}

function StyledBenefitTable(props: { valuesList: [], title: string }) {

    return (
        <BoxTabela sx={{ marginBottom: "30px" }}>
            <TypographyTitulo variant='subtitle1'>
                {props.title}
            </TypographyTitulo>
            <TableContainerEstilizado sx={{ width: "40vw" }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCellEstilzada align='center'>Descrição</TableCellEstilzada>
                            <TableCellEstilzada align='center'>Moeda</TableCellEstilzada>
                            <TableCellEstilzada align='center'>Valor</TableCellEstilzada>
                            <TableCellEstilzada align='center'>Memória de cálculo</TableCellEstilzada>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.valuesList}
                    </TableBody>
                </Table>
            </TableContainerEstilizado>
        </BoxTabela>
    )
}

function Contextualizacao(props: { processo: any }) {
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
            <Footer link={link} />
        </Grid>
    )
}

function Footer(props: { link: string }) {

    return (
        <Grid container>
            <Grid item xs={8} />
            <GridItemFooter item xs={3.5} >
                {props.link ?
                    <a href={props.link}>Ver projeto Jira</a>
                    :
                    <div></div>
                }
                <BotaoTerciario variant='outlined' >
                    Ver anexos
                </BotaoTerciario>
            </GridItemFooter>
        </Grid>
    )
}

function getComponentName(location: string) {
    const fragmentoTipo = location.slice(location.length - 6)

    if (fragmentoTipo == "demand") {
        return "DEMANDA"
    } else {
        return "PROPOSTA"
    }
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
        beneficioQualitativo: "Benefício qualitativo:",
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

function getColorStatus(status: string | undefined) {
    const coresStatus = {
        Backlog: "#DDDDDD",
        Assesment: "#595959",
        BusinessCase: "#FFD600",
        Canceled: "#FF1616",
        ToDo: "#00612e"
    }

    if (status != undefined) {
        return (coresStatus as any)[status]
    }
}

function getColorType(tipo: string | undefined) {
    const coresStatus = {
        Demanda: "#00579D",
        Proposta: "#6AACDA",
        Pauta: "#2382BA",
        ATA: "#28B9DA"
    }

    if (tipo != undefined) {
        return (coresStatus as any)[tipo]
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

interface Botao {
    nome: string,
    function: MouseEventHandler<HTMLButtonElement>
}