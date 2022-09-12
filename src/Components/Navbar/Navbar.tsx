import { useLocation } from 'react-router-dom'
import './Navbar.scss'
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
    const path = useLocation()

    console.log(path.pathname);


    return (
        <>
            {path.pathname != "/" &&
                <div id='navbar'>
                    {/* <Sidebar /> */}
                    navbar
                </div>
            }
        </>
    )
}

export default Navbar;