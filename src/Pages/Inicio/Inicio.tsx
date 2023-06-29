import { ChangeEventHandler, useEffect, useState, useContext, SetStateAction } from "react";
import "./Inicio.scss";
import semDemanda from "../../Assets/emptyFolder.png"
import semResultado from "../../Assets/empty.png"
import Searchbar from "../../Components/Searchbar/Searchbar";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { BoxContainer, BoxConteudo } from "../App.styles";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
import { Box, Grid, Skeleton } from "@mui/material";

/**
 * Componente da página de início
 *
 * @param props
 * @returns
 */
export default function Inicio(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
  listaComponents: any[];
  filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  conteudoCarregou?: boolean;
  setConteudoCarregou?: React.Dispatch<SetStateAction<boolean>>
}) {
  const [grid, setGrid] = useState(true);
  const [propostaSelecionada, setPropostaSelecionada] = useState(0);
  const [temComponente, setTemComponente] = useState(false)
  const [imagemSemNada, setImagemSemNada] = useState("")
  const [textoSemNada, setTextoSemNada] = useState("")

  useEffect(() => {
    if (props.listaComponents.length != 0) {
      setTemComponente(true)

      if (props.setConteudoCarregou) {
        props.setConteudoCarregou(true)
      }
    } else {
      setTemComponente(false)
    }

    //para resetar os parâmetros da criação de rascunhos quando for criar demanda
    setTimeout(() => {
      localStorage.setItem("DEMANDACADASTRADA", "false")
      localStorage.removeItem("DADOSDEMANDACRIACAO")
    }, 500)
  }, [props.listaComponents, props.conteudoCarregou])

  useEffect(() => {
    if (!temComponente) {
      const inputPesquisa = document.getElementById("input-pesquisa") as HTMLInputElement
      if (inputPesquisa.value != "") {
        setImagemSemNada(semResultado)
        setTextoSemNada("Nenhuma demanda encontrada")
      } else {
        setImagemSemNada(semDemanda)
        setTextoSemNada("Nenhuma demanda cadastrada no sistema")
      }
    }
  })

  localStorage.setItem("PAGINATUAL", "home");

  return (
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
          {props.conteudoCarregou &&
            <>
              <Box sx={{ height: "70vh", width: "100%" }}>
                <ResultadoVazio imagem={imagemSemNada} legenda={textoSemNada} />
              </Box>
            </>
          }
        </>
        :
        <CardsProcesso
          listaComponents={props.listaComponents}
          grid={grid}
          rascunho={false}
          proposta={false}
          pauta={false}
          propostaSelecionada={0}
          setPropostaSelecionada={setPropostaSelecionada}
          conteudoCarregou={props.conteudoCarregou}
        />
      }
    </BoxConteudo>
  );
}
