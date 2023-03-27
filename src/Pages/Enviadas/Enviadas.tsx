import { useEffect, useState } from "react";
import { BoxConteudo } from "../App.styles";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import Searchbar from "../../Components/Searchbar/Searchbar";
import {
  sessaoTI,
  StatusComponenteProcesso,
  TamanhoComponenteProcesso,
  TipoComponenteProcesso,
} from "../../constants/enuns";
import api from "../../api/api";

export default function Enviadas(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [grid, setGrid] = useState(true);
  const [propostaSelecionada, setPropostaSelecionada] = useState(0);
  const [listaComponents, setListaComponents] = useState<any[]>([])

  useEffect(() => {
    api.get("/sod/demanda/rascunho/true").then((response: any) => {
      let listaDemandas: any[] = []
      for (let demanda of response.data) {
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
        />
        <CardsProcesso
          listaComponents={listaComponents}
          grid={grid}
          rascunho={true}
          proposta={false}
          propostaSelecionada={0}
          setPropostaSelecionada={setPropostaSelecionada}
        />
      </BoxConteudo>
    </>
  );
}
