import { Grid, IconButton, InputAdornment } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import { BoxContainerInput, ContainerGrid, SearchTextField, GridIconButton } from './Search.styles';
import { ChangeEventHandler, useEffect, useState } from 'react';
import TecladoVirtual from '../TecladoVirtual/TecladoVirtual';

/**
 * Componente principal de barra de pesquisa
 * 
 * @param props 
 * @returns 
 */
export default function Searchbar(props: {
    filtrar: boolean, setFiltrar: React.Dispatch<React.SetStateAction<boolean>>,
    grid: boolean, setGrid: React.Dispatch<React.SetStateAction<boolean>>
    filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
    const [valorInput, setValorInput] = useState("")
    const [usandoTecladoVirtual, setUsandoTecladoVirtural] = useState(false)

    const startAdornment = (
        <InputAdornment position='start'>
            <SearchRoundedIcon />
        </InputAdornment>
    )

    const endAdornment = (
        <InputAdornment position='end'>
            <IconButton onClick={toggleTecladoVirtual}>
                <KeyboardRoundedIcon sx={{ color: (usandoTecladoVirtual ? "#00579d" : "") }}/>
            </IconButton>
            <IconButton aria-label="filter" onClick={filtrar}>
                <TuneRoundedIcon sx={{ color: (props.filtrar ? "#00579d" : "") }} />
            </IconButton>
        </InputAdornment>
    )

    useEffect(() => {
        const inputPesquisa = document.getElementById("input-pesquisa") as any
        props.filtrarResultados(inputPesquisa)
    }, [valorInput])

    function filtrar() {
        props.setFiltrar(!props.filtrar)
    }

    function toggleGrid() {
        props.setGrid(!props.grid)
    }

    function toggleTecladoVirtual() {
        setUsandoTecladoVirtural(!usandoTecladoVirtual)
    }

    function atualizarInput(element: any) {
        setValorInput(element.target.value)
    }

    return (
        <BoxContainerInput>
            <ContainerGrid container spacing={2}>
                <Grid item xs={10}>
                    <SearchTextField value={valorInput} onChange={atualizarInput} id='input-pesquisa' InputProps={{
                        startAdornment: startAdornment,
                        endAdornment: endAdornment,
                        placeholder: "Pesquisar por Título ou Solicitante"
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
                {usandoTecladoVirtual &&
                    <TecladoVirtual setValorInput={setValorInput} valorInput={valorInput}/>
                }
            </ContainerGrid>
        </BoxContainerInput>
    )
}

