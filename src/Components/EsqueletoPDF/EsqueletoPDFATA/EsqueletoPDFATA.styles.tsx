import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import styled from "@emotion/styled";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxPrincipal = styledBox({
    width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
})

export const BoxTitulo = styledBox({
    width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
})

export const BoxData = styledBox({
    display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column"
})

export const TypographyData = styledTypography({
    fontSize: "10px"
})

// -------------------------------------

export const BoxItens = styledBox({
    width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
})

export const BoxTituloItens = styledBox({
    width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center",
})

export const BoxObjetivo = styledBox({
    width: "100%", marginTop: 16
})

export const TypographyTituloATA = styledTypography({
    color: "#0070c0", fontSize: "12px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
})

export const TypographyTitulos = styledTypography({
    color: "#0070c0", fontSize: "12px", width: "100%",
})

export const TypographyTextos = styledTypography({
    width: "50%", fontSize: "10px"
})

export const TableCellStyled = styled(TableCell)({
    fontSize: "10px",
})

export const TypographyParticipantes = styledTypography({
    width: "50%", fontSize: "12px", textDecoration: "underline", fontWeight: "bold"
})

export const TypographyParecerComissao = styledTypography({
    width: "50%", fontSize: "12px", textDecoration: "underline", fontWeight: "bold"
})