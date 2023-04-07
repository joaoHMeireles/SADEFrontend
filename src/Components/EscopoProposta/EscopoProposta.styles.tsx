import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
  marginTop: 24,
});

export const BoxPaybackExecucao = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 24,
  width: "100%",
});

export const BoxPaybackExe = styledBox({
  width: "33%",
});

export const BoxResponsavel = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 24,
  width: "100%",
});

export const BoxResponsaveis = styledBox({
  width: "100%",
});

export const TypographyStyled = styledTypography({
  color: "#595959",
  margin: "16px 0",
});
