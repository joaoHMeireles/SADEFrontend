import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

export const NotificationBox = styledBox({
    alignItens: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    margin: 20,
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    whiteSpace: "nowrap",
})

export const NotificationLeftSide = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "start",
    width: "40%",
})

export const NotificationBoxIcon = styledBox({
    marginLeft: 20,
})

export const TypographyTitle = styledTypography({
    color: "#595959",
    marginLeft: 20
})

export const TypographyMessage = styledTypography({
    color: "#999999",
    marginLeft: 20
})

export const NotificationRightSide = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginRight: 20,
})

