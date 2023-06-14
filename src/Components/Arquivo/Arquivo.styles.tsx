import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxTypographyFiles = styledBox({
  alignItems: "center",
  backgroundColor: "#eee",
  borderRadius: "10px",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  marginTop: 16,
  padding: 8,
  width: "90%",
});

export const TypographyUploadFiles = styledTypography({
  color: "#444",
  width: "100%",
});
