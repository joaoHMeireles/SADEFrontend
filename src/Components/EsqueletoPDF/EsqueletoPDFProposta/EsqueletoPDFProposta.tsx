import { BoxConteudo } from "../../../Pages/App.styles";
import { PDFExport } from "@progress/kendo-react-pdf";
import "./EsqueletoPDFProposta.scss";
import { useRef } from "react";
import Box from "@mui/material/Box";

import {
    BoxPrincipal, BoxTitulo,
    BoxItens, BoxTituloItens, BoxObjetivo,
    TypographyTitulos, TypographyTextos,
    TableCellStyled, TypographyParticipantes, TypographyTituloATA,
    BoxResponsaveis, BoxGeralResponsaveis
} from "./EsqueletoPDFProposta.styles";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Proposta {
    tituloProposta: string,
    itemProposta: ItemProposta,
    responsavelNegocio: string,
    chefeResponsavelTI: string
}

interface ItemProposta {
    titulo: string,
    solicitante: string,
    objetivo: string,
    situacaoAtual: string,
    escopo: string[],
    naoFazParteEscopo: string,
    alternativaAvaliadas: string,
    abrangencia: string,
    principaisRisco: string,
    resultadosQualitativos: string[],
    resultadosPotenciais: string[],
    custosTotais: {
        totalDespesas: number,
        tabelas: ItensTabela[]
    },
    periodoExecucaoInicio: Date,
    periodoExecucaoFim: Date,
    payback: number,
}

interface ItensTabela {
    centrosCusto:
    {
        nomeCentroCusto: string,
        porcentagemDespesa: number
    }[]
    ,
    linhastabela: LinhaTabela[],
    temLicenca: boolean,
    titulo: string
}

interface LinhaTabela {
    quantidade: number,
    tituloDespesa: string,
    valorQuantidade: number
}

const proposta: Proposta = {
    tituloProposta: "Titulo Proposta",
    itemProposta: {
        titulo: "Titulo 01",
        solicitante: "Tal",
        objetivo: "Objetivo 01",
        situacaoAtual: "Situacao atual",
        escopo: ["Escopo 01", "Escopo 02", "Escopo 03"],
        naoFazParteEscopo: "Nao faz parte escopo",
        alternativaAvaliadas: "Alternativas avaliadas",
        abrangencia: "Abrangencia 01",
        principaisRisco: "Risco tal",
        resultadosQualitativos: ["Resultados Qualitativos 01", "Resultados Qualitativos 02"],
        resultadosPotenciais: ["Resultados Potenciais 01", "Resultados Potenciais 02"],
        custosTotais: {
            totalDespesas: 50000,
            tabelas: [
                {
                    titulo: "Titulo Tabela 01",
                    temLicenca: true,
                    centrosCusto: [
                        {
                            nomeCentroCusto: "Centro Custo 01",
                            porcentagemDespesa: 20
                        },
                        {
                            nomeCentroCusto: "Centro Custo 02",
                            porcentagemDespesa: 100
                        },
                    ],
                    linhastabela: [
                        {
                            tituloDespesa: "Titulo Despesa 01",
                            quantidade: 10,
                            valorQuantidade: 100
                        },
                        {
                            tituloDespesa: "Titulo Despesa 02",
                            quantidade: 20,
                            valorQuantidade: 200
                        },
                        {
                            tituloDespesa: "Titulo Despesa 03",
                            quantidade: 30,
                            valorQuantidade: 300
                        },
                    ]
                },
                {
                    titulo: "Titulo Tabela 02",
                    temLicenca: false,
                    centrosCusto: [
                        {
                            nomeCentroCusto: "Centro Custo 01",
                            porcentagemDespesa: 20
                        },
                        {
                            nomeCentroCusto: "Centro Custo 02",
                            porcentagemDespesa: 100
                        },
                    ],
                    linhastabela: [
                        {
                            tituloDespesa: "Titulo Despesa 01",
                            quantidade: 10,
                            valorQuantidade: 100
                        },
                        {
                            tituloDespesa: "Titulo Despesa 02",
                            quantidade: 20,
                            valorQuantidade: 200
                        },
                        {
                            tituloDespesa: "Titulo Despesa 03",
                            quantidade: 30,
                            valorQuantidade: 300
                        },
                    ]
                }
            ]
        },
        periodoExecucaoInicio: new Date(),
        periodoExecucaoFim: new Date(),
        payback: 4,
    },
    responsavelNegocio: "Tal",
    chefeResponsavelTI: "Tal"
}


