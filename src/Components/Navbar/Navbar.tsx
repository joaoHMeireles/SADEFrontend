import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.scss';
import { Avatar, Box, IconButton, Toolbar } from '@mui/material';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import { NavBar } from "./Navbar.styles";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';
import api from '../../api/api';
import sadeLogo from "../../Assets/sadeLogoBranca.png";

export default function Navbar(props: { aberto: boolean, setAberto: React.Dispatch<React.SetStateAction<boolean>>, setFiltro: React.Dispatch<React.SetStateAction<boolean>>, tamanhoNavbar: string }) {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("USUARIO") as string));
    const [nomeUsuario, setNomeUsuario] = useState();
    const [fotoUsuario, setFotoUsuario] = useState<Blob>(new Blob);
    const [mensagem, setMensagem] = useState('');
    const path = useLocation();

    // Pega a foto de perfil do usuário logado
    useEffect(() => {
        if (usuario != null) {
            api.get("/sade/usuario/fotousuario/" + usuario.idUsuario, { responseType: 'blob' })
                .then((response) => {
                    setFotoUsuario(response.data);
                });
        }
    }, [])

    // Pega o nome do usuário logado
    useEffect(() => {
        if (usuario != null) {
            api.get("/sade/usuario/" + usuario.idUsuario)
                .then((response) => {
                    setNomeUsuario(response.data.nomeUsuario);
                });
        }
    }, [])


    // Manhã --> 06h até 12h
    // Tarde --> 12h até 18h
    // Noite --> 18h até 06h

    useEffect(() => {
        const horaAtual = new Date().getHours();

        if (horaAtual >= 6 && horaAtual < 12) {
            setMensagem('Bom dia, ');
        } else if (horaAtual >= 12 && horaAtual < 18) {
            setMensagem('Boa tarde, ');
        } else {
            setMensagem('Boa noite, ');
        }
    }, []);

    function mudarSidebar() {
        props.setAberto(!props.aberto)
        props.setFiltro(false)
    }

    return (
        <>
            {path.pathname != "/" &&
                <>
                    <NavBar position="fixed" sx={{ height: props.tamanhoNavbar }}>
                        <Toolbar>
                            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={mudarSidebar}>
                                <DehazeRoundedIcon />
                            </IconButton>

                            <Box sx={{ flexGrow: 1, "& img": { cursor: "pointer" } }}>
                                <img id="imgLogoNav" src={sadeLogo} alt="Logo SADE" onClick={() => { location.href = "/home" }} />

                            </Box>

                            <Box sx={{ alignItems: "center", display: "flex" }}>
                                <Box sx={{ marginLeft: "1rem" }}>
                                    <p>{nomeUsuario != null ? mensagem + nomeUsuario + "!" : ""}</p>
                                </Box>

                                <Box sx={{ height: "100%", marginLeft: "1rem", "&:hover": { cursor: "pointer" } }}>
                                    <Avatar {...stringAvatar(usuario.nomeUsuario)} onClick={() => {
                                        window.location.href = "/profile";
                                    }} src={URL.createObjectURL(fotoUsuario)} />
                                </Box>

                                <Box sx={{ marginLeft: "1rem" }}>
                                    <Tooltip title="Ajuda ao usuário">
                                        <IconButton onClick={() => { window.location.href = "/userhelp"; }}>
                                            <HelpOutlineIcon sx={{ color: "#fff" }} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Toolbar>
                    </NavBar>
                </>
            }
        </>
    )
}

/**
 * Com base no nome da pessoa passado, cria um objeto de style in line
 * 
 * @param name 
 * @returns 
 */
function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        }
    };
}

/**
 * Recebe um nome e o transforma em um código hexadecimal de uma cor
 * 
 * @param string 
 * @returns 
 */
function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}