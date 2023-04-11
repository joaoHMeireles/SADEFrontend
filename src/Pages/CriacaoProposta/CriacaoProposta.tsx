import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import EscopoProposta from "../../Components/EscopoProposta/EscopoProposta";
import Searchbar from "../../Components/Searchbar/Searchbar";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import { BoxConteudo } from "../App.styles";

import LensRoundedIcon from "@mui/icons-material/LensRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import BeneficiosDemanda from "../../Components/BeneficiosDemanda/BeneficiosDemanda";
import InformacaoGeral from "../../Components/InformacaoGeral/InformacaoGeral";
import InputAnexos from "../../Components/InputAnexos/InputAnexos";
import InfomacoesAdicionais from "../../Components/InfomacoesAdicionais/InformacoesAdicionais";

import { ContainerGeral, ContainerBoxTabs } from "./CriacaoProposta.styles";

import {
  BoxContainerBotoes,
  BoxBotaoTerciario,
  BoxBotoesPriSec,
} from "../CriacaoDemanda/CriacaoDemanda.styles";

import { BotaoTerciario, BotaoPrimario, BotaoSecundario } from "../App.styles";

import {
  sessaoTI,
  StatusComponenteProcesso,
  TamanhoComponenteProcesso,
  TipoComponenteProcesso,
} from "../../constants/enuns";
import api from "../../api/api";
import { Dayjs } from "dayjs";

