import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Login from "./Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
// import Filter from "./Components/Filter/Filter";
import { Box, Toolbar } from "@mui/material";
import { MainBox } from "./App.styles";
import { ThemeProvider } from "@emotion/react";
import { MainTheme, ContentTheme } from "./Themes";
import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";

export default function App() {
  const [aberto, setAberto] = useState(false)
  const [tamanhoSideBar, setTamanhoSideBar] = useState("220")
  const [filtrar, setFiltrar] = useState(false)
  const tamanhoNavbar = "8.5vh"

  useEffect(() => {
    
    if (aberto) {
      setTamanhoSideBar("220")
    } else {
      setTamanhoSideBar("65")
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <Navbar aberto={aberto} setAberto={setAberto} tamanhoNavbar={tamanhoNavbar} />
        <Box sx={{ marginLeft: aberto ? `${tamanhoSideBar}px` : 0, display: "flex" }}>
          <Sidebar open={aberto} tamanho={tamanhoSideBar} setOpen={setAberto} />
          <MainBox component="main" sx={{ marginLeft: tamanhoSideBar }}>
            <Toolbar variant="dense" />
            <ThemeProvider theme={ContentTheme}>
              <Routes>
                <Route path="/" element={<Login setAberto={setAberto} tamanhoNavbar={tamanhoNavbar} />} />
                <Route path="/home" element={<Home setFiltrar={setFiltrar} filtrar={filtrar}/>} />
              </Routes>
            </ThemeProvider>
          </MainBox>
          {/* <Filter /> */}
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}