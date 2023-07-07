import { SetStateAction, useContext, useEffect, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import InputAnexos from "../../Components/InputAnexos/InputAnexos";
import BeneficiosTeste from "../../Components/BeneficiosDemanda/BeneficiosTeste/BeneficiosTeste";
import InformacaoGeral from "../../Components/InformacaoGeral/InformacaoGeral";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import LensRoundedIcon from "@mui/icons-material/LensRounded";
import {
  BotaoPrimario,
  BotaoTerciario,
  BoxConteudo,
  BotaoSecundario,
} from "../App.styles";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import {
  BoxBotoes,
  ContainerBotoes,
  ContainerGeral
} from "./CriacaoDemanda.styles";
import api from "../../api/api";
import jsPDF from "jspdf";
import React from "react";
import { WebSocketContext } from "../../api/websocketservice";
import novaNotificacao from "../Notificacoes/Notificacoes";

import { useLocation } from "react-router-dom";
import { TextReaderContext } from "../../Components/TextReaderContext/TextReaderContext";
import { Alert, Dialog, Snackbar } from "@mui/material";
import ModalEditarDemanda from "../../Components/Modais/ModalEditarDemanda/ModalEditarDemanda";
import ModalMostrarDemandasSimilares from "../../Components/Modais/ModalMostrarDemandasSimilares/ModalMostrarDemandasSimilares";

export default function CriacaoDemanda(props: {
  rascunho: boolean;
  editarDemanda?: boolean;
  setMensagemFeedback: React.Dispatch<SetStateAction<string>>;
}) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [similaridadeDemanda, setSimilaridadeDemanda] = useState<any>(false)
  const [demandasSimilares, setDemandasSimilares] = useState<any[]>([])
  const idUsuario = localStorage.getItem("IDUSUARIO");
  const [segundo, setSegundo] = useState(false);
  const [informacoesPreenchidas, setInformacoesPreenchidas] = useState(false)
  const [valor, setValor] = useState(0);
  const [centroCusto, setCentroCusto] = useState<any[]>([]);
  const [data, setData] = useState<any>({ usuario: { idUsuario: idUsuario } })
  const [files, setFiles] = useState<any>([]);
  const [feedbackAberto, setFeedbackAberto] = useState(false);

  const [numeroBeneficiosReais, setNumeroBeneficiosReais] = useState<number>(1);
  const [numeroBeneficiosPotenciais, setNumeroBeneficiosPotenciais] = useState<number>(1);
  const [numeroBeneficiosQualitativos, setNumeroBeneficiosQualitativos] = useState<number>(1);
  const [frequenciaUso, setFrequenciaUso] = useState<any>("SEMANALMENTE");

  const location = useLocation();

  localStorage.setItem("PAGINATUAL", "createdemand");

  const webSocketService: any = useContext(WebSocketContext)
  let info: any = null

  useEffect(() => {
    let info: any = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") ?
      localStorage.getItem("DEMANDASELECIONADA") as string
      :
      localStorage.getItem("RASCUNHOESCOLHIDO") as string
    );

    if (props.editarDemanda) {
      setData(info)
    }
  }, [valor]);

  useEffect(() => {
    if (location.search != "") {
      let idDemanda = location.search.replace("?", "");

      api.get("/sade/demanda/" + idDemanda).then((response) => {
        info = response.data
        preencherInformacoesCarregamento()
      })
    } else {
      info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") != "" ?
        localStorage.getItem("RASCUNHOESCOLHIDO") as string
        :
        localStorage.getItem("DEMANDASELECIONADA") as string
      );
      preencherInformacoesCarregamento()
    }
  }, [])

  useEffect(() => {
    if (demandasSimilares.length == 0) {
      return
    }

    setSimilaridadeDemanda(true)
  }, [demandasSimilares])

  function atualizarDados(data: any) {
    setData(data);
    localStorage.setItem("DADOSDEMANDACRIACAO", JSON.stringify(data))
  }

  function preencherInformacoesCarregamento() {
    if (props.rascunho) {
      for (let atributo in info) {
        if ((info as any)[atributo]) {
          const inputAtributo = document.getElementById(
            getIdByAtributo(atributo)
          ) as HTMLInputElement;

          if (inputAtributo) {
            switch (inputAtributo.id) {
              case 'titulo': {
                inputAtributo.value = info.tituloDemanda;
                break;
              }
              case "objetivo": {
                inputAtributo.value = info.objetivo;
                break;
              }
              case "situacaoAtual": {
                inputAtributo.value = info.situacaoAtual;
                break;
              }
              case "centrosDeCusto": {
                inputAtributo.value = info.centroCustoDemanda.map((centroCusto: any) => centroCusto.nomeCentroCusto)
                setCentroCusto(info.centroCustoDemanda);
                break;
              }
            }

          }
        }
      }
    }
  }

  function getIdByAtributo(atributo: string) {
    const idsInputsAtributo = {
      tituloDemanda: "titulo",
      centroCustoDemanda: "centrosDeCusto",
      objetivo: "objetivo",
      situacaoAtual: "situacaoAtual",
    };


    return (idsInputsAtributo as any)[atributo];
  }

  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    if (valor == 0) {
      checarPreenchimento()
    } else {
      setValor(newValue);
    }

    if (newValue == 2) {
      setSegundo(true);
    } else {
      setSegundo(false);
    }
  }

  function partUmDemanda() {
    const titulo = document.getElementById("titulo") as HTMLInputElement;
    const situacaoAtual = document.getElementById("situacaoAtual") as HTMLInputElement;
    const objetivo = document.getElementById("objetivo") as HTMLInputElement;

    let dataDemanda = {
      "tituloDemanda": titulo.value,
      "objetivo": objetivo.value,
      "situacaoAtual": situacaoAtual.value,
      "centroCustoDemanda": centroCusto,
      "usuario": {
        "idUsuario": idUsuario
      }
    }

    localStorage.setItem("DADOSDEMANDACRIACAO", JSON.stringify(dataDemanda))

    atualizarDados(dataDemanda);
  }

  function partDoisDemanda() {
    if (props.rascunho) {
      return
    }
    const frequenciaUso = document.getElementById("frequenciaUso") as HTMLInputElement;

    let valorMensal;
    let descricao;
    let tipoMoeda

    let beneficios = [];

    for (let i = 0; i < numeroBeneficiosReais; i++) {
      valorMensal = document.getElementById(`valorMensalReal${i}`) as HTMLInputElement;
      descricao = document.getElementById(`descricaoReal${i}`) as HTMLInputElement;
      tipoMoeda = document.getElementById(`moedaReal${i}`) as HTMLInputElement;

      let beneficioReal = {
        "tipoBeneficio": "REAL",
        "descricao": descricao.value,
        "moeda": tipoMoeda.innerText,
        "valor": valorMensal.value
      }

      if (numeroBeneficiosReais > 0 && valorMensal.value && tipoMoeda.innerText != "" && descricao.value) {
        beneficios.push(beneficioReal);
      }
    }

    for (let i = 0; i < numeroBeneficiosPotenciais; i++) {
      valorMensal = document.getElementById(`valorMensalPotencial${i}`) as HTMLInputElement;
      descricao = document.getElementById(`descricaoPotencial${i}`) as HTMLInputElement;
      tipoMoeda = document.getElementById(`moedaPotencial${i}`) as HTMLInputElement;

      let beneficioPotencial = {
        "tipoBeneficio": "POTENCIAL",
        "descricao": descricao.value,
        "moeda": tipoMoeda.innerText,
        "valor": valorMensal.value
      }

      if (numeroBeneficiosReais > 0 && valorMensal.value && tipoMoeda.innerText != "" && descricao.value) {
        beneficios.push(beneficioPotencial);
      }
    }

    for (let i = 0; i < numeroBeneficiosQualitativos; i++) {
      descricao = document.getElementById(`beneficiosQualitativos${i}`) as HTMLInputElement;

      let beneficioQualitativo = {
        "tipoBeneficio": "QUALITATIVO",
        "descricao": descricao.value,
      }

      if (numeroBeneficiosReais > 0 && descricao.value) {
        beneficios.push(beneficioQualitativo);
      }
    }

    let data2 = {
      "tituloDemanda": data.tituloDemanda,
      "objetivo": data.objetivo,
      "situacaoAtual": data.situacaoAtual,
      "frequenciaUso": frequenciaUso.innerText,
      "score": 1,
      "centroCustoDemanda": data.centroCustoDemanda,
      "beneficiosDemanda": beneficios,
      "usuario": {
        "idUsuario": data.usuario.idUsuario
      }
    }

    localStorage.setItem("DADOSDEMANDACRIACAO", JSON.stringify(data2))
    atualizarDados(data2)
  }

  function criarDemanda() {
    let idDemandaEditar = -1
    let formData = new FormData();

    if (files != undefined) {
      for (const file of files) {
        formData.append("files", file);
      }
    }

    if (data != undefined) {
      let { tipo, ...dataCerta } = data
      let beneficios = []

      if (data.beneficiosDemanda != null) {
        for (let beneficio of data.beneficiosDemanda) {
          const { novo, ...beneficioCerto } = beneficio
          beneficios.push(beneficioCerto)
        }
      }

      dataCerta.beneficiosDemanda = beneficios
      dataCerta.rascunho = false

      if (props.rascunho) {
        dataCerta.criandoDemandaPorRascunho = true
      }

      if (props.editarDemanda) {
        const { id, ...dadosCorretosDemandaEditar } = dataCerta

        idDemandaEditar = id

        dataCerta = dadosCorretosDemandaEditar
        dataCerta.editandoDemanda = true
        dataCerta.devolvida = false
      }

      formData.append("demanda", JSON.stringify(dataCerta));
    }

    if (props.rascunho) {
      const idDemanda = JSON.parse(
        localStorage.getItem("RASCUNHOESCOLHIDO") as string
      ).idDemanda;

      api.put("/sade/demanda/" + idDemanda + "/" + idUsuario, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then(() => {
        mostrarFeedback()
      }).catch((err: any) => {
        console.log(err);
        erroEncontrado()
      })
    } else if (props.editarDemanda) {
      api.put("/sade/demanda/" + idDemandaEditar + "/" + idUsuario, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((response) => {
        mostrarFeedback()
        console.log(response);
      }).catch((err: any) => {
        console.log(err);
        erroEncontrado()
      })
    } else {
      api.post("/sade/demanda/false", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((res: any) => {
        const resposta = res.data

        if (resposta.length != null) {
          console.log("resposta: ", resposta);
          setDemandasSimilares(resposta)
        } else {
          mostrarFeedback()
          webSocketService.inscrever(`/notificacao/demanda/${res.data.idDemanda}`, novaNotificacao)
        }
      }).catch((err: any) => {
        console.log(err);
        erroEncontrado()
      })
    }

    localStorage.setItem("DEMANDACADASTRADA", "true")
  }

  function continuarCriacaoDemanda() {
    let formData = new FormData();

    if (files != undefined) {
      for (const file of files) {
        formData.append("files", file);
      }
    }

    if (data != undefined) {
      let { tipo, ...dataCerta } = data
      let beneficios = []

      if (data.beneficiosDemanda != null) {
        for (let beneficio of data.beneficiosDemanda) {
          const { novo, ...beneficioCerto } = beneficio
          beneficios.push(beneficioCerto)
        }
      }

      dataCerta.beneficiosDemanda = beneficios
      dataCerta.rascunho = false

      formData.append("demanda", JSON.stringify(dataCerta));
    }

    api.post("/sade/demanda/true", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }).then((res: any) => {
      mostrarFeedback()
      webSocketService.inscrever(`/notificacao/demanda/${res.data.idDemanda}`, novaNotificacao)
    }).catch((err: any) => {
      console.log(err);
      erroEncontrado()
    })
  }

  function checarPreenchimento() {
    const titulo = document.getElementById("titulo") as HTMLInputElement;
    const situacaoAtual = document.getElementById("situacaoAtual") as HTMLInputElement;
    const objetivo = document.getElementById("objetivo") as HTMLInputElement;

    if (titulo.value == "" || situacaoAtual.value == "" || objetivo.value == "" || centroCusto.length == 0) {
      setFeedbackAberto(true)
      setInformacoesPreenchidas(true)

      return false
    } else {
      setValor(1);

      return true
    }
  }

  function erroEncontrado() {

  }

  function mostrarFeedback() {
    props.setMensagemFeedback("Demanda cadastrada com sucesso")
  }

  return (
    <BoxConteudo>
      <Breadcrumb />

      <ContainerGeral sx={{ backgroundColor: "white" }}>
        <Tabs value={valor} onChange={mudarValor}>
          {valor == 0 ? (
            <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
          ) : (
            <Tab icon={<LensRoundedIcon sx={{ color: "#90caf9" }} />}></Tab>
          )}
          {valor == 1 ? (
            <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
          ) : segundo ? (
            <Tab icon={<LensRoundedIcon sx={{ color: "#90caf9" }} />}></Tab>
          ) : (
            <Tab icon={<PanoramaFishEyeRoundedIcon />}></Tab>
          )}
          {valor == 2 ? (
            <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
          ) : (
            <Tab icon={<PanoramaFishEyeRoundedIcon />}></Tab>
          )}
        </Tabs>

        {valor == 0 && (
          <>
            <InformacaoGeral proposta={false} centroCusto={centroCusto} setCentroCusto={setCentroCusto} partUmDemanda={partUmDemanda} rascunho={props.rascunho} editarDemanda={props.editarDemanda} informacoesPreenchidas={informacoesPreenchidas} />

            <ContainerBotoes>
              <BotaoTerciario
                variant="outlined"
                onClick={(e) => {
                  lerTexto(e)
                  window.location.href = "/home";
                }}>
                Cancelar
              </BotaoTerciario>

              <BotaoPrimario
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
                onClick={(e) => {
                  lerTexto(e)
                  partUmDemanda();

                  const titulo = document.getElementById("titulo") as HTMLInputElement;
                  const situacaoAtual = document.getElementById("situacaoAtual") as HTMLInputElement;
                  const objetivo = document.getElementById("objetivo") as HTMLInputElement;

                  if (titulo.value == "" || situacaoAtual.value == "" || objetivo.value == "" || centroCusto.length == 0) {
                    setFeedbackAberto(true)
                    setInformacoesPreenchidas(true)
                  } else {
                    setValor(1);
                  }

                }}>
                Proximo
              </BotaoPrimario>
            </ContainerBotoes>
          </>
        )}

        {valor == 1 && (
          <>
            <BeneficiosTeste
              proposta={false} rascunho={props.rascunho} editarDemanda={props.editarDemanda}
              numeroBeneficiosReais={numeroBeneficiosReais}
              setNumeroBeneficiosReais={setNumeroBeneficiosReais}
              numeroBeneficiosPotenciais={numeroBeneficiosPotenciais}
              setNumeroBeneficiosPotenciais={setNumeroBeneficiosPotenciais}
              numeroBeneficiosQualitativos={numeroBeneficiosQualitativos}
              setNumeroBeneficiosQualitativos={setNumeroBeneficiosQualitativos}
              frequenciaUso={frequenciaUso}
              setFrequenciaUso={setFrequenciaUso}
              informacaoProcesso={data}
              setInformacaoProcesso={setData}
              partDoisDemanda={partDoisDemanda}
            />

            <ContainerBotoes>
              <BotaoTerciario
                variant="outlined"
                onClick={(e) => {
                  lerTexto(e)
                  window.location.href = "/home";
                }}>
                Cancelar
              </BotaoTerciario>

              <BoxBotoes>
                <BotaoSecundario
                  onClick={(e) => {
                    lerTexto(e)
                    setValor(valor - 1);
                  }}
                  variant="outlined"
                  startIcon={<ArrowBackIosRoundedIcon sx={{ width: "15px" }} />}>
                  Voltar
                </BotaoSecundario>

                <BotaoPrimario
                  variant="contained"
                  endIcon={
                    <ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />
                  }
                  onClick={(e) => {
                    lerTexto(e)
                    setValor(2);
                    setSegundo(true);
                    partDoisDemanda();
                  }}>
                  Proximo
                </BotaoPrimario>
              </BoxBotoes>
            </ContainerBotoes>
          </>
        )}

        {valor == 2 && (
          <>
            {similaridadeDemanda &&
              <Dialog open={similaridadeDemanda} sx={{ '& .MuiPaper-root': { backgroundColor: "#fff", borderRadius: "10px" } }}>
                <ModalMostrarDemandasSimilares open={similaridadeDemanda} setOpen={setSimilaridadeDemanda} demandasSimilares={demandasSimilares} continuarCriacaoDemanda={continuarCriacaoDemanda} />
              </Dialog>
            }

            <InputAnexos rascunho={props.rascunho} proposta={false} files={files} setFiles={setFiles} />
            <ContainerBotoes>
              <BotaoTerciario
                variant="outlined"
                onClick={(e) => {
                  window.location.href = "/home";
                  lerTexto(e)
                }}>
                Cancelar
              </BotaoTerciario>

              <BoxBotoes>
                <BotaoSecundario
                  onClick={(e) => {
                    lerTexto(e)
                    setValor(1);
                  }}
                  variant="outlined"
                  startIcon={<ArrowBackIosRoundedIcon sx={{ width: "15px" }} />}>
                  Voltar
                </BotaoSecundario>

                <BotaoPrimario
                  variant="contained"
                  sx={{ marginLeft: "1rem" }}
                  endIcon={
                    <ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />
                  }
                  onClick={(e) => {
                    lerTexto(e)
                    criarDemanda()
                  }}>
                  Enviar
                </BotaoPrimario>
              </BoxBotoes>
            </ContainerBotoes>
          </>
        )}

        {props.editarDemanda && <ModalEditarDemanda />}

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={3000}
          open={feedbackAberto}
          onClose={() => { setFeedbackAberto(false) }}
        >

          <Alert onClose={() => { setFeedbackAberto(false) }} severity="error" sx={{ width: '100%' }}>
            Algum campo não foi preenchido!
          </Alert>
        </Snackbar>

      </ContainerGeral>
    </BoxConteudo>
  );
}