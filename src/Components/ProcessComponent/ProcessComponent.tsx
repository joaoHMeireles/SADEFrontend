import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { ProcessComponentInterface } from '../../DefinitionFiles/interfaces'

export default function ProcessComponent(props: { processComponentAtributes: ProcessComponentInterface, processCollectionComponentAtributes: string, grid: boolean }) {
    return (
        <Paper sx={{ width: "90%", heigth: "90%" }}>
            <Grid container >
                <Grid item xs={1}>
                    <Box sx={{ backgroundColor: "#00579d", width: "50%", height: "100%" }}>
                        1
                    </Box>
                </Grid>
                <Grid item xs={11}>
                    2
                </Grid>
            </Grid>
        </Paper>
    )
}