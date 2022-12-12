import { Divider, Grid, Typography } from "@mui/material";
import { BoxConteudo } from "../../Pages/App.styles";
import { getCorStatus, getCorTipo } from "../../Utils";
import Bandeira from "../Bandeira/Bandeira";
import { BoxCorStatus, GridContainer, GridContainerHeader, GridInformacao, GridTitulo } from "./ContainerProcesso.styles";


export default function ContainerProcesso(props: { informacaoProcesso: any, children: any, width: string}) {
    const informacaoProcesso = props.informacaoProcesso

    return (
        <BoxConteudo>
            <GridContainer container sx={{width: props.width}}>
                <Grid item xs={0.2}>
                    <BoxCorStatus sx={{ backgroundColor: getCorStatus(informacaoProcesso?.status) }} ></BoxCorStatus>
                </Grid>
                <GridInformacao item xs={11.8}>
                    <>
                        <GridContainerHeader container>
                            <GridTitulo item xs={10} >
                                <Typography variant='h4'>
                                    {informacaoProcesso?.titulo}
                                </Typography>
                            </GridTitulo>
                            <Grid item xs={2}>
                                <Bandeira cor={getCorTipo(informacaoProcesso?.tipo)} />
                            </Grid>
                        </GridContainerHeader>
                        <Divider />
                        {props.children}
                    </>
                </GridInformacao>
            </GridContainer>
        </BoxConteudo>
    )
}