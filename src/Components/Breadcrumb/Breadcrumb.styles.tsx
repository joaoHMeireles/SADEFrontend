import Box from "@mui/system/Box";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styled from "@emotion/styled";
import { Icon } from "@mui/material";
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
    height: "16px",
    width: "16px", 
})

export const IconeRota = styled(Icon)({
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
})