import { ChangeEventHandler, SetStateAction, useContext, useEffect, useState } from "react";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import Searchbar from "../../Components/Searchbar/Searchbar";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Alert, Box, Grid, Snackbar, TextField } from "@mui/material";

import LensRoundedIcon from "@mui/icons-material/LensRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { BotaoPrimario, BotaoSecundario, BoxConteudo } from "../App.styles";
import { ContainerBoxTabs } from "../CriacaoProposta/CriacaoProposta.styles";
import { BoxBotoes, BoxInputsDataComissao } from "../CriacaoPauta/CriacaoPauta.styles";
import { TipoColecaoComponenteProcesso } from "../../constants/enuns";
import api from "../../api/api";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
import semDemanda from "../../Assets/emptyFolder.png"
import { TypographyTituloInput } from "../TelaColecaoProcesso/TelaColecaoProcesso.styles";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputAnexos from "../../Components/InputAnexos/InputAnexos";
import { TextReaderContext } from "../../Components/TextReaderContext/TextReaderContext";

export default function CriacaoAta(props: {
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
  const [pautaEscolhida, setPautaEscolhida] = useState<any>();
  const [listaComponents, setListaComponents] = useState<any[]>([])
  const [valorData, setValorData] = useState<Dayjs | null>(null)
  const [inicioReuniao, setInicioReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T13:30'));
  const [finalReuniao, setFinalReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T14:30'));
  const [files, setFiles] = useState<any[]>([])

  localStorage.setItem("PAGINATUAL", "createata")

  useEffect(() => {
    const pautaEscolhida = JSON.parse(localStorage.getItem("PAUTACRIARATA") as string)

    api.get(`/sade/pauta`).then((response) => {
      let listaPautas: any[] = []
      for (let pauta of response.data) {
        pauta.propostas = pauta.propostasPauta
        pauta.propostasPauta = null
        pauta.tituloReuniao = pauta.tituloReuniaoPauta
        pauta.tipo = TipoColecaoComponenteProcesso.Pauta

        if (pautaEscolhida != null && pautaEscolhida != undefined) {
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
    }).finally(() => {
      setConteudoCarregou(true)
    })

  }, [])

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

  function criarATA(event: any) {
    lerTexto(event)


    checarPreenchimento()

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

    api.post("/sade/ata/" + localStorage.getItem("IDUSUARIO"), formData).then((response) => {
      mostrarFeedback()
    }).catch((err) => {
      console.log(err);
    })
  }

  function checarPreenchimento() {
    const tituloReuniao = (document.getElementById("tituloReuniao") as HTMLInputElement).value
    const dataReuniaoEscolhida = (document.getElementById("dataReuniaoEscolhida") as HTMLInputElement).value

    if (tituloReuniao == "" || dataReuniaoEscolhida == "") {
      setMensagemDoErro("Algum campo não foi preenchido!")
    }
  }

  function mostrarFeedback() {
    props.setMensagemFeedback("ATA cadastrada com sucesso")
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
                  <ResultadoVazio imagem={semDemanda} legenda={"Nenhuma pauta disponível para essa ação"} />
                </Box>
              }
            </>
            :
            <CardsProcesso
              listaComponents={listaComponents}
              grid={grid}
              criandoATA={true}
              pautaEscolhida={pautaEscolhida}
              setPautaEscolhida={setPautaEscolhida}
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

              if (pautaEscolhida == undefined) {
                setMensagemDoErro("Selecione pelo menos uma proposta primeiro!")
                return
              }

              setValor(1);
            }}>
            Proximo
          </BotaoPrimario>
        </>
      )}
      {valor == 1 && (
        <>
          <BoxInputsDataComissao>
            <Box sx={{ width: "70%" }}>
              <TypographyTituloInput onClick={lerTexto}>
                Título da reunião
              </TypographyTituloInput>

              <TextField sx={{ backgroundColor: "#eee", borderRadius: "10px", boxShadow: "5px 5px 10px 0 #00000025", "& fieldset": { border: "none" }, width: "100%" }} id="tituloReuniao" />
            </Box>

            <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-between", marginBottom: "4rem", width: "70%" }}>
              <Box>
                <TypographyTituloInput onClick={lerTexto}>
                  Data da Reunião
                </TypographyTituloInput>

                <DatePicker
                  value={valorData}
                  onChange={(newValue) => {
                    setValorData(newValue);
                  }}
                  InputProps={{
                    sx: {
                      backgroundColor: "#eee",
                      borderRadius: "10px",
                      boxShadow: "5px 5px 10px 0 #00000025",
                      "& fieldset": { border: "none" },
                      marginRight: "1rem",
                      width: "15vw"
                    }
                  }}
                  renderInput={(params) => <TextField id='dataReuniaoEscolhida' {...params} />} />
              </Box>

              <Box>
                <TypographyTituloInput onClick={lerTexto}>
                  Início da reunião
                </TypographyTituloInput>

                <TimePicker
                  ampm={false}
                  value={inicioReuniao}
                  onChange={(newValue) => setInicioReuniao(newValue)}
                  InputProps={{
                    sx: {
                      backgroundColor: "#eee",
                      borderRadius: "10px",
                      boxShadow: "5px 5px 10px 0 #00000025",
                      "& fieldset": { border: "none" },
                      width: "15vw"
                    }
                  }}
                  renderInput={(params) => {
                    return <TextField id="horarioInicioReuniao" {...params} />;
                  }} />
              </Box>

              <Box>
                <TypographyTituloInput onClick={lerTexto}>
                  Final da reunião
                </TypographyTituloInput>

                <TimePicker
                  ampm={false}
                  value={finalReuniao}
                  onChange={(newValue) => setFinalReuniao(newValue)}
                  InputProps={{
                    sx: {
                      backgroundColor: "#eee",
                      borderRadius: "10px",
                      boxShadow: "5px 5px 10px 0 #00000025",
                      "& fieldset": { border: "none" },
                      marginLeft: "1rem",
                      width: "15vw"
                    }
                  }}
                  renderInput={(params) => {
                    return <TextField id="horarioFinalReuniao" {...params} />;
                  }} />
              </Box>
            </Box>

            <Box sx={{ width: "70%" }}>
              <InputAnexos rascunho={false} proposta={false} files={files} setFiles={setFiles} />
            </Box>
          </BoxInputsDataComissao>

          <BoxBotoes>
            <BotaoSecundario
              onClick={(e: any) => {
                lerTexto(e)
                setValor(0)
              }}
              sx={{
                marginRight: 3,
              }}
              variant="outlined"
              startIcon={<ArrowBackIosRoundedIcon sx={{ width: "15px" }} />}>
              Voltar
            </BotaoSecundario>

            <BotaoPrimario
              variant="contained"
              endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
              onClick={criarATA}>
              Enviar
            </BotaoPrimario>
          </BoxBotoes>
        </>
      )}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={5000}
        open={feedbackAberto}
        onClose={() => { setFeedbackAberto(false); setMensagemDoErro("") }}>

        <Alert onClose={() => { setFeedbackAberto(false); setMensagemDoErro("") }} severity="error" sx={{ width: '100%' }}>
          {mensagemDoErro}
        </Alert>
      </Snackbar>
    </BoxConteudo>
  );
}
