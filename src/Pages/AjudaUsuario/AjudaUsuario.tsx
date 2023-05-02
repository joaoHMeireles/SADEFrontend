import "./AjudaUsuario.scss";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Box from "@mui/material/Box";
import { BoxConteudo } from "../App.styles";
import { BoxHeader } from "../TelaProcesso/TelaProcesso.styles";
import { Toolbar } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function AjudaUsuario(props: { aberto: boolean, sidebarAberta: boolean }) {
  const [atividadesPrincipaisOpen, setAtividadesPrincipaisopen] = useState(true);
  const [atividadesSecundariasOpen, setAtividadesSecundariasOpen] = useState(true);

  const atividadesPrincipaisClick = () => {
    setAtividadesPrincipaisopen(!atividadesPrincipaisOpen);
  };

  const atividadesSecundariasClick = () => {
    setAtividadesSecundariasOpen(!atividadesSecundariasOpen);
  };

  return (
    <>
      <BoxHeader sx={{ width: (props.sidebarAberta ? "88.35%" : "96.5%") }}>
        <Breadcrumb />
      </BoxHeader>

      <Toolbar />

      <BoxConteudo>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItemButton>
            <ListItemText primary="INTRODUÇÃO" />
          </ListItemButton>

          <ListItemButton onClick={atividadesPrincipaisClick}>
            <ListItemText primary="ATIVIDADES PRINCIPAIS" />
            {atividadesPrincipaisOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={atividadesPrincipaisOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Criar Demanda" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Avaliar Demanda (A)" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Avaliar Demanda (GN)" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Adicionar informações na Demanda(A)" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Criar Proposta" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Criar Pauta" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Informar o parecer da Comissão(A)" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Criar ATA" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Informar o parecer da Diretoria Geral" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={atividadesSecundariasClick}>
            <ListItemText primary="ATIVIDADES SECUNDÁRIAS" />
            {atividadesSecundariasOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={atividadesSecundariasOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Iniciar Workflow de Aprovação(A)" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Avaliar Workflow de Aprovação(GN/GTI)" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </BoxConteudo>
    </>
  );
}