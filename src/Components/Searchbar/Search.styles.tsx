import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled"

export const BoxContainerInput = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "2rem 0",
    width: "100%"
})

export const SearchTextField = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    width: "50vw"
})
