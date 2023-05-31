import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)

export const BoxTabelaCusto = styledBox({
    display: 'flex',
    justifyContent: "space-evenly",
    marginBottom: "30px",
    minWidth: "40vw",
    width: "auto"
})

export const BoxContainerCentroCusto = styledBox({
    boxShadow: "5px 5px 10px 0 #00000025",
    width: "25%"
})

export const BoxTitulosCentroCusto = styledBox({
    alignItems: "center",
    backgroundColor: "#00579d",
    borderRadius: "4px 4px 0 0",
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
    height: "75%",
    justifyContent: "space-evenly",
    width: "100%"
})