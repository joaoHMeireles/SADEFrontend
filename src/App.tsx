import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Login from "./Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="content" className="content-menu-aberto">
        <div className="menu-width menu-width-aberto" />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
