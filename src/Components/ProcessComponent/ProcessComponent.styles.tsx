import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import styled from '@emotion/styled'
const styledBox = styled(Box)
const styledGrid = styled(Grid)
const styledTypograpfy = styled(Typography)

export const MainPaper = styled(Paper)({
    width: "90%",
    heigth: "90%",
    borderRadius: "5px"
})

export const GridProccessColorBox = styledBox({
    width: "50%",
    height: "100%",
    borderRadius: "5px 0 0 5px"
})

export const GridProccessComponent = styledGrid({
    display: "grid",
    padding: "5px",
    color: "#595959",
    height: "21vh"
})

export const GridTypography = styledTypograpfy({
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    '& span': {
        fontWeight: '500'
    }
})

export const GridLinkTypograpfy = styledTypograpfy({
    display: 'flex', 
    alignItems: "center", 
    justifyContent: "end", 
    width: "25%"
})

export const ListProccessColorBox = styledBox({
    height: "100%",
    borderRadius: "5px 0 0 5px",
    maxWidth: "13px"
})

export const ListProccessComponent = styledGrid({
    display: "flex",
    padding: "5px",
    color: "#595959",
    alignItems: "center"
})

export const ListTypography = styled(GridTypography)({
    width: "15vw"
})

export const LastListTypography = styled(ListTypography)({
    display: "flex", 
    justifyContent: "end", 
    paddingRight: "10px"
})

export const BoxCollectionComponent = styledBox({
    width: "70%", 
    margin: "none", 
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
})