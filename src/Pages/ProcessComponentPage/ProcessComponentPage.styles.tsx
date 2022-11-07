import { Box, Container, Divider, Grid, List, ListItem, ListItemIcon, TableCell, tableCellClasses, TableRow, Typography } from '@mui/material'
import { styled, Theme, CSSObject } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
const styledBox = styled(Box)
const styledGrid = styled(Grid)
const styledTypography = styled(Typography)

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

export const SmallAttributesGrid = styledGrid({
    alignItems: "center",
    display: "flex",  
    justifyContent: "flex-start"
})


export const TitleTypography =styledTypography({
    marginBottom: "20px"
})

export const AttributeTitleTypography = styledTypography({
    fontWeight: "bold"
})

export const TextTypography = styledTypography({
    textAlign: 'justify'
})

export const DotCircleIcon = styled(CircleIcon)({
    fontSize: "10px"
})


export const StyledTableCell = styled(TableCell)(({ theme: Theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#00579d",
        color: Theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme: Theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: Theme.palette.action.hover,
    },
    
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const TableBox = styledBox({
    alignItems: "center",
    display: 'flex',
    flexDirection: "column",
    width: "100%",  
})

export const CostTableBox = styledBox({
    display: 'flex',
    justifyContent: "space-between",
    marginBottom: "30px", 
    minWidth: "40vw", 
    width: "auto"  
})

export const ContainerTableBox = styledBox({
    alignItems: "center",
    display: 'flex',
    flexDirection: "column",
    width: "auto", 
})

export const TitleCostCentersBox = styledBox({
    alignItems: "center",
    backgroundColor: "#00579d",
    borderRadius: "4px 4px 0 0",
    boxSizing: 'border-box',
    color: "#ffffff", 
    display: 'flex',
    fontFamily: "'Roboto','Helvetica','Arial',sans-serif",
    fontSize: "0.875rem",
    heigth: "auto",
    justifyContent: "center",
    padding: "19px",
    width: "100%"    
})

export const CostCentersBox = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column", 
    height: "75%",
    justifyContent: "space-evenly",
    width: "100%"
})