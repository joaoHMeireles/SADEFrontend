import {
    Grid,
    IconButton,
    InputAdornment
} from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { 
    BoxContainerInput, 
    SearchTextField, 
    ContainerGrid, 
    GridIconButton 
} from './Search.styles';

/**
 * Componente principal de barra de pesquisa
 * 
 * @param props 
 * @returns 
 */
export default function Searchbar(props:
    {
        filtrar: boolean, setFiltrar: React.Dispatch<React.SetStateAction<boolean>>,
        grid: boolean, setGrid: React.Dispatch<React.SetStateAction<boolean>>
    }) {

    const lupaAdornment = (
        <InputAdornment position='start'>
            <SearchRoundedIcon />
        </InputAdornment>
    )

    const filtroAdorment = (
        <InputAdornment position='start'>
            <IconButton aria-label="filter" onClick={filtrar}>
                <TuneRoundedIcon sx={{ color: (props.filtrar ? "#00579d" : "") }} />
            </IconButton>
        </InputAdornment>
    )

    function filtrar() {
        props.setFiltrar(!props.filtrar)
    }

    function toggleGrid() {
        props.setGrid(!props.grid)
    }

    return (
        <BoxContainerInput>
            <ContainerGrid container spacing={2}>
                <Grid item xs={10}>
                    <SearchTextField InputProps={{
                        startAdornment: lupaAdornment, endAdornment: filtroAdorment,
                        placeholder: "Pesquisar Título, Solicitante ou Gerente responsável"
                    }} />
                </Grid>
                <Grid item xs={2}>
                    <GridIconButton aria-label="grid" onClick={toggleGrid}>
                        {!props.grid ?
                            <GridViewRoundedIcon sx={{ color: (!props.grid ? "#00579d" : "") }} />
                            :
                            <ViewListRoundedIcon sx={{ color: (props.grid ? "#00579d" : "") }} />
                        }
                    </GridIconButton>

                </Grid>
            </ContainerGrid>
        </BoxContainerInput>
    )
}

