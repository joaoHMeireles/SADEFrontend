import { Box, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
const styledBox = styled(Box)
const styledTypography = styled(Typography)

/**
 * Estilização do componente de chat
 */

export const BarraPesquisa = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    color: "#444",
    "& fieldset": { border: "none" },
    marginRight: "1rem",
    // "&::placeholder": { color: "#00579d" },
    width: "100%",
});

export const BoxBarraPesquisa = styledBox({
    alignItems: "center",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    // height: "10%",
    // padding: 1,
    width: "40vw"
});

export const BoxBreadcrumbTituloChat = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    height: "56px",
    maxHeight: "56px",
    minHeight: "56px",
    width: "100%"
});

export const BoxBreadcrumb = styledBox({
    height: "56px", 
    axHeight: "56px",
    minHeight: "56px",
    width: "30%"
});

export const BoxIconeEnviar = styledBox({
    alignItems: "center",
    backgroundColor: "#00579D",
    borderRadius: "360px",
    boxShadow: "5px 5px 10px 0 #00000025",
    display: "flex",
    height: "3rem",
    justifyContent: "center",
    maxHeight: "3rem",
    maxWidth: "3rem",
    minHeight: "3rem",
    minWidth: "3rem",
    width: "3rem",
});

export const BoxLadoDireitoTituloDemanda = styledBox({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "56px",
    maxHeight: "56px",
    minHeight: "56px",
    width: "70%",
});

export const ContainerChats = styledBox({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "space-between",
    height: "100%"
});

export const ContainerGeralChats = styledBox({
    margin: "2rem 3rem 2rem 2rem",
    height: "80vh"
});

export const InputPesquisaChat = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    color: "#444",
    "& fieldset": { border: "none" },
    marginBottom: "1rem",
    "&::placeholder": { color: "#00579d" },
    width: "90%",
});

export const LadoEsquerdoChat = styledBox({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%"
});

export const LadoEsquerdoGeralChats = styledBox({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
    height: "100%",
    overflowX: "hidden",
    overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "30%"
});

export const LadoDiretoChat = styledBox({
    // maxHeight: "75vh",
    // minHeight: "70vh",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    // '&::-webkit-scrollbar': { backgroundColor: "#00579d", borderRadius: "10px", width: "5px" },
    scrollbarColor: "#fff",
    '&::-webkit-scrollbar': { backgroundColor: "transparent", },
    width: "100%",
});

export const LadoDireitoGeralChats = styledBox({
    alignItems: "center",
    background: "#fff",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    width: "70%",
});

export const TypographyQuantidadeMembrosLadoDireito = styledTypography({
    color: "#444",
    marginRight: "5px",
    "&:hover": {
        textDecoration: "underline",
        cursor: "pointer"
    }
});

export const TypographyTituloDemandaLadoDireito = styledTypography({
    color: "#444",
    fontWeight: "bold"
});

// ----------------------------------------------------------------------------

/**
 * Estilização do componente de mensagem
 */
export const BoxGeralMensagensLadoEsquerdo = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "start",
});

export const BoxGeralMensagensLadoDireito = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end"
});

export const BoxMensagemHorario = styledBox({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // margin: "0 0 0 1rem",
    wordWrap: "break-word",
});

export const BoxMensagemLadoEsquerdo = styledBox({
    background: "#EEEEEE",
    borderRadius: "10px",
    boxShadow: "-5px 5px 10px 0 #00000025",
    padding: "0.5rem",
    marginLeft: "10px"
});

export const BoxMensagemLadoDireito = styledBox({
    background: "#9ACAE580",
    borderRadius: "10px",
    boxShadow: "-5px 5px 10px 0 #00000025",
    padding: "0.5rem",
    marginRight: "10px"
});

export const BoxMensagensLadoDireito = styledBox({
    height: "100%",
    marginBottom: "1rem",
    display: "flex",
    // marginTop: 8,
    maxWidth: "40%",
    minWidth: "10%",
    position: "relative",
    right: 10,
    top: 30,
    width: "auto",
    wordWrap: "break-word",
});

export const BoxMensagensLadoEsquerdo = styledBox({
    height: "100%",
    marginBottom: "1rem",
    display: "flex",
    // marginTop: 8,
    maxWidth: "40%",
    minWidth: "10%",
    position: "relative",
    left: 10,
    top: 30,
    width: "auto",
    wordWrap: "break-word",
});

export const TypographyHoraMensagem = styledTypography({
    alignItems: "flex-end", 
    color: "#444",
    display: "flex",
    fontSize: "10px",
    justifyContent: "center",
    // height: "2vh",
    marginLeft: "0.5rem"
});

export const TypographyMensagemEsquerda = styledTypography({
    color: "#444",
    // padding: "0.3rem 1rem 1rem 0",
    textAlign: "justify",
    width: "90%",
    wordWrap: "break-word"

});

export const TypographyMensagemDireita = styledTypography({
    color: "#444",
    // padding: "0.3rem 1rem 1rem 0"
    textAlign: "justify",
    width: "90%",
    wordWrap: "break-word"
});

export const TypographyPessoa = styledTypography({
    color: "#00579d",
    fontWeight: "bold",
    "&:hover": {
        color: "#003c6d",
        cursor: "pointer"
    }
});