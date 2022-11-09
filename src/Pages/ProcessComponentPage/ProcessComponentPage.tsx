import { processComponent, processComponentSize, processComponentStatus, ITsession } from '../../DefinitionFiles/enuns';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Toolbar from '../../Components/Toolbar/Toolbar';
import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemIcon, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import { ContentBox, ContainerBox } from '../App.styles';
import {
    AttributeTitleTypography, ContainerTableBox, CostCentersBox, CostCenterContainerBox, CostTableBox, DotCircleIcon,
    FlagBox, FlagContainerBox, FlagTriangleBox, FooterItemGrid, HeaderBox, HeaderContainerGrid, MainContainerGrid,
    MainInfoGrid, SmallAttributesGrid, StatusColorBox, StyledTableCell, StyledTableContainer, StyledTableRow, TableBox,
    TextTypography, TitleCostCentersBox, TitleTypography, TitleGrid,
} from './ProcessComponentPage.styles';

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
        aprovadoGerente: true,
        beneficioQualitativo: "textin ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything dizendo como é bom",
        centrosDeCusto: [
            1234,
            5678
        ],
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "BRL",
                valor: 10000.00,
                memoriaCalculo: "é que é bem bom mesmo vai dar 10000000 de retorno fodão bem massa mano"
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa",
                moeda: "USD",
                valor: 1500.00,
                memoriaCalculo: "é que é bem bom mesmo vai dar 10000000 de retorno fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra"
            },
        ],
        beneficiosPotenciais: [
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00,
                memoriaCalculo: "é que é bem bom em massa mano ty have suo fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra"
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
        aprovadoGerente: false,
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
                valor: 10000.00,
                memoriaCalculo: "é que é bem bom em massa mano ty have suffereetorno fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra"
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa",
                moeda: "USD",
                valor: 1500.00,
                memoriaCalculo: "é que é bem bom em massa mano ty have  é bem bom mesmo vai dar 10000000 de retorno fodãected humour, or  ra"
            },
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00,
                memoriaCalculo: "é que é bem bom em massa mano ty have suffered alteratvai dar 10000000 de retorno fodão bem massa mano ty have suffered altnjected humour, or  ra"
            }
        ],
        beneficiosPotenciais: [
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00,
                memoriaCalculo: "sa mano ty have suffered alteration in some form, by injected humvai dar 10000000 de retorno fod"
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
                moeda: "USD",
                valor: 1500.00,
                memoriaCalculo: "bom em massa mano ty have suffered alteration in some form, by injected humour bem massa mano ty have suffered alteration in some form, by injected humour, or"
            },
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        pessoaDevolucao: "arnaldo pinto",
        motivoDevolucao: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing h",
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
        aprovadoGerente: true,
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
        workflowIniciado: false,
        aprovadoWorkflow: false,
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "BRL",
                valor: 10000.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered alteration in some "
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
                valor: 780.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retorno fodsuffered alteration in som"
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
                moeda: "USD",
                valor: 1500.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered alteration in some foda bem bom mesmo meudeus"
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
        aprovadoGerente: true,
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
        workflowIniciado: true,
        prazoWorkflow: new Date(),
        aprovadoWorkflow: true,
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "BRL",
                valor: 10000.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered esteja errado refaz a conta ae"
            },
            {
                descricao: "uma descrizaozninha bonitinha",
                moeda: "BRL",
                valor: 1900.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmo vai dar 9999999 de retorno fodsuffered alteration in some foda bem bom mesmo meudeus, 9 * 1111111"
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
                valor: 1500.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa"
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
        aprovadoGerente: true,
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
                valor: 10000.00,
                memoriaCalculo: "have or  ra é que é bem bom mesmo vai dar 99199111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa"
            },
        ],
        beneficiosPotenciais: [
            {
                descricao: "bem datalhadadinha",
                moeda: "USD",
                valor: 780.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmaaa"
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa ahave or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
                moeda: "USD",
                valor: 1500.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa"
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
        aprovadoGerente: true,
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
        workflowIniciado: true,
        prazoWorkflow: new Date(),
        aprovadoWorkflow: false,
        beneficiosReais: [
            {
                descricao: "description",
                moeda: "USD",
                valor: 100.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmaaa meudeus do céu aceita essa demanda por favorzinho meus queridos superiores"
            },
            {
                descricao: "uma descrizaozninha",
                moeda: "BRL",
                valor: 19000.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmaaa meudeus do céu aceita essa demanda por favorzinho meus queridos superiores"
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
                valor: 1500.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bemnda por favorzinho meus queridos su"
            },
            {
                descricao: "descricaodaCoisa",
                moeda: "BRL",
                valor: 10.00,
                memoriaCalculo: "sa mano ty have or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa"
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
    const processLocalStorage = localStorage.getItem("CHOOSEDPROCESS")
    const choosedProcess = JSON.parse(processLocalStorage != null ? processLocalStorage : "");
    const processInfo = listaProcessos.find(p => p.id == choosedProcess.id && choosedProcess.tipo == p.tipo)

    return (
        <>
            <PageHeader processInfo={processInfo} />
            <ContentBox >
                <ContainerBox>
                    <Container>
                        <ProcessContainer processInfo={processInfo} />
                    </Container>
                </ContainerBox>
            </ContentBox>
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
function PageHeader(props: { processInfo: any }) {
    const process = props.processInfo;
    const personType = localStorage.getItem("TIPOUSUARIO")
    const type = process.tipo
    const size = process.tamanho
    const aproovedByManager = process.aprovadoGerente
    const linkJira = process.linkJira
    const elaborationDeadline = process.prazoElaboracao
    const isWorkflow = process.workflowIniciado
    const approvedWorkflow = process.aprovadoWorkflow
    const workflowDeadline = process.prazoWorkflow
    let buttonsList = ["chat"]

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

    if (type == "Demanda") {
        if (!size) {
            if (personType == "analista" || personType == "gerenteTI") {
                buttonsList.push("reprovar", "devolver", "aprovar")
            }
        } else {
            buttonsList.push("historico")
            if (personType == "gerenteNegocio") {
                if (!aproovedByManager) {
                    buttonsList.push("reprovar", "aprovar")
                }
            } else if (personType == "analista" || personType == "gerenteTI") {
                if (aproovedByManager) {
                    if (!linkJira) {
                        buttonsList.push("adicionarInfo")
                    } else {
                        if (elaborationDeadline < new Date()) {
                            buttonsList.push("criarProposta!")
                        } else {
                            buttonsList.push("criarProposta")
                        }
                    }
                }
            }
        }
    } else {
        buttonsList.push("historico")
        if (!isWorkflow) {
            if (personType == "analista" || personType == "gerenteTI") {
                buttonsList.push("iniciarWorkflow", "verDemanda", "criarPauta")
            } else if (personType == "gerenteNegocio") {
                buttonsList.push("verDemanda")
            }
        } else {
            if (approvedWorkflow) {
                buttonsList.push("verDemanda")
                if (personType == "analista" || personType == "gerenteTI") {
                    buttonsList.push("criarPauta")
                }
            } else {
                if (workflowDeadline < new Date()) {
                    if (personType == "gerenteTI" || personType == "gerenteNegocio") {
                        buttonsList.push("workflow!")
                    }
                } else {
                    if (personType == "gerenteTI" || personType == "gerenteNegocio") {
                        buttonsList.push("workflow")
                    }
                }
                buttonsList.push("verDemanda")
            }
        }
    }

    return (
        <>
            <HeaderBox>
                <Breadcrumb />
                <ButtonsHeader buttonsList={buttonsList} />
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
function ProcessContainer(props: { processInfo: any }) {
    const processInfo = props.processInfo

    return (
        <MainContainerGrid container>
            <Grid item xs={0.2}>
                <StatusColorBox sx={{ backgroundColor: getColorStatus(processInfo?.status) }} ></StatusColorBox>
            </Grid>
            <MainInfoGrid item xs={11.8}>
                <HeaderContainerGrid container>
                    <TitleGrid item xs={10} >
                        <Typography variant='h4'>
                            {processInfo?.titulo}
                        </Typography>
                    </TitleGrid>
                    <Grid item xs={2}>
                        <Flag cor={getColorType(processInfo?.tipo)} />
                    </Grid>
                </HeaderContainerGrid>
                <Divider />
                <InfoGeral processo={processInfo} />
                <Divider />
                <InfoComercial processo={processInfo} />
                <Divider />
                <Contextualizacao processo={processInfo} />
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

    const realBenefits = atributos.realBenefits.map((benefit: { descricao: string, moeda: string, valor: string, memoriaCalculo: string }, index: number) => {
        return (
            <StyledTableRow key={index}>
                <StyledTableCell align='center' >{benefit.descricao}</StyledTableCell>
                <StyledTableCell align='center'>{benefit.moeda}</StyledTableCell>
                <StyledTableCell align='center'>R$ {benefit.valor}</StyledTableCell>
                <StyledTableCell align='center'>{benefit.memoriaCalculo}</StyledTableCell>
            </StyledTableRow>
        )
    })

    const potencialBenefits = atributos.potencialBenefits.map((benefit: { descricao: string, moeda: string, valor: string, memoriaCalculo: string }, index: number) => {
        return (
            <StyledTableRow key={index}>
                <StyledTableCell align='center' >{benefit.descricao}</StyledTableCell>
                <StyledTableCell align='center'>{benefit.moeda}</StyledTableCell>
                <StyledTableCell align='center'>R$ {benefit.valor}</StyledTableCell>
                <StyledTableCell align='center'>{benefit.memoriaCalculo}</StyledTableCell>
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
                    <Typography key={centerIndex} variant="body1" sx={{ color: "#595959" }}>
                        {centroDeCusto.centroCusto} - {porcentagem}%
                    </Typography>
                )
            })

            return (
                <CostTableBox key={index} >
                    <ContainerTableBox>
                        <StyledTableContainer sx={{ width: "auto" }}>
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
                        </StyledTableContainer>
                    </ContainerTableBox>
                    <CostCenterContainerBox>
                        <TitleCostCentersBox>
                            Centros de Custo
                        </TitleCostCentersBox>
                        <CostCentersBox>
                            {tableCCs}
                        </CostCentersBox>
                    </CostCenterContainerBox>
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

function Contextualizacao(props: { processo: any }) {
    const atributos = {
        objetivo: props.processo.objetivo,
        situacaoAtual: props.processo.situacaoAtual,
        escopo: props.processo.escopo,
        motivoDevolucao: props.processo.motivoDevolucao
    }
    const link = props.processo.linkJira
    let contexts = []

    for (let atribute in atributos) {
        let value = (atributos as any)[atribute];

        if (!value) {
            continue
        }

        if (atribute == "motivoDevolucao") {
            contexts.push(
                <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                    <TextTypography variant='body1' >
                        <b>{getNomeAtributo(atribute)}</b> {value} <b> - {props.processo.pessoaDevolucao}</b>
                    </TextTypography>
                </Grid>
            )
            continue
        }

        contexts.push(
            <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                <TextTypography variant='body1' >
                    <b>{getNomeAtributo(atribute)}</b> {value}
                </TextTypography>
            </Grid>
        )
    }

    return (
        <Grid container sx={{ marginY: "20px" }}>
            <TitleTypography variant='h5'>
                Contextualização
            </TitleTypography>
            {contexts}
            <Footer link={link} />
        </Grid>
    )
}

function ButtonsHeader(props: { buttonsList: string[] }) {

    console.log(props.buttonsList);


    return (
       <>
            
       </>
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

function StyledBenefitTable(props: { valuesList: [], title: string }) {

    return (
        <TableBox sx={{ marginBottom: "30px" }}>
            <TitleTypography variant='subtitle1'>
                {props.title}
            </TitleTypography>
            <StyledTableContainer sx={{ width: "40vw" }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>Descrição</StyledTableCell>
                            <StyledTableCell align='center'>Moeda</StyledTableCell>
                            <StyledTableCell align='center'>Valor</StyledTableCell>
                            <StyledTableCell align='center'>Memória de cálculo</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.valuesList}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </TableBox>
    )
}

function Footer(props: { link: string }) {

    return (
        <Grid container>
            <Grid item xs={8} />
            <FooterItemGrid item xs={3.5} >
                {props.link ?
                    <Link to={props.link}>
                        Ver projeto Jira
                    </Link>
                    :
                    <div>

                    </div>
                }
                <Button variant='outlined' size='large' sx={{ color: '#595959', borderColor: "#59595980", '&:hover': { transition: 'ease-in-out', transitionDuration: "1s", backgroundColor: "#59595930", border: "1px solid #59595980" } }}>
                    Ver anexos
                </Button>
            </FooterItemGrid>
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

