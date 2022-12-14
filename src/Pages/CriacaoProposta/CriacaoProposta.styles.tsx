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
  height: "auto",
  minHeight: "60vh",
  marginTop: 24,
});
