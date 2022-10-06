import styled from "@emotion/styled";
import MuiBox from "@mui/system/Box";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export const BoxRota = styled(MuiBox)({
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
})


export const BoxBreadcrumb = styled(MuiBox)({
    display: "flex", 
    margin: "24px"
})

export const ArrowIcon = styled(ArrowForwardIosRoundedIcon)({
    width: "16px", 
    height: "16px"
})