import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.scss'
import Login from "./Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [aberto, setAberto] = useState(true)
  const [tamanhoSideBar, setTamanhoSideBar] = useState(4)

  useEffect(() => {
    //fununcia mas tem que ver certinho o tamanho de 18vw e 8vw pra ficar mudando
    if(aberto){
      setTamanhoSideBar(100)
    } else {
      setTamanhoSideBar(50)
    }
  })

  return (
    <BrowserRouter>
      <Navbar aberto={aberto} setAberto={setAberto}/>
      <div id="content" className="content-menu-aberto">
        <Sidebar open={aberto} tamanhoSideBar={tamanhoSideBar}/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
