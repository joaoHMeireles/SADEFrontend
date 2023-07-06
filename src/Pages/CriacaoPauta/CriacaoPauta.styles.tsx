import { Box, Select, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxBotoes = styled(Box)({
  position: "fixed",
  top: "90%",
  left: "72%",
  width: "100%",
});

export const BackgroundInputs = styled(Box)({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  padding: "2rem",
  position: "fixed",
  width: "40%"
});

export const BoxConteudoProposta = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const BoxGeral = styled(Box)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "2rem",
  width: "100%",
});

export const BoxIconeLink = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-end",
});

export const BoxInputsDataComissao = styled(Box)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%"
});

export const BoxProposta = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const BoxTituloProposta = styled(Box)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "75%"
});

export const SelectEdited = styled(Select)({
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" }
});

export const PrincipalBox = styled(Box)({
  alignItems: "flex-start",
  display: "flex",
  justifyContent: "space-evenly",
  padding: "2rem"
});

export const TextFieldEdited = styled(TextField)({
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" },
  width: "100%"
});

export const TypographyVermais = styled(Typography)({
  color: "#00579d",
  marginRight: "1rem",
});