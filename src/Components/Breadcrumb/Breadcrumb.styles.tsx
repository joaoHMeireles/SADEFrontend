import Box from "@mui/system/Box";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styled from "@emotion/styled";
const styledBox = styled(Box)

export const BoxRota = styledBox({
    alignItems: "center", 
    display: "flex", 
    justifyContent: "center"
})

export const BoxBreadcrumb = styledBox({
    display: "flex"
})

export const ArrowIcon = styled(ArrowForwardIosRoundedIcon)({
    height: "16px",
    width: "16px", 
})