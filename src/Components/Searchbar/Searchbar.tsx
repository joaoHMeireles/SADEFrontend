import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { BoxContainerInput } from './Search.styles';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const TextField = styled(MuiTextField)({
    width: "100%",
    '& .MuiInputBase-root': {
        height: "100%"
    }
})



export default function Searchbar(props: {filtrar: boolean, setFiltrar: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [grid, setGrid] = useState(false)

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
        setGrid(true)
    }

    function viewList(){
        setGrid(false)
    }

    return (
        <BoxContainerInput>
            <Grid container spacing={2} sx={{ height: "100%" }}>
                <Grid item xs={10}>
                    <TextField sx={{ height: "60%", paddingTop: "5px" }} 
                        InputProps={{ startAdornment: lupaAdornment, endAdornment: filtroAdorment, 
                        placeholder: "Pesquisar Título, Solicitante ou Gerente responsável"}} />
                </Grid>
                <Grid item xs={2}>
                    <IconButton aria-label="grid" onClick={viewGrid}>
                        <GridViewRoundedIcon sx={{color:( grid ? "#00579d": "") }} />
                    </IconButton>
                    <IconButton aria-label="list" onClick={viewList}>
                        <ViewListRoundedIcon sx={{color:( !grid ? "#00579d": "") }}/>
                    </IconButton>
                </Grid>
            </Grid>
        </BoxContainerInput>
    )
}

