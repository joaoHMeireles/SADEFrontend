import { useState, useEffect } from 'react';
import { TipoComponenteProcesso, StatusComponenteProcesso, TamanhoComponenteProcesso, sessaoTI } from '../../DefinitionFiles/enuns';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Toolbar from '../../Components/Toolbar/Toolbar';
import {
    Badge, Box, Container, Divider, Grid, List, ListItem, ListItemIcon, Table, TableBody, TableHead, TableRow, Typography
} from '@mui/material';
import ChatBubbleRounded from '@mui/icons-material/ChatBubbleRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { BoxContainer, BoxConteudo, BotaoTerciario } from "../App.styles"
import {
    BotaoIcone, BotaoPrimarioHeader, BotaoSecundarioHeader, BotaoTerciarioHeader, BoxAviso, BoxBandeira, BoxBotoes, 
    BoxCentroCusto, BoxContainerBandeira, BoxContainerCentroCusto, BoxContainerTabela, BoxCorStatus, BoxHeader, 
    BoxTabela, BoxTabelaCusto, BoxTitulosCentroCusto, BoxTrianguloBandeira, CircleIconPonto, GridContainer, 
    GridContainerHeader, GridInformacao, GridItemFooter, GridPequenosAtributos, GridTitulo, TableCellEstilzada, 
    TableContainerEstilizado, TableRowEstilizada, TypographyTexto, TypographyTitulo, TypographyTituloAtributo
} from './TelaComponenteProcesso.styles';


