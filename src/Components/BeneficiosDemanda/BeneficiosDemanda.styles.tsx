import { Box, FormControl, Select, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxContainerDivisorio = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%"
});

export const BoxContainerGeral = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: '100%',
});

export const BoxContainerGeralBeneficio = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%",
});

export const BoxDescricaoRequisitosControle = styled(Box)({
    height: "50%",
    width: "100%",
});

export const BoxFrequencia = styled(Box)({
    flexDirection: "column",
    height: "50%",
    width: "100%",
});

export const BoxIcones = styled(Box)({
    marginTop: "2rem"
});

export const BoxInputs = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
});

export const BoxInputsAbaixo = styled(Box)({
    width: "100%",
});

export const BoxInputsAcima = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
});

export const BoxObrigacaoLegal = styled(Box)({
    marginTop: 16,
    width: "100%",
});

export const BoxTitulos = styled(Box)({
    alignItems: "center",
    color: "#00579d",
    display: "flex",
    fontSize: "20px",
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: "2rem",
    width: "100%",
});

export const BoxValorMensal = styled(Box)({
    // width: "100%",
});

export const FormControlEdited = styled(FormControl)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    marginRight: "1rem",
    width: "15vw"
});

export const SelectEdited = styled(Select)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
});

export const TextFieldEdited = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    width: "100%"
});

export const TypographyLabels = styled(Typography)({
    color: "#444",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginTop: "2rem",
});