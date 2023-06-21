import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxChat = styled(Box)({
    width: "100%",
});

export const BoxContainerChat = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
    width: "30%",
});

export const BoxIconePessoa = styled(Box)({
    color: "#444",
    marginLeft: 24,
    marginRight: 24,
});

export const ContainerGeralChat = styled(Box)({
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: "5px",
    display: "flex",
    height: "50px",
    justifyContent: "start",
    marginBottom: "15px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
});

export const TypographyPessoaMensagem = styled(Typography)({
    color: "#aaa"
});

export const TypographyTitulo = styled(Typography)({
    color: "#444"
});