import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.scss'
import Login from "./Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Box, Toolbar } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material';

const tamanhoNavbar = "12vh"

const temaEspacoNav = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: tamanhoNavbar
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#00579d"
        }
      }
    }
  }
})

function App() {
  const [aberto, setAberto] = useState(true)
  const [tamanhoSideBar, setTamanhoSideBar] = useState("0")

  useEffect(() => {
    //fununcia mas tem que ver certinho o tamanho de 18vw e 8vw pra ficar mudando
    if (aberto) {
      setTamanhoSideBar("200")
    } else {
      setTamanhoSideBar("120")
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={temaEspacoNav}>
        <Navbar aberto={aberto} setAberto={setAberto} tamanhoNavbar={tamanhoNavbar}/>
        <Box sx={{ marginLeft: aberto ? `${tamanhoSideBar}px` : 0, display: "flex" }}>
          <Sidebar open={aberto} tamanho={tamanhoSideBar} />
          <Box>
            <Toolbar variant="dense"/>
            <Routes>
              <Route path="/" element={<Login setAberto={setAberto} tamanhoNavbar={tamanhoNavbar}/>} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
