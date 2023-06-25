import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxChat = styled(Box)({
    width: "100%",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    // whiteSpace: "nowrap",
});

export const BoxContainerChat = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
    width: "80%",
});

export const TypographyHoraMensagem = styled(Typography)({
    fontSize: "10px",
    height: "5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
})

export const BoxIconePessoa = styled(Box)({
    color: "#444",
    // marginLeft: 24,
    // marginRight: 24,
});

export const ContainerGeralChat = styled(Box)({
    alignItems: "center",
    borderRadius: "5px",
    display: "flex",
    height: "auto",
    justifyContent: "space-around",
    marginBottom: "15px",
    padding: "5px",
    width: "90%",
});

export const ContainerGeralChatEscolhido = styled(Box)({
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: "5px",
    display: "flex",
    height: "auto",
    justifyContent: "space-around",
    marginBottom: "15px",
    padding: "5px",
    width: "90%",
});

export const TypographyPessoaMensagem = styled(Typography)({
    color: "#aaa",
});

export const TypographyTitulo = styled(Typography)({
    color: "#444",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%"
});