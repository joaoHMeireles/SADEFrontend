import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography";

const styledBox = styled(Box);
const styledTextField = styled(TextField);
const styledTypography = styled(Typography);

export const BoxContainerGeral = styledBox({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  justifyContent: "center",
  width: "100%",
});

export const BoxPadrao = styledBox({
  marginTop: 24,
  width: "100%",
});

export const BoxPaybackExecucao = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 24,
  width: "100%",
});

export const BoxPaybackExe = styledBox({
  width: "33%",
});

export const BoxResponsavel = styledBox({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 24,
  width: "100%",
});

export const BoxResponsaveis = styledBox({
  width: "100%",
});

export const TextFieldEdited = styledTextField({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" }
})

export const TypographyStyled = styledTypography({
  color: "#595959",
  fontWeight: "bold",
  marginBottom: 16
});
