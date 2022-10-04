import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import { Box } from '@mui/material'

function Login(props: { setAberto: React.Dispatch<React.SetStateAction<boolean>>, tamanhoNavbar: string }) {

    useEffect(() => {
        props.setAberto(false)
    })

    function colocaPessoa() {
        localStorage.setItem("TIPOUSUARIO", "solicitante")
    }
    return (
        <Box id='login' sx={{ position: "relative", top: `-${props.tamanhoNavbar}` }}>
            Login
            <Link onClick={colocaPessoa} to="/home"> inicio</Link>
        </Box>
    )
}

export default Login;