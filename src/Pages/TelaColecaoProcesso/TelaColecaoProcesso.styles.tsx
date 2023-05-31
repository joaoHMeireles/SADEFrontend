
import { Accordion, Grid, Box } from '@mui/material';
import { TypographyTexto, TypographyTitulo, TypographyTituloAtributo } from '../TelaProcesso/TelaProcesso.styles';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../Components/ContainerProcesso/ContainerProcesso.styles';
const styledGrid = styled(Grid)

export const GridContainerColecao = styled(GridContainer)({
    padding: "9px 25px 25px 25px"
})

export const TypographyTextoColecao = styled(TypographyTexto)({
    marginLeft: "5px"
})

export const GridProposta = styledGrid({
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025"
})

export const AccordionProposta = styled(Accordion)({
    backgroundColor: "transparent", 
    boxShadow: "none",
    "& .MuiPaper-root": { 
        borderRadius: "0 10px 10px 0", 
        boxShadow: "none" 
    }
})

export const GridFooter = styledGrid({
    alignItems: "center",
    display: "flex", 
    justifyContent: "space-between"
})

export const TypographyTituloDecisao = styled(TypographyTituloAtributo)({
    marginBottom: "10px"
})

export const TypographyTituloInput = styled(TypographyTitulo)({
    fontWeight: "bold",
    marginBottom: "10px"
})

export const GridInfoATA = styledGrid({
    "& input": {
        color: "#595959"
    }
})

export const BoxInputsNumeros = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})