export default function EsqueletoPDFProposta() {
    const pdfCompoente = useRef<PDFExport>(null)

    const exportPDFWithComponent = () => {
        if (pdfCompoente.current) {
            pdfCompoente.current.save();
        }
    };

    const Proposta = (props: { proposta: Proposta }) => {
        return (
            <BoxPrincipal>
                <ItensATA proposta={props.proposta} />
            </BoxPrincipal>
        )
    }

    const ItensATA = (props: { proposta: Proposta }) => {
        let index = 0;
        return (
            <BoxItens>
                <BoxTituloItens>
                    <TypographyTitulos> {index + 1}. {props.proposta.itemProposta.titulo}</TypographyTitulos>
                </BoxTituloItens>
                <BoxObjetivo>
                    <TypographyTextos>Solicitante: {props.proposta.itemProposta.solicitante}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Objetivo: {props.proposta.itemProposta.objetivo} </TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Situacao atual: {props.proposta.itemProposta.situacaoAtual}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Escopo projeto: </TypographyTextos>
                    <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                        {props.proposta.itemProposta.escopo.map((escopo: string, index: number) => {
                            return (
                                <li key={index} className="itensEscopoProjeto">{escopo}</li>
                            )
                        })}
                    </ul>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Nao faz parte do Escopo do Projeto:{props.proposta.itemProposta.naoFazParteEscopo}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Alternativas avaliadas: {props.proposta.itemProposta.alternativaAvaliadas}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Abrangencia do Projeto:{props.proposta.itemProposta.abrangencia}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Principais riscos: {props.proposta.itemProposta.principaisRisco}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Resultados Esperados (Qualitativos):  </TypographyTextos>
                    <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                        {props.proposta.itemProposta.resultadosQualitativos.map((resultadosQualitativos: string, index: number) => {
                            return (<li key={index}>{resultadosQualitativos}</li>)
                        })}
                    </ul>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Beneficios potencias: </TypographyTextos>
                    <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                        {props.proposta.itemProposta.resultadosPotenciais.map((resultadosPotenciais: string, index: number) => {
                            return (<li key={index}>{resultadosPotenciais}</li>)
                        })}
                    </ul>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos> <b> Custos totais do projeto: R${props.proposta.itemProposta.custosTotais.totalDespesas}</b> </TypographyTextos>
                    <TypographyTextos>Total despesas recursos externos (Desembolso): R${props.proposta.itemProposta.custosTotais.totalDespesas}</TypographyTextos>
                </BoxObjetivo>
                <CentrosCusto proposta={props.proposta.itemProposta} />
                <BoxObjetivo>
                    <TypographyTextos>Periodo de execucao: {props.proposta.itemProposta.periodoExecucaoInicio.toLocaleDateString()} a {props.proposta.itemProposta.periodoExecucaoFim.toLocaleDateString()}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Payback: {props.proposta.itemProposta.payback} meses</TypographyTextos>
                </BoxObjetivo>
            </BoxItens>
        )
    }

    const CentrosCusto = (props: { proposta: ItemProposta }) => {
        return (
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                {props.proposta.custosTotais.tabelas.map((tabela: ItensTabela) => {
                    console.log(tabela.temLicenca);

                    let totalEsfoco = 0;
                    let valorTotal = 0;
                    return (
                        <>
                            <Box sx={{ display: "flex", justifyContent: "flex", alignItems: "center" }}>
                                <TableContainer component={Paper} sx={{ width: "50%", marginTop: 5 }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCellStyled align="center">Despesas (Desembolso)</TableCellStyled>
                                                <TableCellStyled align="center">Esforco</TableCellStyled>
                                                <TableCellStyled align="center">Valor total</TableCellStyled>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {tabela.linhastabela.map((linhaTabela: LinhaTabela) => {
                                                totalEsfoco += linhaTabela.quantidade;
                                                valorTotal += (linhaTabela.quantidade * linhaTabela.valorQuantidade);
                                                return (
                                                    <>
                                                        <TableRow>
                                                            <TableCellStyled align="center">{linhaTabela.tituloDespesa}</TableCellStyled>
                                                            <TableCellStyled align="center">{linhaTabela.quantidade}</TableCellStyled>
                                                            <TableCellStyled align="center">R$ {linhaTabela.quantidade * linhaTabela.valorQuantidade}</TableCellStyled>
                                                        </TableRow>
                                                    </>
                                                )
                                            })}
                                            <TableRow>
                                                <TableCellStyled align="center">Total despesas: </TableCellStyled>
                                                <TableCellStyled align="center">{totalEsfoco}h</TableCellStyled>
                                                <TableCellStyled align="center">R$ {valorTotal}</TableCellStyled>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TableContainer>
                                    <Table component={Paper} sx={{ width: "25%", marginLeft: 2, }}>
                                        <TableHead>
                                            <TableCellStyled align="center">CC Pagante</TableCellStyled>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                {tabela.centrosCusto.map((cc) => {
                                                    return (
                                                        <>
                                                            <TableRow sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                                <TableCellStyled align="center">
                                                                    {cc.porcentagemDespesa}%
                                                                </TableCellStyled>
                                                            </TableRow>
                                                        </>
                                                    )
                                                })}
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            {tabela.temLicenca ?
                                <>
                                    <Box sx={{ display: "flex", justifyContent: "flex", alignItems: "center" }}>
                                        <TableContainer component={Paper} sx={{ width: "50%", marginTop: 5 }}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCellStyled align="center">Insvetimentos/recorrentes</TableCellStyled>
                                                        <TableCellStyled align="center">Licencas</TableCellStyled>
                                                        <TableCellStyled align="center">Valor total</TableCellStyled>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {tabela.linhastabela.map((linhaTabela: LinhaTabela) => {
                                                        totalEsfoco += linhaTabela.quantidade;
                                                        valorTotal += (linhaTabela.quantidade * linhaTabela.valorQuantidade);
                                                        return (
                                                            <>
                                                                <TableRow>
                                                                    <TableCellStyled align="center">{linhaTabela.tituloDespesa}</TableCellStyled>
                                                                    <TableCellStyled align="center">{linhaTabela.quantidade}</TableCellStyled>
                                                                    <TableCellStyled align="center">R$ {linhaTabela.quantidade * linhaTabela.valorQuantidade}</TableCellStyled>
                                                                </TableRow>
                                                            </>
                                                        )
                                                    })}
                                                    <TableRow>
                                                        <TableCellStyled align="center">Total despesas: </TableCellStyled>
                                                        <TableCellStyled align="center">{totalEsfoco}h</TableCellStyled>
                                                        <TableCellStyled align="center">R$ {valorTotal}</TableCellStyled>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TableContainer>
                                            <Table component={Paper} sx={{ width: "25%", marginLeft: 2, }}>
                                                <TableHead>
                                                    <TableCellStyled align="center">CC Pagante</TableCellStyled>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        {tabela.centrosCusto.map((cc) => {
                                                            return (
                                                                <>
                                                                    <TableRow sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                                        <TableCellStyled align="center">
                                                                            {cc.porcentagemDespesa}%
                                                                        </TableCellStyled>
                                                                    </TableRow>
                                                                </>
                                                            )
                                                        })}
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </>

                                : ""
                            }
                        </>
                    )
                })}
            </Box>
        )
    }

    const ParticipantesReuniao = (props: { proposta: Proposta }) => {
        return (
            <BoxGeralResponsaveis>
                <>
                    <BoxResponsaveis>
                        <TypographyParticipantes>{props.proposta.responsavelNegocio}</TypographyParticipantes>
                        <TypographyParticipantes>Responsavel Negocio</TypographyParticipantes>
                    </BoxResponsaveis>
                    <BoxResponsaveis>
                        <TypographyParticipantes>{props.proposta.chefeResponsavelTI}</TypographyParticipantes>
                        <TypographyParticipantes>Chefe Responsavel TI</TypographyParticipantes>
                    </BoxResponsaveis>
                </>
            </BoxGeralResponsaveis >
        )
    }

    const PageTemplate = () => {
        return (
            <></>
        );
    }

    return (
        <BoxConteudo>
            <div className="example-config">
                <button
                    onClick={exportPDFWithComponent}
                >
                    Export to PDF with component
                </button>
            </div>
            <PDFExport forcePageBreak=".break" paperSize="A4" pageTemplate={PageTemplate} margin="2cm" ref={pdfCompoente}>
                <BoxTitulo>
                    <TypographyTituloATA variant="h6">{proposta.tituloProposta}</TypographyTituloATA>
                </BoxTitulo>
                <Proposta proposta={proposta} />
                <ParticipantesReuniao proposta={proposta} />
            </PDFExport>
        </BoxConteudo >
    );
}