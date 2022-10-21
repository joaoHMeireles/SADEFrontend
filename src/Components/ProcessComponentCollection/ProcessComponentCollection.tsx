import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import {
    MainPaper,
    GridProccessColorBox,
    GridProccessComponent,
    GridTypography,
    ListProccessColorBox,
    ListProccessComponent,
    ListTypography
} from '../ProcessComponent/ProcessComponent.styles'
import { processComponentCollection } from '../../DefinitionFiles/enuns'
import { ProcessComponentInterface, ProcessComponentCollectionInterface } from "../../DefinitionFiles/interfaces";

/**
 * Componente TSX de card e linha de uma coleção de compoentes de processo
 * 
 * @param props 
 * @returns 
 */
export default function ProcessComponentCollection(props: { processComponentCollectionAtributes: ProcessComponentCollectionInterface, grid: boolean }) {
    const componente = props.processComponentCollectionAtributes
    const listaPropostas = props.processComponentCollectionAtributes.propostas
    let corComponente, tituloToolTip
    if (componente.tipo == processComponentCollection.ATA) {
        corComponente = "#28B9DA"
        tituloToolTip = "Ata"
    } else {
        corComponente = "#2382BA"
        tituloToolTip = "Pauta"
    }
    const processElement = (props.grid ?
        <GridComponent componente={componente} corComponente={corComponente} listaPropostas={listaPropostas} tituloToolTip={tituloToolTip} />
        :
        <ListComponent componente={componente} corComponente={corComponente} listaPropostas={listaPropostas} tituloToolTip={tituloToolTip} />
    )

    return (
        <MainPaper key={componente.id} >
            <Grid container >
                {processElement}
            </Grid>
        </MainPaper>
    )
}

/**
 * Formatação do componente caso ele esteja em formato de card, ou seja, em grid
 * 
 * @param props 
 * @returns 
 */
function GridComponent(props: ComponentCollectionProps) {
    const propostas = props.listaPropostas.map((e, index) => {
        if (index >= 2) {
            return null
        }
        return (
            <>
                <GridTypography variant='body1'>
                    - {e.titulo}
                </GridTypography>
            </>
        )
    })

    return (
        <>
            <Tooltip title={props.tituloToolTip} placement="left">
                <Grid item xs={1}>
                    <GridProccessColorBox sx={{ backgroundColor: props.corComponente }} />
                </Grid>
            </Tooltip>
            <GridProccessComponent item xs={11}>
                <GridTypography variant='h6' >
                    {props.componente.comissao}
                </GridTypography>
                <GridTypography variant='subtitle1'>
                    <span> Data: </span> {" " + props.componente.dataReuniao.toLocaleDateString()}
                </GridTypography>
                <GridTypography variant='subtitle1'>
                    <span> Propostas: </span>
                </GridTypography>
                {propostas}
            </GridProccessComponent>
        </>
    )
}

/**
 * Formatação do componente caso ele esteja em formato de linha ou seja, em forma de lista
 * 
 * @param props 
 * @returns 
 */
function ListComponent(props: ComponentCollectionProps) {
    const propostas = props.listaPropostas.map((e, index) => {
        if (index >= 2) {
            return null
        }
        return (
            <ListTypography variant='subtitle2' sx={{ maxWidth: "10vw" }}>
                {"- " + e.titulo}
            </ListTypography>
        )
    })

    return (
        <>
            <Tooltip title={props.tituloToolTip} placement="left">
                <Grid item xs={0.3}>
                    <ListProccessColorBox sx={{ backgroundColor: props.corComponente }} />
                </Grid>
            </Tooltip>
            <ListProccessComponent item xs={11.7}>
                <ListTypography variant='subtitle1' sx={{ minWidth: "20vw" }}>
                    {props.componente.id} - {props.componente.comissao}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    <span> Data: </span> {props.componente.dataReuniao.toLocaleDateString()}
                </ListTypography>
                <ListTypography variant='subtitle2' sx={{ maxWidth: "8vw" }}>
                    <span> Propostas: </span>
                </ListTypography>
                {propostas}
                {/* fazer uma linha listando as propostas até chegar no limite dalinha */}
            </ListProccessComponent>
        </>
    )
}

/**
 * Interface base para as propriedados de um Grid ou List Component
 */
interface ComponentCollectionProps {
    componente: ProcessComponentCollectionInterface,
    corComponente: string
    listaPropostas: ProcessComponentInterface[]
    tituloToolTip: string
}