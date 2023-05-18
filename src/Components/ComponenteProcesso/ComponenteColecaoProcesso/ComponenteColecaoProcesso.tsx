import { Link } from "react-router-dom";
import { TipoColecaoComponenteProcesso } from "../../../constants/enuns";
import {
  InterfaceComponenteProcesso,
  InterfaceColecaoComponenteProcesso,
} from "../../../constants/interfaces";
import { Grid, Tooltip } from "@mui/material";
import {
  BoxColecaoComponente,
  BoxGridCorProcesso,
  BoxListaCorProcesso,
  GridComponenteProcesso,
  GridLinkTypograpfy,
  GridTypography,
  ListaComponenteProcesso,
  ListaTypography,
  MainPaper,
  UltimaListaTypography,
} from "../ComponenteProcesso.styles";
import { MouseEventHandler } from "react";

export default function ComponenteColecaoProcesso(props: {
  atributosColecaoProcesso: any;
  grid: boolean;
}) {
  const componente = props.atributosColecaoProcesso;
  const paginaAtual = localStorage.getItem("PAGINATUAL");
  const listaPropostas = props.atributosColecaoProcesso.propostas;
  let corComponente,
    tituloToolTip,
    nomeTipoLink = "";

  if (componente.tipo == TipoColecaoComponenteProcesso.ATA) {
    corComponente = "#28B9DA";
    tituloToolTip = "Ata";
    nomeTipoLink = `/${paginaAtual}/ata`;
  } else {
    corComponente = "#2382BA";
    tituloToolTip = "Pauta";
    nomeTipoLink = `/${paginaAtual}/agenda`;
  }

  function verProcesso() {
    setProcesso()
    location.href = nomeTipoLink;
  }

  function setProcesso() {
    const tipoComponente = componente.tipo.toUpperCase();

    localStorage.setItem(
      `${tipoComponente}ESCOLHIDA`,
      JSON.stringify(componente)
    );
  }

  const processElement = props.grid ? (
    <GridComponent
      componente={componente}
      corComponente={corComponente}
      listaPropostas={listaPropostas}
      tituloToolTip={tituloToolTip}
      linkComponente={nomeTipoLink}
      setProcesso={setProcesso}
      verProcesso={verProcesso}
    />
  ) : (
    <ListComponent
      componente={componente}
      corComponente={corComponente}
      listaPropostas={listaPropostas}
      tituloToolTip={tituloToolTip}
      linkComponente={nomeTipoLink}
      setProcesso={setProcesso}
      verProcesso={verProcesso}
    />
  );

  return (
    <MainPaper key={componente.id}>
      <Grid container>{processElement}</Grid>
    </MainPaper>
  );
}

function GridComponent(props: ComponentCollectionProps) {
  console.log(props.componente);


  return (
    <>
      <Tooltip title={props.tituloToolTip} placement="left">
        <Grid item xs={1}>
          <BoxGridCorProcesso sx={{ backgroundColor: props.corComponente }} />
        </Grid>
      </Tooltip>
      <GridComponenteProcesso item xs={11} onClick={props.verProcesso}>
        <GridTypography variant="h6">
          {props.componente.tituloReuniao}
        </GridTypography>
        <GridTypography variant="subtitle1">
          <span> Data: </span>{" "}
          {" " + new Date(props.componente.dataReuniao).toLocaleDateString()}
        </GridTypography>
        <GridTypography variant="subtitle1">
          <span> Propostas: </span>
        </GridTypography>
        {props.componente.propostas.length > 0 ?
          <GridTypography variant="body1">
            - {props.componente.propostas[0].proposta.demanda.tituloDemanda}
          </GridTypography>
          :
          ""
        }
        <GridTypography variant="body1" sx={{ display: "flex" }}>
          {props.componente.propostas.length > 1 ?
            <BoxColecaoComponente>
              - {props.componente.propostas[1].proposta.demanda.tituloDemanda}
            </BoxColecaoComponente>
            :
            <BoxColecaoComponente>
              {""}
            </BoxColecaoComponente>
          }
          <GridLinkTypograpfy variant="body2">
            <Link to={props.linkComponente} onClick={props.setProcesso}>
              Ver mais
            </Link>
          </GridLinkTypograpfy>
        </GridTypography>
      </GridComponenteProcesso>
    </>
  );
}

function ListComponent(props: ComponentCollectionProps) {
  const propostas = props.listaPropostas.map((e, index) => {
    if (index >= 2) {
      return null;
    }
    return (
      <ListaTypography variant="subtitle2" sx={{ maxWidth: "8vw" }}>
        {"- " + e.tituloDemanda}
      </ListaTypography>
    );
  });

  return (
    <>
      <Tooltip title={props.tituloToolTip} placement="left">
        <Grid item xs={0.3}>
          <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
        </Grid>
      </Tooltip>
      <ListaComponenteProcesso item xs={11.7} onClick={props.verProcesso}>
        <ListaTypography variant="subtitle1" sx={{ minWidth: "20vw" }}>
          {props.componente.id} - {props.componente.tituloReuniao}
        </ListaTypography>
        <ListaTypography variant="subtitle2" sx={{ minWidth: "14.3vw" }}>
          <span> Data: </span>{" "}
          {props.componente.dataReuniao.toLocaleDateString()}
        </ListaTypography>
        <ListaTypography variant="subtitle2" sx={{ maxWidth: "8vw" }}>
          <span> Propostas: </span>
        </ListaTypography>
        {propostas}
        <UltimaListaTypography variant="body2" sx={{ maxWidth: "8.5vw" }}>
          <Link to={props.linkComponente} onClick={props.setProcesso}>
            Ver mais
          </Link>
        </UltimaListaTypography>
      </ListaComponenteProcesso>
    </>
  );
}

/**
 * Interface base para as propriedados de um Grid ou List Component
 */
interface ComponentCollectionProps {
  componente: InterfaceColecaoComponenteProcesso;
  corComponente: string;
  listaPropostas: InterfaceComponenteProcesso[];
  tituloToolTip: string;
  linkComponente: string;
  setProcesso: MouseEventHandler<HTMLAnchorElement>;
  verProcesso: MouseEventHandler<HTMLDivElement>;
}
