import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { processComponent } from '../../DefinitionFiles/enuns'
import { ProcessComponentInterface } from '../../DefinitionFiles/interfaces'

export default function ProcessComponent(props: { processComponentAtributes: ProcessComponentInterface, processCollectionComponentAtributes: string, grid: boolean }) {
    const componente = props.processComponentAtributes
    const tamanho = componente.titulo.length

    return (
        <Paper key={componente.id} sx={{ width: "90%", heigth: "90%", borderRadius: "5px" }}>
            <Grid container >
                <Grid item xs={0.5}>
                    <Box sx={{ backgroundColor: (componente.tipo == processComponent.Demanda?  "#00579d" :  "#6aacda" ), width: "80%", height: "100%", borderRadius: "5px 0 0 5px", maxWidth: "13px" }} />
                </Grid>
                <Grid sx={{ display: "grid", padding: "5px", color: "#595959"}} item xs={11.5}>
                    <Typography component="h1" variant='h6' sx={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>
                        {componente.titulo}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Tamanho: {componente.tamanho}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Solicitante: {componente.solicitante}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Status: {getNome(componente.status)}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
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
