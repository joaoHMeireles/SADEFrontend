import { useLocation } from 'react-router-dom';
import logo from '../../Assets/wegLogo.png';
import './Navbar.scss';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import IconButton from '@mui/material/IconButton';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import { createTheme, styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import MuiTextField from '@mui/material/TextField';
import { useState } from 'react';
import { InputBase } from '@mui/material';

const AppBar = styled(MuiAppBar)(
    {
        zIndex: 1200,
        display: "flex",
        justifyContent: "center"
    }
);

const temaSelect = createTheme({
    components:{
        MuiTextField: {
            styleOverrides: {
                root: {
                    
                }
            },
            defaultProps: {
                InputProps: {
                    sx: {
                        borderColor: "white"
                    }
                }
            },
            variants: [
                // InputBase: {
                //     props: {

                //     },
                //     style: {

                //     }
                // }
            ]
        }
    }
})

const TextField = styled(MuiTextField)(
    {
        // ver como deixar a borda de baixo do MuiInputBase-root branca
        p: 2,
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
                    </Toolbar>
                </AppBar>
            }
        </>
    )
}

export default Navbar;