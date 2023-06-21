import { Box, TextField } from '@mui/material';
import { TypographyTituloAtributo } from '../../Pages/TelaProcesso/TelaProcesso.styles';
import { styled } from '@mui/material/styles';

export const BoxAtributoInfoModal = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
});

export const BoxAtributoInfoModal2 = styled(BoxAtributoInfoModal)({
    display: "grid",
    width: "40%"
});

export const BoxAtributosInfoModal = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    width: "100%"
});

export const BoxBUsBeneficiadas = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
});

export const BoxInfoModal = styled(Box)({
    display: "grid",
    justifyContent: "center",
    width: "100%"
});

export const BoxSessaoTI = styled(Box)({
    alignItems: "center",
    display: "flex",
    marginBottom: "30px",
});

export const TextFieldURL = styled(TextField)({
    marginBottom: "30px",
    width: "100%"
});

export const TypographyTituloAtributoModal = styled(TypographyTituloAtributo)({
    marginBottom: "1rem"
});