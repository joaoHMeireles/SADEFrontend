import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxContainerUploadImagens = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  height: "100%",
  width: "100%",
});

export const BoxTypographyFiles = styledBox({
  alignItems: "center",
  border: "1px solid #595959",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  height: "100%",
  marginTop: 16,
  width: "90%",
});

export const TypographyUploadFiles = styledTypography({
  color: "#595959",
  width: "100%",
});
