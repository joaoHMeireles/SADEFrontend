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

const temaEspacoNav = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: "12vh"
        }
      }
    }
  }
})

function App() {
  const [aberto, setAberto] = useState(true)
  const [tamanhoSideBar, setTamanhoSideBar] = useState("180")

  useEffect(() => {
    //fununcia mas tem que ver certinho o tamanho de 18vw e 8vw pra ficar mudando
    if (aberto) {
      setTamanhoSideBar("180")
    } else {
      setTamanhoSideBar("120")
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={temaEspacoNav}>
        <Navbar aberto={aberto} setAberto={setAberto} />
        <Toolbar variant="dense"/>
        <Box sx={{ marginLeft: aberto? `${tamanhoSideBar}px`: 0, display: "flex" }}>
          <Sidebar open={aberto} tamanho={tamanhoSideBar} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
