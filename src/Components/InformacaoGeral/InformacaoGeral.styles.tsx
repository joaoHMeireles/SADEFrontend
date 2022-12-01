import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxContainerGeralInformacaoGeral = styledBox({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "auto",
  width: "100%",
});

export const BoxContainerLabels = styledBox({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "25%",
  marginTop: 40,
  width: "100%",
});

export const TypographyLabels = styledTypography({
  color: "#595959",
  marginBottom: 16,
});

export const BoxContainerCentroCusto = styledBox({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  width: "100%",
});
