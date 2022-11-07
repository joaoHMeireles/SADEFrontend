import { Link } from 'react-router-dom'
import { processComponent } from '../../DefinitionFiles/enuns'
import { ProcessComponentInterface } from '../../DefinitionFiles/interfaces'
import { 
    Box,
    Grid,
    Tooltip 
} from '@mui/material'
import {
    MainPaper,
    GridProccessColorBox,
    GridProccessComponent,
    GridTypography,
    GridLinkTypograpfy,
    ListProccessColorBox,
    ListProccessComponent,
    ListTypography,
    LastListTypography,
    BoxCollectionComponent
} from './ProcessComponent.styles'
import { MouseEventHandler } from 'react'

/**
 * Componente TSX de card e linha de um compoente de processo
 * 
 * @param props 
 * @returns 
 */
export default function ProcessComponent(props: { grid: boolean, processComponentAtributes: ProcessComponentInterface }) {
    const componente = props.processComponentAtributes
    const paginaAtual = localStorage.getItem("PAGINATUAL")
    let corComponente, tituloToolTip, nomeTipoLink
    if (componente.tipo == processComponent.Demanda) {
        corComponente = "#00579d"
        tituloToolTip = "Demanda"
        nomeTipoLink = `/${paginaAtual}/demand/${componente.id}?id-demand=${componente.id}`
    } else {
        corComponente = "#6aacda"
        tituloToolTip = "Proposta"
        nomeTipoLink = `/${paginaAtual}/proposal/${componente.id}?id-proposal=${componente.id}`
    }

    const processElement = (props.grid ?
        <GridComponent componente={componente} corComponente={corComponente} tituloToolTip={tituloToolTip} linkComponente={nomeTipoLink} setProcesso={setProcesso}/>
        :
        <ListComponent componente={componente} corComponente={corComponente} tituloToolTip={tituloToolTip} linkComponente={nomeTipoLink} setProcesso={setProcesso}/>
    )

    function setProcesso(){
        localStorage.setItem(`CHOOSEDPROCESS`, JSON.stringify({id: componente.id, tipo: componente.tipo}))
    }


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
                <GridTypography variant='subtitle1' sx={{ display: "flex" }}>
                    <BoxCollectionComponent>
                        <span>Tamanho:</span> {props.componente.tamanho}
                    </BoxCollectionComponent>
                    <GridLinkTypograpfy variant='body2'>
                        <Link to={props.linkComponente} onClick={props.setProcesso}>Ver mais</Link>
                    </GridLinkTypograpfy>
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
                <LastListTypography variant='body2' sx={{maxWidth: "10vw"}}>
                    <Link to={props.linkComponente} onClick={props.setProcesso}>Ver mais</Link>
                </LastListTypography>
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
    linkComponente: string
    setProcesso: MouseEventHandler<HTMLAnchorElement>
}