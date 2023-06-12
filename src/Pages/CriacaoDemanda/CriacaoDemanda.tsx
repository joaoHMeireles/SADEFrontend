import { useContext, useEffect, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import InputAnexos from "../../Components/InputAnexos/InputAnexos";
import BeneficiosDemanda from "../../Components/BeneficiosDemanda/BeneficiosDemanda";
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
  ContainerGeral,
  BoxContainerBotoes,
  BoxBotaoTerciario,
  BoxBotoesPriSec,
} from "./CriacaoDemanda.styles";
import api from "../../api/api";
import jsPDF from "jspdf";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf"

import EsqueletoPDFVersaoDemanda
  from "../../Components/EsqueletoPDF/EsqueletoPDFVersaoDemanda/EsqueletoPDFVersaoDemanda";
import React from "react";
import { getNomeComponente, useLocationChange } from "../../utils";
import { WebSocketContext } from "../../api/websocketservice";
import novaNotificacao from "../Notificacoes/Notificacoes";

import pdf from "../../Assets/pdf.pdf";
import { TipoComponenteProcesso } from "../../constants/enuns";
import { useLocation } from "react-router-dom";
import { TextReaderContext } from "../../Components/TextReaderContext/TextReaderContext";
import { Alert, Snackbar } from "@mui/material";

