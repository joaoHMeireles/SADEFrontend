import Box from "@mui/material/Box"
import MuiTextField from '@mui/material/TextField';
import MuiGrid from '@mui/material/Grid';
import styled from "@emotion/styled"

export const BoxContainerInput = styled(Box)({
    flexGrow: 1, 
    display: "flex",
    justifyContent: "center"
})

export const TextField = styled(MuiTextField)({
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

export const ContainerGrid = styled(MuiGrid)({
    height: "100%", 
    width: "48vw"
})

