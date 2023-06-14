import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)
const styledGrid = styled(Grid)

export const GridContainer = styledGrid({
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    color: "#444",
    display: "flex",
    flexWrap: "wrap",
    height: "auto",
    marginTop: "2.5vh",
    width: "100%"
})

export const BoxCorStatus = styledBox({
    borderRadius: "10px 0 0 10px",
    height: "100%",
    width: "100%"
})

export const GridInformacao = styledGrid({
    backgroundColor: "white",
    borderRadius: "0 10px 10px 0",
    padding: "25px"
})

export const GridContainerHeader = styledGrid({
    marginBottom: "15px",
    minHeight: "80px"
})

export const GridTitulo = styledGrid({
    alignItems: "center",
    display: "flex"
})