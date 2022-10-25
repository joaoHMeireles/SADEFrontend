
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

const Drawer = styled(MuiDrawer)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    zIndex: 1100,
}));

export default function Filter(props: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [drawerWidth, setDrawerWidth] = useState("0px")

    useEffect(() => {
        if(props.open){
            setDrawerWidth("240px")
        } else {
            setDrawerWidth("0px")
        }
    })

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="right"
            open={props.open}
        >
            <Toolbar variant='dense'/>
            <ItemHeader titulo="Jóia" />
        </Drawer>
    );
}

/**
 * Componente que recebe uma string, para usar como título, e a função de abrir 
 * e fechar aquele item do filtro
 * 
 * @param props 
 */
function ItemHeader(props: {titulo: string}){

    return(
        <Typography variant='h5'>
            {props.titulo}
        </Typography>
    )
}

/**
 * Componente que recebe uma lista de atributos possíveis para aquele item do filtro
 * e monta eles coordenando quem está e quem não está selecionado
 * 
 * @param props 
 */
function RadioOptions(props: Optionprops){

}

/**
 * Componente que recebe uma lista de atributos possíveis para aquele item do filtro
 * e monta eles 
 * @param props 
 */
function CheckOptions(props: Optionprops){

}

/**
 * Componente que dispõem de um input para preencher
 * 
 * @param props 
 */
function InputOption(props: {}){

}

interface Optionprops {
    itens: {id: number, nome: string}[]
}