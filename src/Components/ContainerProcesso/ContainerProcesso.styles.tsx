import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
const styledBox = styled(Box)
const styledGrid = styled(Grid)

export const GridContainer = styledGrid({
    borderRadius: "10px",
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    color: "#595959"
    display: "flex",
    flexWrap: "wrap",
    height: "auto",
    marginTop: "2.5vh",
    width: "100%",
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