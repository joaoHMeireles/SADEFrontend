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
    margin: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    whiteSpace: "nowrap",
})

export const NotificationLeftSide = styledBox({
    width: "40%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
})

export const NotificationBoxIcon = styledBox({
    marginX: 3
})

export const TypographyTitle = styledTypography({
    color: "#595959"
})

export const TypographyMessage = styledTypography({
    color: "#999999"
})

export const NotificationRightSide = styledBox({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
})

