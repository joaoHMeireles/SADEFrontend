import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Toolbar from "../components/Toolbar/Toolbar";
import Filter from "../components/Filtro/Filtro";
import Login from "./Login/Login";
import Inicio from "./Inicio/Inicio";
import TelaProcesso from "./TelaProcesso/TelaProcesso";
import TelaColecaoProcesso from "./TelaColecaoProcesso/TelaColecaoProcesso";
import Notificacoes from "./Notificacoes/Notificacoes";
import Chats from "./Chats/Chats";
import { Box } from "@mui/material";
import { MainBox } from "./App.styles";
import { ThemeProvider } from "@emotion/react";
import { MainTheme, ContentTheme } from "../themes";
import Historico from "./Historico/Historico";

export default function App() {
  const [aberto, setAberto] = useState(false)
  const [tamanhoSideBar, setTamanhoSideBar] = useState("220")
  const [filtrar, setFiltrar] = useState(false)
  const tamanhoNavbar = "8.5vh"

  useEffect(() => {
    if (aberto) {
      setTamanhoSideBar("220");
    } else {
      setTamanhoSideBar("65");
    }
  });

  

  return (
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <Navbar aberto={aberto} setAberto={setAberto} tamanhoNavbar={tamanhoNavbar} setFiltro={setFiltrar} />
        <Box sx={{ marginLeft: aberto ? `${tamanhoSideBar}px` : 0, display: "flex" }} >
          <Sidebar aberto={aberto} tamanho={tamanhoSideBar} setAberto={setAberto} setFiltro={setFiltrar}/>
          <MainBox component="main" sx={{ marginLeft: tamanhoSideBar }}>
            <Toolbar />
            <ThemeProvider theme={ContentTheme}>
              <Routes>
                <Route path="/" element={<Login setAberto={setAberto} tamanhoNavbar={tamanhoNavbar} setFiltro={setFiltrar} />} />
                <Route path="/home" element={<Inicio setFiltrar={setFiltrar} filtrar={filtrar} />} />
                <Route path="/notifications" element={<Notificacoes />} />
                <Route path="/chats" element={<Chats aberto={aberto} />}></Route>


                <Route path="/home/demand" element={<TelaProcesso />} />
                <Route path="/mydemands/demand" element={<TelaProcesso />} />
                <Route path="/notifications/demand" element={<TelaProcesso />} />
                <Route path="/home/proposal/demand" element={<TelaProcesso />} />
                <Route path="/home/agenda/proposal/demand" element={<TelaProcesso />} />
                <Route path="/home/ata/proposal/demand" element={<TelaProcesso />} />


                <Route path="/home/demand/history" element={<Historico />} />
                <Route path="/mydemands/demand/history" element={<Historico />} />
                <Route path="/notifications/demand/history" element={<Historico />} />
                <Route path="/home/proposal/demand/history" element={<Historico />} />
                <Route path="/home/agenda/proposal/demand/history" element={<Historico />} />
                <Route path="/home/ata/proposal/demand/history" element={<Historico />} />

                <Route path="/home/proposal/history" element={<Historico />} />
                <Route path="/home/agenda/proposal/history" element={<Historico />} />
                <Route path="/home/ata/proposal/history" element={<Historico />} />

            
                <Route path="/home/proposal" element={<TelaProcesso />} />
                <Route path="/home/agenda/proposal" element={<TelaProcesso />} />
                <Route path="/home/ata/proposal" element={<TelaProcesso />} />


                <Route path="/home/agenda" element={<TelaColecaoProcesso />} />
                <Route path="/home/ata" element={<TelaColecaoProcesso />} />
              </Routes>
            </ThemeProvider>
          </MainBox>
          <Filter aberto={filtrar} setAberto={setFiltrar} setSidebar={setAberto} />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}
