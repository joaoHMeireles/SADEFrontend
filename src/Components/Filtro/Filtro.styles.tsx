import { Box, Drawer, Typography } from "@mui/material";
import styled from "@emotion/styled";
const styledBox = styled(Box)

export const DrawerFiltro = styled(Drawer)({
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    justifyContent: "flex-start",
    zIndex: 1100,
});

export const BoxItemHeader = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
})

export const TypographyItemHeader = styled(Typography)({
    color: "#444"
})

export const BoxBotaoExcel = styledBox({
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%"
})