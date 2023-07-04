import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxChat = styled(Box)({
    alignItems: "center",
    display:"flex",
    justifyContent: "space-between",
    width: "100%"
});

export const BoxContainerChat = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
    width: "90%"
});

export const TypographyHoraMensagem = styled(Typography)({
    alignItems: "center",
    color: "#aaa",
    display: "flex",
    fontSize: "10px",
    justifyContent: "center",
})

export const BoxIconePessoa = styled(Box)({
    color: "#444",
    marginRight: "1rem"
});

export const ContainerGeralChat = styled(Box)({
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    display: "flex",
    height: "4rem",
    justifyContent: "flex",
    marginBottom: "1rem",
    maxHeight: "4rem",
    minHeight: "4rem",
    padding: "0rem 1rem",
    width: "90%",
});

export const ContainerGeralChatEscolhido = styled(Box)({
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxSizing: "border-box",
    display: "flex",
    height: "4rem",
    justifyContent: "flex-start",
    marginBottom: "1rem",
    maxHeight: "4rem",
    minHeight: "4rem",
    padding: "0rem 1rem",
    width: "90%",
});

export const TypographyPessoaMensagem = styled(Typography)({
    color: "#aaa",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

export const TypographyTitulo = styled(Typography)({
    color: "#444",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%"
});