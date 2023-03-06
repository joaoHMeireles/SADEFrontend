import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Toolbar from "../Components/Toolbar/Toolbar";
import Filter from "../Components/Filtro/Filtro";
import Login from "./Login/Login";
import Inicio from "./Inicio/Inicio";
import CriacaoDemanda from "./CriacaoDemanda/CriacaoDemanda";
import TelaColecaoProcesso from "./TelaColecaoProcesso/TelaColecaoProcesso";
import TelaProcesso from "./TelaProcesso/TelaProcesso";
import Notificacoes from "./Notificacoes/Notificacoes";
import Chats from "./Chats/Chats";
import Perfil from "./Perfil/Perfil"
import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { MainBox } from "./App.styles";
import { MainTheme, ContentTheme } from "../Themes";
import Historico from "./Historico/Historico";
import CriacaoProposta from "./CriacaoProposta/CriacaoProposta";
import Rascunho from "./Rascunho/Rascunho";
import CriacaoPauta from "./CriacaoPauta/CriacaoPauta";
import VisualizarCriacaoPDF from "./VisualizarCriacaoPDF/VisualizarCriacaoPDF";
import Enviadas from "./Enviadas/Enviadas";


export default function App() {
  const [sidebarAberta, setSidebarAberta] = useState(false)
  const [tamanhoSideBar, setTamanhoSideBar] = useState("220")
  const [filtrar, setFiltrar] = useState(false)
  const tamanhoNavbar = "8.5vh"

  useEffect(() => {
    if (sidebarAberta) {
      setTamanhoSideBar("220");
    } else {
      setTamanhoSideBar("65");
    }
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <Navbar aberto={sidebarAberta} setAberto={setSidebarAberta} tamanhoNavbar={tamanhoNavbar} setFiltro={setFiltrar} />
        <Box sx={{ marginLeft: sidebarAberta ? `${tamanhoSideBar}px` : 0, display: "flex" }} >
          <Sidebar aberto={sidebarAberta} tamanho={tamanhoSideBar} setAberto={setSidebarAberta} setFiltro={setFiltrar}/>
          <MainBox component="main" sx={{ marginLeft: tamanhoSideBar }}>
            <Toolbar />
            <ThemeProvider theme={ContentTheme}>
              <Routes>
                <Route path="/" element={<Login setAberto={setSidebarAberta} tamanhoNavbar={tamanhoNavbar} setFiltro={setFiltrar} />} />
                <Route path="/home" element={<Inicio setFiltrar={setFiltrar} filtrar={filtrar} inicio={true}/>} />
                <Route path="/notifications" element={<Notificacoes />} />
                <Route path="/chats" element={<Chats aberto={sidebarAberta} />}></Route>
                <Route path="/createdemand" element={<CriacaoDemanda rascunho={false}/>} />
                <Route path="/createproposal" element={<CriacaoProposta setFiltrar={setFiltrar} filtrar={filtrar}/>} />
                <Route path="/createagenda" element={<CriacaoPauta setFiltrar={setFiltrar} filtrar={filtrar} />} />

                <Route path="/home/demand" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />
                <Route path="/mydemands/demand" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />
                <Route path="/notifications/demand" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />
                <Route path="/home/proposal/demand" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />
                <Route path="/home/agenda/proposal/demand" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />
                <Route path="/home/ata/proposal/demand" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />

                <Route path="/mydemands" element={<Enviadas setFiltrar={setFiltrar} filtrar={filtrar} />}></Route>

                <Route path="/mydrafts" element={<Rascunho setFiltrar={setFiltrar} filtrar={filtrar}/>}></Route>
                <Route path="/continuedemand" element={<CriacaoDemanda rascunho={true}/>}></Route>


                <Route path="/home/demand/history" element={<Historico />} />
                <Route path="/mydemands/demand/history" element={<Historico />} />
                <Route path="/notifications/demand/history" element={<Historico />} />
                <Route path="/home/proposal/demand/history" element={<Historico />} />
                <Route path="/home/agenda/proposal/demand/history" element={<Historico />} />
                <Route path="/home/ata/proposal/demand/history" element={<Historico />} />

                <Route path="/home/proposal/history" element={<Historico />} />
                <Route path="/home/agenda/proposal/history" element={<Historico />} />
                <Route path="/home/ata/proposal/history" element={<Historico />} />

            
                <Route path="/home/proposal" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />
                <Route path="/home/agenda/proposal" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />
                <Route path="/home/ata/proposal" element={<TelaProcesso sidebarAberta={sidebarAberta}/>} />

                <Route path="/profile" element={<Perfil />} />

                <Route path="/home/agenda" element={<TelaColecaoProcesso sidebarAberta={sidebarAberta}/>} />
                <Route path="/home/ata" element={<TelaColecaoProcesso  sidebarAberta={sidebarAberta}/>} />

                <Route path="/visualizarCriacaoPDF" element={<VisualizarCriacaoPDF/>}/>
              </Routes>
            </ThemeProvider>
          </MainBox>
          <Filter aberto={filtrar} setAberto={setFiltrar} setSidebar={setSidebarAberta} />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}
