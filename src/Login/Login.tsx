import {Link} from 'react-router-dom'
import './Login.scss'

function Login(){
    return(
        <div id='login'>
            Login
            <Link to="/home"> inicio</Link>
        </div>
    )
}

export default Login;