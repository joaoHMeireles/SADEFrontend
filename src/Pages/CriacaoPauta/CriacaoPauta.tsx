import { Link } from "react-router-dom";
import { ChangeEventHandler, SetStateAction, useContext, useEffect, useState } from "react";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import CardProposta from "../../Components/CardProposta/CardProposta";
import Searchbar from "../../Components/Searchbar/Searchbar";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Alert, Box, Container, Grid, MenuItem, Select, Snackbar, TextField } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LensRoundedIcon from "@mui/icons-material/LensRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { BotaoPrimario, BotaoSecundario, BoxConteudo } from "../App.styles";
import { ContainerBoxTabs } from "../CriacaoProposta/CriacaoProposta.styles";
import {
  BackgroundInputs,
  BoxBotoes,
  BoxConteudoProposta,
  BoxGeral,
  BoxIconeLink,
  BoxProposta,
  BoxTituloProposta,
  SelectEdited,
  PrincipalBox,
  TextFieldEdited,
  TypographyVermais,
} from "./CriacaoPauta.styles";
import {
  TipoComponenteProcesso,
} from "../../constants/enuns";
import api from "../../api/api";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
import semDemanda from "../../Assets/emptyFolder.png"
import { GridInfoATA, TypographyTituloInput } from "../TelaColecaoProcesso/TelaColecaoProcesso.styles";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextReaderContext } from "../../Components/TextReaderContext/TextReaderContext";

