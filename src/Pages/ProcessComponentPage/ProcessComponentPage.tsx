import { processComponent, processComponentSize, processComponentStatus, ITsession } from '../../DefinitionFiles/enuns'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Toolbar from '../../Components/Toolbar/Toolbar'
import { Box, Container, Divider, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import { ContentBox, ContainerBox } from '../App.styles'
import {
    HeaderBox, MainContainerGrid, StatusColorBox, MainInfoGrid, HeaderContainerGrid, TitleGrid, FlagContainerBox,
    FlagBox, FlagTriangleBox, SmallAttributesGrid, TitleTypography, AttributeTitleTypography, TextTypography,
    DotCircleIcon, StyledTableCell, StyledTableRow, TableBox, CostTableBox, ContainerTableBox, TitleCostCentersBox,
    CostCentersBox
} from './ProcessComponentPage.styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const listaProcessos = [
    {
        id: 1,
        titulo: "primeiro titulo ae",
        tamanho: processComponentSize.Pequeno,
        solicitante: "um fia da puta ae",
        status: processComponentStatus.Backlog,
        tipo: processComponent.Demanda,
        score: 12.5,
        departamento: "não sei nenhum departamento",
        gerenteResponsavel: "tal fiote de cruz credo",
        frequenciaUso: 200,
        beneficioQualitativo: "textin ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything dizendo como é bom",
        centrosDeCusto: [
            1234,
            5678
        ],
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "BRL",
                valor: 10000.00
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        beneficiosPotenciais: [
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00
            }
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "anexoZada",
                arquivo: "jemidoASMR.mp4"
            },
            {
                nome: "foto minha peladao",
                arquivo: "thanosAgrachamento.png"
            }
        ]
    },
    {
        id: 3,
        titulo: "titulozao pra ver como fica muito grande a responsividade da bagaça",
        tamanho: processComponentSize.Grande,
        solicitante: "esse aqui é legal",
        status: processComponentStatus.Assesment,
        tipo: processComponent.Demanda,
        score: 12.5,
        departamento: "7825678256782437813",
        gerenteResponsavel: "riomar silveira pinto nunes",
        frequenciaUso: 329,
        beneficioQualitativo: "é bem bonzin bão memo bom ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything",
        centrosDeCusto: [
            3864,
            9863
        ],
        secaoTIResponsavel: ITsession.SEG,
        BUSolicitante: "Primeira",
        BUsBeneficiadas: [
            "essa aqui",
            "essa também po"
        ],
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "BRL",
                valor: 10000.00
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa",
                moeda: "USD",
                valor: 1500.00
            },
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00
            }
        ],
        beneficiosPotenciais: [
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "anexoZada",
                arquivo: "jemidoASMR.mp4"
            },
            {
                nome: "foto minha peladao",
                arquivo: "thanosAgrachamento.png"
            },
            {
                nome: "excel da tua mãe",
                arquivo: "rendaPackDoPe.xml"
            }
        ]
    },
    {
        id: 4,
        titulo: "Demandinha de um cara legal",
        tamanho: processComponentSize.MuitoGrande,
        solicitante: "Jefferson Rodrigues",
        status: processComponentStatus.Canceled,
        tipo: processComponent.Proposta,
        score: 12.5,
        departamento: "o da diretoria fodão grandoes",
        gerenteResponsavel: "marcello taz do cqc",
        frequenciaUso: 160,
        beneficioQualitativo: "vai dar isso isso of Lorem Ipsum available, but the majoritailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingy have suffered alteration in some form, by injected humour, or  randomised word benefi isso e isso de beneficios",
        centrosDeCusto: [
            9425,
            9678
        ],
        secaoTIResponsavel: ITsession.SVE,
        BUSolicitante: "Motores",
        BUsBeneficiadas: [
            "Tintas",
            "Gidital"
        ],
        prazoElaboracao: new Date(),
        codigoPPM: 67237,
        linkJira: "https://jirazadaDoCara",
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "BRL",
                valor: 10000.00
            },
        ],
        periodoExecucao: [
            new Date(),
            new Date()
        ],
        responsaveis: [
            "Jorginho metálica",
            "Arquimedes Segundo"
        ],
        beneficiosPotenciais: [
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        payback: 4356.30,
        tabelasCusto: [
            {
                titulo: "gastos tandam",
                isLicenca: false,
                centrosCusto: [
                    {
                        centroCusto: 6135,
                        porcentagem: 0.5
                    },
                    {
                        centroCusto: 2668,
                        porcentagem: 0.5
                    },
                ],
                linhas: [
                    {
                        recurso: "analista funcional",
                        esforco: 150,
                        valor: 35
                    },
                    {
                        recurso: "mão de obra",
                        esforco: 48,
                        valor: 35
                    },
                ]
            }
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        escopo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "excel da tua mãe",
                arquivo: "rendaPackDoPe.xml"
            }
        ]
    },
    {
        id: 5,
        titulo: "me da droga",
        tamanho: processComponentSize.Medio,
        solicitante: "um fia da puta ae caraiudo",
        status: processComponentStatus.BusinessCase,
        tipo: processComponent.Proposta,
        score: 12.5,
        departamento: "o da diretoria fodão grandoes",
        gerenteResponsavel: "romero britto",
        frequenciaUso: 540,
        beneficioQualitativo: "ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word beneficios",
        centrosDeCusto: [
            9678
        ],
        secaoTIResponsavel: ITsession.SVE,
        BUSolicitante: "Motores",
        BUsBeneficiadas: [
            "Tintas",
            "Solar"
        ],
        prazoElaboracao: new Date(),
        codigoPPM: 78569,
        linkJira: "https://jirazadaDoCara/fsdfsaf",
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "BRL",
                valor: 10000.00
            },
            {
                descricao: "uma descrizaozninha bonitinha",
                moeda: "BRL",
                valor: 1900.00
            },
        ],
        periodoExecucao: [
            new Date(),
            new Date()
        ],
        responsaveis: [
            "Arquimedes Segundo",
            "Socratinho filipe",
            "Diogenizada"
        ],
        beneficiosPotenciais: [
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        payback: 783.30,
        tabelasCusto: [
            {
                titulo: "gastos",
                isLicenca: false,
                centrosCusto: [
                    {
                        centroCusto: 6135,
                        porcentagem: 0.5
                    },
                    {
                        centroCusto: 2668,
                        porcentagem: 0.5
                    },
                ],
                linhas: [
                    {
                        recurso: "analista funcional",
                        esforco: 150,
                        valor: 35
                    },
                    {
                        recurso: "macaco anti-stress",
                        esforco: 48,
                        valor: 39
                    },
                ]
            },
            {
                titulo: "mais gastos",
                isLicenca: true,
                centrosCusto: [
                    {
                        centroCusto: 6789,
                        porcentagem: 0.3
                    },
                    {
                        centroCusto: 2668,
                        porcentagem: 0.6
                    },
                    {
                        centroCusto: 9942,
                        porcentagem: 0.1
                    }
                ],
                linhas: [
                    {
                        recurso: "Oracle",
                        esforco: 3,
                        valor: 479.99
                    },
                    {
                        recurso: "Visual Studio premium",
                        esforco: 2,
                        valor: 156
                    },
                ]
            }
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        escopo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "sisssssstema",
                arquivo: "naoEUmVirus.docxx"
            }
        ]
    },
    {
        id: 7,
        titulo: "lerolerolerolero",
        tamanho: processComponentSize.Pequeno,
        solicitante: "um fia da puta ae",
        status: processComponentStatus.Assesment,
        tipo: processComponent.Demanda,
        score: 12.5,
        departamento: "o da diretoria fodão grandoes",
        gerenteResponsavel: "marcello taz do cqc",
        frequenciaUso: 160,
        beneficioQualitativo: "vai dar isso isso isso e isso de beneficios ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word",
        centrosDeCusto: [
            9425,
            9678
        ],
        secaoTIResponsavel: ITsession.SVE,
        BUSolicitante: "Motores",
        BUsBeneficiadas: [
            "Tintas",
            "Gidital"
        ],
        prazoElaboracao: new Date(),
        codigoPPM: 67237,
        linkJira: "https://jirazadaDoCara",
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "BRL",
                valor: 10000.00
            },
        ],
        beneficiosPotenciais: [
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "excel da tua mãe",
                arquivo: "rendaPackDoPe.xml"
            }
        ]
    },
    {
        id: 9,
        titulo: "eu quero janta de 3 s",
        tamanho: processComponentSize.Pequeno,
        solicitante: "um gênio",
        status: processComponentStatus.Backlog,
        tipo: processComponent.Proposta,
        score: 10000,
        departamento: "sgdaho",
        gerenteResponsavel: "Carlos Salles Morales",
        frequenciaUso: 98,
        beneficioQualitativo: "b e n e f i c i o There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarras",
        centrosDeCusto: [
            9678,
            9674,
            1415
        ],
        secaoTIResponsavel: ITsession.SIM,
        BUSolicitante: "Motores",
        BUsBeneficiadas: [
            "Motores"
        ],
        prazoElaboracao: new Date(),
        codigoPPM: 3241,
        linkJira: "https://jirassssssssCity",
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "USD",
                valor: 100.00
            },
            {
                descricao: "uma descrizaozninha",
                moeda: "BRL",
                valor: 19000.00
            },
        ],
        periodoExecucao: [
            new Date(),
            new Date()
        ],
        responsaveis: [
            "Bruno",
            "MarronÈ"
        ],
        beneficiosPotenciais: [
            {
                descricao: "descricao",
                moeda: "USD",
                valor: 1500.00
            },
            {
                descricao: "descricaodaCoisa",
                moeda: "BRL",
                valor: 10.00
            }
        ],
        payback: 945.37,
        tabelasCusto: [
            {
                titulo: "mais gastos",
                isLicenca: false,
                centrosCusto: [
                    {
                        centroCusto: 7643,
                        porcentagem: 0.7
                    },
                    {
                        centroCusto: 5671,
                        porcentagem: 0.2
                    },
                    {
                        centroCusto: 1567,
                        porcentagem: 0.1
                    }
                ],
                linhas: [
                    {
                        recurso: "rapaz do café",
                        esforco: 350,
                        valor: 15
                    },
                    {
                        recurso: "mão de obra",
                        esforco: 48,
                        valor: 350
                    },
                ]
            }
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        escopo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "sisssssstema",
                arquivo: "naoEUmVirus.docxx"
            }
        ]
    }
]

