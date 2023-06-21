import styled from "@emotion/styled";
import Box from "@mui/material/Box";

const styledBox = styled(Box);

export const BoxContainerGeral = styledBox({
  alignItems: "center",
  border: "2px dashed #444",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
  minHeight: "10vh",
  width: "100%",
});

export const BoxContainerConteudo = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  padding: "1rem",
  textAlign: "center",
  width: "100%",
});

export const BoxTypographyAnexos = styledBox({
  width: "100%",
});
