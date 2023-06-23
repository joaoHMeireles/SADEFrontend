import { Box, Select, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

// export const BoxBotoes = styled(Box)({
//   position: "fixed",
//   bottom: "0",
//   right: "0",
// });

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
  marginTop: 30,
  width: "auto",
});

export const BoxIconeLink = styled(Box)({
  alignItems: "center",
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  width: "6.5%",
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
});

export const SelectEdited = styled(Select)({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" }
});

export const TextFieldEdited = styled(TextField)({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" },
  width: "100%"
});

export const TypographyVermais = styled(Typography)({
  color: "#00579d",
});