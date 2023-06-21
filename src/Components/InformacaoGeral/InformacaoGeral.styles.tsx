import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const AutocompleteEdited = styled(Autocomplete)({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" }
})

export const BoxContainerCentroCusto = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  width: "100%",
});

export const BoxContainerGeralInformacaoGeral = styled(Box)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
});

export const BoxContainerLabels = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "2rem",
  width: "100%",
});

export const TextFieldEdited = styled(TextField)({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" }
});

export const TypographyLabels = styled(Typography)({
  color: "#444",
  fontWeight: "bold",
  marginBottom: "1rem"
});