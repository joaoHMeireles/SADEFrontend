import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiTypography from '@mui/material/Typography';
import styled from '@emotion/styled';

const ListItem = styled(MuiListItem)({
    width: "220px",
    display: 'block'
})

const ListItemButton = styled(MuiListItemButton)({
    px: 2.5,
    minHeight: 48
})

const ListItemIcon = styled(MuiListItemIcon)({
    justifyContent: 'center',
    minWidth: 0
})

const Typography = styled(MuiTypography)({
    color: "#595959",
})

const styles = {
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography
}

export default styles