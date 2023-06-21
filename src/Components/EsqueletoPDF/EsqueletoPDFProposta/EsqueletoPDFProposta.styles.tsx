import { Box, TableCell, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxPrincipal = styled(Box)({
    width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
});

export const BoxTitulo = styled(Box)({
    width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
});

// -------------------------------------

export const BoxGeralResponsaveis = styled(Box)({
    display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: 16
});

export const BoxItens = styled(Box)({
    width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
});

export const BoxObjetivo = styled(Box)({
    width: "100%", marginTop: 16
});

export const BoxResponsaveis = styled(Box)({
    display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "50%"
});

export const BoxTituloItens = styled(Box)({
    width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center",
});

export const TableCellStyled = styled(TableCell)({
    fontSize: "10px",
});

export const TypographyTextos = styled(Typography)({
    width: "50%", fontSize: "10px"
});

export const TypographyTituloATA = styled(Typography)({
    color: "#00579d", fontSize: "12px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
});

export const TypographyTitulos = styled(Typography)({
    color: "#00579d", fontSize: "12px", width: "100%",
});

export const TypographyParecerComissao = styled(Typography)({
    width: "50%", fontSize: "12px", textDecoration: "underline", fontWeight: "bold"
});

export const TypographyParticipantes = styled(Typography)({
    width: "50%", fontSize: "10px", fontWeight: "bold"
});