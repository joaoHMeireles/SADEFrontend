import { Link } from "react-router-dom";
import { ChangeEventHandler, useEffect, useState } from "react";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import CardProposta from "../../Components/CardProposta/CardProposta";
import Searchbar from "../../Components/Searchbar/Searchbar";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Box, Grid, MenuItem, Select, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

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
} from "../CriacaoPauta/CriacaoPauta.styles";
import {
  TipoColecaoComponenteProcesso,
  TipoComponenteProcesso,
} from "../../constants/enuns";
import api from "../../api/api";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
import semDemanda from "../../Assets/empty-folder.png"
import { GridInfoATA, TypographyTituloInput } from "../TelaColecaoProcesso/TelaColecaoProcesso.styles";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputAnexos from "../../Components/InputAnexos/InputAnexos";

export default function CriacaoAta(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
  listaComponents: any[];
  filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const [valor, setValor] = useState(0);
  const [grid, setGrid] = useState(true);
  const [pautaEscolhida, setPautaEscolhida] = useState<any>();
  const [listaComponents, setListaComponents] = useState<any[]>([])
  const [valorData, setValorData] = useState<Dayjs | null>(null)
  const [inicioReuniao, setInicioReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T13:30'));
  const [finalReuniao, setFinalReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T14:30'));
  const [files, setFiles] = useState<any[]>([])

  localStorage.setItem("PAGINATUAL", "createata")

  useEffect(() => {
    const pautaEscolhida = JSON.parse(localStorage.getItem("PAUTACRIARATA") as string)

    api.get(`/sod/pauta/criarATA`).then((response) => {
      let listaPautas: any[] = []
      for (let pauta of response.data) {
        pauta.propostas = pauta.propostasPauta
        pauta.propostasPauta = null
        pauta.tituloReuniao = pauta.tituloReuniaoPauta
        pauta.tipo = TipoColecaoComponenteProcesso.Pauta
        if (pautaEscolhida != null) {
          if (pauta.idPauta == pautaEscolhida.idPauta) {
            setPautaEscolhida(pauta)
            setValor(1)
          }
        }
        listaPautas.push(pauta)
      }

      setListaComponents(listaPautas);

    }).catch((err) => {
      console.log(err);
    })
  }, [])

  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    setValor(newValue);
  }


  function criarATA() {
    const tituloReuniaoATA = (document.getElementById("tituloReuniao") as HTMLInputElement).value
    const dataReuniaoEscolhida = (document.getElementById("dataReuniaoEscolhida") as HTMLInputElement).value
    const horarioInicioReuniao = (document.getElementById("horarioInicioReuniao") as HTMLInputElement).value
    const horarioFinalReuniao = (document.getElementById("horarioFinalReuniao") as HTMLInputElement).value
    let dataReuniaoCerta = dataReuniaoEscolhida.slice(6) + "/" + dataReuniaoEscolhida.slice(0, 5)
    dataReuniaoCerta = dataReuniaoCerta.replaceAll("/", "-")

    const { propostas, tipo, tituloReuniao, ...pautaCerta } = pautaEscolhida

    pautaCerta.propostasPauta = propostas

    const ATA = {
      pauta: pautaCerta,
      tituloReuniaoATA: tituloReuniaoATA,
      dataReuniao: dataReuniaoCerta,
      inicioReuniao: horarioInicioReuniao + ":" + "00",
      finalReuniao: horarioFinalReuniao + ":" + "00",
    }

    const formData = new FormData()

    formData.append("ata", JSON.stringify(ATA))

    if (files != null) {
      if (files.length != 0) {
        for (const file of files) {
          formData.append("arquivos", file)
        }
      }
    }

    api.post("/sod/ata/" + localStorage.getItem("IDUSUARIO"), formData).then((response) => {
      location.href = "/home"
    }).catch((err) => {
      console.log(err);
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
              criandoATA={true}
              pautaEscolhida={pautaEscolhida}
              setPautaEscolhida={setPautaEscolhida}
            />
            :
            <ResultadoVazio imagem={semDemanda} legenda={"Nenhuma pauta disponível para essa ação "} />
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
            }}
          >
            Proximo
          </BotaoPrimario>
        </>
      )}
      {valor == 1 && (
        <>
          <BoxInputsDataComissao>
            <Box sx={{ width: "75%", display: "flex" }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TypographyTituloInput>
                    Título da reunião
                  </TypographyTituloInput>
                  <TextField sx={{ width: "100%" }} id="tituloReuniao" />
                </Grid>
                <Grid item xs={12}>
                  <TypographyTituloInput>
                    Data da Reunião
                  </TypographyTituloInput>
                  <DatePicker
                    value={valorData}
                    onChange={(newValue) => {
                      setValorData(newValue);
                    }}
                    renderInput={(params) => <TextField id='dataReuniaoEscolhida' {...params} />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TypographyTituloInput>
                    Início da reunião
                  </TypographyTituloInput>
                  <TimePicker
                    ampm={false}
                    value={inicioReuniao}
                    onChange={(newValue) => setInicioReuniao(newValue)}
                    renderInput={(params) => {
                      return <TextField id="horarioInicioReuniao" {...params} />;
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TypographyTituloInput>
                    Final da reunião
                  </TypographyTituloInput>
                  <TimePicker
                    ampm={false}
                    value={finalReuniao}
                    onChange={(newValue) => setFinalReuniao(newValue)}
                    renderInput={(params) => {
                      return <TextField id="horarioFinalReuniao" {...params} />;
                    }}
                  />
                </Grid>
                <InputAnexos rascunho={false} proposta={false} files={files} setFiles={setFiles} />
              </Grid>
            </Box>
          </BoxInputsDataComissao>
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
              onClick={criarATA}
            >
              Enviar
            </BotaoPrimario>
          </BoxBotoes>
        </>
      )}
    </BoxConteudo>
  );
}
