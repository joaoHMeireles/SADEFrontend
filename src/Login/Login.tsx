import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Login.scss'

function Login(){

    useEffect(() => {
        // fazer login sempre ter o content como content-menu-aberto
        
    })

    return(
        <div id='login'>
            Login
            <Link to="/home"> inicio</Link>
        </div>
    )
}

export default Login;