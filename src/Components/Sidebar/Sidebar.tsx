import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.scss'
import { Drawer, Toolbar, Box, Icon, List, ListItemText, Collapse } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { SidebarListItem, SidebarListItemButton, SidebarListItemIcon, SidebarTypography} from './Sidebar.styles';

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

//estilos próprios da aplicação que necessitam das variáveis aqui presentes
let drawerWidth = "240";

/**
 * Menu lateral principal do sistema
 * 
 * @param props 
 * @returns 
 */
export default function MiniDrawer(props: { aberto: boolean, tamanho: string, setAberto: React.Dispatch<React.SetStateAction<boolean>> }) {
  const location = useLocation()
  const itensMenu = lista.map((rota, index) => {
    if (rota.children) {
      return <DropMenuItem key={index} item={rota} aberto={props.aberto} setAberto={props.setAberto} />
    } else {
      return <MenuItem key={index} item={rota} aberto={props.aberto} />
    }
  })

  useEffect(() => {
    drawerWidth = props.tamanho
  })

  return (
    <>
      {location.pathname != "/" &&
        <Sidebar variant="permanent" open={props.aberto}>
          <Toolbar variant="dense" />
          <List>
            {itensMenu}
          </List>
          {/* arrumar a posição dessa budega de logout */}
          <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end" }}>
            <Box sx={{ width: "50%", paddingBottom: "3rem", paddingLeft: "1rem", display: "flex", justifyContent: "space-around" }}>
              <Link to="/" className="link">
                <Box sx={{ width: "20px", height: "20px" }}>
                  <Icon>
                    <LogoutRoundedIcon />
                  </Icon>
                </Box>
                {props.aberto &&
                  `Sair`
                }
              </Link>
            </Box>
          </Box>
        </Sidebar>
      }
    </>
  );
}

/**
 * Item do menu principal com links em dropdown
 * 
 * @param props 
 * @returns 
 */
function DropMenuItem(props: {
  item: {
    id: number, nome: string, icone: JSX.Element,
    children: { id: number, nome: string, rota: string, }[]
  }, aberto: boolean, setAberto: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [componenteAberto, setComponenteAberto] = useState(false);
  const rotasSecundarias = props.item.children.map((rotaSecundaria) => {
    return (
      <SidebarTypography key={rotaSecundaria.id}>
        <Link to={rotaSecundaria.rota} >
          <SidebarListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={rotaSecundaria.nome} />
          </SidebarListItemButton>
        </Link>
      </SidebarTypography>
    )
  })

  useEffect(() => {
    if (!props.aberto) {
      setComponenteAberto(false)
    }
  })

  function verRotas() {
    if (!props.aberto) {
      props.setAberto(true)
    }
    setComponenteAberto(!componenteAberto)
  }

  return (
    <SidebarListItem key={props.item.id} disablePadding>
      <SidebarListItemButton sx={{ justifyContent: props.aberto ? 'initial' : 'center' }} onClick={verRotas}>
        <SidebarListItemIcon sx={{ mr: props.aberto ? 3 : 'auto' }} >
          {props.item.icone}
        </SidebarListItemIcon>
        <ListItemText primary={props.item.nome} sx={{ opacity: props.aberto ? 1 : 0 }} />
        {props.aberto &&
          <>
            {!componenteAberto ?
              <ExpandMoreRoundedIcon color="action" />
              :
              <ExpandLessRoundedIcon color="action" />
            }
          </>
        }
      </SidebarListItemButton>
      <Collapse in={componenteAberto} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {rotasSecundarias}
        </List>
      </Collapse>
    </SidebarListItem>
  )
}

/**
 * Item padrão do menu principal
 * 
 * @param props 
 * @returns 
 */
function MenuItem(props: { item: { id: number, nome: string, rota: string, icone: JSX.Element }, aberto: boolean }) {
  return (
    <Link to={props.item.rota}>
      <SidebarListItem key={props.item.id} disablePadding sx={{ display: 'block' }}>
        <SidebarListItemButton sx={{ justifyContent: props.aberto ? 'initial' : 'center' }}>
          <SidebarListItemIcon sx={{ mr: props.aberto ? 3 : 'auto' }} >
            {props.item.icone}
          </SidebarListItemIcon>
          <ListItemText primary={props.item.nome} sx={{ opacity: props.aberto ? 1 : 0 }} />
        </SidebarListItemButton>
      </SidebarListItem>
    </Link>
  )
}

const openedMixin = (): CSSObject => ({
  minWidth: drawerWidth,
  color: "#595959",
  overflowX: 'hidden',
  boxSizing: 'border-box'
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

const Sidebar = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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