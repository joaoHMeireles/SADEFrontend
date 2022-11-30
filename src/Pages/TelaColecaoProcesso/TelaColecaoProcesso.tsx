import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
import Toolbar from "../../Components/Toolbar/Toolbar"
import { AccordionDetails, AccordionSummary, Box, Container, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, Typography, Radio, TextField } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    BotaoPrimarioHeader,
    BotaoSecundarioHeader,
    BoxBandeira, BoxBotoes, BoxContainerBandeira, BoxCorStatus, BoxHeader, BoxTrianguloBandeira, GridContainerHeader,
    GridPequenosAtributos, GridTitulo, TypographyTituloAtributo
} from "../TelaProcesso/TelaProcesso.styles"
import { BoxContainer, BoxConteudo, BotaoTerciario, BotaoPrimario } from "../App.styles"
import { GridLinkTypograpfy } from "../../Components/ComponenteProcesso/ComponenteProcesso.styles";
import { SetStateAction, useEffect, useState } from "react";
import { AccordionProposta, GridContainerColecao, GridFooter, GridProposta, TypographyTextoColecao, TypographyTituloDecisao } from "./TelaColecaoProcesso.styles";
import { StyledBenefitTable, TabelasCusto } from "../TelaProcesso/TelaProcesso";


export default function TelaColecaoProcesso() {
    const [avaliandoProcesso, setAvaliandoProcesso] = useState(false)
    const location = useLocation().pathname
    const idLocalStorage = localStorage.getItem(`${getComponentName(location)}ESCOLHIDA`)
    const informacaoColecaoProcesso = JSON.parse(idLocalStorage != null ? idLocalStorage : "");

    function aprovarProcesso() {
        //fazer toda a bagaça de verificação e cadastro aqui
        setAvaliandoProcesso(false)
    }

    return (
        <>
            <Header informacaoColecaoProcesso={informacaoColecaoProcesso} avaliandoProcesso={avaliandoProcesso} setAvaliandoProcesso={setAvaliandoProcesso} aprovarProcesso={aprovarProcesso} />
            <BoxConteudo >
                <BoxContainer>
                    <Container>
                        <ContainerColecaoProcesso informacaoColecaoProcesso={informacaoColecaoProcesso} avaliandoProcesso={avaliandoProcesso} />
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
function Header(props: { informacaoColecaoProcesso: any, avaliandoProcesso: boolean, setAvaliandoProcesso: React.Dispatch<SetStateAction<boolean>>, aprovarProcesso: Function }) {
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
                                <BotaoSecundarioHeader variant='outlined' onClick={() => { props.setAvaliandoProcesso(false) }}> Cancelar</BotaoSecundarioHeader>
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
function ContainerColecaoProcesso(props: { informacaoColecaoProcesso: any, avaliandoProcesso: boolean }) {
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
            <Propostas listaPropostas={informacaoColecaoProcesso.propostas} tipoColecao={informacaoColecaoProcesso.tipo} avaliandoProcesso={props.avaliandoProcesso} />
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

function Propostas(props: { listaPropostas: [], tipoColecao: string, avaliandoProcesso: boolean }) {
    const eUmaPauta = (props.tipoColecao == "Pauta" ? true : false)
    const forumEscolhido = (eUmaPauta ? "comissão" : "direção geral")

    function setProposta(proposta: any) {
        localStorage.setItem("PROPOSTAESCOLHIDA", JSON.stringify(proposta))
    }

    const propostas = props.listaPropostas.map((proposta: any, index: number) => {
        console.log(proposta);

        const location = useLocation().pathname
        const linkProposta = location + "/proposal"
        let acordionProps = { defaultExpanded: false }
        if (index == 0) {
            acordionProps.defaultExpanded = true
        }
        let conteudoProposta: JSX.Element

        if (props.avaliandoProcesso) {
            conteudoProposta = (
                <>
                    <Grid item xs={6.5}>
                        <TypographyTituloDecisao variant='body1'>
                            Parecer da {forumEscolhido}
                        </TypographyTituloDecisao>
                        <FormControl>
                            <RadioGroup sx={{ flexDirection: "row" }}>
                                <FormControlLabel value="Canceled" control={<Radio sx={{ '&.Mui-checked': { color: '#FF1616' } }} />} label="Canceled" />
                                <FormControlLabel value="Business Case" control={<Radio sx={{ '&.Mui-checked': { color: "#FFD600" } }} />} label="Business Case" />
                                <FormControlLabel value="To do" control={<Radio sx={{ '&.Mui-checked': { color: "#00612E" } }} />} label="To do" />
                                <FormControlLabel value="Assesment" control={<Radio sx={{ '&.Mui-checked': { color: "#595959" } }} />} label="Assesment" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {!eUmaPauta &&
                        <>
                            <Grid item xs={4}>
                                <TypographyTituloDecisao variant='body1'>
                                    Número da ATA da DG:
                                </TypographyTituloDecisao>
                                <TextField type='number' />
                            </Grid>
                            <Grid item xs={12}>
                                <TypographyTituloDecisao variant='body1'>
                                    Documento de aprovação:
                                </TypographyTituloDecisao>
                                <TextField
                                    placeholder='vai ter o inputzao de arquivo'
                                    multiline
                                    sx={{ width: "100%" }}
                                />
                            </Grid>
                        </>
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
                    {eUmaPauta &&
                        <Grid item xs={12}>
                            <TypographyTituloDecisao variant='body1'>
                                Forma de publicação
                            </TypographyTituloDecisao>
                            <FormControl>
                                <RadioGroup sx={{ flexDirection: "row" }}>
                                    <FormControlLabel value="Ata publicada" control={<Radio />} label="Ata publicada" />
                                    <FormControlLabel value="Ata não publicada" control={<Radio />} label="Ata não publicada" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    }
                </>
            )
        } else {
            conteudoProposta = (
                <>
                    <GridPequenosAtributos item xs={6}>
                        <TypographyTituloAtributo variant='body1'>
                            Solicitante:
                        </TypographyTituloAtributo>
                        <TypographyTextoColecao variant='body1' >
                            {proposta.solicitante}
                        </TypographyTextoColecao>
                    </GridPequenosAtributos>
                    <GridPequenosAtributos item xs={6}>
                        <TypographyTituloAtributo variant='body1'>
                            Score:
                        </TypographyTituloAtributo>
                        <TypographyTextoColecao variant='body1' >
                            {proposta.score}
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
                            <Link to={linkProposta} onClick={() => { setProposta(proposta) }}>Ver mais</Link>
                        </GridLinkTypograpfy>
                    </Grid>
                </>

            )

        }


        return (
            <Proposta proposta={proposta} conteudoProposta={conteudoProposta} />
        )
    })

    return (
        <>
            {propostas}
        </>
    )
}

function Proposta(props: { proposta: any, conteudoProposta: JSX.Element }) {
    const proposta = props.proposta

    return (
        <Grid item xs={12} key={proposta.id} sx={{ backgroundColor: "transparent" }}>
            <GridProposta container >
                <Grid item xs={0.2}>
                    <BoxCorStatus sx={{ backgroundColor: getColorStatus(proposta.status) }} ></BoxCorStatus>
                </Grid>
                <Grid item xs={11.8} borderRadius="0 10px 10px 0" padding="15px">
                    <AccordionProposta>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" sx={{ color: "#595959" }}>{proposta.titulo}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                {props.conteudoProposta}
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