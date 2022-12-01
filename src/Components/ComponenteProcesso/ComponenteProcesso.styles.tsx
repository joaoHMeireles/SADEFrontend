import { Box, Grid, Paper, Typography } from '@mui/material'
import styled from '@emotion/styled'
const styledBox = styled(Box)
const styledGrid = styled(Grid)
const styledTypograpfy = styled(Typography)

export const MainPaper = styled(Paper)({
    borderRadius: "5px",
    boxShadow: "5px 5px 10px 0 #00000050",
    heigth: "90%",
    width: "90%"
})

export const BoxGridCorProcesso = styledBox({
    borderRadius: "5px 0 0 5px",
    height: "100%",
    width: "50%"
})

export const GridComponenteProcesso = styledGrid({
    color: "#595959",
    display: "grid",
    height: "21vh",
    padding: "5px"
})

export const GridTypography = styledTypograpfy({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    '& span': {
        fontWeight: '500'
    }
})

export const GridLinkTypograpfy = styledTypograpfy({
    alignItems: "center",
    display: 'flex',
    justifyContent: "end",
    width: "25%",
    '& a': {
        color: "#2382BA",
        "&:hover": {
            fontWeight: "500",
            color: "#00579d"
        }
    }
})

export const BoxListaCorProcesso = styledBox({
    borderRadius: "5px 0 0 5px",
    height: "100%",
    maxWidth: "13px"
})

export const ListaComponenteProcesso = styledGrid({
    alignItems: "center",
    color: "#595959",
    display: "flex",
    padding: "5px"
})

export const ListaTypography = styled(GridTypography)({
    width: "15vw"
})

export const UltimaListaTypography = styled(ListaTypography)({
    display: "flex",
    justifyContent: "end",
    paddingRight: "10px",
    '& a': {
        color: "#2382BA",

        "&:hover": {
            fontWeight: "500",
            color: "#00579d"
        }
    }
})

export const BoxColecaoComponente = styledBox({
    margin: "none",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "70%",
})