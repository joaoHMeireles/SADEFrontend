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


export default function EsqueletoPDFVersaoDemanda(props: { demanda: any, pdfExportComponent: any }) {
    // const pdfCompoente = useRef<PDFExport>(null)

    // const exportPDFWithComponent = async () => {
    //     if (pdfCompoente.current) {
    //         pdfCompoente.current.save();
    //     }
    // };

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
                    <TypographyTextos>Beneficios: </TypographyTextos>
                    <Beneficios demanda={props.demanda} />
                </BoxObjetivo>
                <BoxObjetivo>
                    <TypographyTextos>Centros de Custo: </TypographyTextos>
                    <CentrosCusto demanda={props.demanda} />
                </BoxObjetivo>
            </BoxItens>
        )
    }

    const Beneficios = (props: { demanda: any }) => {
        return (
            <Box sx={{ width: "100%" }}>
                <TableContainer component={Paper} sx={{ width: "50%", marginTop: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCellStyled align="center">Tipo benenficio</TableCellStyled>
                                <TableCellStyled align="center">Descricao</TableCellStyled>
                                <TableCellStyled align="center">moeda</TableCellStyled>
                                <TableCellStyled align="center">valor</TableCellStyled>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {props.demanda.beneficiosDemanda.map((beneficio: any) => {
                                return (
                                    <TableRow>
                                        <TableCellStyled align="center">{beneficio.tipoBeneficio}</TableCellStyled>
                                        <TableCellStyled align="center">{beneficio.descricao}</TableCellStyled>
                                        <TableCellStyled align="center">{beneficio.moeda}</TableCellStyled>
                                        <TableCellStyled align="center">{beneficio.valor}</TableCellStyled>
                                    </TableRow>
                                )
                            })} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        )
    }

    const CentrosCusto = (props: { demanda: any }) => {
        return (
            <Box sx={{ width: "100%" }}>
                <TableContainer component={Paper} sx={{ width: "50%", marginTop: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCellStyled align="center">Nome</TableCellStyled>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.demanda.centroCustoDemanda.map((centroCusto: any) => {
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
        )
    }

    const PageTemplate = () => {
        return (
            <></>
        );
    }

    return (
        <Box id="BOX"
        sx={{ display: "none" }}
        >
            <BoxConteudo>
                {/* <div className="example-config">
                    <button
                        onClick={exportPDFWithComponent}
                    >
                        Export to PDF with component
                    </button>
                </div> */}
                <PDFExport forcePageBreak=".break" paperSize="A4" pageTemplate={PageTemplate} margin="2cm" ref={props.pdfExportComponent}>
                    <BoxTitulo>
                        <TypographyTituloATA variant="h6">{props.demanda.tituloDemanda}</TypographyTituloATA>
                    </BoxTitulo>
                    <Demanda demanda={props.demanda} />
                </PDFExport>
            </BoxConteudo >
        </Box>
    )
}