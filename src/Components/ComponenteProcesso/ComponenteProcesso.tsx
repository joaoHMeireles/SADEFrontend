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
  BoxGridCorProcesso,
  BoxListaCorProcesso,
  ContainerLista,
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
import { editarNumeroScore, getCorStatus, getNomeStatus } from "../../utils";
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
  return (
    <>
      {!props.proposta && !props.pauta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso sx={{ backgroundColor: props.corComponente }} />
            </Grid>
          </Tooltip>

          <GridComponenteProcesso id="DISPLAY GRID AQUI" item xs={11} onClick={props.verProcesso}>
            {(props.temDemandaDevolvida && props.componente.devolvida) ?
              <GridBoxTituloRadio>
                <GridTituloTypography>
                  {props.componente.tituloDemanda}
                </GridTituloTypography>

                <WarningRoundedIcon sx={{ color: "#00579d", marginRight: "15px" }} />
              </GridBoxTituloRadio>
              :
              <>
                {!props.rascunho ?
                  <GridTituloTypography>
                    {props.componente.tituloDemanda}
                  </GridTituloTypography>
                  :
                  <GridBoxTituloRadio sx={{width: (props.rascunho ? "65% !important": "")}}>
                    <GridTituloTypography>
                      {props.componente.tituloDemanda}
                    </GridTituloTypography>

                    <IconButton onClick={props.deletarRascunho}>
                      <DeleteRoundedIcon />
                    </IconButton>
                  </GridBoxTituloRadio>
                }
              </>
            }
            <GridTypography>
              Solicitante: {props.componente.usuario.nomeUsuario}
            </GridTypography>

            <GridTypography>
              Score: {editarNumeroScore(props.componente.score)}
            </GridTypography>

            <UltimaLinhaGridBox sx={{width: (props.rascunho ? "65% !important": "")}}>
              {props.rascunho ?
                <GridLinkTypograpfy variant="body2" sx={{}}>
                  <Link to={"/continuedemand"} onClick={props.setProcesso}>
                    Continuar
                  </Link>
                </GridLinkTypograpfy>
                :
                <Box id="AQUI" sx={{ alignItems: "center", display: "flex", width: "100%", justifyContent: "space-between"}}>
                  <StatusBox sx={{ alignItems: "flex-start" }}>
                    <GridTypography>
                      Status: {getNomeStatus(props.componente.statusDemanda)}
                    </GridTypography>

                    <StatusColorIconBox>
                      <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda) }} />
                    </StatusColorIconBox>
                  </StatusBox>

                  {props.temDemandaDevolvida &&
                    <>
                      {props.componente.devolvida &&
                        <GridLinkTypograpfy variant="body2" sx={{padding: "0 1rem 0 0"}}>
                          <Link to={"/editdemand"} onClick={props.setProcesso}>
                            Editar
                          </Link>
                        </GridLinkTypograpfy>
                      }
                    </>
                  }
                </Box>
              }
            </UltimaLinhaGridBox>
          </GridComponenteProcesso>
        </>
      ) : props.proposta ? (
        <>
          <Tooltip title={props.tituloToolTip} placement="left">
            <Grid item xs={1}>
              <BoxGridCorProcesso sx={{ backgroundColor: props.corComponente }} />
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
              <GridTituloTypography>
                {props.componente.tituloDemanda}
              </GridTituloTypography>

              <Radio checked={props.demandaSelecionada == props.componente.idDemanda || props.propostaSelecionada == props.componente.idDemanda} />
            </GridBoxTituloRadio>

            <GridTypography>
              Solicitante: {props.componente.usuario.nomeUsuario}
            </GridTypography>

            <GridTypography>
              Score: {editarNumeroScore(props.componente.score)}
            </GridTypography>

            <UltimaLinhaGridBox>
              <StatusBox >
                <GridTypography>
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
                <BoxGridCorProcesso sx={{ backgroundColor: props.corComponente }} />
              </Grid>
            </Tooltip>

            <GridComponenteProcesso item xs={11} onClick={props.mudarIsChecked}>
              <GridBoxTituloRadio>
                <GridTituloTypography>
                  {props.componente.tituloDemanda}
                </GridTituloTypography>

                <Checkbox id="checkbox" checked={props.isChecked} />
              </GridBoxTituloRadio>

              <GridTypography>
                Solicitante: {props.componente.usuario.nomeUsuario}
              </GridTypography>

              <GridTypography>
                Score: {editarNumeroScore(props.componente.score)}
              </GridTypography>

              <UltimaLinhaGridBox>
                <StatusBox>
                  <GridTypography>
                    Status: {getNomeStatus(props.componente.statusDemanda)}
                  </GridTypography>

                  <StatusColorIconBox>
                    <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda) }} />
                  </StatusColorIconBox>
                </StatusBox>

                <GridLinkTypograpfy variant="body2">
                  <Link to={props.linkComponente} target="_blank" onClick={props.setProcesso}>
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
        <ContainerLista>
          <Tooltip title={props.tituloToolTip} placement="left">
            <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
          </Tooltip>

          <ListaComponenteProcesso onClick={props.verProcesso}>
            <ListaTypography sx={{ fontSize: "16px !important", width: "50% !important" }}>
              {props.componente.tituloDemanda}
            </ListaTypography>

            <ListaTypography>
              Solicitante: {props.componente.usuario.nomeUsuario}
            </ListaTypography>

            <ListaTypography>
              Score: {editarNumeroScore(props.componente.score)}
            </ListaTypography>

            <Box sx={{ alignItems: "center", display: "flex", justifyContent: "flex-start", marginRight: "0 !important", width: "20%" }}>
              {!props.rascunho &&
                <>
                  <ListaTypography sx={{ width: "auto !important" }}>
                    Status: {getNomeStatus(props.componente.statusDemanda)}
                  </ListaTypography>

                  <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda) }} />
                </>
              }
            </Box>
          </ListaComponenteProcesso>
        </ContainerLista>
      ) : props.proposta ? (
        <ContainerLista>
          <Tooltip title={props.tituloToolTip} placement="left">
            <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
          </Tooltip>

          <ListaComponenteProcesso
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
            <ListaTypography sx={{ fontSize: "16px !important", width: "40% !important" }}>
              {props.componente.tituloDemanda}
            </ListaTypography>

            <ListaTypography sx={{ width: "14% !important" }}>
              Solicitante: {props.componente.usuario.nomeUsuario}
            </ListaTypography>

            <ListaTypography sx={{ width: "10% !important" }}>
              Score: {editarNumeroScore(props.componente.score)}
            </ListaTypography>

            <StatusListaBox sx={{ alignItems: "center", display: "flex", justifyContent: "flex-start", marginRight: "0 !important", width: "24%" }}>
              <ListaTypography sx={{ width: "auto !important" }}>
                Status: {getNomeStatus(props.componente.statusDemanda)}
              </ListaTypography>

              <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda), marginLeft: "5px" }} />
            </StatusListaBox>

            <ListaTypography sx={{ width: "10% !important" }}>
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

            <UltimaListaTypography>
              <Radio checked={props.demandaSelecionada == props.componente.idDemanda} />
            </UltimaListaTypography>
          </ListaComponenteProcesso>
        </ContainerLista>
      ) : (
        props.pauta && (
          <ContainerLista>
            <Tooltip title={props.tituloToolTip} placement="left">
              <BoxListaCorProcesso sx={{ backgroundColor: props.corComponente }} />
            </Tooltip>

            <ListaComponenteProcesso>
              <ListaTypography sx={{ fontSize: "16px !important", width: "40% !important" }}>
                {props.componente.tituloDemanda}
              </ListaTypography>

              <ListaTypography sx={{ width: "14% !important" }}>
                Solicitante: {props.componente.usuario.nomeUsuario}
              </ListaTypography>

              <ListaTypography sx={{ width: "10% !important" }}>
                Score: {editarNumeroScore(props.componente.score)}
              </ListaTypography>

              <Box sx={{ alignItems: "center", display: "flex", justifyContent: "flex-start", marginRight: "0 !important", width: "24%" }}>
                <ListaTypography sx={{ width: "auto !important" }}>
                  Status: {getNomeStatus(props.componente.statusDemanda)}
                </ListaTypography>

                <CircleIcon fontSize="inherit" sx={{ color: getCorStatus(props.componente.statusDemanda) }} />
              </Box>

              <ListaTypography sx={{ width: "10% !important" }}>
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

              <UltimaListaTypography>
                <Checkbox id="checkbox" checked={props.isChecked} />
              </UltimaListaTypography>
            </ListaComponenteProcesso>
          </ContainerLista>
        )
      )
      }
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