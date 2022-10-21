import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import Searchbar from '../../Components/Searchbar/Searchbar'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import ProcessComponent from '../../Components/ProcessComponent/ProcessComponent'
import ProcessComponentCollection from '../../Components/ProcessComponentCollection/ProcessComponentCollection'
import { ContentBox } from '../App.styles'
import { processComponent, processComponentCollection, processComponentSize, processComponentStatus } from '../../DefinitionFiles/enuns'
import { ProcessComponentInterface, ProcessComponentCollectionInterface } from '../../DefinitionFiles/interfaces'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const listaComponents: (ProcessComponentInterface | ProcessComponentCollectionInterface)[] = [
    {
        id: 1,
        titulo: "primeiro titulo ae",
        tamanho: processComponentSize.Pequeno,
        solicitante: "um fia da puta ae",
        status: processComponentStatus.Backlog,
        tipo: processComponent.Demanda,
        score: 12.5
    },
    {
        id: 2,
        dataReuniao: new Date(),
        comissao: "Comissao do diretor geral fodao matematico ultimate",
        tipo: processComponentCollection.Pauta,
        propostas: [
            {
                id: 7,
                titulo: "lerolerolerolero",
                tamanho: processComponentSize.Pequeno,
                solicitante: "um fia da puta ae",
                status: processComponentStatus.Backlog,
                tipo: processComponent.Demanda,
                score: 12.5
            },
            {
                id: 9,
                titulo: "eu quero janta de 3 horas",
                tamanho: processComponentSize.Pequeno,
                solicitante: "um gênio",
                status: processComponentStatus.Backlog,
                tipo: processComponent.Demanda,
                score: 10000
            }
        ]
    },
    {
        id: 3,
        titulo: "titulozao pra ver como fica muito grande a responsividade da bagaça",
        tamanho: processComponentSize.Grande,
        solicitante: "esse aqui é legal",
        status: processComponentStatus.Assesment,
        tipo: processComponent.Demanda,
        score: 12.5
    },
    {
        id: 4,
        titulo: "Demandinha de um cara legal",
        tamanho: processComponentSize.MuitoGrande,
        solicitante: "Jefferson Rodrigues",
        status: processComponentStatus.Canceled,
        tipo: processComponent.Proposta,
        score: 12.5
    },
    {
        id: 5,
        titulo: "me da droga",
        tamanho: processComponentSize.Medio,
        solicitante: "um fia da puta ae caraiudo",
        status: processComponentStatus.BusinessCase,
        tipo: processComponent.Proposta,
        score: 12.5
    },
    {
        id: 6,
        dataReuniao: new Date(),
        comissao: "comission fodelastica aaaa",
        tipo: processComponentCollection.Pauta,
        propostas: [
            {
                id: 5,
                titulo: "me da droga",
                tamanho: processComponentSize.Medio,
                solicitante: "um fia da puta ae 2",
                status: processComponentStatus.BusinessCase,
                tipo: processComponent.Proposta,
                score: 12.5
            },
            {
                id: 3,
                titulo: "titulozao pra ver como fica muito grande a responsividade da bagaça",
                tamanho: processComponentSize.Grande,
                solicitante: "esse aqui é legal",
                status: processComponentStatus.Assesment,
                tipo: processComponent.Demanda,
                score: 12.5
            },
            {
                id: 4,
                titulo: "Demandinha de um cara legal",
                tamanho: processComponentSize.MuitoGrande,
                solicitante: "Jefferson Rodrigues",
                status: processComponentStatus.Canceled,
                tipo: processComponent.Proposta,
                score: 12.5
            },
            {
                id: 1,
                titulo: "primeiro titulo ae",
                tamanho: processComponentSize.Pequeno,
                solicitante: "um fia da puta ae",
                status: processComponentStatus.Backlog,
                tipo: processComponent.Demanda,
                score: 12.5
            }
        ]
    },
    {
        id: 7,
        titulo: "lerolerolerolero",
        tamanho: processComponentSize.Pequeno,
        solicitante: "um fia da puta ae",
        status: processComponentStatus.Backlog,
        tipo: processComponent.Demanda,
        score: 12.5
    },
    {
        id: 8,
        dataReuniao: new Date(),
        comissao: "Uma comissão doida lá",
        tipo: processComponentCollection.ATA,
        propostas: [
            {
                id: 7,
                titulo: "lerolerolerolero",
                tamanho: processComponentSize.Pequeno,
                solicitante: "um fia da puta ae",
                status: processComponentStatus.Backlog,
                tipo: processComponent.Demanda,
                score: 12.5
            },
            {
                id: 9,
                titulo: "eu quero janta de 3 horas",
                tamanho: processComponentSize.Pequeno,
                solicitante: "um gênio",
                status: processComponentStatus.Backlog,
                tipo: processComponent.Demanda,
                score: 10000
            }
        ]
    },
    {
        id: 9,
        titulo: "eu quero janta de 3 horas",
        tamanho: processComponentSize.Pequeno,
        solicitante: "um gênio",
        status: processComponentStatus.Backlog,
        tipo: processComponent.Proposta,
        score: 10000
    }
]

export default function Home(props: { filtrar: boolean, setFiltrar: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [grid, setGrid] = useState(true)

    const processComponents = listaComponents.map((e: ProcessComponentInterface | ProcessComponentCollectionInterface) => {
        let componente
        if (instanceOfProcessoComponent(e)) {
            componente = <ProcessComponent processComponentAtributes={e} grid={grid} />
        } else {
            componente = <ProcessComponentCollection processComponentCollectionAtributes={e} grid={grid} />
        }

        return (
            <Grid key={e.id} item xs={(grid ? 4 : 12)}>
                <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {componente}
                </Box>
            </Grid>
        )
    })

    return (
        <ContentBox >
            <Breadcrumb />
            <Searchbar setFiltrar={props.setFiltrar} filtrar={props.filtrar} grid={grid} setGrid={setGrid} />
            <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "90%" }}>
                    <Grid container spacing={2}>
                        {processComponents}
                    </Grid>
                </Box>
            </Box>
        </ContentBox>
    )
}

function instanceOfProcessoComponent(data: any): data is ProcessComponentInterface {
    return 'titulo' in data;
}