import styled from "@emotion/styled";
import Box from "@mui/material/Box";

const styledBox = styled(Box);

export const BoxContainerGeral = styledBox({
  alignItems: "center",
  border: "2px solid #595959",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  height: "10vh",
  marginTop: 24,
  width: "100%",
});

export const BoxContainerConteudo = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "start",
  height: "100%",
  marginLeft: 24,
  width: "100%",
});
