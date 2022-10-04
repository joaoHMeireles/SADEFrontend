import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import List from '@mui/material/List';
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import styles from './Sidebar.styles';
const ListItem = styles.ListItem
const ListItemButton = styles.ListItemButton
const ListItemIcon = styles.ListItemIcon
const Typography = styles.Typography

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
    icone: <FolderRoundedIcon />,
    children: [
      {
        id: 1,
        nome: "Enviadas",
        rota: "mydemands"
      },
      {
        id: 2,
        nome: "Rascunhos",
        rota: "mydrafts"
      }
    ]
  },
  {
    id: 3,
    nome: "Criar",
    icone: <AddCircleRoundedIcon />,
    children: [
      {
        id: 1,
        nome: "Demanda",
        rota: "createdemand"
      },
      {
        id: 2,
        nome: "Proposta",
        rota: "createproposal"
      },
      {
        id: 3,
        nome: "Pauta",
        rota: "createagenda"
      }
    ]
  },
  {
    id: 4,
    nome: "Notificações",
    rota: "notifications",
    icone: <NotificationsRoundedIcon />
  },
  {
    id: 5,
    nome: "Chats",
    rota: "chats",
    icone: <ChatBubbleRoundedIcon />
  },
]

//Menu configuration
let drawerWidth = "240";

const openedMixin = (): CSSObject => ({
  minWidth: drawerWidth,
  color: "#595959",
  overflowX: 'hidden',
  boxSizing: 'border-box',
});

const closedMixin = (theme: Theme): CSSObject => ({
  color: "#595959",
  overflowX: 'hidden',
  boxSizing: 'border-box',
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


//Tipos de itens do menu
function DropMenuItem(props: {
  item: {
    id: number, nome: string, icone: JSX.Element,
    children: { id: number, nome: string, rota: string, }[]
  }, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [aberto, setAberto] = useState(false);
  const rotasSecundarias = props.item.children.map((rotaSecundaria) => {
    return (
      <Typography >
        <Link key={rotaSecundaria.id} to={rotaSecundaria.rota} >
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={rotaSecundaria.nome} />
          </ListItemButton>
        </Link>
      </Typography>
    )
  })

  useEffect(() => {
    if (!props.open) {
      setAberto(false)
    }
  })

  function verRotas() {
    if (!props.open) {
      props.setOpen(true)
    }
    setAberto(!aberto)
  }

  return (
    <ListItem key={props.item.id} disablePadding>
      <ListItemButton sx={{ justifyContent: props.open ? 'initial' : 'center' }} onClick={verRotas}>
        <ListItemIcon sx={{ mr: props.open ? 3 : 'auto' }} >
          {props.item.icone}
        </ListItemIcon>
        <ListItemText primary={props.item.nome} sx={{ opacity: props.open ? 1 : 0 }} />
        {props.open &&
          <>
            {!aberto ?
              <ExpandMoreRoundedIcon color="action" />
              :
              <ExpandLessRoundedIcon color="action" />
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

function MenuItem(props: { item: { id: number, nome: string, rota: string, icone: JSX.Element }, open: boolean }) {
  return (
    <Link to={props.item.rota}>
      <ListItem key={props.item.id} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={{ justifyContent: props.open ? 'initial' : 'center' }}>
          <ListItemIcon sx={{ mr: props.open ? 3 : 'auto' }} >
            {props.item.icone}
          </ListItemIcon>
          <ListItemText primary={props.item.nome} sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export default function MiniDrawer(props: { open: boolean, tamanho: string, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const location = useLocation()
  const itensMenu = lista.map((rota, index) => {
    if (rota.children) {
      return <DropMenuItem key={index} item={rota} open={props.open} setOpen={props.setOpen} />
    } else {
      return <MenuItem key={index} item={rota} open={props.open} />
    }
  })

  useEffect(() => {
    drawerWidth = props.tamanho
  })

  return (
    <>
      {location.pathname != "/" && <Drawer variant="permanent" open={props.open}>
        <Toolbar variant="dense" />
        <List>
          {itensMenu}
        </List>
        {/* arrumar a posição dessa budega de logout */}
        <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end" }}>
          <Box sx={{ width: "40%", paddingBottom: "3rem", paddingLeft: "1rem", display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ width: "20px", height: "20px" }}>
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