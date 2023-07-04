import { Box, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

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

export const BoxBarraPesquisa = styled(Box)({
    alignItems: "center",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    // height: "10%",
    // padding: 1,
    width: "40vw"
});

export const BoxBreadcrumbTituloChat = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    height: "56px",
    maxHeight: "56px",
    minHeight: "56px",
    width: "100%"
});

export const BoxBreadcrumb = styled(Box)({
    height: "56px", 
    axHeight: "56px",
    minHeight: "56px",
    width: "30%"
});

export const BoxIconeEnviar = styled(Box)({
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

export const BoxLadoDireitoTituloDemanda = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "56px",
    maxHeight: "56px",
    minHeight: "56px",
    width: "70%",
});

export const ContainerChats = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "space-between",
    height: "100%"
});

export const ContainerGeralChats = styled(Box)({
    margin: "2rem",
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

export const LadoEsquerdoChat = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%"
});

export const LadoEsquerdoGeralChats = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
    height: "100%",
    overflowX: "hidden",
    overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "30%"
});

export const LadoDiretoChat = styled(Box)({
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

export const LadoDireitoGeralChats = styled(Box)({
    alignItems: "center",
    background: "#fff",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    width: "70%",
});

export const TypographyQuantidadeMembrosLadoDireito = styled(Typography)({
    color: "#444"
});

export const TypographyTituloDemandaLadoDireito = styled(Typography)({
    color: "#444",
    fontWeight: "bold"
});

// ----------------------------------------------------------------------------

/**
 * Estilização do componente de mensagem
 */
export const BoxGeralMensagensLadoEsquerdo = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "start",
});

export const BoxGeralMensagensLadoDireito = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end"
});

export const BoxMensagemHorario = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0 2px 0 2px",
    wordWrap: "break-word",
});

export const BoxMensagemLadoEsquerdo = styled(Box)({
    background: "#EEEEEE",
    borderRadius: "5px 5px 5px 0px",
    boxShadow: "-5px 5px 10px 0 #00000025",
    // padding: 4,
    width: "auto",
});

export const BoxMensagemLadoDireito = styled(Box)({
    background: "#9ACAE580",
    borderRadius: "5px 5px 0 5px",
    boxShadow: "-5px 5px 10px 0 #00000025",
    // padding: 4,
    width: "auto",
});

export const BoxMensagensLadoDireito = styled(Box)({
    height: "100%",
    marginBottom: "1rem",
    // marginTop: 8,
    maxWidth: "40%",
    minWidth: "10%",
    position: "relative",
    right: 10,
    top: 30,
    width: "auto",
    wordWrap: "break-word",
});

export const BoxMensagensLadoEsquerdo = styled(Box)({
    height: "100%",
    marginBottom: "1rem",
    // marginTop: 8,
    maxWidth: "40%",
    minWidth: "10%",
    position: "relative",
    left: 10,
    top: 30,
    width: "auto",
    wordWrap: "break-word",
});

export const TypographyHoraMensagem = styled(Typography)({
    fontSize: "10px",
    // height: "2vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    color: "#444"
});

export const TypographyMensagemEsquerda = styled(Typography)({
    color: "#444",
    fontSize: "16px",
    textAlign: "justify",
    wordWrap: "break-word",
    width: "90%"
    // padding: "0.3rem 1rem 1rem 0"

});

export const TypographyMensagemDireita = styled(Typography)({
    color: "#444",
    fontSize: "16px",
    textAlign: "justify",
    wordWrap: "break-word",
    width: "90%"
    // padding: "0.3rem 1rem 1rem 0"
});

export const TypographyPessoa = styled(Typography)({
    color: "#00579d",
    fontSize: "16px",
    fontWeight: "bold",
});