import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxContainerGeral = styledBox({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "auto",
  width: "100%",
});

export const BoxPadrao = styledBox({
  width: "100%",
});

export const BoxPaybackExecucao = styledBox({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
