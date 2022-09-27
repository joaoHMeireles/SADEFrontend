import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.scss'
import Login from "./Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Box, Toolbar } from "@mui/material";
import { ThemeProvider } from '@mui/material';
import { MainTheme } from "./Themes";

const tamanhoNavbar = "8.5vh"

function App() {
  const [aberto, setAberto] = useState(true)
  const [tamanhoSideBar, setTamanhoSideBar] = useState("200")

  useEffect(() => {
    if (aberto) {
      setTamanhoSideBar("200")
    } else {
      setTamanhoSideBar("120")
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <Navbar aberto={aberto} setAberto={setAberto} tamanhoNavbar={tamanhoNavbar} />
        <Box sx={{ marginLeft: aberto ? `${tamanhoSideBar}px` : 0, display: "flex" }}>
          <Sidebar open={aberto} tamanho={tamanhoSideBar} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar variant="dense" />
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