const listaProcessos = [
    {
        id: 1,
        titulo: "primeiro titulo ae",
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "um fia da puta ae",
        status: StatusComponenteProcesso.Backlog,
        tipo: TipoComponenteProcesso.Demanda,
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
        tamanho: TamanhoComponenteProcesso.Grande,
        solicitante: "esse aqui é legal",
        status: StatusComponenteProcesso.Assesment,
        tipo: TipoComponenteProcesso.Demanda,
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
        secaoTIResponsavel: sessaoTI.SEG,
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
        tamanho: TamanhoComponenteProcesso.MuitoGrande,
        solicitante: "Jefferson Rodrigues",
        status: StatusComponenteProcesso.Canceled,
        tipo: TipoComponenteProcesso.Proposta,
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
        secaoTIResponsavel: sessaoTI.SVE,
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
        tamanho: TamanhoComponenteProcesso.Medio,
        solicitante: "um fia da puta ae caraiudo",
        status: StatusComponenteProcesso.BusinessCase,
        tipo: TipoComponenteProcesso.Proposta,
        score: 12.5,
        departamento: "o da diretoria fodão grandoes",
        gerenteResponsavel: "romero britto",
        frequenciaUso: 540,
        aprovadoGerente: true,
        beneficioQualitativo: "ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word beneficios",
        centrosDeCusto: [
            9678
        ],
        secaoTIResponsavel: sessaoTI.SVE,
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
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "um fia da puta ae",
        status: StatusComponenteProcesso.Assesment,
        tipo: TipoComponenteProcesso.Demanda,
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
        secaoTIResponsavel: sessaoTI.SVE,
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
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "um gênio",
        status: StatusComponenteProcesso.Backlog,
        tipo: TipoComponenteProcesso.Proposta,
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
        secaoTIResponsavel: sessaoTI.SIM,
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
export default function TelaComponenteProcesso(props: any) {
    const processLocalStorage = localStorage.getItem("CHOOSEDPROCESS")
    const processoEscolhido = JSON.parse(processLocalStorage != null ? processLocalStorage : "");
    const informacaoProcesso = listaProcessos.find(p => p.id == processoEscolhido.id && processoEscolhido.tipo == p.tipo)

    return (
        <>
            <Header informacaoProcesso={informacaoProcesso} />
            <BoxConteudo >
                <BoxContainer>
                    <Container>
                        <ContainerProcesso informacaoProcesso={informacaoProcesso} />
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
function Header(props: { informacaoProcesso: any }) {
    const [tempoExcedido, setTempoExcedido] = useState(false)
    let listaBotoes = ["chat"]
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
        if (!tamanho) {
            if (tipoPessoa == "analista" || tipoPessoa == "gerenteTI") {
                listaBotoes.push("reprovar", "devolver", "aprovar")
            }
        } else {
            listaBotoes.push("historico")
            if (tipoPessoa == "gerenteNegocio") {
                if (!aprovadoGerente) {
                    listaBotoes.push("reprovar", "aprovar")
                }
            } else if (tipoPessoa == "analista" || tipoPessoa == "gerenteTI") {
                if (aprovadoGerente) {
                    if (!linkJira) {
                        listaBotoes.push("adicionarInfo")
                    } else {
                        if (prazoElaboracao < new Date()) {
                            listaBotoes.push("criarProposta!")
                        } else {
                            listaBotoes.push("criarProposta")
                        }
                    }
                }
            }
        }
    } else {
        listaBotoes.push("historico")
        if (!estaEmWorkflow) {
            if (tipoPessoa == "analista" || tipoPessoa == "gerenteTI") {
                listaBotoes.push("iniciarworkflow", "verDemanda", "criarPauta")
            } else if (tipoPessoa == "gerenteNegocio") {
                listaBotoes.push("verDemanda")
            }
        } else {
            if (aprovadoWorkflow) {
                listaBotoes.push("verDemanda")
                if (tipoPessoa == "analista" || tipoPessoa == "gerenteTI") {
                    listaBotoes.push("criarPauta")
                }
            } else {
                if (workflowDeadline < new Date()) {
                    if (tipoPessoa == "gerenteTI" || tipoPessoa == "gerenteNegocio") {
                        listaBotoes.push("workflow!")
                    }
                } else {
                    if (tipoPessoa == "gerenteTI" || tipoPessoa == "gerenteNegocio") {
                        listaBotoes.push("workflow")
                    }
                }
                listaBotoes.push("verDemanda")
            }
        }
    }
    useEffect(() => {
        if (prazoElaboracao < new Date() && prazoElaboracao && tipoProcesso == "Demanda") {
            setTempoExcedido(true)
        }
    }, [])

    console.log(listaBotoes);

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

function ButtonsHeader(props: { listaBotoes: string[] }) {
    let contagemBotoesAcoes = 0
    let botoes = []

    for (let i = props.listaBotoes.length - 1; i >= 0; i--) {
        const botao = props.listaBotoes[i]
        const nomeBotao = getTituloBotao(botao)

        if (botao == "chat" || botao == "historico" || botao.includes("workflow")) {
            const iconeBotao = getBotao(botao)

            if (botao.includes("!")) {
                botoes.push(
                    <BotaoIcone>
                        <Badge badgeContent={<ErrorRoundedIcon fontSize='small' sx={{ color: "#FAD271" }} />}>
                            {iconeBotao}
                        </Badge>
                    </BotaoIcone>
                )
                continue
            }

            botoes.push(
                <BotaoIcone>
                    {iconeBotao}
                </BotaoIcone>
            )
        } else {
            contagemBotoesAcoes++
            switch (contagemBotoesAcoes) {
                case 1:
                    botoes.push(
                        <BotaoPrimarioHeader variant='contained' >
                            {nomeBotao}
                        </BotaoPrimarioHeader>
                    )
                    break
                case 2:
                    botoes.push(
                        <BotaoSecundarioHeader variant='outlined'>
                            {nomeBotao}
                        </BotaoSecundarioHeader>
                    )
                    break
                case 3:
                    botoes.push(
                        <BotaoTerciarioHeader variant='outlined'>
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
    const valores = props.valorAtributo.map((valor) => {
        if (typeof valor === typeof new Date()) {
            contadorPeriodoExecucao++
            const valorData: Date = valor
            return (
                <ListItem>
                    <ListItemIcon>
                        <CircleIconPonto />
                    </ListItemIcon>
                    {contadorPeriodoExecucao == 1 ? "Início: " : "Fim: "}
                    {valorData.toLocaleDateString()}
                </ListItem>
            )
        }

        return (
            <ListItem>
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

    for (let atributo in atributos) {
        let valor = (atributos as any)[atributo];

        if (!valor) {
            continue
        }

        if (atributo == "motivoDevolucao") {
            contextos.push(
                <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                    <TypographyTexto variant='body1' >
                        <b>{getNomeAtributo(atributo)}</b> {valor} <b> - {props.processo.pessoaDevolucao}</b>
                    </TypographyTexto>
                </Grid>
            )
            continue
        }

        contextos.push(
            <Grid item xs={12} sx={{ marginBottom: "20px" }}>
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