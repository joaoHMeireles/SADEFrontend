import styled from "@emotion/styled";
import Box from "@mui/material/Box";

const styledBox = styled(Box);

export const BoxContainerGeral = styledBox({
  alignItems: "center",
  border: "2px solid #595959",
  borderRadius: "4px",
  borderStyle: "dashed",
  display: "flex",
  justifyContent: "center",
  height: "auto",
  marginTop: 24,
  minHeight: "10vh",
  width: "100%",
});

export const BoxContainerConteudo = styledBox({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  padding: 12,
  textAlign: "center",
  width: "100%",
});
