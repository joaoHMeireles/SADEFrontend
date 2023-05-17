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

export default function Rascunho(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
  filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const [grid, setGrid] = useState(true);
  const [propostaSelecionada, setPropostaSelecionada] = useState(0);
  const [listaComponents, setListaComponents] = useState<any[]>([])
  const idUsuario = localStorage.getItem("IDUSUARIO")

  useEffect(() => {
    api.get("/sod/demanda/usuario/" + idUsuario +"/rascunho/").then((response) => {
      let listaDemandas: any[] = []
      for (let demanda of response.data) {
        demanda.tipo = TipoComponenteProcesso.Demanda
        listaDemandas.push(demanda)
      }
      setListaComponents(listaDemandas);
    }).catch((err) => {
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
            rascunho={true}
            proposta={false}
            propostaSelecionada={0}
            setPropostaSelecionada={setPropostaSelecionada}
          />
          :
          <ResultadoVazio imagem={semDemanda} legenda={"Nenhuma demanda para completar"} />
        }
      </BoxConteudo>
    </>
  );
}
