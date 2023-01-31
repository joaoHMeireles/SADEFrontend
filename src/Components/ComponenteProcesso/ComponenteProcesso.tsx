import { MouseEventHandler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TipoComponenteProcesso } from "../../constants/enuns";
import { InterfaceComponenteProcesso } from "../../constants/interfaces";
import { Box, Grid, Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import {
  BoxColecaoComponente,
  BoxGridCorProcesso,
  BoxListaCorProcesso,
  GridBoxTituloRadio,
  GridComponenteProcesso,
  GridLinkTypograpfy,
  GridTypography,
  ListaComponenteProcesso,
  ListaTypography,
  MainPaper,
  UltimaListaTypography,
} from "./ComponenteProcesso.styles";
import { GlobalStyles } from "@mui/styled-engine";

export default function ComponenteProcesso(props: {
  grid: boolean;
  atributosProcesso: any;
  rascunho?: boolean;
  proposta?: boolean;
  pauta?: boolean;
  propostas?: any[];
  setPropostas?: React.Dispatch<React.SetStateAction<Array<Object>>>;
  propostaSelecionada?: number;
  setPropostaSelecionada?: React.Dispatch<React.SetStateAction<number>>;
}) {
  const componente = props.atributosProcesso;
  const paginaAtual = localStorage.getItem("PAGINATUAL");
  let corComponente,
    tituloToolTip,
    nomeTipoLink = "";

  const [isChecked, setIsChecked] = useState(false);

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
      pauta={props.pauta}
      propostas={props.propostas}
      setPropostas={props.setPropostas}
      selecionado={props.propostaSelecionada == componente.id}
      setSelecionado={props.setPropostaSelecionada}
      propostaSelecionada={props.propostaSelecionada}
      verProcesso={verProcesso}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
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
      pauta={props.pauta}
      propostas={props.propostas}
      setPropostas={props.setPropostas}
      selecionado={props.propostaSelecionada == componente.id}
      setSelecionado={props.setPropostaSelecionada}
      propostaSelecionada={props.propostaSelecionada}
      verProcesso={verProcesso}
    />
  );

  function verProcesso() {
    location.href = nomeTipoLink;
  }

  useEffect(() => {
    const card = document.getElementById(`${componente.id}`);
    if (props.proposta) {
      if (props.propostaSelecionada == componente.id) {
        card?.classList.add("selecionado");
      } else {
        card?.classList.remove("selecionado");
      }
    }
  }, [props.propostaSelecionada]);

  useEffect(() => {
    const card = document.getElementById(`${componente.id}`);
    if (card != undefined) {
      for (let classe of card?.classList) {
        if (classe == "selecionado") {
          const checkbox = document.getElementById(
            "checkbox"
          ) as HTMLInputElement;
          if (checkbox) {
            setIsChecked(true);
          }
        }
      }
    }
  }, [props.propostas]);

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
    <>
      <GlobalStyles
        styles={{
          ".selecionado": {
            backgroundColor: "rgba(0, 87, 157, 0.25) !important",
          },
        }}
      />
      <MainPaper key={componente.id} id={componente.id}>
        <Grid container>{processElement}</Grid>
      </MainPaper>
    </>
  );
}

