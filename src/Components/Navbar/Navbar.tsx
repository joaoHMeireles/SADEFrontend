import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../Assets/wegLogo.png';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
                            <IconButton aria-label='sidebar' className='icone'>
                                <DehazeRoundedIcon onClick={mudarSidebar} className='icone' />
                            </IconButton>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="cima-sidebar container-personal cima-sidebar-aberto">
                        <div className="espaco" />
                        <div className="personal">
                            {/* <Box sx={{ maxWidth: 120 }}>
                                <FormControl fullWidth className="branco ">
                                    <NativeSelect
                                        className="branco"
                                        defaultValue={10}
                                        inputProps={{
                                            name: 'idioma',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={10} className="cinza-escuro">Português</option>
                                        <option value={20} className="cinza-escuro">Inglês(EUA)</option>
                                        <option value={30} className="cinza-escuro">Espanhol</option>
                                        <option value={40} className="cinza-escuro">Inglês(RU)</option>
                                        <option value={50} className="cinza-escuro">Francês</option>
                                    </NativeSelect>
                                </FormControl>
                            </Box> */}
                            <FormControl sx={{ minWidth: 120 }} variant="standard">
                                {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    defaultValue={10}
                                // value={age}
                                // onChange={handleChange}
                                // input={<BootstrapInput />}
                                >
                                    <MenuItem value={10} className="cinza-escuro">Português</MenuItem>
                                    <MenuItem value={20} className="cinza-escuro">Inglês(EUA)</MenuItem>
                                    <MenuItem value={30} className="cinza-escuro">Espanhol</MenuItem>
                                    <MenuItem value={40} className="cinza-escuro">Inglês(RU)</MenuItem>
                                    <MenuItem value={50} className="cinza-escuro">Francês</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar;