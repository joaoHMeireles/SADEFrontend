import { Box, TextField, Typography } from '@mui/material';
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
