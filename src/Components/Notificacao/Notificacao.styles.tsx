import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const BoxNotificacao = styledBox({
    alignItens: "center",
    backgroundColor: "#eee",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    margin: 20,
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    whiteSpace: "nowrap",
})

export const NotificacaoLadoEsquerdo = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "start",
    width: "40%",
})

export const NotificacaoBoxIcone = styledBox({
    marginLeft: 20,
})

export const TypographyTitulo = styledTypography({
    color: "#444",
    marginLeft: 20
})

export const TypographyMensagem = styledTypography({
    color: "#aaa",
    marginLeft: 20
})

export const NotificacaoLadoDireito = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginRight: 20,
})

