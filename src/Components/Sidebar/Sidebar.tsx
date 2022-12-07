import { SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.scss'
import { Drawer, Toolbar, Box, Icon, List, ListItemText, Collapse, Grid } from "@mui/material";
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
export default function MiniDrawer(props: { aberto: boolean, tamanho: string, setAberto: React.Dispatch<React.SetStateAction<boolean>>, setFiltro: React.Dispatch<SetStateAction<boolean>> }) {
  const [indexSelcionado, setIndexSelecionado] = useState(0);
  const location = useLocation()
  const itensMenu = lista.map((rota, index) => {

    if (rota.children) {
      return <DropMenuItem key={index} index={index} item={rota} aberto={props.aberto} setAberto={props.setAberto} setFiltro={props.setFiltro} indexSelecionado={indexSelcionado} setIndexSelecionado={setIndexSelecionado} />
    } else {
      return <MenuItem key={index} index={index} item={rota} aberto={props.aberto} indexSelecionado={indexSelcionado} setIndexSelecionado={setIndexSelecionado} />
    }
  })

  useEffect(() => {
    drawerWidth = props.tamanho
  })

  //fazer mudar quando atualizar a página tbm
  useLocationChange(() => {
    const opcoesSidebar = {
      home: 1
    }

    // console.log(location.pathname);
    
    const chaveLocalizacao = location.pathname.slice(1, 5)

    // console.log(chaveLocalizacao);

    const valorLocalizacao = (opcoesSidebar as any)[chaveLocalizacao]

    // console.log(valorLocalizacao);
    

    // setIndexSelecionado(valorLocalizacao)
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
 * Item padrão do menu principal
 * 
 * @param props 
 * @returns 
 */
function MenuItem(props: { index: number, item: { id: number, nome: string, rota: string, icone: JSX.Element }, aberto: boolean, indexSelecionado: number, setIndexSelecionado: React.Dispatch<SetStateAction<number>> }) {
  const selecionado = props.indexSelecionado == props.index

  return (
    <Link to={props.item.rota}>
      <SidebarListItem key={props.item.id} disablePadding >
        <Grid container>
          <Grid item xs={0.3} sx={{ backgroundColor: (selecionado ? "#00579d" : "inherit"), borderRadius: "0 5px 5px 0" }} />
          <Grid item xs={11.7}>
            <SidebarListItemButton sx={{ justifyContent: props.aberto ? 'initial' : 'center', "& .MuiSvgIcon-root": { color: (selecionado ? "#00579d" : "inherit") } }} onClick={() => { props.setIndexSelecionado(props.index) }} selected={selecionado}>
              <SidebarListItemIcon sx={{ mr: props.aberto ? 3 : 'auto' }} >
                {props.item.icone}
              </SidebarListItemIcon>
              <ListItemText primary={props.item.nome} sx={{ opacity: props.aberto ? 1 : 0 }} />
            </SidebarListItemButton>
          </Grid>
        </Grid>
      </SidebarListItem>
    </Link>
  )
}

/**
 * Item do menu principal com links em dropdown
 * 
 * @param props 
 * @returns 
 */
function DropMenuItem(props: { index: number, item: { id: number, nome: string, icone: JSX.Element, children: { id: number, nome: string, rota: string, }[] }, aberto: boolean, setAberto: React.Dispatch<React.SetStateAction<boolean>>, setFiltro: React.Dispatch<SetStateAction<boolean>>, indexSelecionado: number, setIndexSelecionado: React.Dispatch<SetStateAction<number>> }) {
  const [componenteAberto, setComponenteAberto] = useState(false);
  let itensSelecionados = false
  const rotasSecundarias = props.item.children.map((rotaSecundaria, index) => {
    const indexItem = props.index * 10 + index
    const selecionado = props.indexSelecionado == indexItem
    if (selecionado) {
      itensSelecionados = true
    }

    return (
      <Grid container key={rotaSecundaria.id}>
        <GridIndicadorItem item xs={0.3} sx={{ backgroundColor: (selecionado ? "#00579d" : "inherit") }} />
        <Grid item xs={11.7}>
          <SidebarTypography>
            <Link to={rotaSecundaria.rota} >
              <SidebarListItemButton sx={{ pl: 4 }} onClick={() => { props.setIndexSelecionado(indexItem) }} selected={selecionado} >
                <ListItemText primary={rotaSecundaria.nome} />
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

  useEffect(() => {
    if (!componenteAberto) {
      const gridCollapse = document.getElementById(`gridCollapse${props.item.id}`)
      gridCollapse?.style.setProperty("background-color", "inherit")
    }
  }, [props.indexSelecionado])

  useEffect(() => {
    const gridCollapse = document.getElementById(`gridCollapse${props.item.id}`)
    if (!componenteAberto && itensSelecionados) {
      console.log("fechou");
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