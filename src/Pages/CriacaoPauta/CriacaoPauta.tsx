import { useEffect, useState } from "react";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import CardProposta from "../../Components/CardProposta/CardProposta";
import Searchbar from "../../Components/Searchbar/Searchbar";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import DeleteIcon from "@mui/icons-material/Delete";
import LensRoundedIcon from "@mui/icons-material/LensRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import { BotaoPrimario, BotaoSecundario, BoxConteudo } from "../App.styles";
import { ContainerBoxTabs } from "../CriacaoProposta/CriacaoProposta.styles";
import {
  BoxBotoesPriSec,
  BoxContainerBotoes,
} from "../CriacaoDemanda/CriacaoDemanda.styles";

import {
  BoxConteudoProposta,
  BoxGeral,
  BoxIconeLink,
  BoxProposta,
  TypographyVermais,
} from "./CriacaoPauta.styles";

import {
  sessaoTI,
  StatusComponenteProcesso,
  TamanhoComponenteProcesso,
  TipoComponenteProcesso,
} from "../../constants/enuns";

export default function CriacaoPauta(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [valor, setValor] = useState(0);
  const [grid, setGrid] = useState(true);
  const [propostas, setPropostas] = useState(Array<Object>);
  const [propostasElement, setPropostasElement] = useState<any>()
  // const [excluir, setExcluir] = useState(false);


  let propostaSelecionada = JSON.parse(
    localStorage.getItem("PROPOSTASELECIONADA") as string
  );

  // useEffect(() => {}, [propostas]);

  useEffect(() => {
    for (let i = 0; i < propostas.length; i++) {
      if (propostas[i].id == propostaSelecionada[i].id) {
        const e = document.getElementById(propostaSelecionada[i].id);
        e?.classList.add("selecionado");
      }
    }
  });

  useEffect(() => {
    if(propostas == null){
      return
    }
    const elemento = propostas.map((proposta: any) => {
      return (
        <>
          <BoxGeral>
            <BoxProposta>
              <CardProposta cor="#6AACDA">
                <BoxConteudoProposta>
                  {proposta.titulo}
                  <BoxIconeLink>
                    <DeleteIcon
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      className={`${proposta.id}`}
                      onClick={() => {
                        console.log("chamou");
                        propostas.splice(proposta.id - 1, 1);
                        setPropostas(propostas);
                      }}
                    />
                    <TypographyVermais variant="body2">
                      Ver mais
                    </TypographyVermais>
                  </BoxIconeLink>
                </BoxConteudoProposta>
              </CardProposta>
            </BoxProposta>
          </BoxGeral>
        </>
      );
    });
    setPropostasElement(elemento)
  }, [ propostas])

  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    console.log(newValue);
    setValor(newValue);
  }

  const listaComponents: {}[] = [
    {
      id: 1,
      titulo: "Mudança no processo de produção de peças, melhora de segurança",
      tamanho: TamanhoComponenteProcesso.MuitoGrande,
      solicitante: "Jefferson Rodrigues",
      status: StatusComponenteProcesso.Canceled,
      tipo: TipoComponenteProcesso.Proposta,
      score: 130.82,
      departamento: "Maquinário",
      gerenteResponsavel: "Marcelo Siqueira Peixoto",
      frequenciaUso: 160,
      aprovadoGerente: true,
      beneficiosQualitativos: [
        "Vai dar isso isso of Lorem Ipsum available, but the majoritailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingy have suffered alteration in some form, by injected humour, or  randomised word benefi isso e isso de beneficios",
      ],
      centrosDeCusto: [9425, 9678],
      secaoTIResponsavel: sessaoTI.SVE,
      BUSolicitante: "Motores",
      BUsBeneficiadas: ["Tintas", "Digital"],
      prazoElaboracao: new Date(),
      codigoPPM: 67237,
      linkJira: "https://jirazadaDoCara",
      workflowIniciado: false,
      aprovadoWorkflow: false,
      beneficiosReais: [
        {
          descricao:
            "Sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered alteration in some ",
          moeda: "BRL",
          valor: 10000.0,
        },
      ],
      periodoExecucao: [new Date(), new Date()],
      responsaveis: ["Jorge Vercílio da Silva", "Emanuelle Menezes"],
      beneficiosPotenciais: [
        {
          descricao:
            "Bem detalhadinha sa mano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retorno fodsuffered alteration in som",
          moeda: "USD",
          valor: 780.0,
        },
        {
          descricao:
            "Descricaozona caraio gigantassa pqp muita coisa aaaano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retoaa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      payback: 4356.3,
      tabelasCusto: [
        {
          titulo: "Gastos infraestrutura",
          isLicenca: false,
          centrosCusto: [
            {
              centroCusto: 6135,
              porcentagem: 0.5,
            },
            {
              centroCusto: 2668,
              porcentagem: 0.5,
            },
          ],
          linhas: [
            {
              recurso: "Arquiteto de software",
              esforco: 150,
              valor: 35,
            },
            {
              recurso: "Técnicos qualificados",
              esforco: 48,
              valor: 35,
            },
          ],
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      escopo:
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
      titulo: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      tamanho: TamanhoComponenteProcesso.MuitoGrande,
      solicitante: "Jefferson Rodrigues",
      status: StatusComponenteProcesso.Canceled,
      tipo: TipoComponenteProcesso.Proposta,
      score: 130.82,
      departamento: "Maquinário",
      gerenteResponsavel: "Marcelo Siqueira Peixoto",
      frequenciaUso: 160,
      aprovadoGerente: true,
      beneficiosQualitativos: [
        "Vai dar isso isso of Lorem Ipsum available, but the majoritailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingy have suffered alteration in some form, by injected humour, or  randomised word benefi isso e isso de beneficios",
      ],
      centrosDeCusto: [9425, 9678],
      secaoTIResponsavel: sessaoTI.SVE,
      BUSolicitante: "Motores",
      BUsBeneficiadas: ["Tintas", "Digital"],
      prazoElaboracao: new Date(),
      codigoPPM: 67237,
      linkJira: "https://jirazadaDoCara",
      workflowIniciado: false,
      aprovadoWorkflow: false,
      beneficiosReais: [
        {
          descricao:
            "Sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered alteration in some ",
          moeda: "BRL",
          valor: 10000.0,
        },
      ],
      periodoExecucao: [new Date(), new Date()],
      responsaveis: ["Jorge Vercílio da Silva", "Emanuelle Menezes"],
      beneficiosPotenciais: [
        {
          descricao:
            "Bem detalhadinha sa mano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retorno fodsuffered alteration in som",
          moeda: "USD",
          valor: 780.0,
        },
        {
          descricao:
            "Descricaozona caraio gigantassa pqp muita coisa aaaano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retoaa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      payback: 4356.3,
      tabelasCusto: [
        {
          titulo: "Gastos infraestrutura",
          isLicenca: false,
          centrosCusto: [
            {
              centroCusto: 6135,
              porcentagem: 0.5,
            },
            {
              centroCusto: 2668,
              porcentagem: 0.5,
            },
          ],
          linhas: [
            {
              recurso: "Arquiteto de software",
              esforco: 150,
              valor: 35,
            },
            {
              recurso: "Técnicos qualificados",
              esforco: 48,
              valor: 35,
            },
          ],
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      escopo:
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
      id: 3,
      titulo:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      tamanho: TamanhoComponenteProcesso.MuitoGrande,
      solicitante: "Jefferson Rodrigues",
      status: StatusComponenteProcesso.Canceled,
      tipo: TipoComponenteProcesso.Proposta,
      score: 130.82,
      departamento: "Maquinário",
      gerenteResponsavel: "Marcelo Siqueira Peixoto",
      frequenciaUso: 160,
      aprovadoGerente: true,
      beneficiosQualitativos: [
        "Vai dar isso isso of Lorem Ipsum available, but the majoritailable, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingy have suffered alteration in some form, by injected humour, or  randomised word benefi isso e isso de beneficios",
      ],
      centrosDeCusto: [9425, 9678],
      secaoTIResponsavel: sessaoTI.SVE,
      BUSolicitante: "Motores",
      BUsBeneficiadas: ["Tintas", "Digital"],
      prazoElaboracao: new Date(),
      codigoPPM: 67237,
      linkJira: "https://jirazadaDoCara",
      workflowIniciado: false,
      aprovadoWorkflow: false,
      beneficiosReais: [
        {
          descricao:
            "Sa mano ty have or  ra é que é bem bom mesmo vai dar 10000000 de retorno fodsuffered alteration in some ",
          moeda: "BRL",
          valor: 10000.0,
        },
      ],
      periodoExecucao: [new Date(), new Date()],
      responsaveis: ["Jorge Vercílio da Silva", "Emanuelle Menezes"],
      beneficiosPotenciais: [
        {
          descricao:
            "Bem detalhadinha sa mano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retorno fodsuffered alteration in som",
          moeda: "USD",
          valor: 780.0,
        },
        {
          descricao:
            "Descricaozona caraio gigantassa pqp muita coisa aaaano ty have or  ra é que é bem bom mesmo vmo vai dar 10000000 de retoaa",
          moeda: "USD",
          valor: 1500.0,
        },
      ],
      payback: 4356.3,
      tabelasCusto: [
        {
          titulo: "Gastos infraestrutura",
          isLicenca: false,
          centrosCusto: [
            {
              centroCusto: 6135,
              porcentagem: 0.5,
            },
            {
              centroCusto: 2668,
              porcentagem: 0.5,
            },
          ],
          linhas: [
            {
              recurso: "Arquiteto de software",
              esforco: 150,
              valor: 35,
            },
            {
              recurso: "Técnicos qualificados",
              esforco: 48,
              valor: 35,
            },
          ],
        },
      ],
      objetivo:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      situacaoAtual:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything  embarrassing hidden in the middle of text. ",
      escopo:
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
          />

          <CardsProcesso
            listaComponents={listaComponents}
            grid={grid}
            pauta={true}
            propostas={propostas}
            setPropostas={setPropostas}
          />
          <BotaoPrimario
            sx={{
              height: "3rem",
              position: "fixed",
              left: "90%",
              top: "70%",
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
          {propostasElement}
          <BoxContainerBotoes>
            <BoxBotoesPriSec>
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
              >
                Enviar
              </BotaoPrimario>
            </BoxBotoesPriSec>
          </BoxContainerBotoes>
        </>
      )}
    </BoxConteudo>
  );
}
