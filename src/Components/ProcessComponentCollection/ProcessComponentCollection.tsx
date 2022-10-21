import Grid from '@mui/material/Grid';
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

export default function ProcessComponentCollection(props: { processComponentCollectionAtributes: ProcessComponentCollectionInterface, grid: boolean }) {
    const componente = props.processComponentCollectionAtributes
    const listaPropostas = props.processComponentCollectionAtributes.propostas
    const corComponente = (componente.tipo == processComponentCollection.ATA ? "#28B9DA" : "#2382BA");
    const processElement = (props.grid ?
        <GridComponent componente={componente} corComponente={corComponente} listaPropostas={listaPropostas}/>
        :
        <ListComponent componente={componente} corComponente={corComponente} listaPropostas={listaPropostas}/>
    )

    return (
        <MainPaper key={componente.id} >
            <Grid container >
                {processElement}
            </Grid>
        </MainPaper>
    )
}

function GridComponent(props: ComponentCollectionProps) {

    return (
        <>
            <Grid item xs={1}>
                <GridProccessColorBox sx={{ backgroundColor: props.corComponente }} />
            </Grid>
            <GridProccessComponent item xs={11}>
                <GridTypography variant='h6' >
                    {props.componente.comissao}
                </GridTypography>
                <GridTypography variant='subtitle1'>
                    Data: {props.componente.dataReuniao.toDateString()}
                </GridTypography>
                <GridTypography variant='subtitle1'>
                    Propostas:
                </GridTypography>
                {/* fazer lista com as propostas da pauta/ata */}
            </GridProccessComponent>
        </>
    )
}


function ListComponent(props: ComponentCollectionProps) {

    return (
        <>
            <Grid item xs={0.3}>
                <ListProccessColorBox sx={{ backgroundColor: props.corComponente }} />
            </Grid>
            <ListProccessComponent item xs={11.7}>
                <ListTypography variant='subtitle1' sx={{ minWidth: "20vw" }}>
                    {props.componente.id} - {props.componente.comissao}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    Data: {props.componente.dataReuniao.toDateString()}
                </ListTypography>
                <ListTypography variant='subtitle2' >
                    Propostas:
                </ListTypography>
                {/* fazer uma linha listando as propostas até chegar no limite dalinha */}
            </ListProccessComponent>
        </>
    )
}

interface ComponentCollectionProps {
    componente: ProcessComponentCollectionInterface,
    corComponente: string
    listaPropostas: ProcessComponentInterface[]
}