import styled from "@emotion/styled";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Select from "@mui/material/Select"

const styledBox = styled(Box);
const styledTypography = styled(Typography);
const styledSelect = styled(Select);

export const BoxGeral = styledBox({
    width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: 40, marginBottom: 40
})

export const BoxTitulo = styledBox({
    width: "100%", backgroundColor: "#00579d", display: "flex", justifyContent: "center", alignItems: "center"
})

export const BoxContainerInputs = styledBox({
    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"
})

export const BoxPadraoDireta = styledBox({
    width: "33%", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", marginTop: 16, marginBottom: 16
})

export const BoxPadraoEsquerda = styledBox({
    width: "33%", display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column", marginTop: 16, marginBottom: 16
})

export const TypographyPadrao = styledTypography({
    marginRight: 16
})

export const SelectPadrao = styledSelect({
    width: "50%"
})