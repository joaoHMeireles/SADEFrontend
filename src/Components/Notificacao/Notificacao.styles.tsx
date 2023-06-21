import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxNotificacao = styled(Box)({
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
});

export const NotificacaoBoxIcone = styled(Box)({
    marginLeft: 20,
});

export const NotificacaoLadoEsquerdo = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "start",
    width: "40%",
});

export const NotificacaoLadoDireito = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginRight: 20,
});

export const TypographyMensagem = styled(Typography)({
    color: "#aaa",
    marginLeft: 20
});

export const TypographyTitulo = styled(Typography)({
    color: "#444",
    marginLeft: 20
});