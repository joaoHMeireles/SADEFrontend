import { useEffect, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import InputAnexos from "../../Components/InputAnexos/InputAnexos";
import BeneficiosDemanda from "../../Components/BeneficiosDemanda/BeneficiosDemanda";
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

export default function CriacaoDemanda(props: {
  rascunho: boolean;
}) {
  const [segundo, setSegundo] = useState(false);
  const [valor, setValor] = useState(0);
  const [centroCusto, setCentroCusto] = useState<any[]>([]);
  const [data, setData] = useState<Object>()
  const [files, setFiles] = useState([]);

  const [numeroBeneficiosReais, setNumeroBeneficiosReais] = useState<number>(1);
  const [numeroBeneficiosPotenciais, setNumeroBeneficiosPotenciais] = useState<number>(1);
  const [numeroBeneficiosQualitativos, setNumeroBeneficiosQualitativos] = useState<number>(1);


  useEffect(() => {
    if (props.rascunho) {
      const info = JSON.parse(
        localStorage.getItem("RASCUNHOESCOLHIDO") as string
      );

      for (let atributo in info) {
        if ((info as any)[atributo]) {
          const inputAtributo = document.getElementById(
            getIdByAtributo(atributo)
          ) as HTMLInputElement;
          if (inputAtributo) {
            if (inputAtributo.id == "titulo") {
              inputAtributo.value = info.titulo;
            }

            if (inputAtributo.id == "objetivo") {
              inputAtributo.value = info.objetivo;
            }

            if (inputAtributo.id == "situacaoAtual") {
              inputAtributo.value = info.situacaoAtual;
            }
          }
        }
      }
    }
  }, [valor]);

  function getIdByAtributo(atributo: string) {
    const idsInputsAtributo = {
      titulo: "titulo",
      centrosDeCusto: "centroDeCusto",
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
    const titulo = document.getElementById("titulo").value;
    const situacaoAtual = document.getElementById("situacaoAtual").value;
    const objetivo = document.getElementById("objetivo").value;

    const cc = [];

    for (let i = 0; i < centroCusto.length; i++) {
      let c = {
        // rever
        idCentroCusto: 1
      }
      cc.push(c)
    }

    const idUsuario = localStorage.getItem("IDUSUARIO");

    let data = {
      "tituloDemanda": titulo,
      "objetivo": objetivo,
      "situacaoAtual": situacaoAtual,
      "centroCustoDemanda": cc,
      "usuario": {
        "idUsuario": idUsuario
      }
    }

    setData(data);
  }

  function partDoisDemanda() {
    const frequenciaUso = document.getElementById("frequenciaUso").value;

    let valorMensal;
    let moeda;
    let descricao;

    let beneficios = [];


    for (let i = 0; i < numeroBeneficiosReais; i++) {
      valorMensal = document.getElementById(`valorMensalReal${i}`).value;
      moeda = document.getElementById(`moedaReal${i}`).value;
      descricao = document.getElementById(`descricaoReal${i}`).value;

      let beneficioReal = {
        "tipoBeneficio": "REAL",
        "descricao": descricao,
        "moeda": moeda,
        "valor": valorMensal
      }

      beneficios.push(beneficioReal);
    }

    for (let i = 0; i < numeroBeneficiosPotenciais; i++) {
      valorMensal = document.getElementById(`valorMensalPotencial${i}`).value;
      moeda = document.getElementById(`moedaPotencial${i}`).value;
      descricao = document.getElementById(`descricaoPotencial${i}`).value;

      let beneficioPotencial = {
        "tipoBeneficio": "POTENCIAL",
        "descricao": descricao,
        "moeda": moeda,
        "valor": valorMensal
      }

      beneficios.push(beneficioPotencial);
    }

    for (let i = 0; i < numeroBeneficiosQualitativos; i++) {
      descricao = document.getElementById(`beneficiosQualitativos${i}`).value;

      let beneficioQualitativo = {
        "tipoBeneficio": "QUALITATIVO",
        "descricao": descricao,
      }

      beneficios.push(beneficioQualitativo);
    }

    let data2 = {
      "tituloDemanda": data.tituloDemanda,
      "objetivo": data.objetivo,
      "situacaoAtual": data.situacaoAtual,
      "frequenciaUso": frequenciaUso,
      "centroCustoDemanda": data.centroCustoDemanda,
      "beneficiosDemanda": beneficios,
      "usuario": {
        "idUsuario": data.usuario.idUsuario
      }
    }

    setData(data2)
  }

  function criarDemanda() {
    let formData = new FormData();
    if (files != undefined) {
      formData.append("files", files);
    }

    if (data != undefined) {
      formData.append("demanda", data);
    }

    



    // api.post("/sod/demanda", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   }
    // }).then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }


  return (
    <BoxConteudo>
      <Breadcrumb />
      <ContainerGeral>
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
            <InformacaoGeral proposta={false} centroCusto={centroCusto} setCentroCusto={setCentroCusto} />
            <BoxContainerBotoes>
              <BotaoTerciario
                sx={{ width: "15%", height: "3rem" }}
                variant="outlined"
                onClick={() => {
                  window.location.href = "/home";
                }}
              >
                Cancelar
              </BotaoTerciario>
              <BotaoPrimario
                sx={{ width: "15%", height: "3rem" }}
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
                onClick={() => {
                  setValor(1);
                  partUmDemanda();
                }}
              >
                Proximo
              </BotaoPrimario>
            </BoxContainerBotoes>
          </>
        )}

        {valor == 1 && (
          <>
            <BeneficiosDemanda rascunho={props.rascunho} proposta={false}
              numeroBeneficiosReais={numeroBeneficiosReais}
              numeroBeneficiosPotenciais={numeroBeneficiosPotenciais}
              numeroBeneficiosQualitativos={numeroBeneficiosQualitativos}
              setNumeroBeneficiosReais={setNumeroBeneficiosReais}
              setNumeroBeneficiosPotenciais={setNumeroBeneficiosPotenciais}
              setNumeroBeneficiosQualitativos={setNumeroBeneficiosQualitativos}
            />
            <BoxContainerBotoes>
              <BoxBotaoTerciario>
                <BotaoTerciario
                  sx={{ width: "25%", minWidth: "auto", height: "3rem" }}
                  variant="outlined"
                  onClick={() => {
                    window.location.href = "/home";
                  }}
                >
                  Cancelar
                </BotaoTerciario>
              </BoxBotaoTerciario>
              <BoxBotoesPriSec>
                <BotaoSecundario
                  onClick={() => {
                    setValor(valor - 1);
                  }}
                  sx={{
                    width: "25%",
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
                  sx={{ width: "25%", minWidth: "auto", height: "3rem" }}
                  variant="contained"
                  endIcon={
                    <ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />
                  }
                  onClick={() => {
                    setValor(2);
                    setSegundo(true);
                    partDoisDemanda();
                  }}
                >
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
                  onClick={() => {
                    window.location.href = "/home";
                  }}
                >
                  Cancelar
                </BotaoTerciario>
              </BoxBotaoTerciario>
              <BoxBotoesPriSec>
                <BotaoSecundario
                  onClick={() => {
                    setValor(1);
                  }}
                  sx={{
                    width: "25%",
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
                  sx={{ width: "25%", minWidth: "auto", height: "3rem" }}
                  variant="contained"
                  endIcon={
                    <ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />
                  }
                  onClick={() => criarDemanda()}
                >
                  Enviar
                </BotaoPrimario>
              </BoxBotoesPriSec>
            </BoxContainerBotoes>
          </>
        )}
      </ContainerGeral>
    </BoxConteudo>
  );
}
