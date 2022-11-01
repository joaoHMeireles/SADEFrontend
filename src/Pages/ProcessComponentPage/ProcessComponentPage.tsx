
import { processComponent, processComponentSize, processComponentStatus, ITsession } from '../../DefinitionFiles/enuns'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Toolbar from '../../Components/Toolbar/Toolbar'
import { ContentBox, ContainerBox } from '../App.styles'

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
        beneficioQualitativo: "textin dizendo como é bom",
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
        beneficioQualitativo: "é bem bonzin bão memo bom",
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
        beneficioQualitativo: "vai dar isso isso isso e isso de beneficios",
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
                        esforco: "150h",
                        valorHora: 35
                    },
                    {
                        recurso: "mão de obra",
                        esforco: "48h",
                        valorHora: 35
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
        beneficioQualitativo: "beneficios",
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
                        esforco: "150h",
                        valorHora: 35
                    },
                    {
                        recurso: "macaco anti-stress",
                        esforco: "48h",
                        valorHora: 39
                    },
                ]
            },
            {
                titulo: "mais gastos",
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
                        recurso: "rapaz do café",
                        esforco: "350h",
                        valorHora: 15
                    },
                    {
                        recurso: "mão de obra",
                        esforco: "48h",
                        valorHora: 350
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
        beneficioQualitativo: "vai dar isso isso isso e isso de beneficios",
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
        titulo: "eu quero janta de 3 horas",
        tamanho: processComponentSize.Pequeno,
        solicitante: "um gênio",
        status: processComponentStatus.Backlog,
        tipo: processComponent.Proposta,
        score: 10000,
        departamento: "sgdaho",
        gerenteResponsavel: "Carlos Salles Morales",
        frequenciaUso: 98,
        beneficioQualitativo: "b e n e f i c i o",
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
                        esforco: "350h",
                        valorHora: 15
                    },
                    {
                        recurso: "mão de obra",
                        esforco: "48h",
                        valorHora: 350
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

export default function ProcessComponentPage() {
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

function PageHeader() {

    return (
        <>
            <Box sx={{ width: "100%", position: "fixed", top: "8vh", display: "flex", backgroundColor: "rgb(255,255,255, 0.9)", padding: "24px" }}>
                <Breadcrumb />
            </Box>
            <Toolbar />
        </>
    )
}

function ProcessContainer() {
    const processoLocalStrorage = localStorage.getItem("CHOOSEDPROCESS")
    const processoEscolhido = JSON.parse(processoLocalStrorage != null ? processoLocalStrorage : "");
    const processoInfo = listaProcessos.find(p => p.id == processoEscolhido.id && processoEscolhido.tipo == p.tipo)

    //separar as informações para mecher melhor nos componentes de cada uma das 3 partes
    const [informacoesGerais, informacoesComerciais, contextualizacao] = getAttributes(processoInfo)

    return (
        <Grid container sx={{ width: "100%", height: "auto", marginTop: "2.5vh", boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)", borderRadius: "10px" }}>
            <Grid item xs={0.2}>
                <Box sx={{ borderRadius: "10px 0 0 10px", backgroundColor: getColorStatus(processoInfo?.status), width: "100%", height: "100%" }}></Box>
            </Grid>
            <Grid item xs={11.8} sx={{ backgroundColor: "white", borderRadius: "0 10px 10px 0", padding: "25px"}}>
                <Grid container sx={{marginBottom: "15px" }}>
                    <Grid item xs={10}>
                        <Typography variant='h4'>
                            {processoInfo?.titulo}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Flag cor={getColorType(processoInfo?.tipo)} />
                    </Grid>
                </Grid>
                <Divider />
                {informacoesGerais}
            </Grid>
        </Grid>
    )
}

function Flag(props: { cor: string }) {

    //fazer uma div para ser a bandeirinha bunitinha
    return (
        <Box sx={{ display: "flex", justifyContent: "center", height: '100%' }}>
            <Box sx={{width: "40px", heigth: "180px", backgroundColor: props.cor, display: "flex", alignItems: "end", position: "relative", top: "-25px"}}>
                <Box sx={{
                    width: 0,
                    height: 0,
                    borderLeft: "20px solid transparent",
                    borderRight: "20px solid transparent",
                    borderBottom: "22px solid white"
                }} />
            </Box>
        </Box>
    )
}

function getAttributes(processo: any) {
    const infoGeral = getInfoGeral(processo)
    // const infoComercial = getInfoComercial(processo)
    // const contextualizacao = getContextualizacao(processo)

    return [infoGeral, 1, 2]
}

function getInfoGeral(processo: any) {
    const atributos = {
        numero: processo.id,
        status: processo.status,
        solicitante: processo.solicitante,
        departamento: processo.departamento,
        gerenteResponsavel: processo.gerenteResponsavel,
        frequenciaDeUso: processo.frequenciaUso,
        tamanho: processo.tamanho,
        sessaoTIResponsavel: processo.secaoTIResponsavel,
        BUSolicitante: processo.BUSolicitante,
        prazoElaboracao: processo.prazoElaboracao,
        codigoPPM: processo.codigoPPM,
        //dados que podem ser maiores que só uma linha
        centrosDeCusto: processo.centrosDeCusto,
        beneficioQualitativo: processo.beneficioQualitativo,
        BUsBeneficiadas: processo.BUsBeneficiadas,
        periodoDeExecucao: processo.periodoExecucao,
        responsaveis: processo.responsaveis
    }


    //retornar componente das infromações gerais
    return (
        <Box>
            aaa
        </Box>
    )
}

function getInfoComercial(processo: any) {

}

function getContextualizacao(processo: any) {

}

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