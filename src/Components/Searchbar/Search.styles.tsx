import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled"

export const BoxContainerInput = styled(Box)({
    alignItems: "center",
    display: "flex",
    height: "auto",
    justifyContent: "center",
    marginBottom: "2rem",
    width: "100%"
})

export const SearchTextField = styled(TextField)({
    width: "50vw"
})
