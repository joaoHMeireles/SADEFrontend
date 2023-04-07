import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxTypographyFiles = styledBox({
  alignItems: "center",
  border: "1px solid #595959",
  borderRadius: "4px",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  marginTop: 16,
  padding: 8,
  width: "90%",
});

export const TypographyUploadFiles = styledTypography({
  color: "#595959",
  width: "100%",
});
