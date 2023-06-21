import { Box, Grid, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import { BoxConteudo } from '../App.styles';
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)
const styledGrid = styled(Grid)
const styledTypography = styled(Typography)

export const BoxHeader = styledBox({
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    padding: "19px 24px 24px 24px",
    top: "7.2vh",
    width: "96.5%",
    zIndex: 10
})

export const BoxAviso = styledBox({
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
})

export const TypographyTitulo = styledTypography({
    color: "#444",
    marginBottom: "20px"
})

export const GridPequenosAtributos = styledGrid({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start"
})

export const TypographyTituloAtributo = styledTypography({
    color: "#444",
    fontWeight: "bold"
})

export const TypographyTexto = styledTypography({
    textAlign: 'justify'
})

export const CircleIconPonto = styled(CircleIcon)({
    fontSize: "10px"
})

export const BoxTabela = styledBox({
    alignItems: "center",
    display: 'flex',
    flexDirection: "column",
    width: "100%",
})

export const GridItemFooter = styledGrid({
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
})

export const BoxConteudoModal = styled(BoxConteudo)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "30px 50px"
})

export const TypographyTituloModal = styled(TypographyTitulo)({
    color: "#00579d",
    fontWeight: "500",
    marginBottom: "0px"
})

export const BoxTituloModal = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    width: "100%"
})

export const BoxBotoesModal = styledBox({
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
})
