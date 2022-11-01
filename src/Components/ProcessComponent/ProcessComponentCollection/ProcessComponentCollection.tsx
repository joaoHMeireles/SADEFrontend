import { Link } from 'react-router-dom';
import { processComponentCollection } from '../../../DefinitionFiles/enuns'
import { ProcessComponentInterface, ProcessComponentCollectionInterface } from "../../../DefinitionFiles/interfaces";
import { 
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
} from '../ProcessComponent.styles'

/**
 * Componente TSX de card e linha de uma coleção de compoentes de processo
 * 
 * @param props 
 * @returns 
 */
export default function ProcessComponentCollection(props: { processComponentCollectionAtributes: ProcessComponentCollectionInterface, grid: boolean }) {
    const componente = props.processComponentCollectionAtributes
    const paginaAtual = localStorage.getItem("PAGINATUAL")
    const listaPropostas = props.processComponentCollectionAtributes.propostas
    let corComponente, tituloToolTip, nomeTipoLink
    if (componente.tipo == processComponentCollection.ATA) {
        corComponente = "#28B9DA"
        tituloToolTip = "Ata"
        nomeTipoLink = `/${paginaAtual}/ata/${componente.id}?id-ata=${componente.id}`
    } else {
        corComponente = "#2382BA"
        tituloToolTip = "Pauta"
        nomeTipoLink = `/${paginaAtual}/agenda/${componente.id}?id-agenda=${componente.id}`
    }
    const processElement = (props.grid ?
        <GridComponent componente={componente} corComponente={corComponente} listaPropostas={listaPropostas} tituloToolTip={tituloToolTip} linkComponente={nomeTipoLink} />
        :
        <ListComponent componente={componente} corComponente={corComponente} listaPropostas={listaPropostas} tituloToolTip={tituloToolTip} linkComponente={nomeTipoLink} />
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
                <GridTypography variant='body1'>
                    - {props.componente.propostas[0].titulo}
                </GridTypography>
                <GridTypography variant='body1' sx={{ display: 'flex' }}>
                    <BoxCollectionComponent>
                        - {props.componente.propostas[1].titulo}
                    </BoxCollectionComponent>
                    <GridLinkTypograpfy variant='body2'>
                        <Link to={props.linkComponente} >Ver mais</Link>
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
function ListComponent(props: ComponentCollectionProps) {
    const propostas = props.listaPropostas.map((e, index) => {
        if (index >= 2) {
            return null
        }
        return (
            <ListTypography variant='subtitle2' sx={{ maxWidth: "8vw" }}>
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
                <ListTypography variant='subtitle2'  sx={{ minWidth: "14.3vw" }}>
                    <span> Data: </span> {props.componente.dataReuniao.toLocaleDateString()}
                </ListTypography>
                <ListTypography variant='subtitle2' sx={{ maxWidth: "8vw" }}>
                    <span> Propostas: </span>
                </ListTypography>
                {propostas}
                <LastListTypography variant='body2' sx={{maxWidth: "8.5vw"}}>
                    <Link to={props.linkComponente} >Ver mais</Link>
                </LastListTypography>
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
    linkComponente: string
}