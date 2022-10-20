import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../Assets/wegLogo.png';
import './Navbar.scss';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { AppBar, TextField, TextFieldBox } from './Navbar.styles';

const listaLinguas = [
    "Português",
    "Inglês(EUA)",
    "Espanhol",
    "Inglês(RU)",
    "Francês"
]

/**
 * Navbar principal do sistema
 * 
 * @param props 
 * @returns 
 */
export default function Navbar(props: { aberto: boolean, setAberto: React.Dispatch<React.SetStateAction<boolean>>, tamanhoNavbar: string }) {
    const [lingua, setLingua] = useState("Português")
    const path = useLocation()

    function mudarSidebar() {
        props.setAberto(!props.aberto)
    }

    const mudarLingua = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLingua(event.target.value);
    };

    return (
        <>
            {path.pathname != "/" &&
                <AppBar position="fixed" sx={{ height: props.tamanhoNavbar }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={mudarSidebar}
                        >
                            <DehazeRoundedIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1 }}>
                            <img src={logo} alt="" />
                        </Box>
                        <TextFieldBox>
                            <TextField
                                select
                                value={lingua}
                                onChange={mudarLingua}
                                variant="standard"
                            >
                                {listaLinguas.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Avatar {...stringAvatar('ROMÁRIO')} />
                        </TextFieldBox>
                    </Toolbar>
                </AppBar>
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