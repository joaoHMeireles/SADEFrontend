import { Box } from '@mui/material';
import styled from "@emotion/styled";

export const BoxBandeira = styled(Box)({
    alignItems: "end",
    display: "flex",
    maxHeight: 84,
    position: "relative",
    top: -25,
    width: 40,
    zIndex: 0
});

export const BoxContainerBandeira = styled(Box)({
    display: "flex",
    height: '100%',
    justifyContent: "center"
});

export const BoxTrianguloBandeira = styled(Box)({
    borderBottom: "22px solid white",
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    height: 0,
    width: 0
});