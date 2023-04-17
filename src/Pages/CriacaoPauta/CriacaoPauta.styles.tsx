import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxInfoPauta = styledBox({

})

export const BoxGeral = styledBox({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: 30,
  width: "auto",
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
  width: "100%",
});

export const BoxTituloProposta = styledBox({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const BoxIconeLink = styledBox({
  alignItems: "center",
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  width: "6.5%",
});

export const TypographyVermais = styledTypography({
  color: "#00579D",
});

export const BoxInputsDataComissao = styledBox({
  alignItems: "center",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  marginTop: 40,
  height: "100%",
  width: "100%",
});

export const BoxBotoes = styledBox({
  position: "fixed",
  top: "90%",
  left: "68%",
  width: "100%",
});
