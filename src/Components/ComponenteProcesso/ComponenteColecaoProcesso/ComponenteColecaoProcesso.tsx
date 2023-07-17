import { Link } from "react-router-dom";
import { TipoColecaoComponenteProcesso } from "../../../constants/enuns";
import {
  InterfaceComponenteProcesso,
  InterfaceColecaoComponenteProcesso,
} from "../../../constants/interfaces";
import { Box, Grid, Radio, Tooltip } from "@mui/material";
import {
  BoxColecaoComponente,
  BoxGridCorProcesso,
  BoxListaCorProcesso,
  ContainerLista,
  GridBoxTituloRadio,
  GridComponenteProcesso,
  GridLinkColecaoTypograpfy,
  GridTypography,
  ListaComponenteProcesso,
  ListaTypography,
  MainPaper,
  UltimaListaTypography,
} from "../ComponenteProcesso.styles";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext";

export default function ComponenteColecaoProcesso(props: {
  atributosColecaoProcesso: any;
  grid: boolean;
  criandoATA?: boolean;
  pautaEscolhida?: any;
  setPautaEscolhida?: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { lerTexto, leituraDeSiteAtiva } = useContext(TextReaderContext) as any
  const [checado, setChecado] = useState(false)
  const componente = props.atributosColecaoProcesso;
  const paginaAtual = localStorage.getItem("PAGINATUAL");
  const listaPropostas = props.atributosColecaoProcesso.propostas;
  let corComponente,
    tituloToolTip,
    nomeTipoLink = "";

  if (componente.tipo == TipoColecaoComponenteProcesso.ATA) {
    corComponente = "#4ebbde";
    tituloToolTip = "Ata";
    nomeTipoLink = `/${paginaAtual}/ata`;
  } else {
    corComponente = "#3d83bc";
    tituloToolTip = "Pauta";
    nomeTipoLink = `/${paginaAtual}/agenda`;
  }

  useEffect(() => {
    if (props.pautaEscolhida) {
      if (componente.idPauta == props.pautaEscolhida.idPauta) {
        setChecado(true)
      } else {
        setChecado(false)
      }
    }
  }, [props.pautaEscolhida])

  function verProcesso(event: any) {
    lerTexto(event)
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
      criandoATA={props.criandoATA}
      pautaEscolhida={props.pautaEscolhida}
      setPautaEscolhida={props.setPautaEscolhida}
      checado={checado}
      lerTexto={lerTexto} />
  ) : (
    <ListComponent
      componente={componente}
      corComponente={corComponente}
      listaPropostas={listaPropostas}
      tituloToolTip={tituloToolTip}
      linkComponente={nomeTipoLink}
      setProcesso={setProcesso}
      verProcesso={verProcesso}
      criandoATA={props.criandoATA}
      pautaEscolhida={props.pautaEscolhida}
      setPautaEscolhida={props.setPautaEscolhida}
      checado={checado}
      lerTexto={lerTexto} />
  );

  return (
    <MainPaper key={componente.id}>
      <Grid container>{processElement}</Grid>
    </MainPaper>
  );
}

function GridComponent(props: ComponentCollectionProps) {
  return (
    <>
      {props.criandoATA ?
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso sx={{ backgroundColor: props.corComponente }} />
            </Grid>
          </Tooltip>

          <GridComponenteProcesso item xs={11}
            onClick={(e: any) => {
              props.lerTexto(e)

              if (props.setPautaEscolhida) {
                props.setPautaEscolhida(props.componente)
              }
            }}>
            <GridBoxTituloRadio>
              <GridTypography variant="h6">
                {props.componente.tituloReuniao}
              </GridTypography>

              <Radio checked={props.checado} />
            </GridBoxTituloRadio>

            <GridTypography variant="subtitle1">
              Propostas:
            </GridTypography>

            <GridTypography variant="body1">
              - {props.componente.propostas[0].proposta.demanda.tituloDemanda}
            </GridTypography>

            <GridTypography variant="body1" sx={{ display: "flex" }}>
              {props.componente.propostas.length > 1 ?
                <BoxColecaoComponente onClick={props.lerTexto}>
                  - {props.componente.propostas[1].proposta.demanda.tituloDemanda}
                </BoxColecaoComponente>
                :
                <BoxColecaoComponente>
                  {""}
                </BoxColecaoComponente>
              }
              <GridLinkColecaoTypograpfy sx={{ width: "25% !important" }}>
                <Link to={props.linkComponente} onClick={props.setProcesso}>
                  Ver mais
                </Link>
              </GridLinkColecaoTypograpfy>
            </GridTypography>
          </GridComponenteProcesso>
        </>
        :
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
              Propostas:
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
            </GridTypography>
          </GridComponenteProcesso>
        </>
      }
    </>
  );
}

function ListComponent(props: ComponentCollectionProps) {
  const propostas = props.listaPropostas.map((e, index) => {
    if (index >= 2) {
      return null;
    }

    return (
      <ListaTypography onClick={props.lerTexto} sx={{ width: "auto !important" }}>
        {" - " + e.proposta.demanda.tituloDemanda}
      </ListaTypography>
    );
  });

  return (
    <>
      {props.criandoATA ?
        <ContainerLista>
          <Tooltip title={props.tituloToolTip} placement="left">
            <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
          </Tooltip>

          <ListaComponenteProcesso
            onClick={(e: any) => {
              props.lerTexto(e)
              if (props.setPautaEscolhida) {
                props.setPautaEscolhida(props.componente)
              }
            }}>
            <ListaTypography sx={{ fontSize: "16px !important", width: "50% !important" }}>
              {props.componente.tituloReuniao}
            </ListaTypography>

            <ListaTypography sx={{ width: "12% !important" }}>
              Data: {new Date(props.componente.dataReuniao).toLocaleDateString()}
            </ListaTypography>

            <ListaTypography sx={{ width: "30% !important" }}>
              <p style={{ alignItems: "center", display: "flex", justifyContent: "flex-start", width: "100%" }}>Propostas: {propostas}</p>
            </ListaTypography>

            <ListaTypography sx={{ width: "6% !important" }}>
              <Link to={props.linkComponente} onClick={props.setProcesso}>
                Ver mais
              </Link>
            </ListaTypography>

            <UltimaListaTypography>
              <Radio checked={props.checado} />
            </UltimaListaTypography>
          </ListaComponenteProcesso>
        </ContainerLista>
        :
        <ContainerLista>
          <Tooltip title={props.tituloToolTip} placement="left">
            <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
          </Tooltip>

          <ListaComponenteProcesso onClick={props.verProcesso}>
            <ListaTypography sx={{ fontSize: "16px !important", width: "50% !important" }}>
              {props.componente.tituloReuniao}
            </ListaTypography>

            <ListaTypography sx={{ width: "14% !important" }}>
              Data: {new Date(props.componente.dataReuniao).toLocaleDateString()}
            </ListaTypography>

            <ListaTypography sx={{ width: "30% !important" }}>
              <p style={{ alignItems: "center", display: "flex", justifyContent: "flex-start", width: "100%" }}>Propostas: {propostas}</p>
            </ListaTypography>

            <UltimaListaTypography sx={{ width: "6% !important" }}>
              <Link to={props.linkComponente} onClick={props.setProcesso}>
                Ver mais
              </Link>
            </UltimaListaTypography>
          </ListaComponenteProcesso>
        </ContainerLista>
      }
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
  criandoATA?: boolean;
  pautaEscolhida?: any;
  setPautaEscolhida?: React.Dispatch<React.SetStateAction<any>>;
  checado: boolean;
  lerTexto: MouseEventHandler<HTMLElement>;
}