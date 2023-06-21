import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const ContainerGeralChat = styledBox({
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
})

export const BoxIconePessoa = styledBox({
    color: "#444",
    marginLeft: 24,
    marginRight: 24,
})

export const BoxContainerChat = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
    width: "30%",
})

export const BoxChat = styledBox({
    width: "100%",
})

export const TypographyTitulo = styledTypography({
    color: "#444"
})

export const TypographyPessoaMensagem = styledTypography({
    color: "#aaa"
})