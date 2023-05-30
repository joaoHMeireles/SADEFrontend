import { Box, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import { TypographyTituloAtributo } from '../../Pages/TelaProcesso/TelaProcesso.styles';
const styledBox = styled(Box)


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