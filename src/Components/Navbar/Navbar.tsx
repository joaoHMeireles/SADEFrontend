import { useLocation } from 'react-router-dom'
// import * as logo from '../../Assets/weg_logo_white.png';
import './Navbar.scss'
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
    const path = useLocation()

    console.log(path.pathname);


    return (
        <>
            {path.pathname != "/" &&
                <div id='navbar'>
                    <Sidebar />
                    <div className="cima-sidebar">
                        <i className="fi fi-rr-menu-burger"></i>
                        {/* <img src={logo} alt="" />  */}
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar;