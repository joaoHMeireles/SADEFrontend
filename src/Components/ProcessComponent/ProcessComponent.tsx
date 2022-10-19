import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { MainPaper } from './ProcessComponent.styles'
import { processComponent } from '../../DefinitionFiles/enuns'
import { ProcessComponentInterface } from '../../DefinitionFiles/interfaces'


export default function ProcessComponent(props: { processComponentAtributes: ProcessComponentInterface, processCollectionComponentAtributes: string, grid: boolean }) {
    const componente = props.processComponentAtributes
    let processElement

    if (props.grid) {
        processElement = (
            <>
                <Grid item xs={1}>
                    <Box sx={{ backgroundColor: (componente.tipo == processComponent.Demanda ? "#00579d" : "#6aacda"), width: "50%", height: "100%", borderRadius: "5px 0 0 5px" }} />
                </Grid>
                <Grid sx={{ display: "grid", padding: "5px", color: "#595959" }} item xs={11}>
                    <Typography component="h1" variant='h6' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        {componente.titulo}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        Score: {componente.score}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        Solicitante: {componente.solicitante}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        Status: {getNome(componente.status)}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        Tamanho: {componente.tamanho}
                    </Typography>
                </Grid>
            </>
        )
    } else {
        processElement = (
            <>
                <Grid item xs={0.3}>
                    <Box sx={{ backgroundColor: (componente.tipo == processComponent.Demanda ? "#00579d" : "#6aacda"), height: "100%", borderRadius: "5px 0 0 5px", maxWidth: "13px" }} />
                </Grid>
                <Grid sx={{ display: "flex", padding: "5px", color: "#595959", alignItems: "center" }} item xs={11.7}>
                    <Typography component="h1" variant='subtitle1' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "20vw" }}>
                        {componente.id} - {componente.titulo}
                    </Typography>
                    <Box sx={{ width: "3vw" }} />
                    <Typography variant='subtitle2' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "8vw" }}>
                        Score: {componente.score}
                    </Typography>
                    <Typography variant='subtitle2' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "15vw" }}>
                        Solicitante: {componente.solicitante}
                    </Typography>
                    <Box sx={{ width: "2vw" }} />
                    <Typography variant='subtitle2' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "15vw" }}>
                        Status: {getNome(componente.status)}
                    </Typography>
                    <Typography variant='subtitle2' sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "15vw" }}>
                        Tamanho: {componente.tamanho}
                    </Typography>
                </Grid>
            </>
        )
    }

    return (
        <MainPaper key={componente.id} >
            <Grid container >
                {processElement}
            </Grid>
        </MainPaper>
    )
}

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