export default function CriacaoDemanda(props: {
  rascunho: boolean;
  editarDemanda?: boolean;
}) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const idUsuario = localStorage.getItem("IDUSUARIO");
  const [segundo, setSegundo] = useState(false);
  const [informacoesPreenchidas, setInformacoesPreenchidas] = useState(false)
  const [valor, setValor] = useState(0);
  const [centroCusto, setCentroCusto] = useState<any[]>([]);
  const [data, setData] = useState<any>({ usuario: { idUsuario: idUsuario } })
  const [files, setFiles] = useState<any>([]);
  const [pdfDemanda, setPDFDemanda] = useState<any>();
  const [feedbackAberto, setFeedbackAberto] = useState(false);

  const [numeroBeneficiosReais, setNumeroBeneficiosReais] = useState<number>(1);
  const [numeroBeneficiosPotenciais, setNumeroBeneficiosPotenciais] = useState<number>(1);
  const [numeroBeneficiosQualitativos, setNumeroBeneficiosQualitativos] = useState<number>(1);

  const [moedaReal, setMoedaReal] = useState<string[]>(["REAL"]);
  const [moedaPotencial, setMoedaPotencial] = useState<string[]>(["REAL"]);

  const location = useLocation();

  const pdfExportComponent = React.useRef<PDFExport>(null);

  const webSocketService: any = useContext(WebSocketContext)

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
    let info: any = null

    if (location.search) {
      let idDemanda = location.search.replace("?", "");

      api.get("/sod/demanda/" + idDemanda).then((response) => {
        info = response.data
      })
    } else {
      info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") ?
        localStorage.getItem("DEMANDASELECIONADA") as string
        :
        localStorage.getItem("RASCUNHOESCOLHIDO") as string
      );
    }

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
              }
            }

          }
        }
      }
    }
  }, [])

  useEffect(() => {
    if (pdfDemanda == null || pdfDemanda == undefined) {
      return
    }

    criarDemanda()
  }, [pdfDemanda])

  function atualizarDados(data: any) {
    setData(data);
    localStorage.setItem("OBJETODEMANDACRIADA", JSON.stringify(data))
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
    setValor(newValue);
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

    let data = {
      "tituloDemanda": titulo.value,
      "objetivo": objetivo.value,
      "situacaoAtual": situacaoAtual.value,
      "centroCustoDemanda": centroCusto
    }

    localStorage.setItem("DADOSDEMANDACRIACAO", JSON.stringify(data))

    atualizarDados(data);
  }

  function partDoisDemanda() {
    if (props.rascunho) {
      return
    }
    const frequenciaUso = document.getElementById("frequenciaUso") as HTMLInputElement;

    let valorMensal;
    let descricao;

    let beneficios = [];


    for (let i = 0; i < numeroBeneficiosReais; i++) {
      valorMensal = document.getElementById(`valorMensalReal${i}`) as HTMLInputElement;
      descricao = document.getElementById(`descricaoReal${i}`) as HTMLInputElement;

      let beneficioReal = {
        "tipoBeneficio": "REAL",
        "descricao": descricao.value,
        "moeda": moedaReal[i],
        "valor": valorMensal.value
      }

      if (numeroBeneficiosReais > 0 && valorMensal.value && moedaReal && descricao.value) {
        beneficios.push(beneficioReal);
      }
    }

    for (let i = 0; i < numeroBeneficiosPotenciais; i++) {
      valorMensal = document.getElementById(`valorMensalPotencial${i}`) as HTMLInputElement;
      descricao = document.getElementById(`descricaoPotencial${i}`) as HTMLInputElement;

      let beneficioPotencial = {
        "tipoBeneficio": "POTENCIAL",
        "descricao": descricao.value,
        "moeda": moedaPotencial[i],
        "valor": valorMensal.value
      }

      if (numeroBeneficiosReais > 0 && valorMensal.value && moedaPotencial && descricao.value) {
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

  function gerarPDFDemanda() {
    const doc = new jsPDF()
    const pdf = document.getElementById("BOX") as HTMLElement

    // console.log(pdf);
    // console.log(pdfExportComponent.current);

    // if (pdfExportComponent.current) {
    //   pdfExportComponent.current.save();
    // }

    doc.html(pdf)

    const pdfArquivo = doc.output("blob")

    setPDFDemanda(pdfArquivo)
  }

  function criarDemanda() {
    localStorage.setItem("DEMANDACADASTRADA", "true")

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

      for (let beneficio of data.beneficiosDemanda) {
        const { novo, ...beneficioCerto } = beneficio
        beneficios.push(beneficioCerto)
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
      }).catch((err: any) => {
        console.log(err);
      })
    } else if (props.editarDemanda) {
      api.put("/sade/demanda/" + idDemandaEditar + "/" + idUsuario, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((response) => {
        console.log(response);
      }).catch((err: any) => {
        console.log(err);
      })
    } else {
      api.post("/sade/demanda", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((res: any) => {
        webSocketService.inscrever(`/notificacao/demanda/${res.data.idDemanda}`, novaNotificacao)
      }).catch((err: any) => {
        console.log(err);
      })
    }

    window.location.href = "/home";
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

            <BoxContainerBotoes>
              <BotaoTerciario
                sx={{ width: "15%", height: "3rem" }}
                variant="outlined"
                onClick={(e) => {
                  lerTexto(e)
                  window.location.href = "/home";
                }}>
                Cancelar
              </BotaoTerciario>

              <BotaoPrimario
                sx={{ width: "15%", height: "3rem" }}
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
                onClick={(e) => {
                  lerTexto(e)
                  partUmDemanda();

                  const titulo = document.getElementById("titulo") as HTMLInputElement;
                  const situacaoAtual = document.getElementById("situacaoAtual") as HTMLInputElement;
                  const objetivo = document.getElementById("objetivo") as HTMLInputElement;
              
              
                  if(titulo.value == "" || situacaoAtual.value == "" || objetivo.value == "" || centroCusto.length == 0){
                    setFeedbackAberto(true)
                    setInformacoesPreenchidas(true)
                  } else {
                    setValor(1);
                  }
                }}>
                Proximo
              </BotaoPrimario>
            </BoxContainerBotoes>
          </>
        )}

        {valor == 1 && (
          <>

            <BeneficiosTeste />
            {/* {props.rascunho || props.editarDemanda ?
              <BeneficiosDemanda rascunho={props.rascunho} proposta={false}
                numeroBeneficiosReais={numeroBeneficiosReais}
                numeroBeneficiosPotenciais={numeroBeneficiosPotenciais}
                numeroBeneficiosQualitativos={numeroBeneficiosQualitativos}
                setNumeroBeneficiosReais={setNumeroBeneficiosReais}
                setNumeroBeneficiosPotenciais={setNumeroBeneficiosPotenciais}
                setNumeroBeneficiosQualitativos={setNumeroBeneficiosQualitativos}
                informacaoProcesso={data}
                setInformacaoProcesso={setData}
              />
              :
              <BeneficiosDemanda rascunho={props.rascunho} proposta={false}
                numeroBeneficiosReais={numeroBeneficiosReais}
                numeroBeneficiosPotenciais={numeroBeneficiosPotenciais}
                numeroBeneficiosQualitativos={numeroBeneficiosQualitativos}
                setNumeroBeneficiosReais={setNumeroBeneficiosReais}
                setNumeroBeneficiosPotenciais={setNumeroBeneficiosPotenciais}
                setNumeroBeneficiosQualitativos={setNumeroBeneficiosQualitativos}
                moedaReal={moedaReal}
                setMoedaReal={setMoedaReal}
                moedaPotencial={moedaPotencial}
                setMoedaPotencial={setMoedaPotencial}
                partDoisDemanda={partDoisDemanda} />
            } */}

            <BoxContainerBotoes>
              <BoxBotaoTerciario>
                <BotaoTerciario
                  sx={{ width: "25%", minWidth: "auto", height: "3rem" }}
                  variant="outlined"
                  onClick={(e) => {
                    lerTexto(e)
                    window.location.href = "/home";
                  }}>
                  Cancelar
                </BotaoTerciario>
              </BoxBotaoTerciario>

              <BoxBotoesPriSec>
                <BotaoSecundario
                  onClick={(e) => {
                    lerTexto(e)
                    setValor(valor - 1);
                  }}
                  sx={{
                    width: "25%",
                    minWidth: "auto",
                    height: "3rem",
                    marginRight: 3,
                  }}
                  variant="outlined"
                  startIcon={<ArrowBackIosRoundedIcon sx={{ width: "15px" }} />}>
                  Voltar
                </BotaoSecundario>

                <BotaoPrimario
                  sx={{ width: "25%", minWidth: "auto", height: "3rem" }}
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
              </BoxBotoesPriSec>
            </BoxContainerBotoes>
          </>
        )}

        {valor == 2 && (
          <>
            <InputAnexos rascunho={props.rascunho} proposta={false} files={files} setFiles={setFiles} />
            <BoxContainerBotoes>
              <BoxBotaoTerciario>
                <BotaoTerciario
                  sx={{ width: "25%", minWidth: "auto", height: "3rem" }}
                  variant="outlined"
                  onClick={(e) => {
                    window.location.href = "/home";
                    lerTexto(e)
                  }}>
                  Cancelar
                </BotaoTerciario>
              </BoxBotaoTerciario>

              <BoxBotoesPriSec>
                <BotaoSecundario
                  onClick={(e) => {
                    lerTexto(e)
                    setValor(1);
                  }}
                  sx={{
                    width: "25%",
                    minWidth: "auto",
                    height: "3rem",
                    marginRight: 3,
                  }}
                  variant="outlined"
                  startIcon={<ArrowBackIosRoundedIcon sx={{ width: "15px" }} />}>
                  Voltar
                </BotaoSecundario>

                <BotaoPrimario
                  sx={{ width: "25%", minWidth: "auto", height: "3rem" }}
                  variant="contained"
                  endIcon={
                    <ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />
                  }
                  onClick={(e) => {
                    lerTexto(e)
                    gerarPDFDemanda()
                  }}>
                  Enviar
                </BotaoPrimario>
              </BoxBotoesPriSec>
            </BoxContainerBotoes>

            {data != null &&
              <EsqueletoPDFVersaoDemanda demanda={data} pdfExportComponent={pdfExportComponent} />
            }
          </>
        )}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={3000}
          open={feedbackAberto}
          onClose={() => { setFeedbackAberto(false) }}>

          <Alert onClose={() => { setFeedbackAberto(false) }} severity="error" sx={{ width: '100%' }}>
            Algum campo não foi preenchido!
          </Alert>
        </Snackbar>
      </ContainerGeral>
    </BoxConteudo>
  );
}
