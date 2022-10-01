import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
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
import { Collapse } from "@mui/material";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

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
        rota: "solitations",
        icone: <FolderRoundedIcon />,
        children: [
          {
            id: 1,
            nome: "Enviadas",
            rota: "solitations\\sent"
          },
          {
            id: 2,
            nome: "Rascunhos",
            rota: "solitations\\drafts"
          }
        ]
    },
    {
        id: 3,
        nome: "Criar",
        rota: "create",
        icone: <AddCircleRoundedIcon />,
        children: [
          {
            id: 1,
            nome: "Demanda",
            rota: "create\\demand"
          },
          {
            id: 2,
            nome: "Proposta",
            rota: "create\\proposal"
          },
          {
            id: 3,
            nome: "Pauta",
            rota: "create\\agenda"
          }
        ]
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

const openedMixin = (): CSSObject => ({
  minWidth: drawerWidth,
  color: "#595959",
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  color: "#595959",
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    minWidth: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    zIndex: 1100,
    ...(open && {
      ...openedMixin(),
      '& .MuiDrawer-paper': openedMixin(),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const ListItem = styled(MuiListItem)(
  {
    width: "220px"
  }
)

function DropMenuItem(props: {item: { id: number, nome: string, rota: string, icone: JSX.Element, 
  children: { id: number, nome: string, rota: string, }[]}, open: boolean}){
  const [aberto, setAberto] = useState(false);
  const rotasSecundarias = props.item.children.map((rotaSecundaria) => {
    return(
      <ListItemButton key={rotaSecundaria.id} sx={{ pl: 4 }}>
        <ListItemText primary={rotaSecundaria.nome}/>
      </ListItemButton>
    )
  })

  useEffect(() => {
    if(!props.open){
      setAberto(false)
    }
  })
  
function verRotas(){
  setAberto(!aberto)
}

  return(
    <ListItem key={props.item.id} disablePadding sx={{ display: 'block'}}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: props.open ? 'initial' : 'center',
          px: 2.5,
        }}
        onClick={verRotas}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: props.open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {props.item.icone}
        </ListItemIcon>
        <ListItemText primary={props.item.nome} sx={{ opacity: props.open ? 1 : 0 }} />
        {props.open &&
          <>
            {!aberto ?
              <ExpandMoreRoundedIcon color="action"/>
            :
              <ExpandLessRoundedIcon color="action"/>
            }
          </>
        }
      </ListItemButton>
      <Collapse in={aberto} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {rotasSecundarias}
        </List>
      </Collapse>
    </ListItem>
  )
}

function MenuItem(props: {item: { id: number,nome: string, rota: string, icone: JSX.Element}, open: boolean}){

  return(
    <ListItem key={props.item.id} disablePadding sx={{ display: 'block' }}>
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
          {props.item.icone}
        </ListItemIcon>
        <ListItemText primary={props.item.nome} sx={{ opacity: props.open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}

export default function MiniDrawer(props: {open: boolean, tamanho: string}) {
  const location = useLocation()
  const itensMenu = lista.map((rota) => {
    if(rota.children){
      return <DropMenuItem item={rota} open={props.open}/>
    } else {
      return <MenuItem item={rota} open={props.open}/>
    }
  })

  useEffect(() => {
    drawerWidth = props.tamanho
  })

  return (
    <>
      {location.pathname != "/" && <Drawer variant="permanent" open={props.open}>
        <Toolbar variant="dense"/>
        <List>
          {itensMenu}
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