
import { Accordion, Grid } from '@mui/material';
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
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
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