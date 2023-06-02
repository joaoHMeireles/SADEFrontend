import { Link } from "react-router-dom";
import { ChangeEventHandler, useEffect, useState } from "react";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import CardProposta from "../../Components/CardProposta/CardProposta";
import Searchbar from "../../Components/Searchbar/Searchbar";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Box, Grid, MenuItem, Select, TextField } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LensRoundedIcon from "@mui/icons-material/LensRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { BotaoPrimario, BotaoSecundario, BoxConteudo } from "../App.styles";
import { ContainerBoxTabs } from "../CriacaoProposta/CriacaoProposta.styles";
import {
  BoxBotoes,
  BoxConteudoProposta,
  BoxGeral,
  BoxIconeLink,
  BoxInputsDataComissao,
  BoxProposta,
  BoxTituloProposta,
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

export default function CriacaoPauta(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
  listaComponents: any[];
  filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const [valor, setValor] = useState(0);
  const [grid, setGrid] = useState(true);
  const [propostas, setPropostas] = useState<any[]>([]);
  const [listaComponents, setListaComponents] = useState<any[]>([])
  const [comissoes, setComissoes] = useState<any[]>([]);
  const [comissaoEscolhida, setComissaoEscolhida] = useState<any>()
  const [valorData, setValorData] = useState<Dayjs | null>(null)
  const [inicioReuniao, setInicioReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T13:30'));
  const [finalReuniao, setFinalReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T14:30'));

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

  // useEffect(() => {
  //   setComissaoEscolhida(comissoes[0])
  // }, [comissoes])

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

  function criarPauta() {
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

    console.log(pauta);

    api.post("/sade/pauta/" + localStorage.getItem("IDUSUARIO"), pauta).then((response) => {
      console.log(response.data);

      location.href = "/home"
    })
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
            filtrarResultados={props.filtrarResultados}
          />
          {listaComponents.length != 0 ?
            <CardsProcesso
              listaComponents={listaComponents}
              grid={grid}
              pauta={true}
              propostas={propostas}
              setPropostas={setPropostas}
            />
            :
            <ResultadoVazio imagem={semDemanda} legenda={"Nenhuma proposta disponível no sistema"} />
          }

          <BotaoPrimario
            sx={{
              height: "3rem",
              position: "fixed",
              left: "88%",
              top: "90%",
            }}
            variant="contained"
            endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
            onClick={() => {
              setValor(1);
              localStorage.setItem(
                "PROPOSTASELECIONADA",
                JSON.stringify(propostas)
              );
            }}
          >
            Proximo
          </BotaoPrimario>
        </>
      )}
      {valor == 1 && (
        <>
          <BoxInputsDataComissao>
            <Box sx={{ width: "50vw", display: "flex", justifyContent: "center" }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sx={{ alignItems: "flex-start", display: "flex", flexDirection: "column" }}>
                  <TypographyTituloInput>
                    Título da reunião
                  </TypographyTituloInput>

                  <TextField sx={{ width: "50vw" }} id="tituloReuniao" />
                </Grid>

                <Grid item xs={6}>
                  <TypographyTituloInput>
                    Fórum da reunião
                  </TypographyTituloInput>

                  <Select
                    sx={{ width: "15vw" }}
                    defaultValue={"Comitê de TI"}
                    value={comissaoEscolhida}
                    inputProps={{ id: "comissaoEscolhida" }}
                    onChange={(e: any) => {
                      console.log(comissoes);
                      console.log(e);

                      const novaComissaoEscolhida = comissoes.find((comissao: any) => comissao.nomeForum == e.target.value)
                      setComissaoEscolhida(novaComissaoEscolhida);
                    }}
                  >
                    {comissoes.map((comissao) => {
                      return <MenuItem value={comissao.nomeForum} id={comissao.idForum}>{comissao.nomeForum}</MenuItem>;
                    })}
                  </Select>
                </Grid>

                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <Box>
                    <TypographyTituloInput>
                      Data da Reunião
                    </TypographyTituloInput>

                    <DatePicker
                      InputProps={{ sx: { width: "15vw" } }}
                      value={valorData}
                      onChange={(newValue) => {
                        setValorData(newValue);
                      }}
                      renderInput={(params: any) => <TextField id='dataReuniaoEscolhida' {...params} />}
                    />
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <TypographyTituloInput>
                    Início da reunião
                  </TypographyTituloInput>


                  <Box sx={{ height: "auto", width: "60vw" }}>
                    <TimePicker
                      InputProps={{ sx: { width: "15vw" } }}
                      ampm={false}
                      value={inicioReuniao}
                      onChange={(newValue) => setInicioReuniao(newValue)}
                      renderInput={(params) => {
                        return <TextField id="horarioInicioReuniao" {...params} />;
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <Box>
                    <TypographyTituloInput>
                      Final da reunião
                    </TypographyTituloInput>

                    <TimePicker
                      InputProps={{ sx: { width: "15vw" } }}
                      ampm={false}
                      value={finalReuniao}
                      onChange={(newValue) => setFinalReuniao(newValue)}
                      renderInput={(params) => {
                        return <TextField id="horarioFinalReuniao" {...params} />;
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </BoxInputsDataComissao>
          {propostas.map((proposta: any) => {
            return (
              <>
                <BoxGeral key={proposta.id}>
                  <BoxProposta>
                    <Box sx={{ display: "flex", height: "auto", justifyContent: "center", width: "50vw" }}>
                      <CardProposta cor="#6AACDA">
                        <BoxConteudoProposta>
                          <BoxTituloProposta>{proposta.tituloDemanda}</BoxTituloProposta>
                          <BoxIconeLink>
                            <DeleteIcon
                              sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                },
                              }}
                              className={`${proposta.id}`}
                              onClick={() => removerProposta(proposta.id)}
                            />
                            <TypographyVermais variant="body2">
                              <Link to={proposta.link} onClick={() => { atualizarPropostaEscolhida(proposta) }}>Ver mais</Link>
                            </TypographyVermais>
                          </BoxIconeLink>
                        </BoxConteudoProposta>
                      </CardProposta>
                    </Box>
                  </BoxProposta>
                </BoxGeral>
              </>
            );
          })}
          <BoxBotoes>
            <BotaoSecundario
              onClick={() => setValor(0)}
              sx={{
                width: "10%",
                minWidth: "auto",
                height: "3rem",
                marginRight: 3,
              }}
              variant="outlined"
              startIcon={<ArrowBackIosRoundedIcon sx={{ width: "15px" }} />}
            >
              Voltar
            </BotaoSecundario>

            <BotaoPrimario
              sx={{ width: "10%", minWidth: "auto", height: "3rem" }}
              variant="contained"
              endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
              onClick={criarPauta}
            >
              Enviar
            </BotaoPrimario>
          </BoxBotoes>
        </>
      )}
    </BoxConteudo>
  );
}
