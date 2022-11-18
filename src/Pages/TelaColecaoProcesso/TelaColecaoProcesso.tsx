import { Link, useLocation } from "react-router-dom";
import { StatusComponenteProcesso, TamanhoComponenteProcesso, TipoColecaoComponenteProcesso, TipoComponenteProcesso } from "../../DefinitionFiles/enuns"
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"
import Toolbar from "../../Components/Toolbar/Toolbar"
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BotaoIcone, BoxBandeira, BoxContainerBandeira, BoxCorStatus, BoxHeader, BoxTrianguloBandeira, GridContainer, GridContainerHeader, GridPequenosAtributos, GridTitulo, TypographyTexto, TypographyTitulo, TypographyTituloAtributo } from "../TelaProcesso/TelaProcesso.styles"
import { BoxContainer, BoxConteudo, BotaoTerciario } from "../App.styles"
import { GridLinkTypograpfy } from "../../Components/ComponenteProcesso/ComponenteProcesso.styles";

const listaColecaoProcesso = [
    {
        id: 2,
        dataReuniao: new Date(),
        comissao: "Comissao do diretor geral fodao matematico ultimate",
        tipo: TipoColecaoComponenteProcesso.Pauta,
        propostas: [
            {
                id: 7,
                titulo: "lerolerolerolero",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um fia da puta ae",
                status: StatusComponenteProcesso.Assesment,
                tipo: TipoComponenteProcesso.Demanda,
                score: 12.5
            },
            {
                id: 9,
                titulo: "eu quero janta de 3 horas",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um gênio",
                status: StatusComponenteProcesso.Backlog,
                tipo: TipoComponenteProcesso.Demanda,
                score: 10000
            }
        ]
    },
    {
        id: 6,
        dataReuniao: new Date(),
        comissao: "comission fodelastica aaaa",
        tipo: TipoColecaoComponenteProcesso.Pauta,
        propostas: [
            {
                id: 5,
                titulo: "me da droga",
                tamanho: TamanhoComponenteProcesso.Medio,
                solicitante: "um fia da puta ae 2",
                status: StatusComponenteProcesso.BusinessCase,
                tipo: TipoComponenteProcesso.Proposta,
                score: 12.5
            },
            {
                id: 3,
                titulo: "titulozao pra ver como fica muito grande a responsividade da bagaça",
                tamanho: TamanhoComponenteProcesso.Grande,
                solicitante: "esse aqui é legal",
                status: StatusComponenteProcesso.Assesment,
                tipo: TipoComponenteProcesso.Demanda,
                score: 12.5
            },
            {
                id: 4,
                titulo: "Demandinha de um cara legal",
                tamanho: TamanhoComponenteProcesso.MuitoGrande,
                solicitante: "Jefferson Rodrigues",
                status: StatusComponenteProcesso.Canceled,
                tipo: TipoComponenteProcesso.Proposta,
                score: 12.5
            },
            {
                id: 1,
                titulo: "primeiro titulo ae",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um fia da puta ae",
                status: StatusComponenteProcesso.Backlog,
                tipo: TipoComponenteProcesso.Demanda,
                score: 12.5
            }
        ]
    },
    {
        id: 8,
        dataReuniao: new Date(),
        comissao: "Uma comissão doida lá",
        tipo: TipoColecaoComponenteProcesso.ATA,
        ataPublicada: "ata8Publicada.pdf",
        ataNaoPublicada: "ata8NaoPublicada.pdf",
        numeroAtaDG: 12435,
        documentoAprovacao: "aprovation.pdf",
        propostas: [
            {
                id: 4,
                titulo: "Demandinha de um cara legal",
                tamanho: TamanhoComponenteProcesso.MuitoGrande,
                solicitante: "Jefferson Rodrigues",
                status: StatusComponenteProcesso.Canceled,
                tipo: TipoComponenteProcesso.Proposta,
                score: 12.5
            },
            {
                id: 9,
                titulo: "eu quero janta de 3 horas",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um gênio",
                status: StatusComponenteProcesso.ToDo,
                tipo: TipoComponenteProcesso.Demanda,
                score: 10000
            }
        ]
    }
]

