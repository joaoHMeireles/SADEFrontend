import { Autocomplete, Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AutocompleteEdited = styled(Autocomplete)({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" },
  marginBottom: "2rem"
});

export const BoxIconsAddMinus = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
});

export const TextFieldEdited = styled(TextField)({
  backgroundColor: "#eee",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
  "& fieldset": { border: "none" }
});