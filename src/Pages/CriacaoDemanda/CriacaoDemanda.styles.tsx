import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const styledBox = styled(Box);

export const BoxBotoes = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-end"
});

export const ContainerBotoes = styledBox({
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
