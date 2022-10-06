import { Link } from 'react-router-dom'
import './Home.scss'
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb'
import ProcessComponent from '../Components/ProcessComponent/ProcessComponent'
import Box from '@mui/material/Box'
// import processComponent from "../DefinitionFiles/interfaces"

const lista = [
    {
        id: 1,
        titulo: "primeiro titulo ae",
        tamanho: "pequeno",
        solicitante: "um fia da puta ae",
        status: "Aguardando análise",
        // tipo: processComponent.processComponent.Ata
    }
]

function Home() {
    return (
        <Box sx={{margin: "24px"}}>
            <Breadcrumb />
            
        </Box>
    )
}

export default Home;