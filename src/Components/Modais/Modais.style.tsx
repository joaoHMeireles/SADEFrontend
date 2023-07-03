import { Box, TextField, Typography } from '@mui/material';
import { TypographyTituloAtributo } from '../../Pages/TelaProcesso/TelaProcesso.styles';
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)

export const BoxAtributoInfoModal = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
});

export const BoxAtributoInfoModal2 = styled(BoxAtributoInfoModal)({
    display: "grid",
    width: "40%"
});

export const BoxAtributosInfoModal = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    width: "100%"
});

export const BoxBUsBeneficiadas = styledBox({
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
});

export const BoxInfoModal = styledBox({
    display: "grid",
    justifyContent: "center",
    width: "100%"
});

export const BoxSessaoTI = styledBox({
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

export const BoxMotivoDevolucao = styledBox({
    color: "#444",
    padding: "8px",
    textAlign: "justify",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap"
})

export const BoxIconeFecharModal = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
})

export const BoxAtencaoModalSimilaridade = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
})

export const BoxConteudoModalDemandaSimilaridade = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
})

export const BoxLinkDemandasSimilares = styled(Box)({
    width: "80%",
    maxHeight: "10vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto",
    marginTop: 24,
    marginBottom: 24,
    '&::-webkit-scrollbar': { 
        backgroundColor: "transparent", 
        width: "5px" 
    },
    '&::-webkit-scrollbar-thumb': { 
        backgroundColor: "#00579d",
        borderRadius: "5px"
    }
})

export const TypographyAtencaoDemandaSimilar = styled(Typography)({
    color: "#00579D",
    fontSize: "20px",
    fontWeight: "bold"
})

export const TypographyFraseDemandaSimilar = styled(Typography)({
    textAlign: "center",
    marginTop: 2
})

export const TypographyLinkDemandaSimilar = styled(Typography)({
    textDecoration: "underline",
    color: "#00579d",
    cursor: "pointer",
    marginBottom: 24,
    marginTop: 24
})

export const TypographyLinkDemandasSimilar = styled(Typography)({
    textDecoration: "underline",
    color: "#00579d",
    cursor: "pointer",
    marginBottom: 8
})

export const BoxBotoesModalDemandaSimilar = styled(Box)({
    display: "flex", 
    justifyContent: "space-around", 
    alignItems: "center"
})