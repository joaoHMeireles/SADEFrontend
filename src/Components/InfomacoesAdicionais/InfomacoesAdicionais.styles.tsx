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
    width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: 40, marginBottom: 40
});

export const BoxTitulo = styledBox({
    width: "100%", backgroundColor: "#00579d", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 40, marginBottom: 20
});

export const BoxPadraoDireta = styledBox({
    width: "33%", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"
});

export const BoxPadraoEsquerda = styledBox({
    width: "33%", display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column"
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
    color: "#595959",
    fontWeight: "bold",
    marginBottom: 16
});