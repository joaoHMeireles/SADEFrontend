import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import styled from '@emotion/styled'

export const MainPaper = styled(Paper)({
    width: "90%", 
    heigth: "90%", 
    borderRadius: "5px"
})

export const GridProccessColorBox = styled(Box)({
    width: "50%", 
    height: "100%", 
    borderRadius: "5px 0 0 5px"
})

export const GridProccessComponent = styled(Grid)({
    display: "grid", 
    padding: "5px", 
    color: "#595959",
    // height: "19vh"
})

export const GridTypography = styled(Typography)({
    textOverflow: "ellipsis", 
    whiteSpace: "nowrap", 
    overflow: "hidden"
})

export const ListProccessColorBox = styled(Box)({
    height: "100%", 
    borderRadius: "5px 0 0 5px", 
    maxWidth: "13px"
})

export const ListProccessComponent = styled(Grid)({
    display: "flex", 
    padding: "5px", 
    color: "#595959", 
    alignItems: "center"
})

export const ListTypography = styled(GridTypography)({
    width: "15vw"
})
