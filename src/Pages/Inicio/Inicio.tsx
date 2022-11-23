import { useState } from 'react'
import { TipoColecaoComponenteProcesso, TipoComponenteProcesso, StatusComponenteProcesso, TamanhoComponenteProcesso, sessaoTI } from '../../DefinitionFiles/enuns'
import './Inicio.scss'
import Searchbar from '../../Components/Searchbar/Searchbar'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import ComponenteProcesso from '../../Components/ComponenteProcesso/ComponenteProcesso'
import ColecaoComponenteProcesso from '../../Components/ComponenteProcesso/ComponenteColecaoProcesso/ComponenteColecaoProcesso'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxConteudo, BoxContainer } from '../App.styles'

const listaComponents: {}[] = [
    {
        id: 1,
        titulo: "primeiro titulo ae",
        // tamanho: TamanhoComponenteProcesso.Pequeno,
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
        id: 8,
        dataReuniao: new Date(),
        comissao: "Uma comissão doida lá",
        tipo: TipoColecaoComponenteProcesso.ATA,
        ataPublicada: "ata8Publicada.pdf",
        ataNaoPublicada: "ata8NaoPublicada.pdf",
        // numeroAtaDG: 12435,
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
    },
    {
        id: 9,
        titulo: "eu quero janta de 3 s",
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "um gênio",
        status: StatusComponenteProcesso.ToDo,
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
    },
]

/**
 * Componente da página de início
 * 
 * @param props 
 * @returns 
 */
export default function Inicio(props: { filtrar: boolean, setFiltrar: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [grid, setGrid] = useState(true)
    const matches = useMediaQuery('(max-width:1100px)');
    localStorage.setItem("PAGINATUAL", "home")

    const componentesProcessos = listaComponents.map((processo: any) => {
        let componente
        if (!processo.propostas) {
            componente = <ComponenteProcesso atributosProcesso={processo} grid={grid} />
        } else {
            componente = <ColecaoComponenteProcesso atributosColecaoProcesso={processo} grid={grid} />
        }

        return (
            <Grid key={processo.id} item xs={(grid ? (!matches? 4 : 6) : 12)}>
                <BoxContainer >
                    {componente}
                </BoxContainer>
            </Grid>
        )
    })

    return (
        <BoxConteudo >
            <Breadcrumb />
            <Searchbar setFiltrar={props.setFiltrar} filtrar={props.filtrar} grid={grid} setGrid={setGrid} />
            <BoxContainer>
                <Box sx={{ width: "90%" }}>
                    <Grid container spacing={2}>
                        {componentesProcessos}
                    </Grid>
                </Box>
            </BoxContainer>
        </BoxConteudo>
    )
}