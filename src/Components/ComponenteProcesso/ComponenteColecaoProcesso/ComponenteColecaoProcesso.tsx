import { Link } from 'react-router-dom';
import { TipoColecaoComponenteProcesso } from '../../../Constants/enuns'
import { InterfaceComponenteProcesso, InterfaceColecaoComponenteProcesso } from "../../../Constants/interfaces";
import { Grid, Tooltip } from '@mui/material'
import {
    BoxColecaoComponente, BoxGridCorProcesso, BoxListaCorProcesso, GridComponenteProcesso, GridLinkTypograpfy,
    GridTypography, ListaComponenteProcesso, ListaTypography, MainPaper, UltimaListaTypography
} from '../ComponenteProcesso.styles'
import { MouseEventHandler } from 'react';

export default function ComponenteColecaoProcesso(props: { atributosColecaoProcesso: any, grid: boolean }) {
    const componente = props.atributosColecaoProcesso
    const paginaAtual = localStorage.getItem("PAGINATUAL")
    const listaPropostas = props.atributosColecaoProcesso.propostas
    let corComponente, tituloToolTip, nomeTipoLink

    if (componente.tipo == TipoColecaoComponenteProcesso.ATA) {
        corComponente = "#28B9DA"
        tituloToolTip = "Ata"
        nomeTipoLink = `/${paginaAtual}/ata`
    } else {
        corComponente = "#2382BA"
        tituloToolTip = "Pauta"
        nomeTipoLink = `/${paginaAtual}/agenda`
    }

    const processElement = (props.grid ?
        <GridComponent componente={componente} corComponente={corComponente} listaPropostas={listaPropostas} tituloToolTip={tituloToolTip} linkComponente={nomeTipoLink} setProcesso={setProcesso}/>
        :
        <ListComponent componente={componente} corComponente={corComponente} listaPropostas={listaPropostas} tituloToolTip={tituloToolTip} linkComponente={nomeTipoLink} setProcesso={setProcesso}/>
    )

    function setProcesso() {
        const tipoComponente = componente.tipo.toUpperCase()
        localStorage.setItem(`${tipoComponente}ESCOLHIDA`, JSON.stringify(componente))
    }

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
            <Tooltip title={props.tituloToolTip} placement="left">
                <Grid item xs={1}>
                    <BoxGridCorProcesso sx={{ backgroundColor: props.corComponente }} />
                </Grid>
            </Tooltip>
            <GridComponenteProcesso item xs={11}>
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
                    <BoxColecaoComponente>
                        - {props.componente.propostas[1].titulo}
                    </BoxColecaoComponente>
                    <GridLinkTypograpfy variant='body2'>
                        <Link to={props.linkComponente} onClick={props.setProcesso}>Ver mais</Link>
                    </GridLinkTypograpfy>
                </GridTypography>
            </GridComponenteProcesso>
        </>
    )
}

function ListComponent(props: ComponentCollectionProps) {
    const propostas = props.listaPropostas.map((e, index) => {
        if (index >= 2) {
            return null
        }
        return (
            <ListaTypography variant='subtitle2' sx={{ maxWidth: "8vw" }}>
                {"- " + e.titulo}
            </ListaTypography>
        )
    })

    return (
        <>
            <Tooltip title={props.tituloToolTip} placement="left">
                <Grid item xs={0.3}>
                    <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
                </Grid>
            </Tooltip>
            <ListaComponenteProcesso item xs={11.7}>
                <ListaTypography variant='subtitle1' sx={{ minWidth: "20vw" }}>
                    {props.componente.id} - {props.componente.comissao}
                </ListaTypography>
                <ListaTypography variant='subtitle2'  sx={{ minWidth: "14.3vw" }}>
                    <span> Data: </span> {props.componente.dataReuniao.toLocaleDateString()}
                </ListaTypography>
                <ListaTypography variant='subtitle2' sx={{ maxWidth: "8vw" }}>
                    <span> Propostas: </span>
                </ListaTypography>
                {propostas}
                <UltimaListaTypography variant='body2' sx={{maxWidth: "8.5vw"}}>
                    <Link to={props.linkComponente} onClick={props.setProcesso}>Ver mais</Link>
                </UltimaListaTypography>
            </ListaComponenteProcesso>
        </>
    )
}

/**
 * Interface base para as propriedados de um Grid ou List Component
 */
interface ComponentCollectionProps {
    componente: InterfaceColecaoComponenteProcesso,
    corComponente: string
    listaPropostas: InterfaceComponenteProcesso[]
    tituloToolTip: string
    linkComponente: string
    setProcesso:  MouseEventHandler<HTMLAnchorElement>
}