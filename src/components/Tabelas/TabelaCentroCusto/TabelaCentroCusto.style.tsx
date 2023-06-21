import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxCentroCusto = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-evenly",
    width: "100%"
});

export const BoxContainerCentroCusto = styled(Box)({
    boxShadow: "5px 5px 10px 0 #00000050",
    // width: "25%"
    // height: "20vh",
    width: "auto",
    height: "100%"
});

export const BoxTabelaCusto = styled(Box)({
    display: 'flex',
    justifyContent: "space-evenly",
    marginBottom: "30px",
    minWidth: "40vw",
    // width: "auto"
    width: "100%"
});

export const BoxTitulosCentroCusto = styled(Box)({
    alignItems: "center",
    backgroundColor: "#00579d",
    borderRadius: "5px 5px 0 0",
    boxSizing: 'border-box',
    color: "#fff",
    display: 'flex',
    fontFamily: "'Roboto','Helvetica','Arial',sans-serif",
    fontSize: "0.875rem",
    heigth: "auto",
    justifyContent: "center",
    padding: "19px",
    width: "100%"
});