import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { TextReaderContext } from "../TextReaderContext/TextReaderContext";
import { Link } from "react-router-dom";
import { TipoComponenteProcesso } from "../../constants/enuns";
import { InterfaceComponenteProcesso } from "../../constants/interfaces";
import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CircleIcon from '@mui/icons-material/Circle';
import {
  BoxColecaoComponente,
  BoxGridCorProcesso,
  BoxListaCorProcesso,
  GridBoxTituloRadio,
  GridComponenteProcesso,
  GridLinkTypograpfy,
  GridTituloTypography,
  GridTypography,
  ListaComponenteProcesso,
  ListaTypography,
  MainPaper,
  StatusBox,
  StatusColorIconBox,
  StatusListaBox,
  UltimaLinhaGridBox,
  UltimaListaTypography,
} from "./ComponenteProcesso.styles";
import { GlobalStyles } from "@mui/styled-engine";
import { getCorStatus, getNomeStatus } from "../../utils";
import api from "../../api/api";

export default function ComponenteProcesso(props: {
  grid: boolean;
  atributosProcesso: any;
  rascunho?: boolean;
  proposta?: boolean;
  pauta?: boolean;
  temDemandaDevolvida?: boolean;
  demandaSelecionada: number;
  setDemandaSelecionada: React.Dispatch<React.SetStateAction<number>>
  propostas?: any[];
  setPropostas?: React.Dispatch<React.SetStateAction<Array<Object>>>;
  propostaSelecionada?: number;
  setPropostaSelecionada?: React.Dispatch<React.SetStateAction<number>>;
  setListaRascunhos?: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [isChecked, setIsChecked] = useState(props.atributosProcesso.escolhidaCriacao ? true : false);
  const { lerTexto, leituraDeSiteAtiva } = useContext(TextReaderContext) as any
  const componente = props.atributosProcesso;
  const paginaAtual = localStorage.getItem("PAGINATUAL");
  let corComponente, tituloToolTip, nomeTipoLink = "";

  if (componente.tipo == TipoComponenteProcesso.Demanda) {
    corComponente = "#00579d";
    tituloToolTip = "Demanda";
    nomeTipoLink = `/${paginaAtual}/demand`;
  } else {
    corComponente = "#9acae5";
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
      temDemandaDevolvida={props.temDemandaDevolvida}
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
      deletarRascunho={deletarRascunho}
      lerTexto={lerTexto} />
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
      temDemandaDevolvida={props.temDemandaDevolvida}
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
      deletarRascunho={deletarRascunho}
      lerTexto={lerTexto} />
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

      if (props.setPropostas) {
        const novaListaPropostas = props.propostas as any[]
        novaListaPropostas.push(componentePaginaPauta);

        props.setPropostas(novaListaPropostas);
      }
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

  function verProcesso(event: any) {
    if (leituraDeSiteAtiva) {
      lerTexto(event)
    }

    if (props.rascunho || (componente.devolvida && props.temDemandaDevolvida)) {
      return
    }

    if (!leituraDeSiteAtiva) {
      setProcesso(event)
      location.href = nomeTipoLink;
    }
  }

  function setProcesso(event: any) {
    if (props.rascunho) {
      localStorage.setItem("RASCUNHOESCOLHIDO", JSON.stringify(componente));
      return;
    }

    if (props.temDemandaDevolvida && componente.devolvida) {
      localStorage.setItem("DEMANDASELECIONADA", JSON.stringify(componente))
      return
    }

    const tipoComponente = componente.tipo.toUpperCase();
    localStorage.setItem(
      `${tipoComponente}ESCOLHIDA`,
      JSON.stringify(componente)
    );

    if (leituraDeSiteAtiva) {
      lerTexto(event)
    }
  }

  function mudarIsChecked(event: any) {
    lerTexto(event)

    if (setIsChecked != null && isChecked != null) {
      setIsChecked(!isChecked)
    }
  }

  function deletarRascunho() {
    api.delete("/sade/demanda/" + componente.idDemanda).then((response) => {
      if (props.setListaRascunhos != null) {
        props.setListaRascunhos((rascunhos: any) => {
          return rascunhos.filter(
            (rascunho: any) => rascunho.idDemanda !== componente.idDemanda
          );
        });
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <GlobalStyles
        styles={{
          ".selecionado": {
            backgroundColor: "rgba(0, 87, 157, 0.25) !important",
          },
        }} />
      <MainPaper key={componente.id} id={componente.idDemanda} className={`card-proposta${componente.id}`} >
        <Grid container >{processElement}</Grid>
      </MainPaper>
    </>
  );
}

function GridComponent(props: ComponentProps) {
  //{props.componente.tituloDemanda != null ? (props.componente.tituloDemanda.length > 25 ? "..." : "") : ""}
  return (
    <>
      {!props.proposta && !props.pauta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso
                sx={{ backgroundColor: props.corComponente }} />
            </Grid>
          </Tooltip>

          <GridComponenteProcesso item xs={11} onClick={props.verProcesso}>
            {(props.temDemandaDevolvida && props.componente.devolvida) ?
              <GridBoxTituloRadio>
                <GridTituloTypography variant="h6">
                  {props.componente.tituloDemanda}
                </GridTituloTypography>

                <WarningRoundedIcon sx={{ color: "#00579d", marginRight: "15px" }} />
              </GridBoxTituloRadio>
              :
              <>
                {!props.rascunho ?
                  <GridTituloTypography variant="h6" sx={{ fontWeight: "500" }}>
                    {props.componente.tituloDemanda} 
                  </GridTituloTypography>
                  :
                  <GridBoxTituloRadio>
                    <GridTituloTypography variant="h6">
                      {props.componente.tituloDemanda}
                    </GridTituloTypography>

                    <Box>
                      <IconButton onClick={props.deletarRascunho}>
                        <DeleteRoundedIcon />
                      </IconButton>
                    </Box>
                  </GridBoxTituloRadio>
                }
              </>
            }
            <GridTypography variant="subtitle1">
              Solicitante: {props.componente.usuario.nomeUsuario}
            </GridTypography>

            <GridTypography variant="subtitle1">
              Score: {props.componente.score}
            </GridTypography>

            <UltimaLinhaGridBox>
              {props.rascunho ?
                <GridLinkTypograpfy variant="body2" sx={{ width: "95% !important" }}>
                  <Link to={"/continuedemand"} onClick={props.setProcesso}>
                    Continuar
                  </Link>
                </GridLinkTypograpfy>
                :
                <>
                  <StatusBox >
                    <GridTypography variant="subtitle1">
                      Status: {getNomeStatus(props.componente.statusDemanda)}
                    </GridTypography>

                    <StatusColorIconBox>
                      <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda) }} />
                    </StatusColorIconBox>
                  </StatusBox>

                  {props.temDemandaDevolvida &&
                    <>
                      {props.componente.devolvida &&
                        <GridLinkTypograpfy variant="body2">
                          <Link to={"/editdemand"} onClick={props.setProcesso}>
                            Editar
                          </Link>
                        </GridLinkTypograpfy>
                      }
                    </>
                  }
                </>
              }
            </UltimaLinhaGridBox>
          </GridComponenteProcesso>
        </>
      ) : props.proposta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso
                sx={{ backgroundColor: props.corComponente }} />
            </Grid>
          </Tooltip>

          <GridComponenteProcesso item xs={11}
            onClick={(event: any) => {
              props.lerTexto(event)
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
              <GridTituloTypography variant="h6">
                {props.componente.tituloDemanda}
              </GridTituloTypography>

              <Radio checked={props.demandaSelecionada == props.componente.idDemanda || props.propostaSelecionada == props.componente.idDemanda} />
            </GridBoxTituloRadio>

            <GridTypography variant="subtitle1">
              Solicitante: {props.componente.usuario.nomeUsuario}
            </GridTypography>

            <GridTypography variant="subtitle1">
              Score: {props.componente.score}
            </GridTypography>

            <UltimaLinhaGridBox>
              <StatusBox >
                <GridTypography variant="subtitle1">
                  Status: {getNomeStatus(props.componente.statusDemanda)}
                </GridTypography>

                <StatusColorIconBox>
                  <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda) }} />
                </StatusColorIconBox>
              </StatusBox>

              <GridLinkTypograpfy variant="body2">
                <Link to={props.linkComponente} onClick={props.setProcesso}>
                  Ver mais
                </Link>
              </GridLinkTypograpfy>
            </UltimaLinhaGridBox>
          </GridComponenteProcesso>
        </>
      ) : (
        props.pauta && (
          <>
            <Tooltip title={props.tituloToolTip} placement="left">
              <Grid item xs={1}>
                <BoxGridCorProcesso
                  sx={{ backgroundColor: props.corComponente }} />
              </Grid>
            </Tooltip>

            <GridComponenteProcesso item xs={11} onClick={props.mudarIsChecked}>
              <GridBoxTituloRadio>
                <GridTituloTypography variant="h6">
                  {props.componente.tituloDemanda}
                </GridTituloTypography>

                <Checkbox
                  id="checkbox"
                  checked={props.isChecked} />
              </GridBoxTituloRadio>

              <GridTypography variant="subtitle1">
                Solicitante: {props.componente.usuario.nomeUsuario}
              </GridTypography>

              <GridTypography variant="subtitle1">
                Score: {props.componente.score}
              </GridTypography>

              <UltimaLinhaGridBox>
                <StatusBox >
                  <GridTypography variant="subtitle1">
                    Status: {getNomeStatus(props.componente.statusDemanda)}
                  </GridTypography>

                  <StatusColorIconBox>
                    <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda) }} />
                  </StatusColorIconBox>
                </StatusBox>

                <GridLinkTypograpfy variant="body2">
                  <Link to={props.linkComponente} onClick={props.setProcesso}>
                    Ver mais
                  </Link>
                </GridLinkTypograpfy>
              </UltimaLinhaGridBox>
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
              <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
            </Grid>
          </Tooltip>

          <ListaComponenteProcesso item xs={11.7} onClick={props.verProcesso}>
            <ListaTypography variant="subtitle1" sx={{ width: "35%" }}>
              {props.componente.tituloDemanda}
            </ListaTypography>

            <ListaTypography variant="subtitle2" sx={{ width: "20%" }}>
              Solicitante: {props.componente.usuario.nomeUsuario}
            </ListaTypography>

            <ListaTypography variant="subtitle2" sx={{ width: "20%" }}>
              Score: {props.componente.score}
            </ListaTypography>

            <Box sx={{ fontSize: "12px", display: "flex", alignItems: "center" }}>
              {!props.rascunho &&
                <>
                  <ListaTypography variant="subtitle2">
                    Status: {getNomeStatus(props.componente.statusDemanda)}
                  </ListaTypography>

                  <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda), marginLeft: "5px" }} />
                </>
              }
            </Box>
          </ListaComponenteProcesso>
        </>
      ) : props.proposta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={0.3}>
              <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
            </Grid>
          </Tooltip>

          <ListaComponenteProcesso item xs={11.7}
            onClick={(event: any) => {
              props.lerTexto(event)

              if (props.setDemandaSelecionada && props.setPropostaSelecionado) {
                props.setDemandaSelecionada(props.componente.idDemanda)
                props.setPropostaSelecionado(props.componente.idDemanda);
                localStorage.setItem(
                  `DEMANDASELECIONADA`,
                  JSON.stringify(props.componente)
                );
              }
            }}>
            <ListaTypography variant="subtitle1" sx={{ width: "35%" }}>
              {props.componente.tituloDemanda}
            </ListaTypography>

            <ListaTypography variant="subtitle2" sx={{ width: "15%" }}>
              Solicitante: {props.componente.usuario.nomeUsuario}
            </ListaTypography>

            <ListaTypography variant="subtitle2" sx={{ width: "15%" }}>
              Score: {props.componente.score}
            </ListaTypography>

            <StatusListaBox >
              <ListaTypography variant="subtitle2">
                Status: {getNomeStatus(props.componente.statusDemanda)}
              </ListaTypography>

              <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda), marginLeft: "5px" }} />
            </StatusListaBox>

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
              <Radio checked={props.demandaSelecionada == props.componente.idDemanda} />
            </UltimaListaTypography>
          </ListaComponenteProcesso>
        </>
      ) : (
        props.pauta && (
          <>
            <Tooltip title={props.tituloToolTip} placement="left">
              <Grid item xs={0.3}>
                <BoxListaCorProcesso
                  sx={{ backgroundColor: props.corComponente }} />
              </Grid>
            </Tooltip>

            <ListaComponenteProcesso item xs={11.7} onClick={props.mudarIsChecked}>
              <ListaTypography variant="subtitle1" sx={{ width: "35%" }}>
                {props.componente.tituloDemanda}
              </ListaTypography>

              <ListaTypography variant="subtitle2" sx={{ width: "15%" }}>
                Solicitante: {props.componente.usuario.nomeUsuario}
              </ListaTypography>

              <ListaTypography variant="subtitle2" sx={{ width: "15%" }}>
                Score: {props.componente.score}
              </ListaTypography>

              <StatusListaBox >
                <ListaTypography variant="subtitle2">
                  Status: {getNomeStatus(props.componente.statusDemanda)}
                </ListaTypography>

                <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda), marginLeft: "5px" }} />
              </StatusListaBox>

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
                <Checkbox id="checkbox" checked={props.isChecked} />
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
  temDemandaDevolvida?: boolean;
  propostas?: any[];
  setPropostas?: React.Dispatch<React.SetStateAction<Array<any>>>;
  demandaSelecionada?: number;
  setDemandaSelecionada?: React.Dispatch<React.SetStateAction<number>>;
  propostaSelecionada?: number;
  setPropostaSelecionado?: React.Dispatch<React.SetStateAction<number>>;
  verProcesso: MouseEventHandler<HTMLDivElement>;
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  mudarIsChecked: MouseEventHandler<HTMLDivElement>;
  deletarRascunho: any;
  lerTexto: MouseEventHandler<HTMLElement>;
}