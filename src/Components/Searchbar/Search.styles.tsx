import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled"

export const BoxContainerInput = styled(Box)({
    flexGrow: 1, 
    display: "flex",
    justifyContent: "center"
})

export const SearchTextField = styled(TextField)({
    width: "100%",
    height: "60%", 
    paddingTop: "7.5px", 
    ":focus": { 
        borderColor: "#00579d"
    },
    '& .MuiInputBase-root': {
        height: "100%"
    }
})

export const ContainerGrid = styled(Grid)({
    height: "100%", 
    width: "48vw"
})

export const GridIconButton = styled(IconButton)({
    marginTop: "6px"
})