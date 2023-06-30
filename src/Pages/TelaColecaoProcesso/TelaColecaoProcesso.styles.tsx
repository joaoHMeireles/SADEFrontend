
import { Accordion, Grid, Box, TextField } from '@mui/material';
import { TypographyTexto, TypographyTitulo, TypographyTituloAtributo } from '../TelaProcesso/TelaProcesso.styles';
import { GridContainer } from '../../Components/ContainerProcesso/ContainerProcesso.styles';
import styled from '@emotion/styled';

export const AccordionProposta = styled(Accordion)({
    backgroundColor: "transparent", 
    boxShadow: "none",
    "& .MuiPaper-root": { 
        borderRadius: "0 10px 10px 0", 
        boxShadow: "none" 
    }
});

export const BoxInputsNumeros = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export const GridContainerColecao = styled(GridContainer)({
    padding: "9px 25px 25px 25px"
});

export const GridFooter = styled(Grid)({
    alignItems: "center",
    display: "flex", 
    justifyContent: "space-between"
});

export const GridProposta = styled(Grid)({
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025"
});

export const GridInfoATA = styled(Grid)({
    "& input": {
        color: "#444"
    }
});

export const TextFieldEdited = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" }
});

export const TypographyTextoColecao = styled(TypographyTexto)({
    marginLeft: "5px"
});

export const TypographyTituloDecisao = styled(TypographyTituloAtributo)({
    marginBottom: "1rem"
});

export const TypographyTituloInput = styled(TypographyTitulo)({
    fontWeight: "bold",
    margin: "2rem 0 1rem 0"
});