import { Box, Icon } from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styled from "@emotion/styled";

export const ArrowIcon = styled(ArrowForwardIosRoundedIcon)({
    height: "16px",
    width: "16px", 
});

export const BoxBreadcrumb = styled(Box)({
    display: "flex"
});

export const BoxRota = styled(Box)({
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 16,
    marginLeft: 16
});

export const IconeRota = styled(Icon)({
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
});