import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

/**
 * Estilização do componente de chat
 */

export const ContainerGeralChats = styledBox({
    margin: 24
})

export const ContainerChats = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    height: "80%"
})

export const LadoEsquerdoGeralChats = styledBox({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 16,
    marginBottom: 16,
    maxHeight: "80vh",
    overflowX: "hidden",
    overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "25%",
})

export const LadoEsquerdoChat = styledBox({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    maxHeight: "auto",
    width: "100%",
})

export const LadoDireitoGeralChats = styledBox({
    alignItems: "center",
    background: "#EEEEEE",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "80vh",
    width: "75%",
})

export const LadoDiretoChat = styledBox({
    maxHeight: "75vh",
    minHeight: "70vh",
    overflowX: "hidden",
    overflowY: "scroll",
    '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "100%",
})

export const BoxBarraPesquisa = styledBox({
    alignItems: "center",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    height: "10%",
    padding: 1,
    width: "100%",
})

export const BarraPesquisa = styled(TextField)({
    "& input": { padding: "5px", fontSize: "12px" },
    padding: "5px",
    width: "85%",
})

// ----------------------------------------------------------------------------


/**
 * Estilização do componente de mensagem
 */

export const BoxGeralMensagensLadoDireito = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "end",
})

export const BoxGeralMensagensLadoEsquerdo = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "start",
})

export const BoxMensagensLadoDireito = styledBox({
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
})

export const BoxMensagensLadoEsquerdo = styledBox({
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
})

export const BoxMensagemLadoDireito = styledBox({
    background: "#FFF",
    borderRadius: "5px 5px 0 5px",
    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
    height: "auto",
    padding: 4,
    width: "auto",
})

export const BoxMensagemLadoEsquerdo = styledBox({
    background: "#FFF",
    borderRadius: "5px 5px 5px 0px",
    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
    height: "auto",
    padding: 4,
    width: "auto",
})

export const TypographyPessoa = styledTypography({
    color: "#00579D",
    fontSize: "16px",
    fontWeight: "bold",
})

export const TypographyMensagem = styledTypography({
    color: "#595959",
    fontSize: "16px",
})