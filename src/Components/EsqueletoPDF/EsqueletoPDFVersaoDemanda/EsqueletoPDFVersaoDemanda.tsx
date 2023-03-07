import { BoxConteudo } from "../../../Pages/App.styles";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import {
    BoxPrincipal, BoxTitulo,
    BoxItens, BoxTituloItens, BoxObjetivo,
    TypographyTitulos, TypographyTextos,
    TableCellStyled, TypographyParticipantes, TypographyTituloATA,
    BoxResponsaveis, BoxGeralResponsaveis
} from "../EsqueletoPDFProposta/EsqueletoPDFProposta.styles";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jsPDF from "jspdf";
import api from "../../../api/api";

// interface Demanda {
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


export default function EsqueletoPDFVersaoDemanda(props: { demanda: any }) {
    const pdfCompoente = useRef<PDFExport>(null)

    const [centroCustoDemanda, setCentroCustoDemanda] = useState<any[]>([]);

    useEffect(() => {
        for (let i = 0; i < props.demanda.centroCustoDemanda.length; i++) {
            api.get(`/sod/centroCusto/${props.demanda.centroCustoDemanda[i].idCentroCusto}`).then((res) => {
                centroCustoDemanda.push(res.data);
                setCentroCustoDemanda(centroCustoDemanda);
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [])

    const exportPDFWithComponent = async () => {
        if (pdfCompoente.current) {
            pdfCompoente.current.save();
        }
    };

    const Demanda = (props: { demanda: any }) => {
        return (
            <BoxPrincipal>
                <ItensDemanda demanda={props.demanda} />
            </BoxPrincipal>
        )
    }

    const ItensDemanda = (props: { demanda: any }) => {
        return (
            <BoxItens>
                <BoxObjetivo>
                    <TypographyTextos>Objetivo: {props.demanda.objetivo}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Situacao atual: {props.demanda.situacaoAtual}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Frequencia de uso: {props.demanda.frequenciaUso}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Score: {props.demanda.score}</TypographyTextos>
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Beneficios:</TypographyTextos>
                    {props.demanda.beneficiosDemanda.map((beneficio: any) => {
                        return (
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginY: 2 }}>
                                <TypographyTextos>{beneficio.tipoBeneficio}</TypographyTextos>
                                <TypographyTextos>{beneficio.descricao}</TypographyTextos>
                                <TypographyTextos>{beneficio.moeda}</TypographyTextos>
                                <TypographyTextos>{beneficio.valor}</TypographyTextos>
                            </Box>
                        )
                    })}
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Centros de Custo: </TypographyTextos>
                    <CentrosCusto demanda={props.demanda} />
                </BoxObjetivo>
            </BoxItens>
        )
    }

    const CentrosCusto = (props: { demanda: any }) => {
        return (
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", justifyContent: "flex", alignItems: "center" }}>
                    <TableContainer component={Paper} sx={{ width: "50%", marginTop: 5 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCellStyled align="center">Nome</TableCellStyled>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {centroCustoDemanda.map((centroCusto: any) => {
                                    return (
                                        <TableRow>
                                            <TableCellStyled align="center">{centroCusto.nomeCentroCusto}</TableCellStyled>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
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
                    <TypographyTituloATA variant="h6">{props.demanda.tituloDemanda}</TypographyTituloATA>
                </BoxTitulo>
                <Demanda demanda={props.demanda} />
            </PDFExport>
            <Box id="BOX" sx={{ display: "none" }}>
                <BoxTitulo>
                    <TypographyTituloATA variant="h6">{props.demanda.tituloDemanda}</TypographyTituloATA>
                </BoxTitulo>
                <Demanda demanda={props.demanda} />
            </Box>
        </BoxConteudo >
    )
}