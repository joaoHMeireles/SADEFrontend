import { useLocation } from 'react-router-dom';
import logo from '../../Assets/wegLogo.png';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';

function Navbar() {
    const path = useLocation()
    const [aberto, setAberto] = useState(true);

    useEffect(() => {
        // const elementos = document.getElementsByClassName("menu-width-aberto")
        // console.log(elementos);
    })

    function mudarSidebar() {
        setAberto(!aberto)
        
        

        const elemento = document.getElementById("sidebar")
        for (const atributo of elemento?.attributes) {
            const valor = atributo.value
            if (valor.includes("menu-width-aberto")) {
                atributo.value = valor.replace("aberto", "fechado")
            } else {
                atributo.value = valor.replace("fechado", "aberto")
            }
        }

        const content = document.getElementById("content")
        console.log(content?.attributes)
        for (const atributo of content?.attributes) {
            
            const valor = atributo.value
            if (valor.includes("content")) {
                atributo.value = valor.replace("content", "content-menu-fechado")
            } else if (valor.includes("content-menu-fechado")){
                atributo.value = valor.replace("content-menu-fechado", "content")
            }
        }

        //arrumar a posição do cima-sidebar
        
        // if(aberto){
        //     for(let i = 0; i < elementos.length; i++){
        //         // elementos[i].
        //     }
        // } else {
        //     for(let i = 0; i < elementos.length; i++){
        //         // elementos[i]
        //     }
        // }
    }

    return (
        <>
            {path.pathname != "/" &&
                <div id='navbar' className='navbar-heigth'>
                    <Sidebar />
                    <div id='cima-sidebar' className="cima-sidebar menu-width-aberto">
                        <i onClick={mudarSidebar} className="fi fi-rr-menu-burger"></i>
                        <img src={logo} alt="" />
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar;