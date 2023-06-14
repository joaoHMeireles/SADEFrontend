import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const styledBox = styled(Box);

export const ContainerGeral = styled(Container)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "auto",
  marginTop: 24,
});

export const ContainerBoxTabs = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});
