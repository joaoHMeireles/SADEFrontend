import { processComponent } from '../../DefinitionFiles/enuns'
import { ProcessComponentInterface } from '../../DefinitionFiles/interfaces'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import {
    MainPaper,
    GridProccessColorBox,
    GridProccessComponent,
    GridTypography,
    ListProccessColorBox,
    ListProccessComponent,
    ListTypography
} from './ProcessComponent.styles'

/**
 * Componente TSX de card e linha de um compoente de processo
 * 
 * @param props 
 * @returns 
 */
export default function ProcessComponent(props: { grid: boolean, processComponentAtributes: ProcessComponentInterface }) {
    const componente = props.processComponentAtributes
    let corComponente, tituloToolTip
    if (componente.tipo == processComponent.Demanda) {
        corComponente = "#00579d"
        tituloToolTip = "Demanda"
    } else {
        corComponente = "#6aacda"
        tituloToolTip = "Proposta"
    }
    const processElement = (props.grid ?
        <GridComponent componente={componente} corComponente={corComponente} tituloToolTip={tituloToolTip} />
        :
        <ListComponent componente={componente} corComponente={corComponente} tituloToolTip={tituloToolTip} />
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
function GridComponent(props: ComponentProps) {

    return (
        <>
            <Tooltip title={props.tituloToolTip} placement="left">
                <Grid item xs={1}>
                    <GridProccessColorBox sx={{ backgroundColor: props.corComponente }} />
                </Grid>
            </Tooltip>
            <GridProccessComponent item xs={11}>
                <GridTypography variant='h6' >
                    {props.componente.titulo}
                </GridTypography>
                <GridTypography variant='subtitle1' >
                    <span>Solicitante:</span> {props.componente.solicitante}
                </GridTypography>
                <GridTypography variant='subtitle1' >
                    <span>Score:</span> {props.componente.score}
                </GridTypography>
                <GridTypography variant='subtitle1' >
                    <span>Status:</span> {getNome(props.componente.status)}
                </GridTypography>
                <GridTypography variant='subtitle1' >
                    <span>Tamanho:</span> {props.componente.tamanho}
                </GridTypography>
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
function ListComponent(props: ComponentProps) {

    return (
        <>
            <Tooltip title={props.tituloToolTip} placement="left">
                <Grid item xs={0.3}>
                    <ListProccessColorBox sx={{ backgroundColor: props.corComponente }} />
                </Grid>
            </Tooltip>
            <ListProccessComponent item xs={11.7}>
                <ListTypography variant='subtitle1' sx={{ minWidth: "20vw" }}>
                    {props.componente.id} - {props.componente.titulo}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    <span>Solicitante:</span> {props.componente.solicitante}
                </ListTypography>
                <ListTypography variant='subtitle2' sx={{ maxWidth: "7.5vw" }}>
                    <span>Score:</span> {props.componente.score}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    <span>Status:</span> {getNome(props.componente.status)}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    <span>Tamanho:</span> {props.componente.tamanho}
                </ListTypography>
            </ListProccessComponent>
        </>
    )
}

/**
 * Função que transforma o nome de um status do banco para uma conversão mais compreensível
 * 
 * @param status 
 * @returns 
 */
function getNome(status: string) {
    const nomeStatus = {
        Backlog: "Aguardando revisão",
        Assesment: "Em planejamento",
        BusinessCase: "Em planejamento demorado",
        Canceled: "Cancelado",
        ToDo: "A fazer"
    }

    return (nomeStatus as any)[status]
}

/**
 * Interface base para as propriedados de um Grid ou List Component
 */
interface ComponentProps {
    componente: ProcessComponentInterface,
    corComponente: string
    tituloToolTip: string
}