export default function CriacaoProposta(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [segundo, setSegundo] = useState(false);
  const [valor, setValor] = useState(0);
  const [propostaSelecionada, setPropostaSelecionada] = useState(0);
  const [grid, setGrid] = useState(true);
  const [listaComponents, setListaComponents] = useState<any[]>([])

  const [numeroBeneficiosReais, setNumeroBeneficiosReais] = useState(0)
  const [numeroBeneficiosPotenciais, setNumeroBeneficiosPotenciais] = useState(0)
  const [numeroBeneficiosQualitativos, setNumeroBeneficiosQualitativos] = useState(0)

  const [moedaReal, setMoedaReal] = useState<string[]>([])
  const [moedaPotencial, setMoedaPotencial] = useState<string[]>([])

  const [valorTamanho, setValorTamanho] = useState<string>("");
  const [valorBUSolicitante, setValorBUSolicitante] = useState<string>("");
  const [valorBUsBeneficadas, setValorBUsBeneficadas] = useState<Object[]>([]);
  const [valorSessaoTI, setValorSessaoTI] = useState<string>("");

  const [prazoElaboracao, setPrazoElaboracao] = useState<Dayjs | null>(null);

  const [valorCodigoPPM, setValorCodigoPPM] = useState<number>(0);
  const [valorLinkJira, setValorLinkJira] = useState<string>("");

  const [escopoProposta, setEscopoProposta] = useState<string>("")
  const [payback, setPayback] = useState<number>()
  const [periodoExecucaoInicio, setPeriodoExecucaoInicio] = useState<Date | null>(null)
  const [periodoExecucaoFim, setPeriodoExecucaoFim] = useState<Date | null>(null)
  const [usuariosResponsaveis, setUsuariosResponsaveis] = useState<any[]>([])

  const [centroCusto, setCentroCusto] = useState<any>();
  const [centroCustoEscolhidas, setCentroCustoEscolhidas] = useState<Object[]>([]);

  // const [centroCustoTabela, setCentroCustoTabela] = useState<string[]>([])
  // const [valorTotalTabela, setValorTotalTabela] = useState<number>(0)
  // const [esforcoTabela, setEsforcoTabela] = useState<number>(0)
  // const [tituloLinhaTabela, setTituloLinhaTabela] = useState<string>("")

  const [informacaoProcesso, setInformacaoProcesso] = useState<any>();

  useEffect(() => {
    const idDemandaCriacao = localStorage.getItem("DEMANDACRIARPROPOSTA")

    api.get(`/sod/demanda/proposta/${false}`).then((response) => {
      let listaDemandas: any[] = []

      for (let demanda of response.data) {
        demanda.tipo = TipoComponenteProcesso.Demanda
        if (demanda.idDemanda == idDemandaCriacao) {
          //fazer para os valores irem para os inputs
          // console.log("ESSA AQUI");
          // setPropostaSelecionada(demanda)
          // setValor(1)
        }

        listaDemandas.push(demanda)
      }

      setListaComponents(listaDemandas);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string)

    setInformacaoProcesso(info);
  }, [])

  useEffect(() => {
    api.get("/sod/centroCusto").then((res) => setCentroCusto(res.data))
  }, [])

  useEffect(() => {
    criarProposta()
  }, [informacaoProcesso, escopoProposta, periodoExecucaoInicio, periodoExecucaoFim, usuariosResponsaveis, payback])

  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    setValor(newValue);
    if (newValue == 2) {
      setSegundo(true);
    } else {
      setSegundo(false);
    }
  }

  function criarProposta() {
    let proposta = {
      escopo: escopoProposta,
      periodoExecucaoInicio: periodoExecucaoInicio,
      periodoExecucaoFim: periodoExecucaoFim,
      payback: payback,
      demanda: informacaoProcesso,
      responsaveisNegocio: usuariosResponsaveis,
      tabelasCustoProposta: ""
    }

    console.log(proposta);



    // {
    //   "escopo": "hum, é viável, bora ver no que da",
    //     "periodoExecucaoInicio": "2023-07-12",
    //       "periodoExecucaoFim": "2023-07-22",
    //         "demanda": {
    //     "idDemanda": 15
    //   },
    //   "responsaveisNegocio": [
    //     {
    //       "idUsuario": 3
    //     },
    //     {
    //       "idUsuario": 5
    //     }
    //   ],
    //     "tabelasCustoProposta": [
    //       {
    //         "tituloTabela": "despesas iniciais",
    //         "quantidadeTotal": 90,
    //         "valorTotal": 960,
    //         "licenca": false,
    //         "centrosCustoPagantes": [
    //           {
    //             "centroCusto": {
    //               "idCentroCusto": 3
    //             },
    //             "porcentagemDespesa": 0.4
    //           },
    //           {
    //             "centroCusto": {
    //               "idCentroCusto": 1
    //             },
    //             "porcentagemDespesa": 0.6
    //           }
    //         ],
    //         "linhasTabela": [
    //           {
    //             "nomeRecurso": "trabalho",
    //             "quantidade": 40,
    //             "valorQuantidade": 9
    //           },
    //           {
    //             "nomeRecurso": "trabalho2",
    //             "quantidade": 50,
    //             "valorQuantidade": 12
    //           }
    //         ]
    //       }
    //     ]
    // }
  }

  return (
    <BoxConteudo>
      <Breadcrumb />
      <ContainerBoxTabs>
        {valor != 0 ? (
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
          />

          <CardsProcesso
            listaComponents={listaComponents}
            grid={grid}
            proposta={true}
            propostaSelecionada={propostaSelecionada}
            setPropostaSelecionada={setPropostaSelecionada}
          />
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
      <ContainerGeral>
        {valor == 1 && (
          <>
            <InformacaoGeral proposta={true} informacaoProcesso={informacaoProcesso} setInformacaoProcesso={setInformacaoProcesso} />
            <BeneficiosDemanda rascunho={false} proposta={true}
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
              valor={valor}
              informacaoProcesso={informacaoProcesso}
              setInformacaoProcesso={setInformacaoProcesso}
            />
            <InfomacoesAdicionais
              valorTamanho={valorTamanho}
              setValorTamanho={setValorTamanho}
              valorBUSolicitante={valorBUSolicitante}
              setValorBUSolicitante={setValorBUSolicitante}
              valorBUsBeneficadas={valorBUsBeneficadas}
              setValorBUsBeneficadas={setValorBUsBeneficadas}
              prazoElaboracao={prazoElaboracao}
              setPrazoElaboracao={setPrazoElaboracao}
              valorSessaoTI={valorSessaoTI}
              setValorSessaoTI={setValorSessaoTI}
              valorCodigoPPM={valorCodigoPPM}
              setValorCodigoPPM={setValorCodigoPPM}
              valorLinkJira={valorLinkJira}
              setValorLinkJira={setValorLinkJira}
              informacaoProcesso={informacaoProcesso}
              setInformacaoProcesso={setInformacaoProcesso}
            />
            <InputAnexos rascunho={false} proposta={true} />
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
                  setValor(2);
                  setSegundo(true);
                }}
              >
                Proximo
              </BotaoPrimario>
            </BoxContainerBotoes>
          </>
        )}
        {valor == 2 && (
          <>
            <EscopoProposta proposta={true} escopoProposta={escopoProposta} setEscopoProposta={setEscopoProposta}
              payback={payback} setPayback={setPayback}
              periodoExecucaoInicio={periodoExecucaoInicio} setPeriodoExecucaoInicio={setPeriodoExecucaoInicio}
              periodoExecucaoFim={periodoExecucaoFim} setPeriodoExecucaoFim={setPeriodoExecucaoFim}
              usuariosResponsaveis={usuariosResponsaveis} setUsuariosResponsaveis={setUsuariosResponsaveis}
              centroCusto={centroCusto}
              centroCustoEscolhidas={centroCustoEscolhidas}
              setCentroCustoEscolhidas={setCentroCustoEscolhidas}
            // centroCustoTabela={centroCustoTabela} setCentroCustoTabela={setCentroCustoTabela}
            // valorTotalTabela={valorTotalTabela} setValorTotalTabela={setValorTotalTabela}
            // esforcoTabela={esforcoTabela} setEsforcoTabela={setEsforcoTabela}
            // tituloLinhaTabela={tituloLinhaTabela} setTituloLinhaTabela={setTituloLinhaTabela}
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
                  onClick={() => criarProposta}
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
