import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled"

export const BoxContainerInput = styled(Box)({
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
})

export const SearchTextField = styled(TextField)({
    width: "48vw",
    ":focus": {
        borderColor: "#00579d"
    },
    '& .MuiInputBase-root': {
        height: "100%"
    }
})

export const ContainerGrid = styled(Grid)({
    alignItems: "center",
    display: "flex",
    height: "100%",
    // justifyContent: "center",
    width: "auto"
})

export const GridIconButton = styled(IconButton)({
    margin: "none",
    padding: "none"
})