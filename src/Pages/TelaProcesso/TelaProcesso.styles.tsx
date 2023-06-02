import { Box, Grid, IconButton, TextField, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import { BotaoPrimario, BotaoSecundario, BotaoTerciario, BoxConteudo } from '../App.styles';
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)
const styledGrid = styled(Grid)
const styledTypography = styled(Typography)

export const BoxHeader = styledBox({
    backgroundColor: "rgb(255,255,255, 0.9)",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    padding: "19px 24px 24px 24px",
    top: "7.2vh",
    width: "96.5%",
    zIndex: 10
})

export const BotaoIcone = styled(IconButton)({
    marginLeft: "1vw"
})

export const BotaoPrimarioHeader = styled(BotaoPrimario)({
    marginLeft: "1vw"
})

export const BotaoSecundarioHeader = styled(BotaoSecundario)({
    marginLeft: "1vw"
})

export const BotaoTerciarioHeader = styled(BotaoTerciario)({
    marginLeft: "1vw"
})

export const BoxBotoes = styledBox({
    display: "flex",
    flexDirection: 'row-reverse',
    justifyContent: "space-between",
    width: "auto"
})

export const BoxAviso = styledBox({
    alignItems: "center",
    backgroundColor: "#FAD27190",
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
    color: "#595959",
    marginBottom: "20px"
})

export const GridPequenosAtributos = styledGrid({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start"
})

export const TypographyTituloAtributo = styledTypography({
    color: "#595959",
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
        color: "#595959",
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
    color: "#00579D",
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

export const BoxInfoModal = styledBox({
    display: "grid",
    justifyContent: "center",
    width: "100%"
})

export const BoxAtributosInfoModal = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    width: "100%"
})

export const BoxAtributoInfoModal = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
})

export const BoxBUsBeneficiadas = styledBox({
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
})

export const BoxSessaoTI = styledBox({
    alignItems: "center",
    display: "flex",
    marginBottom: "30px",
})

export const BoxAtributoInfoModal2 = styled(BoxAtributoInfoModal)({
    display: "grid",
    width: "40%"
})

export const TypographyTituloAtributoModal = styled(TypographyTituloAtributo)({
    marginBottom: "1rem"
})

export const TextFieldURL = styled(TextField)({
    marginBottom: "30px",
    width: "100%"
})