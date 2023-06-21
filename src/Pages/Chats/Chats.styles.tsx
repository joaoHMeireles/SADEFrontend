import { Box, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

/**
 * Estilização do componente de chat
 */

export const BarraPesquisa = styled(TextField)({
    "& input": { padding: "5px", fontSize: "12px" },
    padding: "5px",
    width: "85%",
});

export const BoxBarraPesquisa = styled(Box)({
    alignItems: "center",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    height: "10%",
    padding: 1,
    width: "100%",
});

export const ContainerChats = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    height: "80%"
});

export const ContainerGeralChats = styled(Box)({
    margin: 24
});

export const LadoEsquerdoChat = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    maxHeight: "auto",
    minHeight: "auto",
    width: "100%",
});

export const LadoEsquerdoGeralChats = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 16,
    marginBottom: 16,
    height: "80vh",
    // maxHeight: "80vh",
    // minHeight: "80vh",
    overflowX: "hidden",
    overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "25%",
});

export const LadoDiretoChat = styled(Box)({
    maxHeight: "75vh",
    minHeight: "70vh",
    overflowX: "hidden",
    overflowY: "scroll",
    '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "100%",
});

export const LadoDireitoGeralChats = styled(Box)({
    alignItems: "center",
    background: "#eee",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "80vh",
    width: "75%",
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
    justifyContent: "end",
});

export const BoxMensagemLadoEsquerdo = styled(Box)({
    background: "#fff",
    borderRadius: "5px 5px 5px 0px",
    boxShadow: "-5px 5px 10px 0 #00000025",
    padding: 4,
    width: "auto",
});

export const BoxMensagemLadoDireito = styled(Box)({
    background: "#fff",
    borderRadius: "5px 5px 0 5px",
    boxShadow: "-5px 5px 10px 0 #00000025",
    padding: 4,
    width: "auto",
});

export const BoxMensagensLadoDireito = styled(Box)({
    height: "100%",
    marginBottom: 8,
    marginTop: 8,
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
    marginBottom: 8,
    marginTop: 8,
    maxWidth: "40%",
    minWidth: "10%",
    position: "relative",
    left: 10,
    top: 30,
    width: "auto",
    wordWrap: "break-word",
});

export const TypographyMensagem = styled(Typography)({
    color: "#444",
    fontSize: "16px",
});

export const TypographyPessoa = styled(Typography)({
    color: "#00579d",
    fontSize: "16px",
    fontWeight: "bold",
});