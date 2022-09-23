import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

//listas de ícones e opções do menu

const lista = [
    {
        id: 1,
        nome: "Início",
        rota: "home",
        icone: <HomeRoundedIcon />
    },
    {
        id: 2,
        nome: "Solicitações",
        rota: "home",
        icone: <FolderRoundedIcon />
    },
    {
        id: 3,
        nome: "Criar Demanda",
        rota: "home",
        icone: <AddCircleRoundedIcon />
    },
    {
        id: 4,
        nome: "Notificações",
        rota: "home",
        icone: <NotificationsRoundedIcon />
    },
    {
        id: 5,
        nome: "Chats",
        rota: "home",
        icone: <ChatBubbleRoundedIcon />
    },
]


//Menu configuration
let drawerWidth = "240";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  color: "#595959",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  color: "#595959",
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
  const location = useLocation()

  useEffect(() => {
    drawerWidth = props.tamanho
    console.log(props.open);
  })

  return (
    <>
      {location.pathname != "/" && <Drawer variant="permanent" open={props.open}>
        <Toolbar variant="dense"/>
        <List>
          {lista.map((rota) => (
            <ListItem key={rota.id} disablePadding sx={{ display: 'block' }}>
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
                  {rota.icone}
                </ListItemIcon>
                <ListItemText primary={rota.nome} sx={{ opacity: props.open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* arrumar a posição dessa budega de logout */}
        <Box sx={{width: "100%", height: "100%", display: "flex", alignItems: "flex-end"}}>
            <Box sx={{width: "40%", paddingBottom: "3rem", paddingLeft: "1rem", display: "flex", justifyContent: "space-around"}}>
                <Box sx={{width: "20px", height: "20px"}}>
                    <Icon>
                        <LogoutRoundedIcon />
                    </Icon>
                </Box>
                {props.open &&
                    `Sair`
                }
            </Box>
        </Box>
      </Drawer>
}
      </>
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