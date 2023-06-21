import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";

export const BoxBotoes = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-end"
});

export const ContainerBotoes = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "4rem",
  width: "100%"
});

export const ContainerGeral = styled(Container)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: 24,
});