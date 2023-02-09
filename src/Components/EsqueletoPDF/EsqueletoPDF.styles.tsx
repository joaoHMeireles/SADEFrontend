import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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

export const BoxTityuloItens = styledBox({
    width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center",
})

export const BoxObjetivo = styledBox({
    width: "100%", marginTop: 16
})

export const TypographyTitulos = styledTypography({
    color: "#0070c0", fontSize: "12px", width: "100%"
})

export const TypographyTextos = styledTypography({
    width: "50%", fontSize: "10px"
})