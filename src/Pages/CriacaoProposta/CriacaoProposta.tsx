import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import EscopoProposta from "../../Components/EscopoProposta/EscopoProposta";
import Searchbar from "../../Components/Searchbar/Searchbar";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { BoxConteudo } from "../App.styles";

import LensRoundedIcon from "@mui/icons-material/LensRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import BeneficiosDemanda from "../../Components/BeneficiosDemanda/BeneficiosDemanda";
import InformacaoGeral from "../../Components/InformacaoGeral/InformacaoGeral";
import InputAnexos from "../../Components/InputAnexos/InputAnexos";

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

export default function CriacaoProposta(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [segundo, setSegundo] = useState(false);
  const [valor, setValor] = useState(0);
  const [propostaSelecionada, setPropostaSelecionada] = useState(1);
  const [grid, setGrid] = useState(true);

  const listaComponents: {}[] = [
    {
      id: 1,
      titulo: "Primeira Demanda",
      tamanho: TamanhoComponenteProcesso.Pequeno,
      solicitante: "Carlos Drumond de Andrade",
      status: StatusComponenteProcesso.Backlog,
      tipo: TipoComponenteProcesso.Demanda,
      score: 12.5,
      departamento: "Vendas",
      gerenteResponsavel: "Miguel Gomez Lima",
      frequenciaUso: 200,
      aprovadoGerente: true,
      beneficiosQualitativos: [
        "Textin ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything dizendo como é bom randomised words which don't look even slightly believable. If you are going to u",
        "Textin ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightlysure there isn't anything dizendo como é bom",
      ],
      centrosDeCusto: [1234, 5678],
      beneficiosReais: [
        {
          descricao:
            "É que é bem bom mesmo vai dar 10000000 reais de  retorno bem massa mano",
          moeda: "BRL",
          valor: 10000.0,
        },
        {
          descricao:
            "Descricaozona gigantassa é que é bem bom mesmo vai dar 10000000 de retorno fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra pqp muita coisa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      beneficiosPotenciais: [
        {
          descricao:
            "Bem datalhadadinha é que é bem bom em massa mano ty have bem massa mano ty have suffered alteration in some form, by injected",
          moeda: "USD",
          valor: 780.0,
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      anexos: [
        {
          id: 1,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/jpeg",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
        {
          id: 2,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/png",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
      ],
    },
    {
      id: 2,
      titulo:
        "Titulozao pra ver como fica muito grande a responsividade do sistema todao com esses titulozao",
      tamanho: TamanhoComponenteProcesso.Grande,
      solicitante: "Marcos Fernandez Braga",
      status: StatusComponenteProcesso.Assesment,
      tipo: TipoComponenteProcesso.Demanda,
      score: 54.7,
      departamento: "Comércio",
      gerenteResponsavel: "Maria Gonçalves de Souza",
      frequenciaUso: 329,
      aprovadoGerente: false,
      beneficiosQualitativos: [
        "É bem bonzin bão memo bom ailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything",
        "Não in some form, by injected bem bonzin bão memo bom ailable, but é lteratio the majority have suffered a",
      ],
      centrosDeCusto: [3864, 9863],
      secaoTIResponsavel: sessaoTI.SEG,
      BUSolicitante: "Primeira",
      BUsBeneficiadas: ["Motores", "DIgital"],
      beneficiosReais: [
        {
          descricao:
            "Description é que é bem bom em massa mano ty have suffereetorno fodão bem massa mano ty have suffered alteration in some form, by injected humour, or  ra",
          moeda: "BRL",
          valor: 10000.0,
        },
        {
          descricao:
            "Descri é que é bem bom em massa mano ty have  é bem bom mesmo vai dar 10000000 de retorno fodãected humour, caozona caraio gigantassa pqp muita coisa",
          moeda: "USD",
          valor: 1500.0,
        },
        {
          descricao:
            "Manualmente ty have suffered alteratvai dar 10000000 de retorno fodão bem massa mano ty have suffered altnjected humour, or  ra",
          moeda: "USD",
          valor: 780.0,
        },
      ],
      beneficiosPotenciais: [
        {
          descricao:
            "Sabendo mano ty have suffered alteration in some form, by injected humvai dar 10000000 de retorno fod",
          moeda: "USD",
          valor: 780.0,
        },
        {
          descricao:
            "Descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa aaaaaaa aaaaaa aaa aaaaa aaaaaaaa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      pessoaDevolucao: "Alexandre de Moraes",
      motivoDevolucao:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing h",
      anexos: [
        {
          id: 1,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/jpeg",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
        {
          id: 2,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/png",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
      ],
    },
    {
      id: 3,
      titulo: "Gastos desnecessários no processo de preparação de mercadorias",
      tamanho: TamanhoComponenteProcesso.Pequeno,
      solicitante: "Leandro Polanski",
      status: StatusComponenteProcesso.Assesment,
      tipo: TipoComponenteProcesso.Demanda,
      score: 31,
      departamento: "Produção",
      gerenteResponsavel: "Marcelo Rodrigues de Bortolli",
      frequenciaUso: 160,
      aprovadoGerente: true,
      beneficiosQualitativos: [
        "vai dar isso isso isso e isso de beneficios ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word",
      ],
      centrosDeCusto: [9425, 9678],
      secaoTIResponsavel: sessaoTI.SVE,
      BUSolicitante: "Motores",
      BUsBeneficiadas: ["Digital", "Motores"],
      prazoElaboracao: new Date(),
      codigoPPM: 67237,
      linkJira: "https://jirazadaDoCara",
      beneficiosReais: [
        {
          descricao:
            "have or  ra é que é bem bom mesmo vai dar 99199111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
          moeda: "BRL",
          valor: 10000.0,
        },
      ],
      beneficiosPotenciais: [
        {
          descricao:
            "bem datalhadadinho esse benefício para aumentar o score da demanda",
          moeda: "USD",
          valor: 780.0,
        },
        {
          descricao:
            "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa ahave or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      anexos: [
        {
          id: 1,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/jpeg",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
        {
          id: 2,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/png",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
      ],
    },
    {
      id: 4,
      titulo: "Gastos desnecessários no processo de preparação de mercadorias",
      tamanho: TamanhoComponenteProcesso.Pequeno,
      solicitante: "Leandro Polanski",
      status: StatusComponenteProcesso.Assesment,
      tipo: TipoComponenteProcesso.Demanda,
      score: 31,
      departamento: "Produção",
      gerenteResponsavel: "Marcelo Rodrigues de Bortolli",
      frequenciaUso: 160,
      aprovadoGerente: true,
      beneficiosQualitativos: [
        "vai dar isso isso isso e isso de beneficios ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word",
      ],
      centrosDeCusto: [9425, 9678],
      secaoTIResponsavel: sessaoTI.SVE,
      BUSolicitante: "Motores",
      BUsBeneficiadas: ["Digital", "Motores"],
      prazoElaboracao: new Date(),
      codigoPPM: 67237,
      linkJira: "https://jirazadaDoCara",
      beneficiosReais: [
        {
          descricao:
            "have or  ra é que é bem bom mesmo vai dar 99199111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
          moeda: "BRL",
          valor: 10000.0,
        },
      ],
      beneficiosPotenciais: [
        {
          descricao:
            "bem datalhadadinho esse benefício para aumentar o score da demanda",
          moeda: "USD",
          valor: 780.0,
        },
        {
          descricao:
            "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa ahave or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      anexos: [
        {
          id: 1,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/jpeg",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
        {
          id: 2,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/png",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
      ],
    },
    {
      id: 5,
      titulo: "Gastos desnecessários no processo de preparação de mercadorias",
      tamanho: TamanhoComponenteProcesso.Pequeno,
      solicitante: "Leandro Polanski",
      status: StatusComponenteProcesso.Assesment,
      tipo: TipoComponenteProcesso.Demanda,
      score: 31,
      departamento: "Produção",
      gerenteResponsavel: "Marcelo Rodrigues de Bortolli",
      frequenciaUso: 160,
      aprovadoGerente: true,
      beneficiosQualitativos: [
        "vai dar isso isso isso e isso de beneficios ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word",
      ],
      centrosDeCusto: [9425, 9678],
      secaoTIResponsavel: sessaoTI.SVE,
      BUSolicitante: "Motores",
      BUsBeneficiadas: ["Digital", "Motores"],
      prazoElaboracao: new Date(),
      codigoPPM: 67237,
      linkJira: "https://jirazadaDoCara",
      beneficiosReais: [
        {
          descricao:
            "have or  ra é que é bem bom mesmo vai dar 99199111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
          moeda: "BRL",
          valor: 10000.0,
        },
      ],
      beneficiosPotenciais: [
        {
          descricao:
            "bem datalhadadinho esse benefício para aumentar o score da demanda",
          moeda: "USD",
          valor: 780.0,
        },
        {
          descricao:
            "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa ahave or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      anexos: [
        {
          id: 1,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/jpeg",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
        {
          id: 2,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/png",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
      ],
    },
    {
      id: 6,
      titulo: "Gastos desnecessários no processo de preparação de mercadorias",
      tamanho: TamanhoComponenteProcesso.Pequeno,
      solicitante: "Leandro Polanski",
      status: StatusComponenteProcesso.Assesment,
      tipo: TipoComponenteProcesso.Demanda,
      score: 31,
      departamento: "Produção",
      gerenteResponsavel: "Marcelo Rodrigues de Bortolli",
      frequenciaUso: 160,
      aprovadoGerente: true,
      beneficiosQualitativos: [
        "vai dar isso isso isso e isso de beneficios ariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised word",
      ],
      centrosDeCusto: [9425, 9678],
      secaoTIResponsavel: sessaoTI.SVE,
      BUSolicitante: "Motores",
      BUsBeneficiadas: ["Digital", "Motores"],
      prazoElaboracao: new Date(),
      codigoPPM: 67237,
      linkJira: "https://jirazadaDoCara",
      beneficiosReais: [
        {
          descricao:
            "have or  ra é que é bem bom mesmo vai dar 99199111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
          moeda: "BRL",
          valor: 10000.0,
        },
      ],
      beneficiosPotenciais: [
        {
          descricao:
            "bem datalhadadinho esse benefício para aumentar o score da demanda",
          moeda: "USD",
          valor: 780.0,
        },
        {
          descricao:
            "descricaozona caraio gigantassa pqp muita coisa aaaaaaaa aaa ahave or  ra é que é bem bom mesmo vai dar 99111 gigantassa pqp muita coisa aaaaaaaa aaa aaaaa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      anexos: [
        {
          id: 1,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/jpeg",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
        {
          id: 2,
          nome: "barulho que a máquina faz.mp4",
          tipo: "image/png",
          arquivo: "blasmsafuewoqwbfoy4308fubcq08b84obsdcJLBD",
          usuario: 1,
        },
      ],
    },
  ];

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
            <InformacaoGeral proposta={true}/>
            <BeneficiosDemanda rascunho={false} proposta={true} />
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
            <EscopoProposta proposta={true} />
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
