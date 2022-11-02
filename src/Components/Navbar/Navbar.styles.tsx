import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

export const NavBar = styled(AppBar)({
    zIndex: 1200,
    display: "flex",
    justifyContent: "center"
})

export const LanguageTextField = styled(TextField)({
    // ver como deixar a borda de baixo do MuiInputBase-root branca
    marginRight: 20,
    '& .MuiSelect-select': {
        color: "white"
    },
    '& .MuiSvgIcon-root': {
        color: "white"
    },

    '& .MuiInput-root:before': {
        borderBottom: "white solid 1px"
    },

    '& .MuiInput-root:after': {
        borderBottom: "white solid 1px"
    }
})

export const TextFieldBox = styled(Box)({
    display: "flex", 
    width: "17vw", 
    justifyContent: "space-evenly"
})
