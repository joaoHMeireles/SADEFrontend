import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Login from "./Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import { Box, Toolbar, ThemeProvider } from "@mui/material";
import { MainTheme } from "./Themes";

const tamanhoNavbar = "8.5vh"

function App() {
  const [aberto, setAberto] = useState(false)
  const [tamanhoSideBar, setTamanhoSideBar] = useState("220")

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
          <Sidebar open={aberto} tamanho={tamanhoSideBar} setOpen={setAberto}/>
          <Box component="main" sx={{ flexGrow: 1, p: 3, width: "auto", marginLeft: tamanhoSideBar}}>
            <Toolbar variant="dense" />
            <Breadcrumb />
            <Routes>
              <Route path="/" element={<Login setAberto={setAberto} tamanhoNavbar={tamanhoNavbar} />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
