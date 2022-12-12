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
} from "./TelaCriacaoDemanda.styles";

export default function TelaCriacaoDemanda(props: { rascunho: boolean }) {
  const [segundo, setSegundo] = useState(false);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (props.rascunho) {
      const info = JSON.parse(
        localStorage.getItem("RASCUNHOESCOLHIDO") as string
      );

      for (let atributo in info) {
        if ((info as any)[atributo]) {
          const id = document.getElementById(
            getIdByAtributo(atributo)
          ) as HTMLInputElement;
          if (id) {
            if (id.id == "titulo") {
              id.value = info.titulo;
            }

            if (id.id == "objetivo") {
              id.value = info.objetivo;
            }

            if (id.id == "situacaoAtual") {
              id.value = info.situacaoAtual;
            }

            for (let i = 0; i < info.centrosDeCusto.length; i++) {
              if (id.id == "centroDeCusto") {
                id.value = info.centrosDeCusto[i];
              }
            }
          }
        }
      }
    }
  }, []);

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
    console.log(newValue);
    setValor(newValue);
    if (newValue == 2) {
      setSegundo(true);
    } else {
      setSegundo(false);
    }
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
            <InformacaoGeral />
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
                  const input = document.getElementById("centroDeCusto") as HTMLInputElement
                  console.log(input.value);
                  
                }}
              >
                Proximo
              </BotaoPrimario>
            </BoxContainerBotoes>
          </>
        )}

        {valor == 1 && (
          <>
            <BeneficiosDemanda />
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
                  sx={{
                    width: "25%",
                    minWidth: "auto",
                    height: "3rem",
                    marginRight: 3,
                  }}
                  variant="outlined"
                  startIcon={
                    <ArrowBackIosRoundedIcon
                      sx={{ width: "15px" }}
                      onClick={() => {
                        setValor(valor - 1);
                      }}
                    />
                  }
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
            <InputAnexos />
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
                  sx={{
                    width: "25%",
                    minWidth: "auto",
                    height: "3rem",
                    marginRight: 3,
                  }}
                  variant="outlined"
                  startIcon={
                    <ArrowBackIosRoundedIcon
                      sx={{ width: "15px" }}
                      onClick={() => {
                        setValor(1);
                      }}
                    />
                  }
                >
                  Voltar
                </BotaoSecundario>
                <BotaoPrimario
                  sx={{ width: "25%", minWidth: "auto", height: "3rem" }}
                  variant="contained"
                  endIcon={
                    <ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />
                  }
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
