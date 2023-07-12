import { ChangeEventHandler, useEffect, useState } from "react";
import { BoxConteudo } from "../App.styles";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import Searchbar from "../../Components/Searchbar/Searchbar";
import {
  TipoComponenteProcesso,
} from "../../constants/enuns";
import api from "../../api/api";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
import semDemanda from "../../Assets/emptyFolder.png"
import { Box } from "@mui/material";

export default function Enviadas(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
  filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const [grid, setGrid] = useState(JSON.parse(localStorage.getItem("VISUALIZARCOMOGRID") as string));
  const [conteudoCarregou, setConteudoCarregou] = useState(false)
  const [temComponente, setTemComponente] = useState(true)
  const [propostaSelecionada, setPropostaSelecionada] = useState(0);
  const [listaComponents, setListaComponents] = useState<any[]>([])
  const idUsuario = localStorage.getItem("IDUSUARIO")

  useEffect(() => {
    api.get("/sade/demanda/devolvidas/usuario/" + idUsuario).then((response: any) => {

      let listaDemandas: any[] = []

      for (let demanda of response.data) {
        demanda.id = demanda.idDemanda
        demanda.tipo = TipoComponenteProcesso.Demanda

        listaDemandas.push(demanda)
      }

      setListaComponents(listaDemandas);
    }).catch((err: any) => {
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
    localStorage.setItem("VISUALIZARCOMOGRID", grid + "")
  }, [grid])

  return (
    <>
      <BoxConteudo>
        <Breadcrumb />
        <Searchbar
          setFiltrar={props.setFiltrar}
          filtrar={props.filtrar}
          grid={grid}
          setGrid={setGrid}
          filtrarResultados={props.filtrarResultados}
        />
        {!temComponente ?
          <>
            {conteudoCarregou &&
              <Box sx={{ height: "70vh", width: "100%" }}>
                <ResultadoVazio imagem={semDemanda} legenda={"Nenhuma demanda sua cadastrada"} />
              </Box>
            }
          </>
          :
          <CardsProcesso
            listaComponents={listaComponents}
            grid={grid}
            rascunho={false}
            proposta={false}
            temDemandaDevolvida={true}
            setPropostaSelecionada={setPropostaSelecionada}
            conteudoCarregou={conteudoCarregou}
          />
        }
      </BoxConteudo>
    </>
  );
}
