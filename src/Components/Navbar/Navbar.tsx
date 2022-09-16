import { useLocation } from 'react-router-dom';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import logo from '../../Assets/wegLogo.png';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

function Navbar() {
    const path = useLocation()
    const [aberto, setAberto] = useState(true);

    function mudarSidebar() {
        setAberto(!aberto)

        // pega a sidebar e altera o tamanho dela para ela ficar pequena
        const sidebar = document.getElementsByClassName("menu-width")

        for (let i = 0; i < sidebar.length; i++) {
            for (const atributo of sidebar[i].attributes) {
                const valor = atributo.value
                if (valor.includes("menu-width-aberto")) {
                    atributo.value = valor.replace("menu-width-aberto", "menu-width-fechado")
                } else {
                    atributo.value = valor.replace("menu-width-fechado", "menu-width-aberto")
                }
            }
        }

        //pega a navbar inteira e adapta ao novo tamanho da sidebar
        const navBarComponents = document.getElementsByClassName("cima-sidebar")
        for (let i = 0; i < navBarComponents.length; i++) {
            for (let atributo of navBarComponents[i].attributes) {
                const valor = atributo.value
                if (valor.includes("cima-sidebar-aberto")) {
                    atributo.value = valor.replace("cima-sidebar-aberto", "cima-sidebar-fechado")
                } else if (valor.includes("cima-sidebar-fechado")) {
                    atributo.value = valor.replace("cima-sidebar-fechado", "cima-sidebar-aberto")
                }
            }
        }
    }

    return (
        <>
            {path.pathname != "/" &&
                <div id='navbar' className='navbar-heigth'>
                    <div className="container-sidebar">
                        <Sidebar />
                        <div id='tamanho-sidebar' className="cima-sidebar cima-sidebar-aberto">
                            {/* <i onClick={mudarSidebar} className="fi fi-rr-menu-burger"></i> */}
                            <DehazeRoundedIcon className='icone-azul'/>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="cima-sidebar personal cima-sidebar-aberto">
                        aaaaaaaa
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar;