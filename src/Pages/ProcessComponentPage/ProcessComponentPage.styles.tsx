import styled from "@emotion/styled"
import { Box, Container, Divider, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material'
const styledBox = styled(Box)
const styledGrid = styled(Grid)

export const HeaderBox = styledBox({
    backgroundColor: "rgb(255,255,255, 0.9)",
    display: "flex",
    position: "fixed",
    padding: "24px",
    top: "7.2vh",
    width: "100%",
    zIndex: 10
})

export const MainContainerGrid = styledGrid({
    borderRadius: "10px",
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    display: "flex",
    flexWrap: "wrap",
    height: "auto",
    marginTop: "2.5vh",
    width: "100%"
})

export const StatusColorBox = styledBox({
    borderRadius: "10px 0 0 10px",
    height: "100%",
    width: "100%"
})

export const MainInfoGrid = styledGrid({
    backgroundColor: "white",
    borderRadius: "0 10px 10px 0",
    padding: "25px"
})

export const HeaderContainerGrid = styledGrid({
    marginBottom: "15px",
    minHeight: "80px"
})

export const TitleGrid = styledGrid({
    alignItems: "center",
    display: "flex"
})

export const FlagContainerBox = styledBox({
    display: "flex",
    height: '100%',
    justifyContent: "center"
})

export const FlagBox = styledBox({
    alignItems: "end",
    display: "flex",
    maxHeight: 84,
    position: "relative",
    top: -25,
    width: 40,
    zIndex: 0
})

export const FlagTriangleBox = styledBox({
    borderBottom: "22px solid white",
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    height: 0,
    width: 0
})