import { Autocomplete, Box, Select, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const AutocompleteEdited = styled(Autocomplete)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    width: "100%"
});

export const BoxGeral = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 40,
    width: "100%"
});

export const BoxTitulo = styled(Box)({
    alignItems: "center",
    color: "#00579d",
    display: "flex",
    fontSize: "20px",
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40,
    width: "100%",
});

export const BoxPadraoDireta = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "auto"
});

export const BoxPadraoEsquerda = styled(Box)({
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "auto"
});

export const SelectEdited = styled(Select)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    width: "15vw"
});

export const TextFieldEdited = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" }
})

export const TypographyPadrao = styled(Typography)({
    color: "#444",
    fontWeight: "bold",
    marginBottom: 16
});