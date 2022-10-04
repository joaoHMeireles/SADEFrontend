import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../Assets/wegLogo.png';
import './Navbar.scss';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import IconButton from '@mui/material/IconButton';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import MenuItem from '@mui/material/MenuItem';
import MuiTextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const AppBar = styled(MuiAppBar)(
    {
        zIndex: 1200,
        display: "flex",
        justifyContent: "center"
    }
);

const TextField = styled(MuiTextField)(
    {
        // ver como deixar a borda de baixo do MuiInputBase-root branca
        p: 2,
        // marginRight: 20,
        '& .MuiSelect-select': {
            color: "white"
        },
        '& .MuiSvgIcon-root': {
            color: "white"
        },
        '& .MuiInputBase-root': {
            borderBottom: "white solid 1px",

            '& :hover': {
                borderBottom: "white solid 2px",
            },

            '& :before': {
                borderBottom: "white solid 1px",

                '& :hover': {
                    borderBottom: "white solid 2px",
                },
            },

            '& :after': {
                borderBottom: "white",

                '& :hover': {
                    borderBottom: "white solid 2px",
                },
            }
        },
        '& .MuiInputBase-root::before': {

        },
        // '& .MuiInputBase-root
    }
)

const listaLinguas = [
    "Português",
    "Inglês(EUA)",
    "Espanhol",
    "Inglês(RU)",
    "Francês"
]

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

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        }
    };
}


function Navbar(props: { aberto: boolean, setAberto: React.Dispatch<React.SetStateAction<boolean>>, tamanhoNavbar: string }) {
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
                        <Box sx={{ display: "flex", width: "17vw", justifyContent: "space-evenly" }}>
                            <TextField
                                id="standard-select-currency"
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
                        </Box>
                    </Toolbar>
                </AppBar>
            }
        </>
    )
}

export default Navbar;