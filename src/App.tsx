import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Toolbar from "./Components/Toolbar/Toolbar";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Notifications from "./Notifications/Notifications";
import Chats from "./Chats/Chats";
import Box from "@mui/material/Box";
import { MainBox } from "./App.styles";
import { ThemeProvider } from "@emotion/react";
import { MainTheme, ContentTheme } from "./Themes";

export default function App() {
  const [aberto, setAberto] = useState(false);
  const [tamanhoSideBar, setTamanhoSideBar] = useState("220");
  const tamanhoNavbar = "8.5vh";

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
        <Navbar
          aberto={aberto}
          setAberto={setAberto}
          tamanhoNavbar={tamanhoNavbar}
        />
        <Box
          sx={{
            marginLeft: aberto ? `${tamanhoSideBar}px` : 0,
            display: "flex",
          }}
        >
          <Sidebar open={aberto} tamanho={tamanhoSideBar} setOpen={setAberto} />
          <MainBox component="main" sx={{ marginLeft: tamanhoSideBar }}>
            <Toolbar />
            <ThemeProvider theme={ContentTheme}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Login
                      setAberto={setAberto}
                      tamanhoNavbar={tamanhoNavbar}
                    />
                  }
                />
                <Route path="/home" element={<Home />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/chats" element={<Chats />}></Route>
              </Routes>
            </ThemeProvider>
          </MainBox>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}