export default function TelaColecaoProcesso() {
    const location = useLocation().pathname
    const idLocalStorage = localStorage.getItem(`ID${getComponentName(location)}ESCOLHIDA`)
    const idColecao = JSON.parse(idLocalStorage != null ? idLocalStorage : "");
    const informacaoColecaoProcesso = listaColecaoProcesso.find(p => p.id == idColecao)

    return (
        <>
            <Header informacaoColecaoProcesso={informacaoColecaoProcesso} />
            <BoxConteudo >
                <BoxContainer>
                    <Container>
                        <ContainerColecaoProcesso informacaoColecaoProcesso={informacaoColecaoProcesso} />
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
function Header(props: { informacaoColecaoProcesso: any }) {
    const informacaoColecaoProcesso = props.informacaoColecaoProcesso
    const tipoColecao = informacaoColecaoProcesso.tipo
    const dataReuniao = informacaoColecaoProcesso.dataReuniao
    let listaBotoes = ["historico"]
    /**
     * 1º historico (Pauta, preenchida || Pauta, ainda não passou da data da reunião dela)
     * 2º historico, informar parecer da comissão (Pauta, já passou a data da reunião)
     * 3º historico, finalizar processo (Ata, ainda não passou plea dg)
     * 4º historico
     */
    return (
        <>
            <BoxHeader>
                <Breadcrumb />
                <ButtonsHeader listaBotoes={[""]} />
            </BoxHeader>
            <Toolbar />
        </>
    )
}


function ButtonsHeader(props: { listaBotoes: string[] }) {

    return (
        <Box>
            {""}
        </Box>
    )
}


/**
 * Container principal para todas as informações de uma proposta/demanda
 * 
 * @param props 
 * @returns 
 */
function ContainerColecaoProcesso(props: { informacaoColecaoProcesso: any }) {
    const informacaoColecaoProcesso = props.informacaoColecaoProcesso
    const dataFormatada = informacaoColecaoProcesso.dataReuniao.toLocaleDateString()

    return (
        <GridContainer container sx={{ padding: "9px 25px 25px 25px" }} spacing={2}>
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
            <Propostas listaPropostas={informacaoColecaoProcesso.propostas} />
            {informacaoColecaoProcesso.tipo == "ATA" &&
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex" }}>
                        {informacaoColecaoProcesso.numeroAtaDG &&
                            <>
                                <TypographyTituloAtributo variant='body1'>
                                    Número da ATA da DG:
                                </TypographyTituloAtributo>
                                <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
                                    {informacaoColecaoProcesso.numeroAtaDG}
                                </TypographyTexto>
                            </>
                        }
                    </Box>
                    <BotaoTerciario variant="outlined">Ver anexos  </BotaoTerciario>
                </Grid>
            }
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

function Propostas(props: { listaPropostas: [] }) {
    function setProposta(id: number) {
        localStorage.setItem("IDPROPOSTAESCOLHIDA", id + "")
    }

    const propostas = props.listaPropostas.map((proposta: any) => {
        const location = useLocation().pathname
        const linkProposta = location + "/proposal"

        return (
            <Grid item xs={12} key={proposta.id} sx={{ backgroundColor: "transparent" }}>
                <Grid container sx={{ boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)", borderRadius: "10px" }}>
                    <Grid item xs={0.2}>
                        <BoxCorStatus sx={{ backgroundColor: getColorStatus(proposta.status) }} ></BoxCorStatus>
                    </Grid>
                    <Grid item xs={11.8} sx={{ borderRadius: "0 10px 10px 0" }}>
                        <Accordion sx={{ backgroundColor: "transparent", "& .MuiPaper-root": { borderRadius: "0 10px 10px 0", boxShadow: "none" }, boxShadow: "none" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{proposta.titulo}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container>
                                    <GridPequenosAtributos item xs={4}>
                                        <TypographyTituloAtributo variant='body1'>
                                            Solicitante:
                                        </TypographyTituloAtributo>
                                        <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
                                            {proposta.solicitante}
                                        </TypographyTexto>
                                    </GridPequenosAtributos>
                                    <GridPequenosAtributos item xs={4}>
                                        <TypographyTituloAtributo variant='body1'>
                                            Tamanho:
                                        </TypographyTituloAtributo>
                                        <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
                                            {proposta.tamanho}
                                        </TypographyTexto>
                                    </GridPequenosAtributos>
                                    <GridPequenosAtributos item xs={4}>
                                        <TypographyTituloAtributo variant='body1'>
                                            Score:
                                        </TypographyTituloAtributo>
                                        <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
                                            {proposta.score}
                                        </TypographyTexto>
                                    </GridPequenosAtributos>
                                    <Grid item xs={12}>
                                        <GridLinkTypograpfy variant='body2' sx={{ width: "auto !important" }}>
                                            <Link to={linkProposta} onClick={() => { setProposta(proposta.id) }}>Ver mais</Link>
                                        </GridLinkTypograpfy>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Grid>

        )
    })

    return (
        <>
            {propostas}
        </>
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