import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const ContainerGeneralChat = styledBox({
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "start",
    height: "50px",
    marginBottom: "15px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    whiteSpace: "nowrap",
})

export const BoxIconPerson = styledBox({
    color: "#595959",
    marginLeft: 24,
    marginRight: 24,
})

export const BoxContainerChat = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    width: "30%",
})

export const BoxChat = styledBox({
    width: "100%",
})

export const TypographyTitle = styledTypography({
    color: "#595959"
})

export const TypographyPersonMessage = styledTypography({
    color: "#999999"
})