import { Grid, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import styled from '@emotion/styled';

const styleItemSelecionado = {
    backgroundColor: "transparent !important",
    color: '#00579d'
};

export const GridIndicadorItem = styled(Grid)({
    borderRadius: "0 5px 5px 0"
});

export const SidebarListItem = styled(ListItem)({
    width: "220px",
    display: 'block',
    "& .Mui-selected": { ...styleItemSelecionado }
});

export const SidebarListItemButton = styled(ListItemButton)({
    px: 2.5,
    minHeight: 48,
    color: "#444",
    textDecorationColor: "transparent"
});

export const SidebarListItemIcon = styled(ListItemIcon)({
    justifyContent: 'center',
    minWidth: 0
});

export const SidebarTypography = styled(Typography)({
    color: "#444",
    "& .Mui-selected": { ...styleItemSelecionado }
});