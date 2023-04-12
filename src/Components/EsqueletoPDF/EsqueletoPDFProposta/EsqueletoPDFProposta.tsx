import { BoxConteudo } from "../../../Pages/App.styles";
import { PDFExport } from "@progress/kendo-react-pdf";
import { renderToStream, renderToString } from "@react-pdf/renderer"
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

// interface Proposta {
//     tituloProposta: string,
//     itemProposta: ItemProposta,
//     responsavelNegocio: string,
//     chefeResponsavelTI: string
// }

// interface ItemProposta {
//     titulo: string,
//     solicitante: string,
//     objetivo: string,
//     situacaoAtual: string,
//     escopo: string[],
//     naoFazParteEscopo: string,
//     alternativaAvaliadas: string,
//     abrangencia: string,
//     principaisRisco: string,
//     resultadosQualitativos: string[],
//     resultadosPotenciais: string[],
//     custosTotais: {
//         totalDespesas: number,
//         tabelas: ItensTabela[]
//     },
//     periodoExecucaoInicio: Date,
//     periodoExecucaoFim: Date,
//     payback: number,
// }

// interface ItensTabela {
//     centrosCusto:
//     {
//         nomeCentroCusto: string,
//         porcentagemDespesa: number
//     }[]
//     ,
//     linhastabela: LinhaTabela[],
//     temLicenca: boolean,
//     titulo: string
// }

// interface LinhaTabela {
//     quantidade: number,
//     tituloDespesa: string,
//     valorQuantidade: number
// }

// const proposta: Proposta = {
//     tituloProposta: "Titulo Proposta",
//     itemProposta: {
//         titulo: "Titulo 01",
//         solicitante: "Tal",
//         objetivo: "Objetivo 01",
//         situacaoAtual: "Situacao atual",
//         escopo: ["Escopo 01", "Escopo 02", "Escopo 03"],
//         naoFazParteEscopo: "Nao faz parte escopo",
//         alternativaAvaliadas: "Alternativas avaliadas",
//         abrangencia: "Abrangencia 01",
//         principaisRisco: "Risco tal",
//         resultadosQualitativos: ["Resultados Qualitativos 01", "Resultados Qualitativos 02"],
//         resultadosPotenciais: ["Resultados Potenciais 01", "Resultados Potenciais 02"],
//         custosTotais: {
//             totalDespesas: 50000,
//             tabelas: [
//                 {
//                     titulo: "Titulo Tabela 01",
//                     temLicenca: true,
//                     centrosCusto: [
//                         {
//                             nomeCentroCusto: "Centro Custo 01",
//                             porcentagemDespesa: 20
//                         },
//                         {
//                             nomeCentroCusto: "Centro Custo 02",
//                             porcentagemDespesa: 100
//                         },
//                     ],
//                     linhastabela: [
//                         {
//                             tituloDespesa: "Titulo Despesa 01",
//                             quantidade: 10,
//                             valorQuantidade: 100
//                         },
//                         {
//                             tituloDespesa: "Titulo Despesa 02",
//                             quantidade: 20,
//                             valorQuantidade: 200
//                         },
//                         {
//                             tituloDespesa: "Titulo Despesa 03",
//                             quantidade: 30,
//                             valorQuantidade: 300
//                         },
//                     ]
//                 },
//                 {
//                     titulo: "Titulo Tabela 02",
//                     temLicenca: false,
//                     centrosCusto: [
//                         {
//                             nomeCentroCusto: "Centro Custo 01",
//                             porcentagemDespesa: 20
//                         },
//                         {
//                             nomeCentroCusto: "Centro Custo 02",
//                             porcentagemDespesa: 100
//                         },
//                     ],
//                     linhastabela: [
//                         {
//                             tituloDespesa: "Titulo Despesa 01",
//                             quantidade: 10,
//                             valorQuantidade: 100
//                         },
//                         {
//                             tituloDespesa: "Titulo Despesa 02",
//                             quantidade: 20,
//                             valorQuantidade: 200
//                         },
//                         {
//                             tituloDespesa: "Titulo Despesa 03",
//                             quantidade: 30,
//                             valorQuantidade: 300
//                         },
//                     ]
//                 }
//             ]
//         },
//         periodoExecucaoInicio: new Date(),
//         periodoExecucaoFim: new Date(),
//         payback: 4,
//     },
//     responsavelNegocio: "Tal",
//     chefeResponsavelTI: "Tal"
// }


