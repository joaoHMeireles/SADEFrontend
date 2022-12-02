import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)

export const BoxContainerBandeira = styledBox({
    display: "flex",
    height: '100%',
    justifyContent: "center"
})

export const BoxBandeira = styledBox({
    alignItems: "end",
    display: "flex",
    maxHeight: 84,
    position: "relative",
    top: -25,
    width: 40,
    zIndex: 0
})

export const BoxTrianguloBandeira = styledBox({
    borderBottom: "22px solid white",
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    height: 0,
    width: 0
})