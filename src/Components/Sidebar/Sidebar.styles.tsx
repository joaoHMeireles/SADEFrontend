import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiTypography from '@mui/material/Typography';
import styled from '@emotion/styled';

export const ListItem = styled(MuiListItem)({
    width: "220px",
    display: 'block'
})

export const ListItemButton = styled(MuiListItemButton)({
    px: 2.5,
    minHeight: 48,
    color: "#595959",
    textDecorationColor: "transparent"
})

export const ListItemIcon = styled(MuiListItemIcon)({
    justifyContent: 'center',
    minWidth: 0
})

export const Typography = styled(MuiTypography)({
    color: "#595959",
})
