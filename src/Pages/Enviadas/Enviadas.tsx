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
import semDemanda from "../../Assets/empty-folder.png"

export default function Enviadas(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
  filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const [grid, setGrid] = useState(true);
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
    })
  }, [])

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
        {listaComponents.length != 0 ?
          <CardsProcesso
            listaComponents={listaComponents}
            grid={grid}
            rascunho={false}
            proposta={false}
            temDemandaDevolvida={true}
            setPropostaSelecionada={setPropostaSelecionada}
          />
          :
          <ResultadoVazio imagem={semDemanda} legenda={"Nenhuma demanda sua cadastrada"} />
        }
      </BoxConteudo>
    </>
  );
}
