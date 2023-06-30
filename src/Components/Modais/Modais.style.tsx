import { Box, TextField } from '@mui/material';
import { TypographyTituloAtributo } from '../../Pages/TelaProcesso/TelaProcesso.styles';
import styled from '@emotion/styled';

export const BoxAtributoInfoModal = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start"
});

export const BoxAtributoInfoModal2 = styled(BoxAtributoInfoModal)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%"
});

export const BoxAtributosInfoModal = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
    width: "100%"
});

export const BoxBUsBeneficiadas = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "2rem"
});

export const BoxInfoModal = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%"
});

export const BoxMotivoDevolucao = styled(Box)({
    color: "#444",
    padding: "8px",
    textAlign: "justify",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap"
})

export const BoxSessaoTI = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "2rem"
});

export const TextFieldEdited = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" }
})

export const TextFieldURL = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    width: "100%"
});

export const TypographyTituloAtributoModal = styled(TypographyTituloAtributo)({
    marginBottom: "1rem"
});