export default function CriacaoPauta(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
  listaComponents: any[];
  filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  setMensagemFeedback: React.Dispatch<SetStateAction<string>>;
}) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [valor, setValor] = useState(0);
  const [grid, setGrid] = useState(true);
  const [conteudoCarregou, setConteudoCarregou] = useState(false)
  const [temComponente, setTemComponente] = useState(true)
  const [feedbackAberto, setFeedbackAberto] = useState(false);
  const [mensagemDoErro, setMensagemDoErro] = useState("")
  const [propostas, setPropostas] = useState<any[]>([]);
  const [listaComponents, setListaComponents] = useState<any[]>([])
  const [comissoes, setComissoes] = useState<any[]>([]);
  const [comissaoEscolhida, setComissaoEscolhida] = useState<any>()
  const [valorData, setValorData] = useState<Dayjs | null>(null)
  const [inicioReuniao, setInicioReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T13:30'));
  const [finalReuniao, setFinalReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T14:30'));

  localStorage.setItem("PAGINATUAL", "createagenda");

  useEffect(() => {
    const idPropostaEscolhida = localStorage.getItem("PROPOSTACRIARPAUTA")

    api.get(`/sade/proposta/pauta/${false}`).then((response) => {
      let listaPropostas: any[] = []
      for (let proposta of response.data) {
        for (let atributo in proposta.demanda) {
          proposta[atributo] = proposta.demanda[atributo]
        }

        if (proposta.idProposta == idPropostaEscolhida) {
          proposta.escolhidaCriacao = true
        }

        proposta.id = proposta.idProposta
        proposta.tipo = TipoComponenteProcesso.Proposta
        listaPropostas.push(proposta)
      }

      setListaComponents(listaPropostas);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setConteudoCarregou(true)
    })

    api.get('/sade/forum').then((response) => {
      setComissoes(response.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    for (let i = 0; i < propostas.length; i++) {
      const e = document.getElementById(propostas[i].id);
      e?.classList.add("selecionado");
    }
  });

  useEffect(() => {
    if (listaComponents.length != 0) {
      setTemComponente(true)
    } else {
      setTemComponente(false)
    }
  }, [listaComponents])

  useEffect(() => {
    if (mensagemDoErro != "") {
      setFeedbackAberto(true)
    }
  }, [mensagemDoErro])


  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    setValor(newValue);
  }

  function removerProposta(id: number) {
    setPropostas((propostas) => {
      return propostas.filter((proposta) => proposta.id !== id);
    });
  }

  function atualizarPropostaEscolhida(proposta: any) {
    localStorage.setItem(`PROPOSTAESCOLHIDA`, JSON.stringify(proposta));
  }

  function criarPauta(e: any) {
    lerTexto(e)

    checarPreenchimento()

    const tituloReuniao = (document.getElementById("tituloReuniao") as HTMLInputElement).value
    const dataReuniaoEscolhida = (document.getElementById("dataReuniaoEscolhida") as HTMLInputElement).value
    const horarioInicioReuniao = (document.getElementById("horarioInicioReuniao") as HTMLInputElement).value
    const horarioFinalReuniao = (document.getElementById("horarioFinalReuniao") as HTMLInputElement).value
    let dataReuniaoCerta = dataReuniaoEscolhida.slice(6) + "/" + dataReuniaoEscolhida.slice(0, 5)
    dataReuniaoCerta = dataReuniaoCerta.replaceAll("/", "-")

    const pauta = {
      tituloReuniaoPauta: tituloReuniao,
      dataReuniao: dataReuniaoCerta,
      inicioReuniao: horarioInicioReuniao + ":" + "00",
      finalReuniao: horarioFinalReuniao + ":" + "00",
      forum: comissaoEscolhida,
      propostasPauta: propostas
    }

    api.post("/sade/pauta/" + localStorage.getItem("IDUSUARIO"), pauta).then((res) => {
      console.log(res);
      
      mostrarFeedback()
    })
  }

  function checarPreenchimento() {
    const tituloReuniao = (document.getElementById("tituloReuniao") as HTMLInputElement).value
    const dataReuniaoEscolhida = (document.getElementById("dataReuniaoEscolhida") as HTMLInputElement).value

    if (tituloReuniao == "" || dataReuniaoEscolhida == "" || comissaoEscolhida == undefined) {
      setMensagemDoErro("Algum campo não foi preenchido!")
    }
  }

  function mostrarFeedback() {
    props.setMensagemFeedback("Pauta cadastrada com sucesso")
  }

  return (
    <BoxConteudo>
      <Breadcrumb />

      <ContainerBoxTabs>
        {valor != 0 && valor != 1 ? (
          <Tabs value={valor} onChange={mudarValor}>
            {valor == 0 ? (
              <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
            ) : (
              <Tab icon={<LensRoundedIcon sx={{ color: "#90caf9" }} />}></Tab>
            )}
            {valor == 1 ? (
              <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
            ) : (
              <Tab icon={<PanoramaFishEyeRoundedIcon />}></Tab>
            )}
          </Tabs>
        ) : (
          ""
        )}
      </ContainerBoxTabs>

      {valor == 0 && (
        <>
          <Searchbar
            setFiltrar={props.setFiltrar}
            filtrar={props.filtrar}
            grid={grid}
            setGrid={setGrid}
            filtrarResultados={props.filtrarResultados} />

          {!temComponente ?
            <>
              {conteudoCarregou &&
                <Box sx={{ height: "70vh", width: "100%" }}>
                  <ResultadoVazio imagem={semDemanda} legenda={"Nenhuma proposta disponível no sistema"} />
                </Box>
              }
            </>
            :
            <CardsProcesso
              listaComponents={listaComponents}
              grid={grid}
              pauta={true}
              propostas={propostas}
              setPropostas={setPropostas}
              conteudoCarregou={conteudoCarregou} />
          }

          <BotaoPrimario
            sx={{
              position: "fixed",
              left: "88%",
              top: "90%",
            }}
            variant="contained"
            endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
            onClick={(e: any) => {
              lerTexto(e)
              if (propostas.length == 0) {
                setMensagemDoErro("Selecione pelo menos uma proposta primeiro!")
                return
              }
              setValor(1);
              localStorage.setItem("PROPOSTASELECIONADA", JSON.stringify(propostas));
            }}>
            Proximo
          </BotaoPrimario>
        </>
      )}

      {valor == 1 && (
        <>
          <PrincipalBox>
            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", paddingRight: "1rem", width: "30%" }}>
              {propostas.map((proposta: any) => {
                return (
                  <>
                    <BoxGeral key={proposta.id}>
                      <BoxProposta>
                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                          <CardProposta cor="#9acae5" tamanhoCorCard={0.2} >
                            <BoxConteudoProposta>
                              <BoxTituloProposta onClick={lerTexto}>{proposta.tituloDemanda}</BoxTituloProposta>

                              <BoxIconeLink>
                                <TypographyVermais variant="body2">
                                  <Link to={proposta.link} onClick={(e: any) => { lerTexto(e); atualizarPropostaEscolhida(proposta) }}>Ver mais</Link>
                                </TypographyVermais>

                                <DeleteIcon
                                  sx={{
                                    "&:hover": {
                                      cursor: "pointer",
                                    },
                                  }}
                                  className={`${proposta.id}`}
                                  onClick={() => removerProposta(proposta.id)} />
                              </BoxIconeLink>
                            </BoxConteudoProposta>
                          </CardProposta>
                        </Box>
                      </BoxProposta>
                    </BoxGeral>
                  </>
                );
              })}
            </Box>

            <Box sx={{ paddingLeft: "1rem", position: "relative", width: "50%" }}>
              <BackgroundInputs>
                <Box sx={{ marginBottom: "2rem", width: "100%" }}>
                  <TypographyTituloInput sx={{ marginTop: 0 }} onClick={lerTexto}>
                    Título da reunião
                  </TypographyTituloInput>

                  <TextFieldEdited id="tituloReuniao" />
                </Box>

                <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-between", marginBottom: "2rem", width: "100%" }}>
                  <Box>
                    <TypographyTituloInput onClick={lerTexto}>
                      Fórum da reunião
                    </TypographyTituloInput>

                    <SelectEdited
                      sx={{ width: "15vw" }}
                      value={comissaoEscolhida}
                      inputProps={{ id: "comissaoEscolhida" }}
                      onChange={(e: any) => {
                        const novaComissaoEscolhida = comissoes.find((comissao: any) => comissao.nomeForum == e.target.value)
                        setComissaoEscolhida(novaComissaoEscolhida);
                      }}>
                      {comissoes.map((comissao) => {
                        return <MenuItem value={comissao.nomeForum} id={comissao.idForum} onClick={lerTexto}>{comissao.nomeForum}</MenuItem>;
                      })}
                    </SelectEdited>
                  </Box>

                  <Box>
                    <TypographyTituloInput onClick={lerTexto}>
                      Data da Reunião
                    </TypographyTituloInput>

                    <DatePicker
                      InputProps={{
                        sx: {
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          boxShadow: "5px 5px 10px 0 #00000025",
                          "& fieldset": { border: "none" },
                          width: "15vw"
                        }
                      }}
                      value={valorData}
                      onChange={(newValue) => {
                        setValorData(newValue);
                      }}
                      renderInput={(params: any) => <TextField id='dataReuniaoEscolhida' {...params} />} />
                  </Box>
                </Box>

                <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <Box>
                    <TypographyTituloInput onClick={lerTexto}>
                      Início da reunião
                    </TypographyTituloInput>

                    <TimePicker
                      InputProps={{
                        sx: {
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          boxShadow: "5px 5px 10px 0 #00000025",
                          "& fieldset": { border: "none" },
                          width: "15vw"
                        }
                      }}
                      ampm={false}
                      value={inicioReuniao}
                      onChange={(newValue) => setInicioReuniao(newValue)}
                      renderInput={(params) => {
                        return <TextField id="horarioInicioReuniao" {...params} />;
                      }} />
                  </Box>

                  <Box>
                    <TypographyTituloInput onClick={lerTexto}>
                      Final da reunião
                    </TypographyTituloInput>

                    <TimePicker
                      InputProps={{
                        sx: {
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          boxShadow: "5px 5px 10px 0 #00000025",
                          "& fieldset": { border: "none" },
                          width: "15vw"
                        }
                      }}
                      ampm={false}
                      value={finalReuniao}
                      onChange={(newValue) => setFinalReuniao(newValue)}
                      renderInput={(params) => {
                        return <TextField id="horarioFinalReuniao" {...params} />;
                      }} />
                  </Box>
                </Box>
              </BackgroundInputs>

              <BoxBotoes>
                <BotaoSecundario
                  onClick={(e: any) => {
                    lerTexto(e)
                    setValor(0)
                  }}
                  variant="outlined"
                  startIcon={<ArrowBackIosRoundedIcon sx={{ width: "15px" }} />}>
                  Voltar
                </BotaoSecundario>

                <BotaoPrimario
                  variant="contained"
                  endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
                  onClick={criarPauta}>
                  Enviar
                </BotaoPrimario>
              </BoxBotoes>
            </Box>
          </PrincipalBox>
        </>
      )}

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={2500}
        open={feedbackAberto}
        onClose={() => { setFeedbackAberto(false); setMensagemDoErro("") }}>

        <Alert onClose={() => { setFeedbackAberto(false); setMensagemDoErro("") }} severity="error" sx={{ width: '100%' }}>
          {mensagemDoErro}
        </Alert>
      </Snackbar>
    </BoxConteudo>
  );
}
