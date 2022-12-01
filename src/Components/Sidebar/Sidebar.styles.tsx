import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const styleItemSelecionado = {
    backgroundColor: "transparent !important",
    color: '#00579d',
    // borderLeft: "5px solid #00579d"
    // '&:hover': {
    //     backgroundColor: "#00579d "
    // }
}

export const SidebarListItem = styled(ListItem)({
    width: "220px",
    display: 'block',
    "& .Mui-selected": {...styleItemSelecionado}
})

export const SidebarListItemButton = styled(ListItemButton)({
    px: 2.5,
    minHeight: 48,
    color: "#595959",
    textDecorationColor: "transparent"
})

export const SidebarListItemIcon = styled(ListItemIcon)({
    justifyContent: 'center',
    minWidth: 0
})

export const SidebarTypography = styled(Typography)({
    color: "#595959",
    "& .Mui-selected": {...styleItemSelecionado}
})

export const GridIndicadorItem = styled(Grid)({
    borderRadius: "0 5px 5px 0"
})