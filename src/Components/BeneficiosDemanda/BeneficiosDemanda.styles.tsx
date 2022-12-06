import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxContainerGeral = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "auto",
    width: '100%',
})

export const BoxTitulos = styledBox({
    alignItems: "center",
    backgroundColor: "#00579D",
    display: "flex",
    justifyContent: "center",
    marginTop: 24,
    width: "100%",
})

export const TypographyTitulos = styledTypography({
    alignItems: "center",
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    height: "2rem",
})

export const BoxIcones = styledBox({
    marginTop: 24
})

export const BoxContainerGeralBeneficio = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    height: "50%",
    width: "100%",
})

export const BoxContainerDivisorio = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "80%",
    marginTop: 40,
    width: "100%",
})

export const BoxInputsAcima = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%",
})

export const BoxValorMensal = styledBox({
    marginBottom: 8,
    width: "100%",
})

export const TypographyLabels = styledTypography({
    color: "#595959"
})

export const BoxInputs = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "start",
    width: "100%",
})

export const BoxInputsAbaixo = styledBox({
    height: "50%",
    marginTop: 24,
    width: "100%",
})

export const BoxObrigacaoLegal = styledBox({
    marginTop: 16,
    width: "100%",
})

export const BoxDescricaoRequeistosControle = styledBox({
    height: "50%",
    marginTop: 40,
    width: "100%",
})

export const BoxFrequencia = styledBox({
    flexDirection: "column",
    height: "50%",
    marginTop: 40,
    width: "100%",
})