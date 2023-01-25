import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxGeral = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: 24,
  width: "100%",
});

export const BoxProposta = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  width: "80%",
});

export const BoxConteudoProposta = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

export const BoxIconeLink = styledBox({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const TypographyVermais = styledTypography({
  color: "#00579D",
  paddingTop: 8,
});
