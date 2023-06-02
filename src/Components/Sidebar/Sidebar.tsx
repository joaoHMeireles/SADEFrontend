import { SetStateAction, useContext, useEffect, useState } from "react";
import { TextReaderContext } from "../TextReaderContext/TextReaderContext";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.scss'
import { Drawer, Toolbar, Box, Icon, List, ListItemText, Collapse, Grid, Badge } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { GridIndicadorItem, SidebarListItem, SidebarListItemButton, SidebarListItemIcon, SidebarTypography } from "./Sidebar.styles";
import { useLocationChange } from "../../utils";
import api from "../../api/api";

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
      },
      {
        id: 4,
        nome: "Ata",
        rota: "createata"
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
export default function MiniDrawer(props: { aberto: boolean, tamanho: string, setAberto: React.Dispatch<React.SetStateAction<boolean>>, setFiltro: React.Dispatch<SetStateAction<boolean>> }) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const location = useLocation()
  const cargoUser = localStorage.getItem("TIPOUSUARIO")
  const itensMenu = lista.map((rota, index) => {

    if (rota.nome == "Criar" && (cargoUser == "Solicitante" || cargoUser == "GerenteNegocio")) {
      const rotaArrumada = {
        id: rota.id,
        nome: rota.nome + " demanda",
        rota: rota.children ? (rota.children.length != 0 ? (rota.children[0].rota) : "") : "",
        icone: rota.icone
      }

      return <MenuItem key={index} index={index} item={rotaArrumada} aberto={props.aberto} />
    }

    if (rota.children) {
      return <DropMenuItem key={index} index={index} item={rota} aberto={props.aberto} setAberto={props.setAberto} setFiltro={props.setFiltro} />
    } else {
      return <MenuItem key={index} index={index} item={rota} aberto={props.aberto} />
    }
  })

  useEffect(() => {
    drawerWidth = props.tamanho
  })

  function deslogar() {
    api.get("/logout")
    localStorage.clear()
  }

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
              <Link to="/" className="link" onClick={deslogar}>
                <Box sx={{ width: "20px", height: "20px" }}>
                  <Icon>
                    <LogoutRoundedIcon />
                  </Icon>
                </Box>
                {props.aberto &&
                  <span onClick={lerTexto}>Sair</span>
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
 * Item padrão do menu principal
 * 
 * @param props 
 * @returns 
 */
function MenuItem(props: { index: number, item: { id: number, nome: string, rota: string, icone: JSX.Element }, aberto: boolean }) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [selecionado, setSelecionado] = useState(false)
  const location = useLocation()


  useEffect(() => {
    if (location.pathname.slice(1) == props.item.rota) {
      setSelecionado(true)
    } else {
      setSelecionado(false)
    }
  })

  return (
    <Link to={props.item.rota}>
      <SidebarListItem key={props.item.id} disablePadding >
        <Grid container>
          <Grid item xs={0.3} sx={{ backgroundColor: (selecionado ? "#00579d" : "inherit"), borderRadius: "0 5px 5px 0" }} />
          <Grid item xs={11.7}>
            {props.item.nome == "Notificações" ?
              props.aberto ? (
                <SidebarListItemButton sx={{ justifyContent: props.aberto ? 'initial' : 'center', "& .MuiSvgIcon-root": { color: (selecionado ? "#00579d" : "inherit") } }} selected={selecionado}>
                  <SidebarListItemIcon sx={{ mr: props.aberto ? 3 : 'auto' }} >
                    <Badge variant="dot" color="primary">
                      {props.item.icone}
                    </Badge>
                  </SidebarListItemIcon>
                  <ListItemText primary={props.item.nome} sx={{ opacity: props.aberto ? 1 : 0 }} />
                </SidebarListItemButton>
              ) : (
                <SidebarListItemButton sx={{ justifyContent: props.aberto ? 'initial' : 'center', "& .MuiSvgIcon-root": { color: (selecionado ? "#00579d" : "inherit") } }} selected={selecionado}>
                  <Badge variant="dot" color="primary">
                    <SidebarListItemIcon sx={{ mr: props.aberto ? 3 : 'auto' }} >
                      {props.item.icone}
                    </SidebarListItemIcon>
                  </Badge>
                  <ListItemText primary={props.item.nome} sx={{ opacity: props.aberto ? 1 : 0 }} />
                </SidebarListItemButton>
              ) : (
                <SidebarListItemButton sx={{ justifyContent: props.aberto ? 'initial' : 'center', "& .MuiSvgIcon-root": { color: (selecionado ? "#00579d" : "inherit") } }} selected={selecionado}>
                  <SidebarListItemIcon sx={{ mr: props.aberto ? 3 : 'auto' }} >
                    {props.item.icone}
                  </SidebarListItemIcon>
                  <ListItemText primary={props.item.nome} sx={{ opacity: props.aberto ? 1 : 0 }} />
                </SidebarListItemButton>
              )}
          </Grid>
        </Grid>
      </SidebarListItem>
    </Link >
  )
}

/**
 * Item do menu principal com links em dropdown
 * 
 * @param props 
 * @returns 
 */
function DropMenuItem(props: { index: number, item: { id: number, nome: string, icone: JSX.Element, children: { id: number, nome: string, rota: string, }[] }, aberto: boolean, setAberto: React.Dispatch<React.SetStateAction<boolean>>, setFiltro: React.Dispatch<SetStateAction<boolean>> }) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [componenteAberto, setComponenteAberto] = useState(false);
  const [itensSelecionados, setItensSelecionados] = useState(false)
  const location = useLocation()

  const rotasSecundarias = props.item.children.map((rotaSecundaria) => {
    const selecionado = location.pathname.slice(1) == rotaSecundaria.rota

    if (!itensSelecionados) {
      if (selecionado) {
        setItensSelecionados(true)
      }
    }

    return (
      <Grid container key={rotaSecundaria.id}>
        <GridIndicadorItem item xs={0.3} sx={{ backgroundColor: (selecionado ? "#00579d" : "inherit") }} />
        <Grid item xs={11.7}>
          <SidebarTypography>
            <Link to={rotaSecundaria.rota} >
              <SidebarListItemButton sx={{ pl: 4 }} selected={selecionado} >
                <ListItemText primary={rotaSecundaria.nome} onClick={lerTexto}/>
              </SidebarListItemButton>
            </Link>
          </SidebarTypography>
        </Grid>
      </Grid>
    )
  })

  useEffect(() => {
    if (!props.aberto) {
      setComponenteAberto(false)
    }
  })

  useLocationChange(() => {
    if (!componenteAberto) {
      const gridCollapse = document.getElementById(`gridCollapse${props.item.id}`)
      gridCollapse?.style.setProperty("background-color", "inherit")
    }

    setItensSelecionados(false)
  })

  useEffect(() => {
    const gridCollapse = document.getElementById(`gridCollapse${props.item.id}`)

    if (!componenteAberto && itensSelecionados) {
      gridCollapse?.style.setProperty("background-color", "#00579d")
    } else {
      gridCollapse?.style.setProperty("background-color", "inherit")
    }
  }, [componenteAberto])

  function verRotas() {
    if (!props.aberto) {
      props.setFiltro(false)
      props.setAberto(true)
    }

    setComponenteAberto(!componenteAberto)
  }

  return (
    <SidebarListItem key={props.item.id} disablePadding>
      <Grid container>
        {!componenteAberto && <GridIndicadorItem id={`gridCollapse${props.item.id}`} item xs={0.3} />}
        <Grid item xs={11.7}>
          <SidebarListItemButton sx={{ justifyContent: props.aberto ? 'initial' : 'center' }} onClick={verRotas}>
            <SidebarListItemIcon sx={{ mr: props.aberto ? 3 : 'auto' }} >
              {props.item.icone}
            </SidebarListItemIcon>
            <ListItemText onClick={lerTexto} primary={props.item.nome} sx={{ opacity: props.aberto ? 1 : 0 }} />
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
        </Grid>
      </Grid>
    </SidebarListItem>
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