function GridComponent(props: ComponentProps) {
  return (
    <>
      {!props.proposta && !props.pauta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso
                sx={{ backgroundColor: props.corComponente }}
              />
            </Grid>
          </Tooltip>
          <GridComponenteProcesso item xs={11} onClick={props.verProcesso}>
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
      ) : props.proposta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso
                sx={{ backgroundColor: props.corComponente }}
              />
            </Grid>
          </Tooltip>
          <GridComponenteProcesso item xs={11}>
            <GridBoxTituloRadio>
              <GridTypography variant="h6">
                {props.componente.titulo}
              </GridTypography>
              <Radio
                checked={props.selecionado}
                onClick={() => {
                  if (props.setSelecionado) {
                    props.setSelecionado(props.componente.id);
                    localStorage.setItem(
                      `DEMANDASELECIONADA`,
                      JSON.stringify(props.componente)
                    );
                  }
                }}
              />
            </GridBoxTituloRadio>
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
        props.pauta && (
          <>
            <Tooltip title={props.tituloToolTip} placement="left">
              <Grid item xs={1}>
                <BoxGridCorProcesso
                  sx={{ backgroundColor: props.corComponente }}
                />
              </Grid>
            </Tooltip>
            <GridComponenteProcesso item xs={11}>
              <GridBoxTituloRadio>
                <GridTypography variant="h6">
                  {props.componente.titulo}
                </GridTypography>
                <Checkbox
                  id="checkbox"
                  checked={props.isChecked}
                  onChange={(e) => {
                    props.setIsChecked(e.target.checked);
                  }}
                  onClick={(e: any) => {
                    const card = document.getElementById(
                      `${props.componente.id}`
                    );
                    card?.classList.toggle("selecionado");

                    if (e.target.checked) {
                      const componentePaginaPauta = props.componente;
                      componentePaginaPauta.link = props.linkComponente;

                      props.propostas?.push(props.componente);
                    } else {
                      props.setPropostas((propostas) => {
                        return propostas.filter(
                          (proposta) => proposta.id !== props.componente.id
                        );
                      });
                    }
                  }}
                />
              </GridBoxTituloRadio>
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
        )
      )}
    </>
  );
}

function ListComponent(props: ComponentProps) {
  return (
    <>
      {!props.proposta && !props.pauta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={0.3}>
              <BoxListaCorProcesso
                sx={{ backgroundColor: props.corComponente }}
              />
            </Grid>
          </Tooltip>
          <ListaComponenteProcesso item xs={11.7} onClick={props.verProcesso}>
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
      ) : props.proposta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={0.3}>
              <BoxListaCorProcesso
                sx={{ backgroundColor: props.corComponente }}
              />
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
            <ListaTypography variant="subtitle2">
              {!props.rascunho ? (
                <Link to={props.linkComponente} onClick={props.setProcesso}>
                  Ver mais
                </Link>
              ) : (
                <Link to={"/continuedemand"} onClick={props.setProcesso}>
                  Continuar criação
                </Link>
              )}
            </ListaTypography>
            <UltimaListaTypography variant="body2" sx={{ maxWidth: "3vw" }}>
              <Radio
                id={`${props.componente.id}`}
                checked={props.selecionado}
                onClick={() => {
                  if (props.setSelecionado) {
                    props.setSelecionado(props.componente.id);
                    localStorage.setItem(
                      `DEMANDASELECIONADA`,
                      JSON.stringify(props.componente)
                    );
                  }
                }}
              />
            </UltimaListaTypography>
          </ListaComponenteProcesso>
        </>
      ) : (
        props.pauta && (
          <>
            <Tooltip title={props.tituloToolTip} placement="left">
              <Grid item xs={0.3}>
                <BoxListaCorProcesso
                  sx={{ backgroundColor: props.corComponente }}
                />
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
              <ListaTypography variant="subtitle2">
                {!props.rascunho ? (
                  <Link to={props.linkComponente} onClick={props.setProcesso}>
                    Ver mais
                  </Link>
                ) : (
                  <Link to={"/continuedemand"} onClick={props.setProcesso}>
                    Continuar criação
                  </Link>
                )}
              </ListaTypography>
              <UltimaListaTypography variant="body2" sx={{ maxWidth: "3vw" }}>
                <Checkbox
                  id="checkbox"
                  onClick={(e: any) => {
                    const card = document.getElementById(
                      `${props.componente.id}`
                    );
                    card?.classList.toggle("selecionado");

                    if (e.target.checked) {
                      if (props.propostas) {
                        const componentePaginaPauta = props.componente;
                        componentePaginaPauta.link = props.linkComponente;
                        props.propostas.push(props.componente);
                      }
                    }
                  }}
                />
              </UltimaListaTypography>
            </ListaComponenteProcesso>
          </>
        )
      )}
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
  rascunho?: boolean;
  proposta?: boolean;
  pauta?: boolean;
  propostas?: any[];
  setPropostas?: React.Dispatch<React.SetStateAction<Array<Object>>>;
  selecionado?: boolean;
  setSelecionado?: React.Dispatch<React.SetStateAction<number>>;
  propostaSelecionada?: number;
  verProcesso: MouseEventHandler<HTMLDivElement>;
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}
