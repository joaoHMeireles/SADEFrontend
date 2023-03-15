import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import CardProposta from "../../Components/CardProposta/CardProposta";
import Searchbar from "../../Components/Searchbar/Searchbar";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { MenuItem, Select, TextField } from "@mui/material";
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
  BoxBotoesPriSec,
  BoxContainerBotoes,
} from "../CriacaoDemanda/CriacaoDemanda.styles";

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
  sessaoTI,
  StatusComponenteProcesso,
  TamanhoComponenteProcesso,
  TipoComponenteProcesso,
} from "../../constants/enuns";
import api from "../../api/api";

export default function CriacaoPauta(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [valor, setValor] = useState(0);
  const [grid, setGrid] = useState(true);
  const [propostas, setPropostas] = useState<any[]>([]);
  const [listaComponents, setListaComponents] = useState<any[]>([])

  const comissao = [
    "Comissão 1",
    "Comissão 2",
    "Comissão 3",
    "Comissão 4",
    "Comissão 5",
  ];

  const [comissoes, setComissoes] = useState(Array<String>);

  useEffect(() => {
    //fazer ele ver se veio de uma página de proposta onde ele selecionou uma proposta para criar a pauta

    api.get(`/sod/proposta/pauta/${false}`).then((response) => {
      let listaPropostas: any[] = []
      for(let proposta of response.data){
        for(let atributo in proposta.demanda){
          proposta[atributo] = proposta.demanda[atributo]
        }
  
        proposta.tipo = TipoComponenteProcesso.Proposta
        listaPropostas.push(proposta)
      }
      setListaComponents(listaPropostas);
  
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

  useEffect(() => {
    console.log(propostas);
  }, [valor]);

  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    console.log(newValue);
    setValor(newValue);
  }

  function removerProposta(id: number) {
    setPropostas((propostas) => {
      return propostas.filter((proposta) => proposta.id !== id);
    });
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
            <FormControl sx={{ width: "10%" }}>
              <InputLabel>Comissão</InputLabel>
              <Select
                sx={{ width: "100%" }}
                value={comissoes}
                onChange={(e) => {
                  setComissoes(e.target.value);
                }}
                label="Comissão"
              >
                {comissao.map((comissao) => {
                  return <MenuItem value={comissao}>{comissao}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <TextField
              sx={{ marginLeft: 3 }}
              type="date"
              label="Data reunião"
              defaultValue="0000-00-00"
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </BoxInputsDataComissao>
          {propostas.map((proposta: any, index) => {
            return (
              <>
                <BoxGeral key={proposta.id}>
                  <BoxProposta>
                    <CardProposta cor="#6AACDA">
                      <BoxConteudoProposta>
                        <BoxTituloProposta>{proposta.titulo}</BoxTituloProposta>
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
                            <Link to={proposta.link}>Ver mais</Link>
                          </TypographyVermais>
                        </BoxIconeLink>
                      </BoxConteudoProposta>
                    </CardProposta>
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
            >
              Enviar
            </BotaoPrimario>
          </BoxBotoes>
        </>
      )}
    </BoxConteudo>
  );
}
