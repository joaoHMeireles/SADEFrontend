import { Box, Grid, IconButton, TableCell, tableCellClasses, TableContainer, TableRow, TextField ,Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import { BotaoPrimario, BotaoSecundario, BotaoTerciario, BoxConteudo } from '../App.styles';
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)
const styledGrid = styled(Grid)
const styledTypography = styled(Typography)

export const BoxHeader = styledBox({
    backgroundColor: "rgb(255,255,255, 0.9)",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    padding: "24px",
    top: "7.2vh",
    width: "96.5%",
    boxSizing: "border-box",
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
    borderRadius: "30px 0 0 30px",
    display: "flex",
    justifyContent: "space-evenly",
    right: "-155px",
    position: "fixed",   
    padding: "20px 10px",   
    top: "180px",
    width: "200px", 
    '&:hover': { 
        right: "-15px" ,
        transition: 'ease-in-out', 
        transitionDuration: "0.3s"
    }
})

export const GridContainer = styledGrid({
    borderRadius: "10px",
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    display: "flex",
    flexWrap: "wrap",
    height: "auto",
    marginTop: "2.5vh",
    width: "96.5%",
    color: "#595959"
})

export const BoxCorStatus = styledBox({
    borderRadius: "10px 0 0 10px",
    height: "100%",
    width: "100%"
})

export const GridInformacao = styledGrid({
    backgroundColor: "white",
    borderRadius: "0 10px 10px 0",
    padding: "25px"
})

export const GridContainerHeader = styledGrid({
    marginBottom: "15px",
    minHeight: "80px"
})

export const GridTitulo = styledGrid({
    alignItems: "center",
    display: "flex"
})

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

export const TypographyTitulo = styledTypography({
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

export const TableContainerEstilizado = styled(TableContainer)({
    borderRadius: "5px",
    boxShadow: "5px 5px 10px 0 #00000050",
})

export const TableCellEstilzada = styled(TableCell)(({ theme: Theme }) => ({
    color: "#595959",
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#00579d",
        color: Theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const TableRowEstilizada = styled(TableRow)(({ theme: Theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: Theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const BoxTabelaCusto = styledBox({
    display: 'flex',
    justifyContent: "space-between",
    marginBottom: "30px",
    minWidth: "40vw",
    width: "auto"
})

export const BoxContainerTabela = styledBox({
    alignItems: "center",
    display: 'flex',
    flexDirection: "column",
    width: "auto",
})

export const BoxContainerCentroCusto = styledBox({
    boxShadow: "5px 5px 10px 0 #00000050",
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