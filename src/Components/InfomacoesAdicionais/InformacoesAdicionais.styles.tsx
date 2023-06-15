import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography";

const styledAutocomplete = styled(Autocomplete);
const styledBox = styled(Box);
const styledSelect = styled(Select);
const styledTextField = styled(TextField);
const styledTypography = styled(Typography);

export const AutocompleteEdited = styledAutocomplete({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" }
});

export const BoxGeral = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 40,
    width: "100%"
});

export const BoxTitulo = styledBox({
    alignItems: "center",
    color: "#00579d",
    display: "flex",
    fontSize: "20px",
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40,
    width: "100%",
});

export const BoxPadraoDireta = styledBox({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "auto"
});

export const BoxPadraoEsquerda = styledBox({
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "auto"
});

export const SelectEdited = styledSelect({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    width: "15vw"
});

export const TextFieldEdited = styledTextField({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" }
})

export const TypographyPadrao = styledTypography({
    color: "#444",
    fontWeight: "bold",
    marginBottom: 16
});