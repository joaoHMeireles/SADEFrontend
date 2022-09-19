import { useLocation } from 'react-router-dom';
import logo from '../../Assets/wegLogo.png';
import './Navbar.scss';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import IconButton from '@mui/material/IconButton';

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
                            <IconButton onClick={mudarSidebar} aria-label='sidebar' className='icone'>
                                <DehazeRoundedIcon className='icone' />
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