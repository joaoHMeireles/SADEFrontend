import "./AjudaUsuario.scss";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Box from "@mui/material/Box";
import { BoxConteudo } from "../App.styles";
import { BoxHeader } from "../TelaProcesso/TelaProcesso.styles";
import { Toolbar } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import { Container, Lista, FirstColumn, SecondColumn } from "./AjudaUsuario.styles";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Introducao, CriarDemanda, AvaliarDemandaA, AvaliarDemandaGN, AdicionarInfoDemanda, CriarProposta, CriarPauta, InformarParecerComissao, CriarATA, InformarParecerDiretoriaGeral, IniciarWorkflow, AvaliarWorkflow } from "./Componentes/Componentes";

export default function AjudaUsuario(props: { aberto: boolean, sidebarAberta: boolean }) {
  const [atividadesPrincipaisOpen, setAtividadesPrincipaisopen] = useState(false);
  const [atividadesSecundariasOpen, setAtividadesSecundariasOpen] = useState(false);
  const [componentes, setComponentes] = useState<any>(Introducao);
  const [cor, setCor] = useState(0);

  const usuarioLogado = localStorage.getItem("TIPOUSUARIO");

  const atividadesPrincipaisClick = () => {
    setAtividadesPrincipaisopen(!atividadesPrincipaisOpen);
  };

  const atividadesSecundariasClick = () => {
    setAtividadesSecundariasOpen(!atividadesSecundariasOpen);
  };

  useEffect(() => {
    console.log(cor)
  }, [cor])

  return (
    <Box>
      <BoxHeader sx={{ width: (props.sidebarAberta ? "88.35%" : "96.5%") }}>
        <Breadcrumb />
      </BoxHeader>

      <Toolbar />

      <BoxConteudo>
        <Container>
          <FirstColumn>
            <Lista>
              <ListItemButton onClick={() => {
                setComponentes(Introducao);
                setCor(0);
              }}>
                {cor == 0 ?
                  <ListItemText primary="INTRODUÇÃO" sx={{ color: "#00579d", fontWeight: "bold" }} />
                  :
                  <ListItemText primary="INTRODUÇÃO" />}
              </ListItemButton>

              <ListItemButton onClick={atividadesPrincipaisClick}>
                <ListItemText primary="ATIVIDADES PRINCIPAIS" />
                {atividadesPrincipaisOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={atividadesPrincipaisOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(CriarDemanda);
                    setCor(1);
                  }}>
                    {cor == 1 ?
                      <ListItemText primary="Criar Demanda" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Criar Demanda" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(AvaliarDemandaA);
                    setCor(2);
                  }}>
                    {cor == 2 ?
                      <ListItemText primary="Avaliar Demanda (A)" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Avaliar Demanda (A)" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(AvaliarDemandaGN);
                    setCor(3);
                  }}>
                    {cor == 3 ?
                      <ListItemText primary="Avaliar Demanda (GN)" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Avaliar Demanda (GN)" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(AdicionarInfoDemanda);
                    setCor(4);
                  }}>
                    {cor == 4 ?
                      <ListItemText primary="Adicionar informações na Demanda(A)" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Adicionar informações na Demanda(A)" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(CriarProposta);
                    setCor(5);
                  }}>
                    {cor == 5 ?
                      <ListItemText primary="Criar Proposta" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Criar Proposta" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(CriarPauta);
                    setCor(6);
                  }}>
                    {cor == 6 ?
                      <ListItemText primary="Criar Pauta" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Criar Pauta" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(InformarParecerComissao);
                    setCor(7);
                  }}>
                    {cor == 7 ?
                      <ListItemText primary="Informar o parecer da Comissão(A)" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Informar o parecer da Comissão(A)" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(CriarATA);
                    setCor(8);
                  }}>
                    {cor == 8 ?
                      <ListItemText primary="Criar ATA" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Criar ATA" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(InformarParecerDiretoriaGeral);
                    setCor(9);
                  }}>
                    {cor == 9 ?
                      <ListItemText primary="Informar o parecer da Diretoria Geral" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Informar o parecer da Diretoria Geral" />}
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={atividadesSecundariasClick}>
                <ListItemText primary="ATIVIDADES SECUNDÁRIAS" />
                {atividadesSecundariasOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={atividadesSecundariasOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(IniciarWorkflow);
                    setCor(10)
                  }}>
                    {cor == 10 ?
                      <ListItemText primary="Iniciar Workflow de Aprovação(A)" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Iniciar Workflow de Aprovação(A)" />}
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                    setComponentes(AvaliarWorkflow);
                    setCor(11);
                  }}>
                    {cor == 11 ?
                      <ListItemText primary="Avaliar Workflow de Aprovação(GN/GTI)" sx={{ color: "#00579d", fontWeight: "bold" }} />
                      :
                      <ListItemText primary="Avaliar Workflow de Aprovação(GN/GTI)" />}
                  </ListItemButton>
                </List>
              </Collapse>
            </Lista>
          </FirstColumn>

          <SecondColumn>
            {componentes}
          </SecondColumn>
        </Container>
      </BoxConteudo>
    </Box>
  );
}

