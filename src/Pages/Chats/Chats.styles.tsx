import { Box, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

/**
 * Estilização do componente de chat
 */

export const BarraPesquisa = styled(TextField)({
    "& input": { padding: "5px", fontSize: "12px" },
    padding: "5px",
    width: "85%",
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    color: "#444",
    "& fieldset": { border: "none" },
    "&::placeholder": { color: "#00579d" },
    marginRight: "0.5rem",
});

export const BoxIconeEnviar = styled(Box)({
    backgroundColor: "#00579D",
    borderRadius: "360px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2rem",
    height: "2rem"
})

export const BoxBarraPesquisa = styled(Box)({
    alignItems: "center",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    height: "10%",
    padding: 1,
    width: "60%",
});

export const BoxBreadcrumbTituloChat = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
})

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

export const InputPesquisaChat = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    color: "#444",
    "& fieldset": { border: "none" },
    marginBottom: "1rem",
    "&::placeholder": { color: "#00579d" },
    width: "90%",
})

export const LadoEsquerdoGeralChats = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
    // marginTop: 16,
    height: "75vh",
    // maxHeight: "80vh",
    // minHeight: "80vh",
    overflowX: "hidden",
    overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "30%",
});

export const LadoDiretoChat = styled(Box)({
    maxHeight: "75vh",
    minHeight: "70vh",
    overflowX: "hidden",
    overflowY: "auto",
    '&::-webkit-scrollbar': { backgroundColor: "transparent", },
    // '&::-webkit-scrollbar': { backgroundColor: "#00579d", borderRadius: "10px", width: "5px" },
    scrollbarColor: "#fff",
    width: "100%",
});

export const LadoDireitoGeralChats = styled(Box)({
    alignItems: "center",
    background: "#FFF",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "75vh",
    width: "70%",
    // marginTop: 16
});

export const BoxLadoDireitoTituloDemanda = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "50%"
})

export const TypographyTituloDemandaLadoDireito = styled(Typography)({
    color: "#444",
    fontWeight: "bold"
})

export const TypographyQuantidadeMembrosLadoDireito = styled(Typography)({
    color: "#444"
})

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
    background: "#EEEEEE",
    borderRadius: "5px 5px 5px 0px",
    boxShadow: "-5px 5px 10px 0 #00000025",
    padding: 4,
    width: "auto",
});

export const BoxMensagemLadoDireito = styled(Box)({
    background: "#9ACAE580",
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

export const TypographyMensagemDireita = styled(Typography)({
    color: "#444",
    fontSize: "16px",
    textAlign: "justify",
    wordWrap: "break-word",
    width: "90%"
    // padding: "0.3rem 1rem 1rem 0"
});

export const TypographyMensagemEsquerda = styled(Typography)({
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

export const BoxMensagemHorario = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0 2px 0 2px",
    wordWrap: "break-word",
})

export const TypographyHoraMensagem = styled(Typography)({
    fontSize: "10px",
    height: "2vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    color: "#444"
})