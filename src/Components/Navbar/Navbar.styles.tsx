import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

export const NavBar = styled(AppBar)({
    zIndex: 1200,
    display: "flex",
    justifyContent: "center"
})

export const TextFieldLinguas = styled(TextField)({
    // ver como deixar a borda de baixo do MuiInputBase-root branca
    marginRight: 20,
    '&:hover': {
        // borderBottom: "none"
    },
    '&:before': {
        borderBottom: "none"
    },
    '&:after': {
        borderBottom: "none"
    },
    '& input': {
        color: "red",
        borderBottom: "none"
    },
    '& .MuiSelect-select': {
        color: "white"
    },
    '& .MuiSvgIcon-root': {
        color: "white"
    },
    '& .MuiInputBase-root:hover': {
        borderBottom: "none"
    },
    '& .MuiInputBase-root:before': {
        borderBottom: "white solid 1px"
    },

    '& .MuiInputBase-root:after': {
        borderBottom: "none"
    }
})

export const BoxTextField = styled(Box)({
    display: "flex", 
    width: "17vw", 
    justifyContent: "space-evenly"
})
