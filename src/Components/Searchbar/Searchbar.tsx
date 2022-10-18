import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { BoxContainerInput, TextField, ContainerGrid } from './Search.styles';

/**
 * Componente principal de barra de pesquisa
 * 
 * @param props 
 * @returns 
 */
export default function Searchbar(props: 
    {filtrar: boolean, setFiltrar: React.Dispatch<React.SetStateAction<boolean>>,
    grid: boolean, setGrid: React.Dispatch<React.SetStateAction<boolean>>}) {
    

    const lupaAdornment = (
        <InputAdornment position='start'>
            <SearchRoundedIcon />
        </InputAdornment>
    )

    const filtroAdorment = (
        <InputAdornment position='start'>
            <IconButton aria-label="filter" onClick={filtrar}>
                <TuneRoundedIcon sx={{color:( props.filtrar ? "#00579d": "") }}/>
            </IconButton>
        </InputAdornment>
    )

    function filtrar(){
        props.setFiltrar(!props.filtrar)
    }

    function viewGrid(){
        props.setGrid(true)
    }

    function viewList(){
        props.setGrid(false)
    }

    return (
        <BoxContainerInput>
            <ContainerGrid container spacing={2}>
                <Grid item xs={10}>
                    <TextField InputProps={{ startAdornment: lupaAdornment, endAdornment: filtroAdorment, 
                        placeholder: "Pesquisar Título, Solicitante ou Gerente responsável"}} />
                </Grid>
                <Grid item xs={2}>
                    <IconButton aria-label="grid" onClick={viewGrid}>
                        <GridViewRoundedIcon sx={{color:( props.grid ? "#00579d": "") }} />
                    </IconButton>
                    <IconButton aria-label="list" onClick={viewList}>
                        <ViewListRoundedIcon sx={{color:( !props.grid ? "#00579d": "") }}/>
                    </IconButton>
                </Grid>
            </ContainerGrid>
        </BoxContainerInput>
    )
}

