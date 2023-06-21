import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxBotoes = styled(Box)({
  position: "fixed",
  top: "90%",
  left: "68%",
  width: "100%",
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
  justifyContent: "center",
  height: "100%",
  width: "100%",
});

export const BoxProposta = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  width: "80%",
});

export const BoxTituloProposta = styled(Box)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const TypographyVermais = styled(Typography)({
  color: "#00579d",
});