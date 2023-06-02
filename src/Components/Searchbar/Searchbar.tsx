import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Box, Grid, IconButton, InputAdornment } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import { BoxContainerInput, SearchTextField } from './Search.styles';
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
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const startAdornment = (
        <InputAdornment position='start'>
            <SearchRoundedIcon />
        </InputAdornment>
    )

    const endAdornment = (
        <InputAdornment position='end'>
            <IconButton onClick={toggleReconhecimentoVoz}>
                <MicRoundedIcon sx={{ color: (listening ? "#00579d" : "") }} />
            </IconButton>
            <IconButton onClick={toggleTecladoVirtual}>
                <KeyboardRoundedIcon sx={{ color: (usandoTecladoVirtual ? "#00579d" : "") }} />
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

    useEffect(() => {
        if (listening) {
            setValorInput(transcript)
        } else {
            setValorInput("")
            resetTranscript()
        }
    }, [transcript, listening])

    function filtrar() {
        props.setFiltrar(!props.filtrar)
    }

    function toggleGrid() {
        props.setGrid(!props.grid)
    }

    function toggleTecladoVirtual() {
        setUsandoTecladoVirtural(!usandoTecladoVirtual)
    }

    function toggleReconhecimentoVoz() {
        if (listening) {
            SpeechRecognition.stopListening()
            resetTranscript()
        } else {
            SpeechRecognition.startListening({ continuous: true, language: 'pt-br' })
        }
    }

    function atualizarInput(element: any) {
        setValorInput(element.target.value)
    }

    return (
        <BoxContainerInput>
            <SearchTextField value={valorInput} onChange={atualizarInput} id='input-pesquisa' InputProps={{
                startAdornment: startAdornment,
                endAdornment: endAdornment,
                placeholder: "Pesquisar por Título ou Solicitante"
            }} />

            <IconButton sx={{ marginLeft: "1rem" }} onClick={toggleGrid}>
                {!props.grid ?
                    <GridViewRoundedIcon sx={{ color: "#00579d" }} />
                    :
                    <ViewListRoundedIcon sx={{ color: "#00579d" }} />
                }
            </IconButton>

            {usandoTecladoVirtual &&
                <TecladoVirtual setValorInput={setValorInput} valorInput={valorInput} />}
        </BoxContainerInput>
    )
}