/**
 * Componente principal das páginas de proposta de demanda sendo dinâmico conforme
 * as informações vão sendo inseridas
 * 
 * @param props 
 * @returns 
 */
export default function ProcessComponentPage(props: any) {
    return (
        <>
            <PageHeader />
            <ContentBox >
                <ContainerBox>
                    <Container>
                        <ProcessContainer />
                    </Container>
                </ContainerBox>
            </ContentBox>
        </>
    )
}

/**
 * Componente para o header da página que controlará os botões que aparecerão
 * de acordo com o status atual daquele processo
 * 
 * @param props 
 * @returns 
 */
function PageHeader(props: any) {

    //FALTA OS BOTÔES

    return (
        <>
            <HeaderBox>
                <Breadcrumb />
            </HeaderBox>
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
function ProcessContainer(props: any) {
    const processLocalStorage = localStorage.getItem("CHOOSEDPROCESS")
    const choosedProcess = JSON.parse(processLocalStorage != null ? processLocalStorage : "");
    const processoInfo = listaProcessos.find(p => p.id == choosedProcess.id && choosedProcess.tipo == p.tipo)

    return (
        <MainContainerGrid container>
            <Grid item xs={0.2}>
                <StatusColorBox sx={{ backgroundColor: getColorStatus(processoInfo?.status) }} ></StatusColorBox>
            </Grid>
            <MainInfoGrid item xs={11.8}>
                <HeaderContainerGrid container>
                    <TitleGrid item xs={10} >
                        <Typography variant='h4'>
                            {processoInfo?.titulo}
                        </Typography>
                    </TitleGrid>
                    <Grid item xs={2}>
                        <Flag cor={getColorType(processoInfo?.tipo)} />
                    </Grid>
                </HeaderContainerGrid>
                <Divider />
                <InfoGeral processo={processoInfo} />
                <Divider />
                <InfoComercial processo={processoInfo} />
                <Divider />
                <Contextualizacao processo={processoInfo} />
            </MainInfoGrid>
        </MainContainerGrid>
    )
}

/**
 * Componente da bandeira que altera a cor de acordo com o valor que recebe e que
 * se localiza no canto superior direito container principal
 * 
 * @param props 
 * @returns 
 */
function Flag(props: { cor: string }) {
    return (
        <FlagContainerBox >
            <FlagBox sx={{ backgroundColor: props.cor }}>
                <FlagTriangleBox />
            </FlagBox>
        </FlagContainerBox>
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
            <SmallAttributesGrid key={chaveComponente} item xs={6}>
                <AttributeTitleTypography variant='body1'>
                    {nomeAtributo}
                </AttributeTitleTypography>
                <TextTypography variant='body1' sx={{ marginLeft: "5px" }}>
                    {valorAtributo}
                </TextTypography>
            </SmallAttributesGrid>
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
                <AttributeTitleTypography variant='body1'>
                    {nomeAtributo}
                </AttributeTitleTypography>
                <AtributeList valorAtributo={valorAtributo} />
            </Grid>
        )
    }



    return (
        <Grid container sx={{ marginY: "20px" }}>
            <TitleTypography variant='h5'>
                Informações Gerais
            </TitleTypography>
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
                <TextTypography variant='body1' >
                    <b>{getNomeAtributo("beneficioQualitativo")}</b> {props.processo.beneficioQualitativo}
                </TextTypography>
            </Grid>
        </Grid >
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
        realBenefits: props.processo.beneficiosReais,
        potencialBenefits: props.processo.beneficiosPotenciais,
        costTables: props.processo.tabelasCusto
    }

    const realBenefits = atributos.realBenefits.map((benefit: { descricao: string, moeda: string, valor: string }, index: number) => {
        return (
            <StyledTableRow key={index}>
                <StyledTableCell align='center' sx={{ width: "50%" }}>{benefit.descricao}</StyledTableCell>
                <StyledTableCell align='center'>{benefit.moeda}</StyledTableCell>
                <StyledTableCell align='center'>R$ {benefit.valor}</StyledTableCell>
            </StyledTableRow>
        )
    })

    const potencialBenefits = atributos.potencialBenefits.map((benefit: { descricao: string, moeda: string, valor: string }, index: number) => {
        return (
            <StyledTableRow key={index}>
                <StyledTableCell align='center' sx={{ width: "50%" }}>{benefit.descricao}</StyledTableCell>
                <StyledTableCell align='center'>{benefit.moeda}</StyledTableCell>
                <StyledTableCell align='center'>R$ {benefit.valor}</StyledTableCell>
            </StyledTableRow>
        )
    })

    let costTables

    if (atributos.costTables) {
        costTables = atributos.costTables.map((table: any, index: number) => {
            let totalTime = 0, totalValue = 0

            const tableLines = table.linhas.map((linha: { recurso: string, esforco: number, valor: number }, lineIndex: number) => {
                const total = linha.valor * linha.esforco
                totalTime += linha.esforco
                totalValue += total

                return (
                    <StyledTableRow key={lineIndex}>
                        <StyledTableCell align='center'>{linha.recurso}</StyledTableCell>
                        <StyledTableCell align='center'>{linha.esforco}{!table.isLicenca ? "h" : ""} </StyledTableCell>
                        <StyledTableCell align='center'>R$ {linha.valor}</StyledTableCell>
                        <StyledTableCell align='center'>R$ {total}</StyledTableCell>
                    </StyledTableRow>
                )
            })

            const tableCCs = table.centrosCusto.map((centroDeCusto: any, centerIndex: number) => {
                const porcentagem = centroDeCusto.porcentagem * 100

                return (
                    <Typography key={centerIndex} variant="body1">
                        {centroDeCusto.centroCusto} - {porcentagem}%
                    </Typography>
                )
            })

            return (
                <CostTableBox key={index} >
                    <ContainerTableBox>
                        <TableContainer component={Paper} sx={{ width: "auto" }}>
                            <TableHead >
                                <TableRow >
                                    <StyledTableCell align='center'>{table.titulo}</StyledTableCell>
                                    <StyledTableCell align='center'>{!table.isLicenca ? "Esforço" : "Licenças"}</StyledTableCell>
                                    <StyledTableCell align='center'>Valor </StyledTableCell>
                                    <StyledTableCell align='center'>Total</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {tableLines}
                                <StyledTableRow>
                                    <StyledTableCell align='center'> <b>Total {table.titulo}</b></StyledTableCell>
                                    <StyledTableCell align='center'> <b>{totalTime}{!table.isLicenca ? "h" : ""}</b></StyledTableCell>
                                    <StyledTableCell align='center'> </StyledTableCell>
                                    <StyledTableCell align='center'> <b>R$ {totalValue}</b></StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </TableContainer>
                    </ContainerTableBox>
                    <Box sx={{ width: "25%" }} component={Paper}>
                        <TitleCostCentersBox>
                            Centros de Custo
                        </TitleCostCentersBox>
                        <CostCentersBox>
                            {tableCCs}
                        </CostCentersBox>
                    </Box>
                </CostTableBox>
            )
        })
    }



    return (
        <Box sx={{ marginY: "20px" }}>
            <TitleTypography variant='h5'>
                Informações Comerciais
            </TitleTypography>
            <StyledBenefitTable title='Benefícios reais' valuesList={realBenefits} />
            <StyledBenefitTable title='Benefícios potenciais' valuesList={potencialBenefits} />
            {atributos.costTables &&
                <TableBox>
                    <TitleTypography variant='subtitle1'>
                        Tabelas de custo
                    </TitleTypography>
                    {costTables}
                </TableBox>
            }
        </Box >
    )

}

/**
 * Componente dinâmico da contextualização de um processo
 * 
 * @param props 
 * @returns 
 */
function Contextualizacao(props: { processo: any }) {
    const atributos = {
        objetivo: props.processo.objetivo,
        situacaoAtual: props.processo.situacaoAtual,
        escopo: props.processo.escopo
    }


    //retornar componente das contextualizacoes
    return (
        <Box>
            ccc
        </Box>
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
    const valores = props.valorAtributo.map((valor) => {
        if (typeof valor === typeof new Date()) {
            contadorPeriodoExecucao++
            const valorData: Date = valor
            return (
                <ListItem>
                    <ListItemIcon>
                        <DotCircleIcon />
                    </ListItemIcon>
                    {contadorPeriodoExecucao == 1 ? "Início: " : "Fim: "}
                    {valorData.toLocaleDateString()}
                </ListItem>
            )
        }

        return (
            <ListItem>
                <ListItemIcon>
                    <DotCircleIcon />
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
 * Componente que constrói uma tabela de benefício
 * 
 * @param props 
 * @returns 
 */
function StyledBenefitTable(props: { valuesList: [], title: string }) {

    return (
        <TableBox sx={{ marginBottom: "20px" }}>
            <TitleTypography variant='subtitle1'>
                {props.title}
            </TitleTypography>
            <TableContainer component={Paper} sx={{ width: "40vw" }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>Descrição</StyledTableCell>
                            <StyledTableCell align='center'>Moeda</StyledTableCell>
                            <StyledTableCell align='center'>Valor</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.valuesList}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox>
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
        beneficioQualitativo: "Benefício qualitativo:",
        BUsBeneficiadas: "BUs beneficiadas:",
        payback: "Payback:",
        periodoDeExecucao: "Período de execução:",
        responsaveis: "Responsáveis:"
    }

    if (nomeAtributo != undefined) {
        return (nomesAtributos as any)[nomeAtributo]
    }
}

/**
 * Função que retorna a cor dependendo do status que receber
 * 
 * @param status 
 * @returns 
 */
function getColorStatus(status: string | undefined) {
    const coresStatus = {
        Backlog: "#DDDDDD",
        Assesment: "#595959",
        BusinessCase: "#FFD600",
        Canceled: "#FF1616",
        ToDo: "00612e"
    }

    if (status != undefined) {
        return (coresStatus as any)[status]
    }
}

/**
 * Função que retorna a cor dependendo do tipo de processo que receber
 * 
 * @param tipo 
 * @returns 
 */
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

