import { useState } from 'react'
import { TipoColecaoComponenteProcesso, TipoComponenteProcesso, StatusComponenteProcesso, TamanhoComponenteProcesso, sessaoTI } from '../../constants/enuns'
import './Inicio.scss'
import Searchbar from '../../Components/Searchbar/Searchbar'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { BoxConteudo} from '../App.styles'
import CardsProcesso from '../../Components/CardsProcesso/CardsProcesso'

const listaComponents: {}[] = [
    {
        id: 1,
        titulo: "Primeira Demanda",
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "Carlos Drumond de Andrade",
        status: StatusComponenteProcesso.Backlog,
        tipo: TipoComponenteProcesso.Demanda,
        score: 12.5,
        departamento: "Vendas",
        gerenteResponsavel: "Miguel Gomez Lima",
        frequenciaUso: 200,
        aprovadoGerente: true,
        beneficiosQualitativos: [
            "Textin ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything dizendo como é bom randomised words which don't look even slightly believable. If you are going to u",
            "Textin ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightlysure there isn't anything dizendo como é bom",
        ],
        centrosDeCusto: [
            1234,
            5678
        ],
        beneficiosReais: [
            {
                descricao: "É que é bem bom mesmo vai dar 10000000 reais de  retorno bem massa mano",
                moeda: "BRL",
                valor: 10000.00
            },
            {
                descricao: "Descricaozona gigantassa é que é bem bom mesmo vai dar 10000000 de retorno fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra pqp muita coisa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        beneficiosPotenciais: [
            {
                descricao: "Bem datalhadadinha é que é bem bom em massa mano ty have bem massa mano ty have suffered alteration in some form, by injected",
                moeda: "USD",
                valor: 780.00
            }
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "barulho que a máquina faz.mp4",
                arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD"
            },
            {
                nome: "Foto máquina após o uso.png",
                arquivo: "SADH0D048RB734BpdHef08b08b08V438FVBWOF"
            }
        ]
    },
    {
        id: 2,
        dataReuniao: new Date(),
        comissao: "Comissão de Vendas e Desenvolvimento de Produtos",
        tipo: TipoColecaoComponenteProcesso.Pauta,
        propostas: [
            {
                id: 7,
                titulo: "Gastos desnecessários no processo de preparação de mercadorias",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "Leandro Polanski",
                status: StatusComponenteProcesso.Assesment,
                tipo: TipoComponenteProcesso.Demanda,
                score: 31,
                departamento: "Produção",
                gerenteResponsavel: "Marcelo Rodrigues de Bortolli",
                frequenciaUso: 160,
                aprovadoGerente: true,
                beneficiosQualitativos: [
                    "vai dar isso isso isso e isso de beneficios ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word",
                ],
                centrosDeCusto: [
                    9425,
                    9678
                ],
                secaoTIResponsavel: sessaoTI.SVE,
                BUSolicitante: "Motores",
                BUsBeneficiadas: [
                    "Digital",
                    "Motores"
                ],
                prazoElaboracao: new Date(),
                codigoPPM: 67237,
                linkJira: "https://jirazadaDoCara",
                beneficiosReais: [
                    {
                        descricao: "have or  ra é que é bem bom mesmo vai dar 99199111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
                        moeda: "BRL",
                        valor: 10000.00
                    },
                ],
                beneficiosPotenciais: [
                    {
                        descricao: "bem datalhadadinho esse benefício para aumentar o score da demanda",
                        moeda: "USD",
                        valor: 780.00
                    },
                    {
                        descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa ahave or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
                        moeda: "USD",
                        valor: 1500.00
                    },
                ],
                objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                anexos: [
                    {
                        nome: "configuracaoMaquina(2).xml",
                        arquivo: "AB8BBisvbVYEFDIESOABF78yfgG69SDfVFV"
                    }
                ]
            },
            {
                id: 9,
                titulo: "Impecílios da equipe de limpeza no setor de usinagem",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "Felícia Gonçalves",
                status: StatusComponenteProcesso.ToDo,
                tipo: TipoComponenteProcesso.Proposta,
                score: 100,
                departamento: "Limpeza",
                gerenteResponsavel: "Carlos Salles Morales",
                frequenciaUso: 98,
                aprovadoGerente: true,
                beneficiosQualitativos: [
                    "b e n e f i c i o There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarras",
                ],
                centrosDeCusto: [
                    9678,
                    9674,
                    1415
                ],
                secaoTIResponsavel: sessaoTI.SIM,
                BUSolicitante: "Infraestrutura",
                BUsBeneficiadas: [
                    "Infraestrutura"
                ],
                prazoElaboracao: new Date(),
                codigoPPM: 3241,
                linkJira: "https://jirassssssssCity",
                workflowIniciado: true,
                prazoWorkflow: new Date(),
                aprovadoWorkflow: false,
                beneficiosReais: [
                    {
                        descricao: "sa mano ty have or  ra é que é bem bom mesmaaa meudeus do céu aceita essa demanda por favorzinho meus queridos superiores",
                        moeda: "USD",
                        valor: 100.00
                    },
                    {
                        descricao: "sa mano ty have or  ra é que é bem bom mesmaaa meudeus do céu aceita essa demanda por favorzinho meus queridos superiores",
                        moeda: "BRL",
                        valor: 19000.00
                    },
                ],
                periodoExecucao: [
                    new Date(),
                    new Date()
                ],
                responsaveis: [
                    "Bruno Henrique Carvalho",
                    "Thamires Meireles"
                ],
                beneficiosPotenciais: [
                    {
                        descricao: "descricao",
                        moeda: "USD",
                        valor: 1500.00
                    },
                    {
                        descricao: "descricao da coisa",
                        moeda: "BRL",
                        valor: 10.00
                    }
                ],
                payback: 945.37,
                tabelasCusto: [
                    {
                        titulo: "Reforma do espaço",
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
                                recurso: "Operários",
                                esforco: 350,
                                valor: 15
                            },
                            {
                                recurso: "Materiais",
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
                        nome: "declaracaoRosana.docs",
                        arquivo: "DSF9A8D7FGABOBFDIuibduiavbipashsad98tag"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        titulo: "Titulozao pra ver como fica muito grande a responsividade do sistema todao com esses titulozao",
        tamanho: TamanhoComponenteProcesso.Grande,
        solicitante: "Marcos Fernandez Braga",
        status: StatusComponenteProcesso.Assesment,
        tipo: TipoComponenteProcesso.Demanda,
        score: 54.7,
        departamento: "Comércio",
        gerenteResponsavel: "Maria Gonçalves de Souza",
        frequenciaUso: 329,
        aprovadoGerente: false,
        beneficiosQualitativos: [
            "É bem bonzin bão memo bom ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything",
            "Não in some form, by injected bem bonzin bão memo bom ailable, but é lteratio the majority have suffered a",
        ],
        centrosDeCusto: [
            3864,
            9863
        ],
        secaoTIResponsavel: sessaoTI.SEG,
        BUSolicitante: "Primeira",
        BUsBeneficiadas: [
            "Motores",
            "DIgital"
        ],
        beneficiosReais: [
            {
                descricao: "Description é que é bem bom em massa mano ty have suffereetorno fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra",
                moeda: "BRL",
                valor: 10000.00
            },
            {
                descricao: "Descri é que é bem bom em massa mano ty have  é bem bom mesmo vai dar 10000000 de retorno fodãected humour, caozona caraio gigantassa pqp muita coisa",
                moeda: "USD",
                valor: 1500.00
            },
            {
                descricao: "Manualmente ty have suffered alteratvai dar 10000000 de retorno fodão bem massa mano ty have suffered altnjected humour, or  ra",
                moeda: "USD",
                valor: 780.00
            }
        ],
        beneficiosPotenciais: [
            {
                descricao: "Sabendo mano ty have suffered alteration in some form, by injected humvai dar 10000000 de retorno fod",
                moeda: "USD",
                valor: 780.00
            },
            {
                descricao: "Descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        pessoaDevolucao: "Alexandre de Moraes",
        motivoDevolucao: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing h",
        anexos: [
            {
                nome: "barulho que a máquina faz(1).mp4",
                arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD"
            },
            {
                nome: "Foto máquina após o uso(1).png",
                arquivo: "SADH0D048RB734BpdHef08b08b08V438FVBWOF"
            },
            {
                nome: "configuracaoMaquina.xml",
                arquivo: "AB8BBisvbVYEFDIESOABF78yfgG69SDfVFV"
            }
        ]
    },
    {
        id: 4,
        titulo: "Mudança no processo de produção de peças, melhora de segurança",
        tamanho: TamanhoComponenteProcesso.MuitoGrande,
        solicitante: "Jefferson Rodrigues",
        status: StatusComponenteProcesso.Canceled,
        tipo: TipoComponenteProcesso.Proposta,
        score: 130.82,
        departamento: "Maquinário",
        gerenteResponsavel: "Marcelo Siqueira Peixoto",
        frequenciaUso: 160,
        aprovadoGerente: true,
        beneficiosQualitativos: [
            "Vai dar isso isso of Lorem Ipsum available, but the majoritailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingy have suffered alteration in some form, by injected humour, or  randomised word benefi isso e isso de beneficios",
        ],
        centrosDeCusto: [
            9425,
            9678
        ],
        secaoTIResponsavel: sessaoTI.SVE,
        BUSolicitante: "Motores",
        BUsBeneficiadas: [
            "Tintas",
            "Digital"
        ],
        prazoElaboracao: new Date(),
        codigoPPM: 67237,
        linkJira: "https://jirazadaDoCara",
        workflowIniciado: false,
        aprovadoWorkflow: false,
        beneficiosReais: [
            {
                descricao: "Sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered alteration in some ",
                moeda: "BRL",
                valor: 10000.00
            },
        ],
        periodoExecucao: [
            new Date(),
            new Date()
        ],
        responsaveis: [
            "Jorge Vercílio da Silva",
            "Emanuelle Menezes"
        ],
        beneficiosPotenciais: [
            {
                descricao: "Bem detalhadinha sa mano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retorno fodsuffered alteration in som",
                moeda: "USD",
                valor: 780.00
            },
            {
                descricao: "Descricaozona caraio gigantassa pqp muita coisa aaaano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retoaa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        payback: 4356.30,
        tabelasCusto: [
            {
                titulo: "Gastos infraestrutura",
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
                        recurso: "Arquiteto de software",
                        esforco: 150,
                        valor: 35
                    },
                    {
                        recurso: "Técnicos qualificados",
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
                nome: "configuracaoMaquina(1).xml",
                arquivo: "AB8BBisvbVYEFDIESOABF78yfgG69SDfVFV"
            }
        ]
    },
    {
        id: 5,
        titulo: "Melhoras da cantina",
        tamanho: TamanhoComponenteProcesso.Medio,
        solicitante: "Cleide Nunes",
        status: StatusComponenteProcesso.BusinessCase,
        tipo: TipoComponenteProcesso.Proposta,
        score: 62,
        departamento: "Diretoria",
        gerenteResponsavel: "Romário Gabriel Fagundes",
        frequenciaUso: 540,
        aprovadoGerente: true,
        beneficiosQualitativos: [
            "Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word beneficios",
        ],
        centrosDeCusto: [
            9678
        ],
        secaoTIResponsavel: sessaoTI.SVE,
        BUSolicitante: "Motores",
        BUsBeneficiadas: [
            "Tintas",
            "Vendas"
        ],
        prazoElaboracao: new Date(),
        codigoPPM: 78569,
        linkJira: "https://jirazadaDoCara/fsdfsaf",
        workflowIniciado: true,
        prazoWorkflow: new Date(),
        aprovadoWorkflow: true,
        beneficiosReais: [
            {
                descricao: "sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered esteja errado refaz a conta ae",
                moeda: "BRL",
                valor: 10000.00
            },
            {
                descricao: "uma descrizaozninha bonitinha a mano ty have or  ra é que é bem bom mesmo vai dar 9999999 de retorno fodsuffere",
                moeda: "BRL",
                valor: 1900.00
            },
        ],
        periodoExecucao: [
            new Date(),
            new Date()
        ],
        responsaveis: [
            "Milena Krischanski",
            "Gabriel Felipe Soares",
            "Carolina Tavarez"
        ],
        beneficiosPotenciais: [
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa sa mano ty have or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        payback: 783.30,
        tabelasCusto: [
            {
                titulo: "Manutenções com a cantina",
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
                        recurso: "Mecânico qualificado",
                        esforco: 150,
                        valor: 35
                    },
                    {
                        recurso: "matéria prima",
                        esforco: 48,
                        valor: 39
                    },
                ]
            },
            {
                titulo: "Infraestrutura da cozinha",
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
                        recurso: "Equipamentos necessários",
                        esforco: 3,
                        valor: 479.99
                    }
                ]
            }
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        escopo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "declaracao da equipe da cozinha.docs",
                arquivo: "DSF9A8D7FGABOBFDIuibduiavbipashsad98tag"
            }
        ]
    },
    {
        id: 6,
        dataReuniao: new Date(),
        comissao: "Comitê de TI",
        tipo: TipoColecaoComponenteProcesso.Pauta,
        propostas: [
            {
                id: 5,
                titulo: "Melhoras da cantina",
                tamanho: TamanhoComponenteProcesso.Medio,
                solicitante: "Cleide Nunes",
                status: StatusComponenteProcesso.BusinessCase,
                tipo: TipoComponenteProcesso.Proposta,
                score: 62,
                departamento: "Diretoria",
                gerenteResponsavel: "Romário Gabriel Fagundes",
                frequenciaUso: 540,
                aprovadoGerente: true,
                beneficiosQualitativos: [
                    "Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word beneficios",
                ],
                centrosDeCusto: [
                    9678
                ],
                secaoTIResponsavel: sessaoTI.SVE,
                BUSolicitante: "Motores",
                BUsBeneficiadas: [
                    "Tintas",
                    "Vendas"
                ],
                prazoElaboracao: new Date(),
                codigoPPM: 78569,
                linkJira: "https://jirazadaDoCara/fsdfsaf",
                workflowIniciado: true,
                prazoWorkflow: new Date(),
                aprovadoWorkflow: true,
                beneficiosReais: [
                    {
                        descricao: "sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered esteja errado refaz a conta ae",
                        moeda: "BRL",
                        valor: 10000.00
                    },
                    {
                        descricao: "uma descrizaozninha bonitinha a mano ty have or  ra é que é bem bom mesmo vai dar 9999999 de retorno fodsuffere",
                        moeda: "BRL",
                        valor: 1900.00
                    },
                ],
                periodoExecucao: [
                    new Date(),
                    new Date()
                ],
                responsaveis: [
                    "Milena Krischanski",
                    "Gabriel Felipe Soares",
                    "Carolina Tavarez"
                ],
                beneficiosPotenciais: [
                    {
                        descricao: "descricaozona caraio gigantassa pqp muita coisa sa mano ty have or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
                        moeda: "USD",
                        valor: 1500.00
                    },
                ],
                payback: 783.30,
                tabelasCusto: [
                    {
                        titulo: "Manutenções com a cantina",
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
                                recurso: "Mecânico qualificado",
                                esforco: 150,
                                valor: 35
                            },
                            {
                                recurso: "matéria prima",
                                esforco: 48,
                                valor: 39
                            },
                        ]
                    },
                    {
                        titulo: "Infraestrutura da cozinha",
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
                                recurso: "Equipamentos necessários",
                                esforco: 3,
                                valor: 479.99
                            }
                        ]
                    }
                ],
                objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                escopo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                anexos: [
                    {
                        nome: "declaracao da equipe da cozinha.docs",
                        arquivo: "DSF9A8D7FGABOBFDIuibduiavbipashsad98tag"
                    }
                ]
            },
            {
                id: 3,
                titulo: "Titulozao pra ver como fica muito grande a responsividade do sistema todao com esses titulozao",
                tamanho: TamanhoComponenteProcesso.Grande,
                solicitante: "Marcos Fernandez Braga",
                status: StatusComponenteProcesso.Assesment,
                tipo: TipoComponenteProcesso.Demanda,
                score: 54.7,
                departamento: "Comércio",
                gerenteResponsavel: "Maria Gonçalves de Souza",
                frequenciaUso: 329,
                aprovadoGerente: false,
                beneficiosQualitativos: [
                    "É bem bonzin bão memo bom ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything",
                    "Não in some form, by injected bem bonzin bão memo bom ailable, but é lteratio the majority have suffered a",
                ],
                centrosDeCusto: [
                    3864,
                    9863
                ],
                secaoTIResponsavel: sessaoTI.SEG,
                BUSolicitante: "Primeira",
                BUsBeneficiadas: [
                    "Motores",
                    "DIgital"
                ],
                beneficiosReais: [
                    {
                        descricao: "Description é que é bem bom em massa mano ty have suffereetorno fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra",
                        moeda: "BRL",
                        valor: 10000.00
                    },
                    {
                        descricao: "Descri é que é bem bom em massa mano ty have  é bem bom mesmo vai dar 10000000 de retorno fodãected humour, caozona caraio gigantassa pqp muita coisa",
                        moeda: "USD",
                        valor: 1500.00
                    },
                    {
                        descricao: "Manualmente ty have suffered alteratvai dar 10000000 de retorno fodão bem massa mano ty have suffered altnjected humour, or  ra",
                        moeda: "USD",
                        valor: 780.00
                    }
                ],
                beneficiosPotenciais: [
                    {
                        descricao: "Sabendo mano ty have suffered alteration in some form, by injected humvai dar 10000000 de retorno fod",
                        moeda: "USD",
                        valor: 780.00
                    },
                    {
                        descricao: "Descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
                        moeda: "USD",
                        valor: 1500.00
                    },
                ],
                objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                pessoaDevolucao: "Alexandre de Moraes",
                motivoDevolucao: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing h",
                anexos: [
                    {
                        nome: "barulho que a máquina faz(1).mp4",
                        arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD"
                    },
                    {
                        nome: "Foto máquina após o uso(1).png",
                        arquivo: "SADH0D048RB734BpdHef08b08b08V438FVBWOF"
                    },
                    {
                        nome: "configuracaoMaquina.xml",
                        arquivo: "AB8BBisvbVYEFDIESOABF78yfgG69SDfVFV"
                    }
                ]
            },
            {
                id: 4,
                titulo: "Mudança no processo de produção de peças, melhora de segurança",
                tamanho: TamanhoComponenteProcesso.MuitoGrande,
                solicitante: "Jefferson Rodrigues",
                status: StatusComponenteProcesso.Canceled,
                tipo: TipoComponenteProcesso.Proposta,
                score: 130.82,
                departamento: "Maquinário",
                gerenteResponsavel: "Marcelo Siqueira Peixoto",
                frequenciaUso: 160,
                aprovadoGerente: true,
                beneficiosQualitativos: [
                    "Vai dar isso isso of Lorem Ipsum available, but the majoritailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingy have suffered alteration in some form, by injected humour, or  randomised word benefi isso e isso de beneficios",
                ],
                centrosDeCusto: [
                    9425,
                    9678
                ],
                secaoTIResponsavel: sessaoTI.SVE,
                BUSolicitante: "Motores",
                BUsBeneficiadas: [
                    "Tintas",
                    "Digital"
                ],
                prazoElaboracao: new Date(),
                codigoPPM: 67237,
                linkJira: "https://jirazadaDoCara",
                workflowIniciado: false,
                aprovadoWorkflow: false,
                beneficiosReais: [
                    {
                        descricao: "Sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered alteration in some ",
                        moeda: "BRL",
                        valor: 10000.00
                    },
                ],
                periodoExecucao: [
                    new Date(),
                    new Date()
                ],
                responsaveis: [
                    "Jorge Vercílio da Silva",
                    "Emanuelle Menezes"
                ],
                beneficiosPotenciais: [
                    {
                        descricao: "Bem detalhadinha sa mano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retorno fodsuffered alteration in som",
                        moeda: "USD",
                        valor: 780.00
                    },
                    {
                        descricao: "Descricaozona caraio gigantassa pqp muita coisa aaaano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retoaa",
                        moeda: "USD",
                        valor: 1500.00
                    },
                ],
                payback: 4356.30,
                tabelasCusto: [
                    {
                        titulo: "Gastos infraestrutura",
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
                                recurso: "Arquiteto de software",
                                esforco: 150,
                                valor: 35
                            },
                            {
                                recurso: "Técnicos qualificados",
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
                        nome: "configuracaoMaquina(1).xml",
                        arquivo: "AB8BBisvbVYEFDIESOABF78yfgG69SDfVFV"
                    }
                ]
            },
            {
                id: 1,
                titulo: "Primeira Demanda",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "Carlos Drumond de Andrade",
                status: StatusComponenteProcesso.Backlog,
                tipo: TipoComponenteProcesso.Demanda,
                score: 12.5,
                departamento: "Vendas",
                gerenteResponsavel: "Miguel Gomez Lima",
                frequenciaUso: 200,
                aprovadoGerente: true,
                beneficiosQualitativos: [
                    "Textin ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything dizendo como é bom randomised words which don't look even slightly believable. If you are going to u",
                    "Textin ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightlysure there isn't anything dizendo como é bom",
                ],
                centrosDeCusto: [
                    1234,
                    5678
                ],
                beneficiosReais: [
                    {
                        descricao: "É que é bem bom mesmo vai dar 10000000 reais de  retorno bem massa mano",
                        moeda: "BRL",
                        valor: 10000.00
                    },
                    {
                        descricao: "Descricaozona gigantassa é que é bem bom mesmo vai dar 10000000 de retorno fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra pqp muita coisa",
                        moeda: "USD",
                        valor: 1500.00
                    },
                ],
                beneficiosPotenciais: [
                    {
                        descricao: "Bem datalhadadinha é que é bem bom em massa mano ty have bem massa mano ty have suffered alteration in some form, by injected",
                        moeda: "USD",
                        valor: 780.00
                    }
                ],
                objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
                anexos: [
                    {
                        nome: "barulho que a máquina faz.mp4",
                        arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD"
                    },
                    {
                        nome: "Foto máquina após o uso.png",
                        arquivo: "SADH0D048RB734BpdHef08b08b08V438FVBWOF"
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        titulo: "Gastos desnecessários no processo de preparação de mercadorias",
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "Leandro Polanski",
        status: StatusComponenteProcesso.Assesment,
        tipo: TipoComponenteProcesso.Demanda,
        score: 31,
        departamento: "Produção",
        gerenteResponsavel: "Marcelo Rodrigues de Bortolli",
        frequenciaUso: 160,
        aprovadoGerente: true,
        beneficiosQualitativos: [
            "vai dar isso isso isso e isso de beneficios ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word",
        ],
        centrosDeCusto: [
            9425,
            9678
        ],
        secaoTIResponsavel: sessaoTI.SVE,
        BUSolicitante: "Motores",
        BUsBeneficiadas: [
            "Digital",
            "Motores"
        ],
        prazoElaboracao: new Date(),
        codigoPPM: 67237,
        linkJira: "https://jirazadaDoCara",
        beneficiosReais: [
            {
                descricao: "have or  ra é que é bem bom mesmo vai dar 99199111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
                moeda: "BRL",
                valor: 10000.00
            },
        ],
        beneficiosPotenciais: [
            {
                descricao: "bem datalhadadinho esse benefício para aumentar o score da demanda",
                moeda: "USD",
                valor: 780.00
            },
            {
                descricao: "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa ahave or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
                moeda: "USD",
                valor: 1500.00
            },
        ],
        objetivo: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        situacaoAtual: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
        anexos: [
            {
                nome: "configuracaoMaquina(2).xml",
                arquivo: "AB8BBisvbVYEFDIESOABF78yfgG69SDfVFV"
            }
        ]
    },
    {
        id: 8,
        dataReuniao: new Date(),
        comissao: "Comissão Processos Gerenciamento de Projetos de fornecimento ",
        tipo: TipoColecaoComponenteProcesso.ATA,
        ataPublicada: "ataPublicada.pdf",
        ataNaoPublicada: "ataNaoPublicada.pdf",
        numeroAtaDG: 12435,
        documentoAprovacao: "DocumentoDeAprovacao.pdf",
        propostas: [
            {
                id: 4,
                titulo: "Mudança no processo de produção de peças, melhora de segurança",
                tamanho: TamanhoComponenteProcesso.MuitoGrande,
                solicitante: "Jefferson Rodrigues",
                status: StatusComponenteProcesso.Canceled,
                tipo: TipoComponenteProcesso.Proposta,
                score: 130.82,
                departamento: "Maquinário",
                gerenteResponsavel: "Marcelo Siqueira Peixoto",
                frequenciaUso: 160,
                aprovadoGerente: true,
                beneficiosQualitativos: [
                    "Vai dar isso isso of Lorem Ipsum available, but the majoritailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingy have suffered alteration in some form, by injected humour, or  randomised word benefi isso e isso de beneficios",
                ],
                centrosDeCusto: [
                    9425,
                    9678
                ],
                secaoTIResponsavel: sessaoTI.SVE,
                BUSolicitante: "Motores",
                BUsBeneficiadas: [
                    "Tintas",
                    "Digital"
                ],
                prazoElaboracao: new Date(),
                codigoPPM: 67237,
                linkJira: "https://jirazadaDoCara",
                workflowIniciado: false,
                aprovadoWorkflow: false,
                beneficiosReais: [
                    {
                        descricao: "Sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered alteration in some ",
                        moeda: "BRL",
                        valor: 10000.00
                    },
                ],
                periodoExecucao: [
                    new Date(),
                    new Date()
                ],
                responsaveis: [
                    "Jorge Vercílio da Silva",
                    "Emanuelle Menezes"
                ],
                beneficiosPotenciais: [
                    {
                        descricao: "Bem detalhadinha sa mano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retorno fodsuffered alteration in som",
                        moeda: "USD",
                        valor: 780.00
                    },
                    {
                        descricao: "Descricaozona caraio gigantassa pqp muita coisa aaaano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retoaa",
                        moeda: "USD",
                        valor: 1500.00
                    },
                ],
                payback: 4356.30,
                tabelasCusto: [
                    {
                        titulo: "Gastos infraestrutura",
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
                                recurso: "Arquiteto de software",
                                esforco: 150,
                                valor: 35
                            },
                            {
                                recurso: "Técnicos qualificados",
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
                        nome: "configuracaoMaquina(1).xml",
                        arquivo: "AB8BBisvbVYEFDIESOABF78yfgG69SDfVFV"
                    }
                ]
            },
            {
                id: 9,
                titulo: "Impecílios da equipe de limpeza no setor de usinagem",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "Felícia Gonçalves",
                status: StatusComponenteProcesso.ToDo,
                tipo: TipoComponenteProcesso.Proposta,
                score: 100,
                departamento: "Limpeza",
                gerenteResponsavel: "Carlos Salles Morales",
                frequenciaUso: 98,
                aprovadoGerente: true,
                beneficiosQualitativos: [
                    "b e n e f i c i o There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarras",
                ],
                centrosDeCusto: [
                    9678,
                    9674,
                    1415
                ],
                secaoTIResponsavel: sessaoTI.SIM,
                BUSolicitante: "Infraestrutura",
                BUsBeneficiadas: [
                    "Infraestrutura"
                ],
                prazoElaboracao: new Date(),
                codigoPPM: 3241,
                linkJira: "https://jirassssssssCity",
                workflowIniciado: true,
                prazoWorkflow: new Date(),
                aprovadoWorkflow: false,
                beneficiosReais: [
                    {
                        descricao: "sa mano ty have or  ra é que é bem bom mesmaaa meudeus do céu aceita essa demanda por favorzinho meus queridos superiores",
                        moeda: "USD",
                        valor: 100.00
                    },
                    {
                        descricao: "sa mano ty have or  ra é que é bem bom mesmaaa meudeus do céu aceita essa demanda por favorzinho meus queridos superiores",
                        moeda: "BRL",
                        valor: 19000.00
                    },
                ],
                periodoExecucao: [
                    new Date(),
                    new Date()
                ],
                responsaveis: [
                    "Bruno Henrique Carvalho",
                    "Thamires Meireles"
                ],
                beneficiosPotenciais: [
                    {
                        descricao: "descricao",
                        moeda: "USD",
                        valor: 1500.00
                    },
                    {
                        descricao: "descricao da coisa",
                        moeda: "BRL",
                        valor: 10.00
                    }
                ],
                payback: 945.37,
                tabelasCusto: [
                    {
                        titulo: "Reforma do espaço",
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
                                recurso: "Operários",
                                esforco: 350,
                                valor: 15
                            },
                            {
                                recurso: "Materiais",
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
                        nome: "declaracaoRosana.docs",
                        arquivo: "DSF9A8D7FGABOBFDIuibduiavbipashsad98tag"
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        titulo: "Impecílios da equipe de limpeza no setor de usinagem",
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "Felícia Gonçalves",
        status: StatusComponenteProcesso.ToDo,
        tipo: TipoComponenteProcesso.Proposta,
        score: 100,
        departamento: "Limpeza",
        gerenteResponsavel: "Carlos Salles Morales",
        frequenciaUso: 98,
        aprovadoGerente: true,
        beneficiosQualitativos: [
            "b e n e f i c i o There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarras",
        ],
        centrosDeCusto: [
            9678,
            9674,
            1415
        ],
        secaoTIResponsavel: sessaoTI.SIM,
        BUSolicitante: "Infraestrutura",
        BUsBeneficiadas: [
            "Infraestrutura"
        ],
        prazoElaboracao: new Date(),
        codigoPPM: 3241,
        linkJira: "https://jirassssssssCity",
        workflowIniciado: true,
        prazoWorkflow: new Date(),
        aprovadoWorkflow: false,
        beneficiosReais: [
            {
                descricao: "sa mano ty have or  ra é que é bem bom mesmaaa meudeus do céu aceita essa demanda por favorzinho meus queridos superiores",
                moeda: "USD",
                valor: 100.00
            },
            {
                descricao: "sa mano ty have or  ra é que é bem bom mesmaaa meudeus do céu aceita essa demanda por favorzinho meus queridos superiores",
                moeda: "BRL",
                valor: 19000.00
            },
        ],
        periodoExecucao: [
            new Date(),
            new Date()
        ],
        responsaveis: [
            "Bruno Henrique Carvalho",
            "Thamires Meireles"
        ],
        beneficiosPotenciais: [
            {
                descricao: "descricao",
                moeda: "USD",
                valor: 1500.00
            },
            {
                descricao: "descricao da coisa",
                moeda: "BRL",
                valor: 10.00
            }
        ],
        payback: 945.37,
        tabelasCusto: [
            {
                titulo: "Reforma do espaço",
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
                        recurso: "Operários",
                        esforco: 350,
                        valor: 15
                    },
                    {
                        recurso: "Materiais",
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
                nome: "declaracaoRosana.docs",
                arquivo: "DSF9A8D7FGABOBFDIuibduiavbipashsad98tag"
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
    localStorage.setItem("PAGINATUAL", "home")

    return (
        <BoxConteudo >
            <Breadcrumb />
            <Searchbar setFiltrar={props.setFiltrar} filtrar={props.filtrar} grid={grid} setGrid={setGrid} />
            <CardsProcesso listaComponents={listaComponents} grid={grid} rascunho={false}/>
        </BoxConteudo>
    )
}