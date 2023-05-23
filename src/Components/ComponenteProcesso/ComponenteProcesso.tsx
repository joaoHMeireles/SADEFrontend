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
import { getNomeStatus } from "../../utils";

export default function ComponenteProcesso(props: {
  grid: boolean;
  atributosProcesso: any;
  rascunho?: boolean;
  proposta?: boolean;
  pauta?: boolean;
  demandaSelecionada: number;
  setDemandaSelecionada: React.Dispatch<React.SetStateAction<number>>
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

  const [isChecked, setIsChecked] = useState(componente.escolhidaCriacao ? true : false);

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
      demandaSelecionada={props.demandaSelecionada}
      setDemandaSelecionada={props.setDemandaSelecionada}
      propostaSelecionada={props.propostaSelecionada}
      setPropostaSelecionado={props.setPropostaSelecionada}
      verProcesso={verProcesso}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      mudarIsChecked={mudarIsChecked}
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
      demandaSelecionada={props.demandaSelecionada}
      setDemandaSelecionada={props.setDemandaSelecionada}
      setPropostaSelecionado={props.setPropostaSelecionada}
      propostaSelecionada={props.propostaSelecionada}
      verProcesso={verProcesso}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      mudarIsChecked={mudarIsChecked}
    />
  );

  useEffect(() => {
    const card = document.getElementById(`${componente.idDemanda}`);

    if (props.proposta) {
      if (props.propostaSelecionada == componente.idDemanda) {
        card?.classList.add("selecionado");
        return;
      }
      card?.classList.remove("selecionado");
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
  
  useEffect(() => {
    const card = document.getElementsByClassName(
      `card-proposta${componente.id}`
    )[0];
    
    if (isChecked) {
      card?.classList.add("selecionado")
      const componentePaginaPauta = componente;
      componentePaginaPauta.link = nomeTipoLink;

      props.propostas?.push(componente);
    } else {
      card?.classList.remove("selecionado")

      if (props.setPropostas) {
        props.setPropostas((propostas: any) => {
          return propostas.filter(
            (proposta: any) => proposta.id !== componente.id
          );
        });
      }
    }
  }, [isChecked])

  function verProcesso() {
    if (props.rascunho) {
      return
    }
    setProcesso()
    location.href = nomeTipoLink;
  }

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

  function mudarIsChecked() {
    if (setIsChecked != null && isChecked != null) {
      setIsChecked(!isChecked)
    }
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
      <MainPaper key={componente.id} id={componente.idDemanda} className={`card-proposta${componente.id}`} >
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
              {props.componente.tituloDemanda}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Solicitante:</span> {props.componente.usuario.nomeUsuario}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Score:</span> {props.componente.score}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Status:</span> {getNomeStatus(props.componente.statusDemanda)}
            </GridTypography>
            <GridTypography variant="subtitle1" sx={{ display: "flex" }}>
              <BoxColecaoComponente>
                <span>Frequencia de uso:</span> {props.componente.frequenciaUso}
              </BoxColecaoComponente>
              <GridLinkTypograpfy variant="body2">
                {!props.rascunho ? (
                  <Link to={props.linkComponente} onClick={props.setProcesso}>
                    Ver mais
                  </Link>
                ) : (
                  <Link to={"/continuedemand"} onClick={props.setProcesso}>
                    Continuar
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
          <GridComponenteProcesso item xs={11}
            onClick={() => {
              if (props.setDemandaSelecionada && props.setPropostaSelecionado) {
                props.setDemandaSelecionada(props.componente.idDemanda)
                props.setPropostaSelecionado(props.componente.idDemanda);
                localStorage.setItem(
                  `DEMANDASELECIONADA`,
                  JSON.stringify(props.componente)
                );
              }
            }}>
            <GridBoxTituloRadio>
              <GridTypography variant="h6">
                {props.componente.tituloDemanda}
              </GridTypography>
              <Radio
                checked={props.demandaSelecionada == props.componente.idDemanda}
              />
            </GridBoxTituloRadio>
            <GridTypography variant="subtitle1">
              <span>Solicitante:</span> {props.componente.usuario.nomeUsuario}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Score:</span> {props.componente.score}
            </GridTypography>
            <GridTypography variant="subtitle1">
              <span>Status:</span> {getNomeStatus(props.componente.statusDemanda)}
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
                    Continuar
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
            <GridComponenteProcesso item xs={11} onClick={props.mudarIsChecked}>
              <GridBoxTituloRadio>
                <GridTypography variant="h6">
                  {props.componente.tituloDemanda}
                </GridTypography>
                <Checkbox
                  id="checkbox"
                  checked={props.isChecked}
                />
              </GridBoxTituloRadio>
              <GridTypography variant="subtitle1">
                <span>Solicitante:</span> {props.componente.usuario.nomeUsuario}
              </GridTypography>
              <GridTypography variant="subtitle1">
                <span>Score:</span> {props.componente.score}
              </GridTypography>
              <GridTypography variant="subtitle1">
                <span>Status:</span> {getNomeStatus(props.componente.statusDemanda)}
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
                      Continuar
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
              {props.componente.id} - {props.componente.tituloDemanda}
            </ListaTypography>
            <ListaTypography variant="subtitle2">
              <span>Solicitante:</span> {props.componente.usuario.nomeUsuario}
            </ListaTypography>
            <ListaTypography variant="subtitle2" sx={{ maxWidth: "7.5vw" }}>
              <span>Score:</span> {props.componente.score}
            </ListaTypography>
            <ListaTypography variant="subtitle2">
              <span>Status:</span> {getNomeStatus(props.componente.statusDemanda)}
            </ListaTypography>
            <UltimaListaTypography variant="body2" sx={{ maxWidth: "10vw" }}>
              {!props.rascunho ? (
                <Link to={props.linkComponente} onClick={props.setProcesso}>
                  Ver mais
                </Link>
              ) : (
                <Link to={"/continuedemand"} onClick={props.setProcesso}>
                  Continuar
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
          <ListaComponenteProcesso item xs={11.7}
            onClick={() => {
              if (props.setDemandaSelecionada && props.setPropostaSelecionado) {
                props.setDemandaSelecionada(props.componente.idDemanda)
                props.setPropostaSelecionado(props.componente.idDemanda);
                localStorage.setItem(
                  `DEMANDASELECIONADA`,
                  JSON.stringify(props.componente)
                );
              }
            }}
          >
            <ListaTypography variant="subtitle1" sx={{ minWidth: "20vw" }}>
              {props.componente.id} - {props.componente.tituloDemanda}
            </ListaTypography>
            <ListaTypography variant="subtitle2">
              <span>Solicitante:</span> {props.componente.usuario.nomeUsuario}
            </ListaTypography>
            <ListaTypography variant="subtitle2" sx={{ maxWidth: "7.5vw" }}>
              <span>Score:</span> {props.componente.score}
            </ListaTypography>
            <ListaTypography variant="subtitle2">
              <span>Status:</span> {getNomeStatus(props.componente.statusDemanda)}
            </ListaTypography>
            <ListaTypography variant="subtitle2">
              {!props.rascunho ? (
                <Link to={props.linkComponente} onClick={props.setProcesso}>
                  Ver mais
                </Link>
              ) : (
                <Link to={"/continuedemand"} onClick={props.setProcesso}>
                  Continuar
                </Link>
              )}
            </ListaTypography>
            <UltimaListaTypography variant="body2" sx={{ maxWidth: "3vw" }}>
              <Radio
                // id={`${props.componente.id}`}
                checked={props.demandaSelecionada == props.componente.idDemanda}
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
            <ListaComponenteProcesso item xs={11.7} onClick={props.mudarIsChecked}>
              <ListaTypography variant="subtitle1" sx={{ minWidth: "20vw" }}>
                {props.componente.id} - {props.componente.tituloDemanda}
              </ListaTypography>
              <ListaTypography variant="subtitle2">
                <span>Solicitante:</span> {props.componente.usuario.nomeUsuario}
              </ListaTypography>
              <ListaTypography variant="subtitle2" sx={{ maxWidth: "7.5vw" }}>
                <span>Score:</span> {props.componente.score}
              </ListaTypography>
              <ListaTypography variant="subtitle2">
                <span>Status:</span> {getNomeStatus(props.componente.statusDemanda)}
              </ListaTypography>
              <ListaTypography variant="subtitle2">
                {!props.rascunho ? (
                  <Link to={props.linkComponente} onClick={props.setProcesso}>
                    Ver mais
                  </Link>
                ) : (
                  <Link to={"/continuedemand"} onClick={props.setProcesso}>
                    Continuar
                  </Link>
                )}
              </ListaTypography>
              <UltimaListaTypography variant="body2" sx={{ maxWidth: "3vw" }}>
                <Checkbox
                  id="checkbox"
                  checked={props.isChecked}
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
  setPropostas?: React.Dispatch<React.SetStateAction<Array<any>>>;
  demandaSelecionada?: number;
  setDemandaSelecionada?: React.Dispatch<React.SetStateAction<number>>;
  propostaSelecionada?: number;
  setPropostaSelecionado?: React.Dispatch<React.SetStateAction<number>>;
  verProcesso: MouseEventHandler<HTMLDivElement>;
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  mudarIsChecked: MouseEventHandler<HTMLDivElement>
}
