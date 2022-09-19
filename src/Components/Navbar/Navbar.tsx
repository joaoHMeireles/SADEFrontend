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

function Navbar(props: {aberto: boolean, setAberto: React.Dispatch<React.SetStateAction<boolean>> }) {
    const path = useLocation()

    function mudarSidebar() {
        props.setAberto(!props.aberto)
    }

    return (
        <>
            {path.pathname != "/" &&
                <div id='navbar' className='navbar-heigth'>
                    <div className="container-sidebar">
                        <div id='tamanho-sidebar' className="cima-sidebar">
                            <IconButton aria-label='sidebar' className='icone'>
                                <DehazeRoundedIcon onClick={mudarSidebar} className='icone' />
                            </IconButton>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="cima-sidebar container-personal">
                        <div className="espaco" />
                        <div className="personal">
                           
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar;