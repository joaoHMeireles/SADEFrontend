import MuiAppBar from "@mui/material/AppBar";
import MuiTextField from "@mui/material/TextField";
import MuiBox from "@mui/material/Box"
import styled from "@emotion/styled";

export const AppBar = styled(MuiAppBar)({
    zIndex: 1200,
    display: "flex",
    justifyContent: "center"
})

export const TextField = styled(MuiTextField)({
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

export const TextFieldBox = styled(MuiBox)({
    display: "flex", 
    width: "17vw", 
    justifyContent: "space-evenly"
})