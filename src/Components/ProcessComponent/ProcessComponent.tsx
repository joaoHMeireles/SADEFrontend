import Grid from '@mui/material/Grid'
import { 
    MainPaper, 
    GridProccessColorBox, 
    GridProccessComponent, 
    GridTypography, 
    ListProccessColorBox,
    ListProccessComponent, 
    ListTypography 
} from './ProcessComponent.styles'
import { processComponent } from '../../DefinitionFiles/enuns'
import { ProcessComponentInterface } from '../../DefinitionFiles/interfaces'

/**
 * Componente TSX de card e linha de um compoente de processo
 * 
 * @param props 
 * @returns 
 */
export default function ProcessComponent(props: { grid: boolean, processComponentAtributes: ProcessComponentInterface, processCollectionComponentAtributes: string }) {
    const componente = props.processComponentAtributes
    const corComponente = (componente.tipo == processComponent.Demanda ? "#00579d" : "#6aacda");
    const processElement = (props.grid ?
        <GridComponent componente={componente} corComponente={corComponente} />
        :
        <ListComponent componente={componente} corComponente={corComponente} />
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
 * Foramtação do componente caso ele esteja em formato de card, ou seja, em grid
 * 
 * @param props 
 * @returns 
 */
function GridComponent(props: { componente: ProcessComponentInterface, corComponente: string }) {

    return (
        <>
            <Grid item xs={1}>
                <GridProccessColorBox sx={{ backgroundColor: props.corComponente }} />
            </Grid>
            <GridProccessComponent item xs={11}>
                <GridTypography variant='h6' >
                    {props.componente.titulo}
                </GridTypography>
                <GridTypography variant='subtitle1' >
                    Score: {props.componente.score}
                </GridTypography>
                <GridTypography variant='subtitle1' >
                    Solicitante: {props.componente.solicitante}
                </GridTypography>
                <GridTypography variant='subtitle1' >
                    Status: {getNome(props.componente.status)}
                </GridTypography>
                <GridTypography variant='subtitle1' >
                    Tamanho: {props.componente.tamanho}
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
function ListComponent(props: { componente: ProcessComponentInterface, corComponente: string }) {

    return (
        <>
            <Grid item xs={0.3}>
                <ListProccessColorBox sx={{ backgroundColor: props.corComponente }} />
            </Grid>
            <ListProccessComponent item xs={11.7}>
                <ListTypography variant='subtitle1' sx={{ minWidth: "20vw" }}>
                    {props.componente.id} - {props.componente.titulo}
                </ListTypography>
                <ListTypography variant='subtitle2' sx={{ maxWidth: "8vw" }}>
                    Score: {props.componente.score}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    Solicitante: {props.componente.solicitante}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    Status: {getNome(props.componente.status)}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    Tamanho: {props.componente.tamanho}
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
