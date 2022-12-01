import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
import Toolbar from "../../Components/Toolbar/Toolbar"
import {
    AccordionDetails, AccordionSummary, Box, Container, FormControl, FormControlLabel, Grid, RadioGroup,
    Typography, Radio, TextField, FormHelperText, Snackbar, Alert
} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    BotaoPrimarioHeader,
    BotaoSecundarioHeader,
    BoxBandeira, BoxBotoes, BoxContainerBandeira, BoxCorStatus, BoxHeader, BoxTrianguloBandeira, GridContainerHeader,
    GridPequenosAtributos, GridTitulo, TypographyTituloAtributo
} from "../TelaProcesso/TelaProcesso.styles"
import { BoxContainer, BoxConteudo, BotaoTerciario, BotaoPrimario } from "../App.styles"
import { GridLinkTypograpfy } from "../../Components/ComponenteProcesso/ComponenteProcesso.styles";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { AccordionProposta, GridContainerColecao, GridFooter, GridProposta, TypographyTextoColecao, TypographyTituloDecisao } from "./TelaColecaoProcesso.styles";
import { StyledBenefitTable, TabelasCusto } from "../TelaProcesso/TelaProcesso";

export default function TelaColecaoProcesso() {
    const [avaliandoProcesso, setAvaliandoProcesso] = useState(false)
    const [verificacaoInputs, setVerificacaoInputs] = useState<boolean[]>([])
    const [feedbackAberto, setFeedbackAberto] = useState(false)
    const [conteudoFeedback, setConteudoFeedback] = useState(<div />)
    const location = useLocation().pathname
    const idLocalStorage = localStorage.getItem(`${getComponentName(location)}ESCOLHIDA`)
    const informacaoColecaoProcesso = JSON.parse(idLocalStorage != null ? idLocalStorage : "");

    function fecharAvaliacao() {
        setAvaliandoProcesso(false)
        setVerificacaoInputs([])
    }

    function abrirFeedback(conteudo: JSX.Element) {
        setConteudoFeedback(conteudo)
        setFeedbackAberto(true)
    }

    function aprovarProcesso() {
        const novaVerificacaoInputs: boolean[] = []
        let feedback: JSX.Element

        for (let i = 0; i < informacaoColecaoProcesso.propostas.length; i++) {
            const radioButtonsStatus = document.getElementsByClassName(`radioButtonStatus${i}`)
            const statusPreenchido = checarRadioButtons(radioButtonsStatus)
            const primeiroIndexProposta = i * 10

            novaVerificacaoInputs[primeiroIndexProposta + 1] = (statusPreenchido ? true : false)

            if (informacaoColecaoProcesso.tipo == "Pauta") {
                const radioButtonsAta = document.getElementsByClassName(`radioButtonATA${i}`)
                let tipoAtaPreenchida = checarRadioButtons(radioButtonsAta)

                novaVerificacaoInputs[primeiroIndexProposta + 2] = (tipoAtaPreenchida ? true : false)
            } else {
                const inputNumeroAta = (document.getElementById(`inputNumeroATA${i}`) as HTMLInputElement).value
                const inputDocumentoAprovacao = (document.getElementById(`inputDocumento${i}`) as HTMLInputElement).value

                novaVerificacaoInputs[primeiroIndexProposta + 3] = (inputNumeroAta != "" ? true : false)
                novaVerificacaoInputs[primeiroIndexProposta + 4] = (inputDocumentoAprovacao != "" ? true : false)
            }
        }

        setVerificacaoInputs(novaVerificacaoInputs)
        
        if (checarPreenchimento(novaVerificacaoInputs)) {
            fecharAvaliacao()

            feedback = (
                <Alert onClose={() => { setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }}>
                    {informacaoColecaoProcesso.tipo} avaliada com sucesso
                </Alert>
            )

            abrirFeedback(feedback)
        } else {
            feedback = (
                <Alert onClose={() => { setFeedbackAberto(false) }} severity="error" sx={{ width: '100%' }}>
                    Algum campo obrigatório está em branco
                </Alert>
            )

            abrirFeedback(feedback)
        }

    }

    function checarRadioButtons(listaBotoes: HTMLCollectionOf<Element>) {
        for (let radioButton of listaBotoes) {
            if ((radioButton.children[0].children[0] as HTMLInputElement).checked) {
                return true
            }
        }

        return false
    }

    function checarPreenchimento(novaVerificacaoInputs: boolean[]) {
        if (novaVerificacaoInputs.length == 0) {
            return false
        }

        for (let verificado of novaVerificacaoInputs) {
            if (!verificado && verificado != undefined) {
                return false
            }
        }

        return true
    }

    return (
        <>
            <Header informacaoColecaoProcesso={informacaoColecaoProcesso} avaliandoProcesso={avaliandoProcesso} setAvaliandoProcesso={setAvaliandoProcesso} aprovarProcesso={aprovarProcesso} fecharAvaliacao={fecharAvaliacao} />
            <BoxConteudo >
                <BoxContainer>
                    <Container>
                        <ContainerColecaoProcesso informacaoColecaoProcesso={informacaoColecaoProcesso} avaliandoProcesso={avaliandoProcesso} verificacaoInputs={verificacaoInputs} />
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
function Header(props: { informacaoColecaoProcesso: any, avaliandoProcesso: boolean, setAvaliandoProcesso: React.Dispatch<SetStateAction<boolean>>, aprovarProcesso: Function, fecharAvaliacao: Function }) {
    const [acao, setAcao] = useState("")
    const informacaoColecaoProcesso = props.informacaoColecaoProcesso
    const tipoColecao = informacaoColecaoProcesso.tipo
    const dataReuniao = informacaoColecaoProcesso.dataReuniao

    useEffect(() => {
        if (tipoColecao == "Pauta") {
            // if (dataReuniao <= new Date()) {
            setAcao("Informar parecer")
            // }
        } else {
            if (!informacaoColecaoProcesso.numeroAtaDG) {
                setAcao("Finalizar processo")
            }
        }
    }, [])



    function aprovarProcesso() {
        props.aprovarProcesso()
    }

    /**
     * 1º informar parecer da comissão (Pauta, já passou a data da reunião)
     * 2º finalizar processo (Ata, ainda não passou plea dg) 
     * */
    return (
        <>
            <BoxHeader>
                <Breadcrumb />
                {acao != "" &&
                    <>
                        {!props.avaliandoProcesso ?
                            <BotaoPrimario variant="contained" onClick={() => { props.setAvaliandoProcesso(true) }}> {acao}</BotaoPrimario>
                            :
                            <BoxBotoes>
                                <BotaoPrimarioHeader variant='contained' onClick={aprovarProcesso}> Aprovar</BotaoPrimarioHeader>
                                <BotaoSecundarioHeader variant='outlined' onClick={() => { props.fecharAvaliacao() }}> Cancelar</BotaoSecundarioHeader>
                            </BoxBotoes>
                        }
                    </>
                }
            </BoxHeader>
            <Toolbar />
        </>
    )
}
/**
 * Container principal para todas as informações de uma proposta/demanda
 * 
 * @param props 
 * @returns 
 */
function ContainerColecaoProcesso(props: { informacaoColecaoProcesso: any, avaliandoProcesso: boolean, verificacaoInputs: boolean[] }) {
    const informacaoColecaoProcesso = props.informacaoColecaoProcesso
    const dataFormatada = new Date(informacaoColecaoProcesso.dataReuniao).toLocaleDateString()

    return (
        <GridContainerColecao container spacing={2}>
            <Grid item xs={12}>
                <GridContainerHeader container>
                    <GridTitulo item xs={10} >
                        <Typography variant='h4'>
                            {informacaoColecaoProcesso.comissao}
                        </Typography>
                    </GridTitulo>
                    <Grid item xs={2}>
                        <Bandeira cor={getColorType(informacaoColecaoProcesso.tipo)} />
                    </Grid>
                </GridContainerHeader>
            </Grid>
            <Grid item xs={12}>
                Data da reunião: {dataFormatada}
            </Grid>
            <Grid item xs={12}>
                Propostas:
            </Grid>
            <Propostas listaPropostas={informacaoColecaoProcesso.propostas} tipoColecao={informacaoColecaoProcesso.tipo} avaliandoProcesso={props.avaliandoProcesso} verificacaoInputs={props.verificacaoInputs} />
            {(informacaoColecaoProcesso.tipo == "ATA" && !props.avaliandoProcesso) &&
                <GridFooter item xs={12}>
                    <Box display={"flex"}>
                        {informacaoColecaoProcesso.numeroAtaDG &&
                            <>
                                <TypographyTituloAtributo variant='body1'>
                                    Número da ATA da DG:
                                </TypographyTituloAtributo>
                                <TypographyTextoColecao variant='body1'>
                                    {informacaoColecaoProcesso.numeroAtaDG}
                                </TypographyTextoColecao>
                            </>
                        }
                    </Box>
                    <BotaoTerciario variant="outlined">Ver anexos  </BotaoTerciario>
                </GridFooter>
            }
        </GridContainerColecao>
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

function Propostas(props: { listaPropostas: [], tipoColecao: string, avaliandoProcesso: boolean, verificacaoInputs: boolean[] }) {
    const eUmaPauta = (props.tipoColecao == "Pauta" ? true : false)
    const location = useLocation().pathname
    const linkProposta = location + "/proposal"

    const propostas = props.listaPropostas.map((proposta: any, index: number) => {
        return (
            <Proposta key={index} proposta={proposta} linkProposta={linkProposta} eUmaPauta={eUmaPauta} index={index} avaliandoProcesso={props.avaliandoProcesso} verificacaoInputs={props.verificacaoInputs} />
        )
    })

    return (
        <>
            {propostas}
        </>
    )
}

function Proposta(props: { proposta: any, linkProposta: string, eUmaPauta: boolean, index: number, avaliandoProcesso: boolean, verificacaoInputs: boolean[] }) {
    const [expanded, setExpanded] = useState({ expanded: false })
    const [mensagemErroStatus, setMenssagemErroStatus] = useState("")
    const [mensagemErroATA, setMenssagemErroATA] = useState("")
    const [objetoErroNumeroATA, setObjetoErroNumeroATA] = useState({ error: false, helperText: "" })
    const [objetoErroDocumento, setObjetoErroDocumento] = useState({ error: false, helperText: "" })
    const verificacaoInputs = props.verificacaoInputs
    const proposta = props.proposta
    const forumEscolhido = (props.eUmaPauta ? "comissão" : "direção geral")

    const conteudoPropostaInicio = (
        <>
            <GridPequenosAtributos item xs={6}>
                <TypographyTituloAtributo variant='body1'>
                    Solicitante:
                </TypographyTituloAtributo>
                <TypographyTextoColecao variant='body1' >
                    {proposta.solicitante}
                </TypographyTextoColecao>
            </GridPequenosAtributos>
            <Grid item xs={12}>
                <StyledBenefitTable title="Benefícios reais" atributos={proposta.beneficiosReais} />
            </Grid>
            <Grid item xs={12}>
                <StyledBenefitTable title="Benefícios potenciais" atributos={proposta.beneficiosPotenciais} />
            </Grid>
            {proposta.tabelasCusto &&
                <Grid item xs={12}>
                    <TabelasCusto tabelasCusto={proposta.tabelasCusto} />
                </Grid>
            }
            <Grid item xs={12}>
                <GridLinkTypograpfy variant='body2' width="auto !important">
                    <Link to={props.linkProposta} onClick={() => { setProposta(proposta) }}>Ver mais</Link>
                </GridLinkTypograpfy>
            </Grid>
        </>
    )

    const conteudoPropostaAvaliacao = (
        <>
            <Grid item xs>
                <TypographyTituloDecisao variant='body1'>
                    Parecer da {forumEscolhido}
                </TypographyTituloDecisao>
                <FormControl error>
                    <RadioGroup sx={{ flexDirection: "row" }}>
                        <FormControlLabel className={`radioButtonStatus${props.index}`} value="Canceled" control={<Radio sx={{ '&.Mui-checked': { color: '#FF1616' } }} />} label="Canceled" />
                        <FormControlLabel className={`radioButtonStatus${props.index}`} value="Business Case" control={<Radio sx={{ '&.Mui-checked': { color: "#FFD600" } }} />} label="Business Case" />
                        <FormControlLabel className={`radioButtonStatus${props.index}`} value="To do" control={<Radio sx={{ '&.Mui-checked': { color: "#00612E" } }} />} label="To do" />
                        <FormControlLabel className={`radioButtonStatus${props.index}`} value="Assesment" control={<Radio sx={{ '&.Mui-checked': { color: "#595959" } }} />} label="Assesment" />
                    </RadioGroup>
                    <FormHelperText id="component-error-text">{mensagemErroStatus}</FormHelperText>
                </FormControl>
            </Grid>
            {!props.eUmaPauta ?
                <>
                    <Grid item xs={4}>
                        <TypographyTituloDecisao variant='body1'>
                            Número da ATA da DG:
                        </TypographyTituloDecisao>
                        <TextField type='number' id={`inputNumeroATA${props.index}`} onChange={checarValor} {...objetoErroNumeroATA} />
                    </Grid>
                    <Grid item xs={12}>
                        <TypographyTituloDecisao variant='body1'>
                            Documento de aprovação:
                        </TypographyTituloDecisao>
                        <TextField placeholder='vai ter o inputzao de arquivo' multiline sx={{ width: "100%" }} id={`inputDocumento${props.index}`} {...objetoErroDocumento} />
                    </Grid>
                </>
                :
                <Grid item xs={12}>
                    <TypographyTituloDecisao variant='body1'>
                        Forma de publicação
                    </TypographyTituloDecisao>
                    <FormControl error>
                        <RadioGroup sx={{ flexDirection: "row" }}>
                            <FormControlLabel className={`radioButtonATA${props.index}`} value="Ata publicada" control={<Radio />} label="Ata publicada" />
                            <FormControlLabel className={`radioButtonATA${props.index}`} value="Ata não publicada" control={<Radio />} label="Ata não publicada" />
                        </RadioGroup>
                        <FormHelperText id="component-error-text">{mensagemErroATA}</FormHelperText>
                    </FormControl>
                </Grid>
            }
            <Grid item xs={12}>
                <TypographyTituloDecisao variant='body1'>
                    Comentários
                </TypographyTituloDecisao>
                <TextField
                    placeholder='Coloque aqui pontos interessantes que foram discutidos durante a reunião'
                    multiline
                    rows={5}
                    sx={{ width: "100%" }}
                />
            </Grid>
        </>
    )

    useEffect(() => {
        if (verificacaoInputs == null || verificacaoInputs.length == 0) {
            return
        }

        const primeiroIndexProposta = props.index * 10

        if (!verificacaoInputs[primeiroIndexProposta + 1]) {
            setMenssagemErroStatus("Nenhum status selecionado")
            setExpanded({ expanded: true })
        } else {
            setMenssagemErroStatus("")
        }

        if (props.eUmaPauta) {
            if (!verificacaoInputs[primeiroIndexProposta + 2]) {
                setMenssagemErroATA("Escolha uma das opções")
                setExpanded({ expanded: true })
            } else {
                setMenssagemErroATA("")
            }
        } else {
            if (!verificacaoInputs[primeiroIndexProposta + 3]) {
                setObjetoErroNumeroATA({ error: true, helperText: "Informe o número da ATA da Direção Geral" })
                setExpanded({ expanded: true })
            } else {
                setObjetoErroNumeroATA({ error: false, helperText: "" })
            }

            if (!verificacaoInputs[primeiroIndexProposta + 4]) {
                setObjetoErroDocumento({ error: true, helperText: "Adicione o documento de aprovação" })
                setExpanded({ expanded: true })
            } else {
                setObjetoErroDocumento({ error: false, helperText: "" })
            }
        }

    }, [verificacaoInputs])

    useEffect(() => {
        if (props.avaliandoProcesso && props.index == 0) {
            setExpanded({ expanded: true })
        } else {
            setExpanded({ expanded: false })
        }
    }, [props.avaliandoProcesso])

    function checarValor(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const valor = Number.parseInt(e.target.value)
        if (valor < 0) {
            e.target.value = 0 + ""
        }
    }

    function setProposta(proposta: any) {
        localStorage.setItem("PROPOSTAESCOLHIDA", JSON.stringify(proposta))
    }

    function mudarAcordeon() {
        setExpanded({ expanded: !expanded.expanded })
    }

    return (
        <Grid item xs={12} key={proposta.id} sx={{ backgroundColor: "transparent" }}>
            <GridProposta container >
                <Grid item xs={0.2}>
                    <BoxCorStatus sx={{ backgroundColor: getColorStatus(proposta.status) }} ></BoxCorStatus>
                </Grid>
                <Grid item xs={11.8} borderRadius="0 10px 10px 0" padding="15px">
                    <AccordionProposta {...expanded} >
                        <AccordionSummary
                            onClick={mudarAcordeon}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" sx={{ color: "#595959" }}>{proposta.titulo}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                {!props.avaliandoProcesso ?
                                    conteudoPropostaInicio
                                    :
                                    conteudoPropostaAvaliacao
                                }
                            </Grid>
                        </AccordionDetails>
                    </AccordionProposta>
                </Grid>
            </GridProposta>
        </Grid>
    )
}

function getComponentName(location: string) {
    const fragmentoTipo = location.slice(location.length - 3)

    if (fragmentoTipo == "ata") {
        return "ATA"
    } else {
        return "PAUTA"
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