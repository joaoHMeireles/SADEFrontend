import { Box, styled } from "@mui/material";
const styledBox = styled(Box)

export const ContainerBox = styledBox({
    width: "100%", 
    height: "100%", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
})

export const MainBox = styledBox({
    flexGrow: 1,
    width: "auto",
})

export const ContentBox = styledBox({
    margin: "24px"
})
