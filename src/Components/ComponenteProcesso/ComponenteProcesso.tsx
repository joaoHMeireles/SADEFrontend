import { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { TipoComponenteProcesso } from "../../constants/enuns";
import { InterfaceComponenteProcesso } from "../../constants/interfaces";
import { FormControlLabel, Grid, RadioGroup, Tooltip } from "@mui/material";
import Radio from "@mui/material/Radio";
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
} from "./ComponenteProcesso.styles";

export default function ComponenteProcesso(props: {
  grid: boolean;
  atributosProcesso: any;
  rascunho: boolean;
  proposta: boolean;
  propostaSelecionada: number;
  setPropostaSelecionada: React.Dispatch<React.SetStateAction<number>>
}) {
  const componente = props.atributosProcesso;
  const paginaAtual = localStorage.getItem("PAGINATUAL");
  let corComponente, tituloToolTip, nomeTipoLink;

  if (componente.tipo == TipoComponenteProcesso.Demanda) {
    corComponente = "#00579d";
    tituloToolTip = "Demanda";
    nomeTipoLink = `/${paginaAtual}/demand`;
  } else {
    corComponente = "#6aacda";
    tituloToolTip = "Proposta";
    nomeTipoLink = `/${paginaAtual}/proposal`;
  }

  const processElement = props.grid ? (
    <GridComponent
      componente={componente}
      corComponente={corComponente}
      tituloToolTip={tituloToolTip}
      linkComponente={nomeTipoLink}
      setProcesso={setProcesso}
      rascunho={props.rascunho}
      proposta={props.proposta}
      selecionado={props.propostaSelecionada == componente.id}
      setSelecionado={props.setPropostaSelecionada}
    />
  ) : (
    <ListComponent
      componente={componente}
      corComponente={corComponente}
      tituloToolTip={tituloToolTip}
      linkComponente={nomeTipoLink}
      setProcesso={setProcesso}
      rascunho={props.rascunho}
      proposta={props.proposta}
      selecionado={props.propostaSelecionada == componente.id}
      setSelecionado={props.setPropostaSelecionada}
    />
  );

  function setProcesso() {
    if (props.rascunho) {
      localStorage.setItem("RASCUNHOESCOLHIDO", JSON.stringify(componente));
      return;
    }
    const tipoComponente = componente.tipo.toUpperCase();
    localStorage.setItem(
      `${tipoComponente}ESCOLHIDA`,
      JSON.stringify(componente)
    );
  }

  return (
    <MainPaper key={componente.id}>
      <Grid container>{processElement}</Grid>
    </MainPaper>
  );
}

function GridComponent(props: ComponentProps) {
  return (
    <>
      {!props.proposta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso
                sx={{ backgroundColor: props.corComponente }}
              />
            </Grid>
          </Tooltip>
          <GridComponenteProcesso item xs={11}>
            <GridTypography variant="h6">
              {props.componente.titulo}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Solicitante:</span> {props.componente.solicitante}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Score:</span> {props.componente.score}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Status:</span> {getNome(props.componente.status)}
            </GridTypography>
            <GridTypography variant="subtitle1" sx={{ display: "flex" }}>
              <BoxColecaoComponente>
                <span>Tamanho:</span> {props.componente.tamanho}
              </BoxColecaoComponente>
              <GridLinkTypograpfy variant="body2">
                {!props.rascunho ? (
                  <Link to={props.linkComponente} onClick={props.setProcesso}>
                    Ver mais
                  </Link>
                ) : (
                  <Link to={"/continuedemand"} onClick={props.setProcesso}>
                    Continuar criação
                  </Link>
                )}
              </GridLinkTypograpfy>
            </GridTypography>
          </GridComponenteProcesso>
        </>
      ) : (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso
                sx={{ backgroundColor: props.corComponente }}
              />
            </Grid>
          </Tooltip>
          <GridComponenteProcesso item xs={11}>
            <GridTypography variant="h6">
              {props.componente.titulo}
            </GridTypography>
            <Radio
              checked={props.selecionado}
              onClick={() => {
                props.setSelecionado(props.componente.id);
                localStorage.setItem(
                  `DEMANDASELECIONADA`,
                  JSON.stringify(props.componente)
                );
              }}
            />
            <GridTypography variant="subtitle1">
              <span>Solicitante:</span> {props.componente.solicitante}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Score:</span> {props.componente.score}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Status:</span> {getNome(props.componente.status)}
            </GridTypography>
            <GridTypography variant="subtitle1" sx={{ display: "flex" }}>
              <BoxColecaoComponente>
                <span>Tamanho:</span> {props.componente.tamanho}
              </BoxColecaoComponente>
              <GridLinkTypograpfy variant="body2">
                {!props.rascunho ? (
                  <Link to={props.linkComponente} onClick={props.setProcesso}>
                    Ver mais
                  </Link>
                ) : (
                  <Link to={"/continuedemand"} onClick={props.setProcesso}>
                    Continuar criação
                  </Link>
                )}
              </GridLinkTypograpfy>
            </GridTypography>
          </GridComponenteProcesso>
        </>
      )}
    </>
  );
}

function ListComponent(props: ComponentProps) {
  return (
    <>
      <Tooltip title={props.tituloToolTip} placement="left">
        <Grid item xs={0.3}>
          <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
        </Grid>
      </Tooltip>
      <ListaComponenteProcesso item xs={11.7}>
        <ListaTypography variant="subtitle1" sx={{ minWidth: "20vw" }}>
          {props.componente.id} - {props.componente.titulo}
        </ListaTypography>
        <ListaTypography variant="subtitle2">
          <span>Solicitante:</span> {props.componente.solicitante}
        </ListaTypography>
        <ListaTypography variant="subtitle2" sx={{ maxWidth: "7.5vw" }}>
          <span>Score:</span> {props.componente.score}
        </ListaTypography>
        <ListaTypography variant="subtitle2">
          <span>Status:</span> {getNome(props.componente.status)}
        </ListaTypography>
        <UltimaListaTypography variant="body2" sx={{ maxWidth: "10vw" }}>
          {!props.rascunho ? (
            <Link to={props.linkComponente} onClick={props.setProcesso}>
              Ver mais
            </Link>
          ) : (
            <Link to={"/continuedemand"} onClick={props.setProcesso}>
              Continuar criação
            </Link>
          )}
        </UltimaListaTypography>
      </ListaComponenteProcesso>
    </>
  );
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
    ToDo: "A fazer",
  };

  return (nomeStatus as any)[status];
}

/**
 * Interface base para as propriedados de um Grid ou List Component
 */
interface ComponentProps {
  componente: InterfaceComponenteProcesso;
  corComponente: string;
  tituloToolTip: string;
  linkComponente: string;
  setProcesso: MouseEventHandler<HTMLAnchorElement>;
  rascunho: boolean;
  proposta: boolean;
  selecionado: boolean;
  setSelecionado: React.Dispatch<React.SetStateAction<number>>;
}