export default function EsqueletoPDFProposta(props: { proposta: any }) {
    const pdfCompoente = useRef<PDFExport>(null)

    const exportPDFWithComponent = async () => {
        if (pdfCompoente.current) {
            pdfCompoente.current.save();
        }
    };

    const Proposta = (props: { proposta: any }) => {
        return (
            <BoxPrincipal>
                <ItensATA proposta={props.proposta} />
            </BoxPrincipal>
        )
    }

    const ItensATA = (props: { proposta: any }) => {
        let index = 0;
        return (
            <BoxItens>
                <BoxTituloItens>
                    <TypographyTitulos> {index + 1}. {props.proposta.titulo}</TypographyTitulos>
                </BoxTituloItens>
                <BoxObjetivo>
                    <TypographyTextos>Solicitante: {props.proposta.demanda.usuario.nomeUsuario}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Objetivo: {props.proposta.demanda.objetivo} </TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Situacao atual: {props.proposta.demanda.situacaoAtual}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Escopo projeto: {props.proposta.escopo}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Abrangencia do Projeto:{props.proposta.demanda.frequenciaUso}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Resultados Esperados (Qualitativos):  </TypographyTextos>
                    <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                        {props.proposta.demanda.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "QUALITATIVO").map((resultadosQualitativos: any, index: number) => {
                            return (<li key={index}>{resultadosQualitativos.descricao}</li>)
                        })}
                    </ul>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Beneficios potencias: </TypographyTextos>
                    <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                        {props.proposta.demanda.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "POTENCIAL").map((resultadosPotenciais: any, index: number) => {
                            return (<li key={index}>{resultadosPotenciais.valor} {resultadosPotenciais.moeda} - {resultadosPotenciais.descricao}</li>)
                        })}
                    </ul>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Beneficios reais: </TypographyTextos>
                    <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                        {props.proposta.demanda.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "REAL").map((resultadosReais: any, index: number) => {
                            return (<li key={index}>{resultadosReais.valor} {resultadosReais.moeda} - {resultadosReais.descricao}</li>)
                        })}
                    </ul>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos> <b> Custos totais do projeto: R${10}</b> </TypographyTextos>
                </BoxObjetivo>
                <CentrosCusto proposta={props.proposta} />
                <BoxObjetivo>
                    <TypographyTextos>Periodo de execucao: {props.proposta.periodoExecucaoInicio} a {props.proposta.periodoExecucaoFim}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Payback: {props.proposta.payback} meses</TypographyTextos>
                </BoxObjetivo>
            </BoxItens>
        )
    }

    const CentrosCusto = (props: { proposta: any }) => {
        return (
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                {props.proposta.tabelasCustoProposta.map((tabela: any) => {
                    let totalEsfoco = 0;
                    let valorTotal = 0;
                    console.log(tabela);

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
                                            {tabela.linhastabela.map((linhaTabela: any) => {
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
                                                    {tabela.linhastabela.map((linhaTabela: any) => {
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

    const ParticipantesReuniao = (props: { proposta: any }) => {
        console.log(props.proposta.responsaveisNegocio);

        return (
            <BoxGeralResponsaveis>
                <>
                    <BoxResponsaveis>
                        <TypographyParticipantes>Responsaveis Negocio</TypographyParticipantes>
                        <TypographyParticipantes>{props.proposta.responsavelNegocio}</TypographyParticipantes>
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
                    <TypographyTituloATA variant="h6">{props.proposta.tituloProposta}</TypographyTituloATA>
                </BoxTitulo>
                <Proposta proposta={props.proposta} />
                <ParticipantesReuniao proposta={props.proposta} />
            </PDFExport>
        </BoxConteudo >
    );
}