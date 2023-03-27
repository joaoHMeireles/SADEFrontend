import { useEffect, useState } from "react";
import { TipoColecaoComponenteProcesso, TipoComponenteProcesso } from "../../constants/enuns";
import "./Inicio.scss";
import api from "../../api/api";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { BoxConteudo } from "../App.styles";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import { useLocation } from "react-router-dom";


/**
 * Componente da página de início
 *
 * @param props
 * @returns
 */
export default function Inicio(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [grid, setGrid] = useState(true);
  const [propostaSelecionada, setPropostaSelecionada] = useState(0);
  const [listaComponents, setListaComponents] = useState<any[]>([])
  const location = useLocation().pathname

  useEffect(() => {
    api.get("/sod/demanda").then((response) => {
      let listaDemandas: any[] = []
      for (let demanda of response.data) {
        demanda.id = demanda.idDemanda
        demanda.tipo = TipoComponenteProcesso.Demanda
        listaDemandas.push(demanda)
      }
      setListaComponents(listaDemandas);
    }).catch((err) => {
      console.log(err);
    })

    // api.get("/sod/proposta").then((response: any) => {
    //   let listaPropostas: any[] = []
    //   for(let proposta of response.data){
        
    //     for(let atributo in proposta.demanda){
    //       proposta[atributo] = proposta.demanda[atributo]
    //     }

    //     proposta.tipo = TipoComponenteProcesso.Proposta
    //     proposta.id = proposta.idProposta
    //     listaPropostas.push(proposta)
    //   }
    //   setListaComponents(listaPropostas);

    // }).catch((err: any) => {
    //   console.log(err);
    // })


    // api.get("/sod/pauta").then((response) => {
    //   let listaPautas: any[] = []
    //   for(let pauta of response.data){
    //     console.log(pauta);
    //     pauta.propostas = pauta.propostasPauta
    //     pauta.propostasPauta = null 
    //     pauta.tituloReuniao = pauta.tituloReuniaoPauta 

    //     pauta.tipo = TipoColecaoComponenteProcesso.Pauta
    //     listaPautas.push(pauta)
    //   }
    //   setListaComponents(listaPautas);

    // }).catch((err) => {
    //   console.log(err);
    // })


    // api.get("/sod/ata").then((response) => {
    //   let listaATAs: any[] = []
    //   for(let ata of response.data){
    //     // console.log(ata);


    //     ata.propostas = ata.propostasAta
    //     ata.propostasPauta = ata.pauta.propostasPauta
    //     ata.tituloReuniao = ata.tituloReuniaoATA

    //     ata.tipo = TipoColecaoComponenteProcesso.ATA
    //     listaATAs.push(ata)
    //   }
    //   setListaComponents(listaATAs);

    // }).catch((err) => {
    //   console.log(err);
    // })
  })

  // useEffect(() => {
  //   buscarComponentes()
  // }, [])

  localStorage.setItem("PAGINATUAL", "home");

  return (
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
        rascunho={false}
        proposta={false}
        pauta={false}
        propostaSelecionada={0}
        setPropostaSelecionada={setPropostaSelecionada}
      />
    </BoxConteudo>
  );
}
