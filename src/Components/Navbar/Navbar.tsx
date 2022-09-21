import { useLocation } from 'react-router-dom';
import logo from '../../Assets/wegLogo.png';
import './Navbar.scss';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


function Navbar(props: { aberto: boolean, setAberto: React.Dispatch<React.SetStateAction<boolean>>, tamanhoNavbar: string }) {
    const path = useLocation()
    function mudarSidebar() {
        props.setAberto(!props.aberto)
    }

    return (
        <>
            {path.pathname != "/" &&
                <AppBar position="fixed" sx={{ zIndex: 10, height: props.tamanhoNavbar, display: "flex", justifyContent: "center" }}>
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
                        <img src={logo} alt=""/>
                    </Toolbar>
                </AppBar>
            }
        </>
    )
}

export default Navbar;