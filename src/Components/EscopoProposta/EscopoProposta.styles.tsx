import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const AutocompleteEdited = styled(Autocomplete)({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" },
  width: "100%"
})

export const BoxContainerGeral = styled(Box)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

export const BoxPadrao = styled(Box)({
  width: "100%",
});

export const BoxPaybackExecucao = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  margin: "2rem 0",
  width: "100%",
});

export const BoxResponsavel = styled(Box)({
  alignItems: "flex-start",
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
})

export const TypographyStyled = styled(Typography)({
  color: "#444",
  fontWeight: "bold",
  marginBottom: "1rem"
});