import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const ContainerGeral = styled(Container)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: 24,
});

export const BoxContainerBotoes = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 40,
  width: "100%",
});

export const BoxBotaoTerciario = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "start",
  width: "50%",
});

export const BoxBotoesPriSec = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "end",
  width: "90%",
});
