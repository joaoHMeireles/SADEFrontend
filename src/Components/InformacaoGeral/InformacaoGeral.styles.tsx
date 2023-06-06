import styled from "@emotion/styled";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const styledAutocomplete = styled(Autocomplete);
const styledBox = styled(Box);
const styledTextField = styled(TextField);
const styledTypography = styled(Typography);

export const AutocompleteEdited = styledAutocomplete({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" }
})

export const BoxContainerCentroCusto = styledBox({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  width: "100%",
});

export const BoxContainerGeralInformacaoGeral = styledBox({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "auto",
  width: "100%",
});

export const BoxContainerLabels = styledBox({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "25%",
  marginTop: 40,
  width: "100%",
});

export const TypographyLabels = styledTypography({
  color: "#595959",
  fontWeight: "bold",
  marginBottom: 16
});

export const TextFieldEdited = styledTextField({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" }
});
