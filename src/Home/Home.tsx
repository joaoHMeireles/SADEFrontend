import { Link } from 'react-router-dom'
import './Home.scss'
import Searchbar from '../Components/Searchbar/Searchbar'
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

function Home(props: {filtrar: boolean, setFiltrar: React.Dispatch<React.SetStateAction<boolean>>}) {

    return (
        <Box sx={{margin: "24px"}}>
            <Breadcrumb />
            <Searchbar setFiltrar={props.setFiltrar} filtrar={props.filtrar}/>
        </Box>
    )
}

export default Home;