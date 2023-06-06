import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)

export const BoxTabelaCusto = styledBox({
    display: 'flex',
    justifyContent: "space-evenly",
    marginBottom: "30px",
    minWidth: "40vw",
    // width: "auto"
    width: "100%"
})

export const BoxContainerCentroCusto = styledBox({
    boxShadow: "5px 5px 10px 0 #00000050",
    // width: "25%"
    // height: "20vh",
    width: "auto",
    height: "100%"
})

export const BoxTitulosCentroCusto = styledBox({
    alignItems: "center",
    backgroundColor: "#00579d",
    borderRadius: "5px 5px 0 0",
    boxSizing: 'border-box',
    color: "#ffffff",
    display: 'flex',
    fontFamily: "'Roboto','Helvetica','Arial',sans-serif",
    fontSize: "0.875rem",
    heigth: "auto",
    justifyContent: "center",
    padding: "19px",
    width: "100%"
})

export const BoxCentroCusto = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-evenly",
    width: "100%"
})