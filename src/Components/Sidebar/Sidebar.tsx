import { useEffect } from "react";
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

let drawerWidth = "240";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    zIndex: 5,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props: {open: boolean, tamanho: string}) {

  useEffect(() => {
    drawerWidth = props.tamanho
  })

  return (
      <Drawer variant="permanent" open={props.open}>
        <Toolbar variant="dense"/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}

























// import { useLocation } from 'react-router-dom';
// import Drawer from '@mui/material/Drawer'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemText from '@mui/material/ListItemText'
// import './Sidebar.scss'
// import { createTheme, Toolbar } from "@mui/material"
// import { ThemeProvider } from '@mui/material';

// function Sidebar(props: { open: boolean, tamanho: string }) {
//     const path = useLocation()
//     const itens = ["Home", "Criar", "Notificações"]

//     const temaSidebar = createTheme({
//         components: {
//             MuiDrawer: {
//                 variants: [
//                     {
//                         props: {
//                             variant: "persistent"
//                         },
//                         style: {
                            
//                         }
//                     }
//                 ],
//                 styleOverrides: {
//                     paper: {
//                         zIndex: 5,
//                         width: props.tamanho
//                     }
//                 }
//             },
//             MuiToolbar: {
//                 styleOverrides: {
//                     dense: {
//                         minHeight: "12vh"
//                     }
//                 }
//             }
//         }
//     })

//     return (
//         <>
//             {
//                 path.pathname != "/" &&
//                 <ThemeProvider theme={temaSidebar} >
//                     <Drawer open={props.open} variant='permanent' sx={{ width: props.tamanho }}>
//                         <Toolbar variant='dense'/>
//                         <List>
//                             {itens.map((nome) => {
//                                 return (
//                                     <ListItem button key={nome}>
//                                         <ListItemText primary={nome} />
//                                     </ListItem>
//                                 )
//                             })}
//                         </List>
//                     </Drawer>
//                 </ThemeProvider>
//             }
//         </>
//     )
// }

// export default Sidebar