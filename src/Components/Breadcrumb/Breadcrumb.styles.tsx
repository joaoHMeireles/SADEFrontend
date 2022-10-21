import styled from "@emotion/styled";
import Box from "@mui/system/Box";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const styledBox = styled(Box)

export const BoxRota = styledBox({
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
})


export const BoxBreadcrumb = styledBox({
    display: "flex"
})

export const ArrowIcon = styled(ArrowForwardIosRoundedIcon)({
    width: "16px", 
    height: "16px"
})