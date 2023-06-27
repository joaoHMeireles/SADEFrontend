import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxChat = styled(Box)({
    width: "100%",
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center"
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#444"
})

export const BoxIconePessoa = styled(Box)({
    color: "#444",
    // marginLeft: 24,
    // marginRight: 24,
});

export const ContainerGeralChat = styled(Box)({
    alignItems: "center",
    borderRadius: "10px",
    display: "flex",
    height: "auto",
    justifyContent: "space-around",
    marginBottom: "1rem",
    padding: "5px",
    width: "90%",
});

export const ContainerGeralChatEscolhido = styled(Box)({
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: "10px",
    display: "flex",
    height: "auto",
    justifyContent: "space-around",
    marginBottom: "1rem",
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