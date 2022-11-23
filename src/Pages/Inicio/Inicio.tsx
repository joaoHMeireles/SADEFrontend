import { useEffect, useState } from 'react'
import { TipoColecaoComponenteProcesso, TipoComponenteProcesso, StatusComponenteProcesso, TamanhoComponenteProcesso } from '../../DefinitionFiles/enuns'
import { InterfaceColecaoComponenteProcesso, InterfaceComponenteProcesso } from '../../DefinitionFiles/interfaces'
import './Inicio.scss'
import Searchbar from '../../Components/Searchbar/Searchbar'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import ComponenteProcesso from '../../Components/ComponenteProcesso/ComponenteProcesso'
import ColecaoComponenteProcesso from '../../Components/ComponenteProcesso/ComponenteColecaoProcesso/ComponenteColecaoProcesso'
import { Grid, Box, useMediaQuery } from '@mui/material'
import { BoxConteudo, BoxContainer } from '../App.styles'

const listaComponents: (InterfaceComponenteProcesso | InterfaceColecaoComponenteProcesso)[] = [
    {
        id: 1,
        titulo: "primeiro titulo ae",
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "um fia da puta ae",
        status: StatusComponenteProcesso.Backlog,
        tipo: TipoComponenteProcesso.Demanda,
        score: 12.5
    },
    {
        id: 2,
        dataReuniao: new Date(),
        comissao: "Comissao do diretor geral fodao matematico ultimate",
        tipo: TipoColecaoComponenteProcesso.Pauta,
        propostas: [
            {
                id: 7,
                titulo: "lerolerolerolero",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um fia da puta ae",
                status: StatusComponenteProcesso.Backlog,
                tipo: TipoComponenteProcesso.Demanda,
                score: 12.5
            },
            {
                id: 9,
                titulo: "eu quero janta de 3 horas",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um gênio",
                status: StatusComponenteProcesso.Backlog,
                tipo: TipoComponenteProcesso.Demanda,
                score: 10000
            }
        ]
    },
    {
        id: 3,
        titulo: "titulozao pra ver como fica muito grande a responsividade da bagaça",
        tamanho: TamanhoComponenteProcesso.Grande,
        solicitante: "esse aqui é legal",
        status: StatusComponenteProcesso.Assesment,
        tipo: TipoComponenteProcesso.Demanda,
        score: 12.5
    },
    {
        id: 4,
        titulo: "Demandinha de um cara legal",
        tamanho: TamanhoComponenteProcesso.MuitoGrande,
        solicitante: "Jefferson Rodrigues",
        status: StatusComponenteProcesso.Canceled,
        tipo: TipoComponenteProcesso.Proposta,
        score: 12.5
    },
    {
        id: 5,
        titulo: "me da droga",
        tamanho: TamanhoComponenteProcesso.Medio,
        solicitante: "um fia da puta ae caraiudo",
        status: StatusComponenteProcesso.BusinessCase,
        tipo: TipoComponenteProcesso.Proposta,
        score: 12.5
    },
    {
        id: 6,
        dataReuniao: new Date(),
        comissao: "comission fodelastica aaaa",
        tipo: TipoColecaoComponenteProcesso.Pauta,
        propostas: [
            {
                id: 5,
                titulo: "me da droga",
                tamanho: TamanhoComponenteProcesso.Medio,
                solicitante: "um fia da puta ae 2",
                status: StatusComponenteProcesso.BusinessCase,
                tipo: TipoComponenteProcesso.Proposta,
                score: 12.5
            },
            {
                id: 3,
                titulo: "titulozao pra ver como fica muito grande a responsividade da bagaça",
                tamanho: TamanhoComponenteProcesso.Grande,
                solicitante: "esse aqui é legal",
                status: StatusComponenteProcesso.Assesment,
                tipo: TipoComponenteProcesso.Demanda,
                score: 12.5
            },
            {
                id: 4,
                titulo: "Demandinha de um cara legal",
                tamanho: TamanhoComponenteProcesso.MuitoGrande,
                solicitante: "Jefferson Rodrigues",
                status: StatusComponenteProcesso.Canceled,
                tipo: TipoComponenteProcesso.Proposta,
                score: 12.5
            },
            {
                id: 1,
                titulo: "primeiro titulo ae",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um fia da puta ae",
                status: StatusComponenteProcesso.Backlog,
                tipo: TipoComponenteProcesso.Demanda,
                score: 12.5
            }
        ]
    },
    {
        id: 7,
        titulo: "lerolerolerolero",
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "um fia da puta ae",
        status: StatusComponenteProcesso.Assesment,
        tipo: TipoComponenteProcesso.Demanda,
        score: 12.5
    },
    {
        id: 8,
        dataReuniao: new Date(),
        comissao: "Uma comissão doida lá",
        tipo: TipoColecaoComponenteProcesso.ATA,
        propostas: [
            {
                id: 7,
                titulo: "lerolerolerolero",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um fia da puta ae",
                status: StatusComponenteProcesso.Backlog,
                tipo: TipoComponenteProcesso.Demanda,
                score: 12.5
            },
            {
                id: 9,
                titulo: "eu quero janta de 3 horas",
                tamanho: TamanhoComponenteProcesso.Pequeno,
                solicitante: "um gênio",
                status: StatusComponenteProcesso.Backlog,
                tipo: TipoComponenteProcesso.Demanda,
                score: 10000
            }
        ]
    },
    {
        id: 9,
        titulo: "eu quero janta de 3 horas",
        tamanho: TamanhoComponenteProcesso.Pequeno,
        solicitante: "um gênio",
        status: StatusComponenteProcesso.ToDo,
        tipo: TipoComponenteProcesso.Proposta,
        score: 10000
    }
]

/**
 * Componente da página de início
 * 
 * @param props 
 * @returns 
 */
export default function Inicio(props: { filtrar: boolean, setFiltrar: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [grid, setGrid] = useState(true)
    const matches = useMediaQuery('(max-width:1100px)');
    localStorage.setItem("PAGINATUAL", "home")

    const componentesProcessos = listaComponents.map((e: InterfaceComponenteProcesso | InterfaceColecaoComponenteProcesso) => {
        let componente
        if (instanceOfProcessoComponent(e)) {
            componente = <ComponenteProcesso processComponentAtributes={e} grid={grid} />
        } else {
            componente = <ColecaoComponenteProcesso processComponentCollectionAtributes={e} grid={grid} />
        }

        return (
            <Grid key={e.id} item xs={(grid ? (!matches? 4 : 6) : 12)}>
                <BoxContainer >
                    {componente}
                </BoxContainer>
            </Grid>
        )
    })

    return (
        <BoxConteudo >
            <Breadcrumb />
            <Searchbar setFiltrar={props.setFiltrar} filtrar={props.filtrar} grid={grid} setGrid={setGrid} />
            <BoxContainer>
                <Box sx={{ width: "90%" }}>
                    <Grid container spacing={2}>
                        {componentesProcessos}
                    </Grid>
                </Box>
            </BoxContainer>
        </BoxConteudo>
    )
}

/**
 * Função para ver se os dados passados são do tipo ProcessComponentInterface
 * 
 * @param data 
 * @returns 
 */
function instanceOfProcessoComponent(data: any): data is InterfaceComponenteProcesso {
    return 'titulo' in data;
}