import { Box, Grid, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { BoxConteudo } from '../App.styles';
import styled from '@emotion/styled';

export const BoxAviso = styled(Box)({
    alignItems: "center",
    backgroundColor: "#ffd60050",
    borderRadius: "40px 0 0 40px",
    display: "flex",
    justifyContent: "space-evenly",
    right: "-155px",
    position: "fixed",
    padding: "20px 10px",
    top: "180px",
    width: "200px",
    '&:hover': {
        right: "-15px",
        transition: 'ease-in-out',
        transitionDuration: "0.3s"
    }
});

export const BoxBotoesModal = styled(Box)({
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
});

export const BoxConteudoModal = styled(BoxConteudo)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "30px 50px"
});

export const BoxHeader = styled(Box)({
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    padding: "19px 24px 24px 24px",
    top: "7.2vh",
    width: "96.5%",
    zIndex: 10
});

export const BoxTabela = styled(Box)({
    alignItems: "center",
    display: 'flex',
    flexDirection: "column",
    width: "100%",
});

export const BoxTituloModal = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    width: "100%"
});

export const CircleIconPonto = styled(CircleIcon)({
    fontSize: "10px"
});

export const GridItemFooter = styled(Grid)({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    '& a': {
        color: "#444",
        fontSize: "0.9rem",
        "&:hover": {
            transition: "ease-in",
            transitionDuration: "0.5s",
            fontWeight: "500",
            color: "#00579d"
        }
    }
});

export const GridPequenosAtributos = styled(Grid)({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start"
});

export const TypographyBeneficioQualitativo = styled(Typography)({
    width: "100%", wordBreak: "break-word"
});

export const TypographyTexto = styled(Typography)({
    textAlign: 'justify'
});

export const TypographyTitulo = styled(Typography)({
    color: "#444",
    marginBottom: "2rem"
});

export const TypographyTituloAtributo = styled(Typography)({
    color: "#444",
    fontWeight: "bold"
});

export const TypographyTituloModal = styled(TypographyTitulo)({
    color: "#00579d",
    fontWeight: "500",
    marginBottom: "0px"
});