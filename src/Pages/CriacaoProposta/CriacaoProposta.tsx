import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import EscopoProposta from "../../Components/EscopoProposta/EscopoProposta";
import Searchbar from "../../Components/Searchbar/Searchbar";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { ChangeEventHandler, useContext, useEffect, useState } from "react";
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
  TipoComponenteProcesso,
} from "../../constants/enuns";
import api from "../../api/api";
import { Dayjs } from "dayjs";
import { transformArquivosToFile, useLocationChange } from "../../utils";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
import semDemanda from "../../Assets/emptyFolder.png"
import { TextReaderContext } from "../../Components/TextReaderContext/TextReaderContext";
import { Alert, Snackbar } from "@mui/material";

export default function CriacaoProposta(props: {
  filtrar: boolean;
  setFiltrar: React.Dispatch<React.SetStateAction<boolean>>;
  filtrarResultados: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [segundo, setSegundo] = useState(false);
  const [valor, setValor] = useState(0);
  const [propostaSelecionada, setPropostaSelecionada] = useState(0);
  const [grid, setGrid] = useState(true);
  const [conteudoCarregou, setConteudoCarregou] = useState(false)
  const [temComponente, setTemComponente] = useState(true)
  const [feedbackAberto, setFeedbackAberto] = useState(false);
  const [mensagemDoErro, setMensagemDoErro] = useState("")
  const [listaComponents, setListaComponents] = useState<any[]>([])

  const [numeroBeneficiosReais, setNumeroBeneficiosReais] = useState(0)
  const [numeroBeneficiosPotenciais, setNumeroBeneficiosPotenciais] = useState(0)
  const [numeroBeneficiosQualitativos, setNumeroBeneficiosQualitativos] = useState(0)

  const [valorTamanho, setValorTamanho] = useState<string>("");
  const [valorBUSolicitante, setValorBUSolicitante] = useState<string>("");
  const [valorBUsBeneficadas, setValorBUsBeneficadas] = useState<Object[]>([]);
  const [valorSessaoTI, setValorSessaoTI] = useState<string>("");

  const [prazoElaboracao, setPrazoElaboracao] = useState<Dayjs | null>(null);

  const [valorCodigoPPM, setValorCodigoPPM] = useState<number>(0);
  const [valorLinkJira, setValorLinkJira] = useState<string>("");

  const [escopoProposta, setEscopoProposta] = useState<string>("")
  const [payback, setPayback] = useState<any>()
  const [periodoExecucaoInicio, setPeriodoExecucaoInicio] = useState<any>(null)
  const [periodoExecucaoFim, setPeriodoExecucaoFim] = useState<any>(null)
  const [usuariosResponsaveis, setUsuariosResponsaveis] = useState<any[]>([])

  const [centroCusto, setCentroCusto] = useState<any>();
  const [centroCustoEscolhidas, setCentroCustoEscolhidas] = useState<any[]>([]);

  const [arquivosProposta, setArquivosProposta] = useState<any>([])

  const [informacaoProcesso, setInformacaoProcesso] = useState<any>();

  useEffect(() => {
    const idDemandaCriacao = localStorage.getItem("DEMANDACRIARPROPOSTA")

    api.get(`/sade/demanda/proposta/${false}`).then((response) => {
      let listaDemandas: any[] = []

      for (let demanda of response.data) {
        demanda.tipo = TipoComponenteProcesso.Demanda
        if (demanda.idDemanda == idDemandaCriacao) {
          //fazer para os valores irem para os inputs
          setPropostaSelecionada(demanda)
          setValor(1)
        }

        listaDemandas.push(demanda)
      }

      setListaComponents(listaDemandas);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setConteudoCarregou(true)
    })
  }, [])

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string)

    setInformacaoProcesso(info);
  }, [])

  useEffect(() => {
    api.get("/sade/centroCusto").then((res) => setCentroCusto(res.data))
  }, [])

  useEffect(() => {
    if (propostaSelecionada != 0) {
      const demandaClicada = listaComponents.find(demanda => demanda.idDemanda == propostaSelecionada)

      if (demandaClicada != null) {
        setValorTamanho(demandaClicada.tamanho)
        setValorBUSolicitante(demandaClicada.busolicitante)
        setValorBUsBeneficadas(demandaClicada.busBeneficiadas)
        setPrazoElaboracao(demandaClicada.prazoElaboracao)
        setValorSessaoTI(demandaClicada.secaoTIResponsavel)
        setValorCodigoPPM(demandaClicada.codigoPPM)
        setValorLinkJira(demandaClicada.linkJira)
        setArquivosProposta(transformArquivosToFile(demandaClicada.arquivosDemanda))
      }
    }
  }, [propostaSelecionada])

  useEffect(() => {
    if (listaComponents.length != 0) {
      setTemComponente(true)
    } else {
      setTemComponente(false)
    }
  }, [listaComponents])

  useEffect(() => {
    if (mensagemDoErro != "") {
      setFeedbackAberto(true)
    }
  }, [mensagemDoErro])

  useLocationChange(() => {
    localStorage.removeItem("DEMANDACRIARPROPOSTA")
  })

  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    setValor(newValue);
    if (newValue == 2) {
      setSegundo(true);
    } else {
      setSegundo(false);
    }
  }

  function criarProposta() {
    switch(checarPreenchimento()){
      case 1: {
        setMensagemDoErro("Algum campo não foi preenchido!")
        return
      }
      case 2: {
        setMensagemDoErro("Algum campo não foi preenchido!")
        return
      }
    }

    const listaTabelasCustoProposta: any[] = []
    let listaTabelas = document.getElementsByClassName("tabelaCustoCriacao");

    for (let i = 0; i < listaTabelas.length; i++) {
      const listaLinhasTabelaCustoProposta: any[] = []
      let listaLinhasTabela = document.getElementsByClassName(`linhaTabelaCustoCriacao${i}`);
      let checkboxTabelaDeLicenca = document.getElementById(`tabelaDeLicencas${i}`) as HTMLInputElement
      let valorTotal: number = 0;
      let quantidadeTotal: number = 0;
      let linhaTabela;

      const tituloTabela = (document.getElementById(`tituloTabela${i}`) as HTMLInputElement).innerText;

      for (let j = 0; j < listaLinhasTabela.length; j++) {
        const nomeRecurso = (document.getElementById(`tituloLinha${i}-${j}`) as HTMLInputElement).value
        const quantidade = (document.getElementById(`esforco${i}-${j}`) as HTMLInputElement).value
        const valorQuantidade = (document.getElementById(`valorHora${i}-${j}`) as HTMLInputElement).value


        if (nomeRecurso && quantidade && valorQuantidade) {
          linhaTabela = {
            nomeRecurso: nomeRecurso,
            quantidade: parseInt(quantidade),
            valorQuantidade: parseInt(valorQuantidade)
          }
          valorTotal += (parseInt(valorQuantidade) * parseInt(quantidade));
          quantidadeTotal += parseInt(quantidade);
        }

        listaLinhasTabelaCustoProposta.push(linhaTabela);
      }

      let listaCentroCustoTabela: any[] = []

      for (const centroCustos of centroCustoEscolhidas) {
        for (const centroCusto of centroCustos) {

          let objetoCentroCusto: {
            centroCusto: Object,
            porcentagemDespesa: number
          }

          let centroCustoTabela: {
            idCentroCusto: number,
            nomeCentroCusto: string
          };

          if (centroCusto.tabela == i) {
            centroCustoTabela = { idCentroCusto: centroCusto.idCentroCusto, nomeCentroCusto: centroCusto.nomeCentroCusto }
            objetoCentroCusto = { centroCusto: centroCustoTabela, porcentagemDespesa: (parseFloat(centroCusto.porcentagem) / 100) }
            listaCentroCustoTabela.push(objetoCentroCusto);
          }
        }
      }

      let tabela = {
        tituloTabela: tituloTabela,
        quantidadeTotal: quantidadeTotal,
        valorTotal: valorTotal,
        licenca: checkboxTabelaDeLicenca.checked,
        centrosCustoPagantes: listaCentroCustoTabela,
        linhasTabela: listaLinhasTabelaCustoProposta
      }

      listaTabelasCustoProposta.push(tabela)
    }

    const dataExecucaoInicio = (document.getElementById("periodoExecucaoInicio") as HTMLInputElement).value
    const dataExecucaoFim = (document.getElementById("periodoExecucaoFim") as HTMLInputElement).value

    let dataExecucaoInicioCerto = dataExecucaoInicio.slice(6) + "/" + dataExecucaoInicio.slice(0, 5)
    dataExecucaoInicioCerto = dataExecucaoInicioCerto.replaceAll("/", "-")

    let dataExecucaoFimCerto = dataExecucaoFim.slice(6) + "/" + dataExecucaoFim.slice(0, 5)
    dataExecucaoFimCerto = dataExecucaoFimCerto.replaceAll("/", "-")

    const { tipo, id, ...informacaoProcessoCerto } = informacaoProcesso

    let proposta = {
      escopo: escopoProposta,
      periodoExecucaoInicio: dataExecucaoInicioCerto,
      periodoExecucaoFim: dataExecucaoFimCerto,
      payback: payback,
      demanda: informacaoProcessoCerto,
      responsaveisNegocio: usuariosResponsaveis,
      tabelasCustoProposta: listaTabelasCustoProposta
    }

    let formData = new FormData()
    let idUsuario = localStorage.getItem("IDUSUARIO");

    formData.append("proposta", JSON.stringify(proposta));

    if (arquivosProposta || arquivosProposta != undefined) {
      for (const arquivo of arquivosProposta) {
        console.log(arquivo);

        formData.append("files", arquivo);
      }
    }

    // api.post(`/sade/proposta/${idUsuario}`, formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   }
    // }).then((res) => {
    //   console.log(res);
    // })

    // window.location.href = "/home"
  }

  function checarPreenchimento(){
    if(escopoProposta == ""){
      return 1
    }

    const dataExecucaoInicio = (document.getElementById("periodoExecucaoInicio") as HTMLInputElement).value
    const dataExecucaoFim = (document.getElementById("periodoExecucaoFim") as HTMLInputElement).value

    //payback

    // informacaoProcesso

    //usuariosResponsaveis
    
    let listaTabelas = document.getElementsByClassName("tabelaCustoCriacao");
    let tabelaPreenchida = 0

    for (let i = 0; i < listaTabelas.length; i++) {
      let listaLinhasTabela = document.getElementsByClassName(`linhaTabelaCustoCriacao${i}`);

      for (let j = 0; j < listaLinhasTabela.length; j++) {
        const nomeRecurso = (document.getElementById(`tituloLinha${i}-${j}`) as HTMLInputElement).value
        const quantidade = (document.getElementById(`esforco${i}-${j}`) as HTMLInputElement).value
        const valorQuantidade = (document.getElementById(`valorHora${i}-${j}`) as HTMLInputElement).value

        if(nomeRecurso == "" || quantidade == "" || valorQuantidade == ""){
          tabelaPreenchida = 1
          break
        }
      }

      if(tabelaPreenchida != 0){
        break
      }

      if(centroCustoEscolhidas.length == 0){
        tabelaPreenchida = 1
        break
      }

      console.log(centroCustoEscolhidas);
      


      for (const centroCustos of centroCustoEscolhidas) {
        if(centroCustos != undefined){

          console.log(centroCustos);
          
          console.log("Tabela " + (i + 1));

          if(centroCustos.length == 0){
            tabelaPreenchida = 1
            break
          }


          for (const centroCusto of centroCustos) {
            console.log(centroCusto);
            
            //ver como isso funnunca
  
            // let objetoCentroCusto: {
            //   centroCusto: Object,
            //   porcentagemDespesa: number
            // }
  
            // let centroCustoTabela: {
            //   idCentroCusto: number,
            //   nomeCentroCusto: string
            // };
  
            // if (centroCusto.tabela == i) {
            //   centroCustoTabela = { idCentroCusto: centroCusto.idCentroCusto, nomeCentroCusto: centroCusto.nomeCentroCusto }
            //   objetoCentroCusto = { centroCusto: centroCustoTabela, porcentagemDespesa: (parseFloat(centroCusto.porcentagem) / 100) }
            // }
          }
        }

     
      }

      if(tabelaPreenchida != 0){
        break
      }

    }

    if(tabelaPreenchida != 0){
      return tabelaPreenchida
    }

    return 0
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
            filtrarResultados={props.filtrarResultados} />
          {!temComponente ?
            <>
              {conteudoCarregou &&
                <ResultadoVazio imagem={semDemanda} legenda={"Nenhuma demanda disponível no sistema"} />
              }
            </>
            :
            <CardsProcesso
              listaComponents={listaComponents}
              grid={grid}
              proposta={true}
              propostaSelecionada={propostaSelecionada}
              setPropostaSelecionada={setPropostaSelecionada}
              conteudoCarregou={conteudoCarregou} />
          }
          <BotaoPrimario
            sx={{
              position: "fixed",
              left: "88%",
              top: "90%",
            }}
            variant="contained"
            endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
            onClick={(e: any) => {
              lerTexto(e)
              if (propostaSelecionada == 0) {
                setMensagemDoErro("Escolha uma demanda antes de continuar")
              } else {
                setValor(1);
              }
            }}>
            Próximo
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
              valor={valor}
              informacaoProcesso={informacaoProcesso}
              setInformacaoProcesso={setInformacaoProcesso} />

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
              setInformacaoProcesso={setInformacaoProcesso} />

            <InputAnexos rascunho={false} proposta={true} arquivosProposta={arquivosProposta} setArquivosProposta={setArquivosProposta} />

            <BoxContainerBotoes>
              <BotaoTerciario
                variant="outlined"
                onClick={(e: any) => {
                  lerTexto(e)
                  window.location.href = "/home";
                }}>
                Cancelar
              </BotaoTerciario>

              <BotaoPrimario
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}
                onClick={(e: any) => {
                  lerTexto(e)
                  setValor(2);
                  setSegundo(true);
                  window.scrollTo(0,0)
                }}>
                Próximo
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
              arquivosProposta={arquivosProposta}
              setArquivosProposta={setArquivosProposta} />

            <BoxContainerBotoes>
              <BoxBotaoTerciario>
                <BotaoTerciario
                  variant="outlined"
                  onClick={(e: any) => {
                    lerTexto(e)
                    window.location.href = "/home";
                  }}>
                  Cancelar
                </BotaoTerciario>
              </BoxBotaoTerciario>

              <BoxBotoesPriSec>
                <BotaoSecundario
                  onClick={(e: any) => {
                    lerTexto(e)
                    setValor(1);
                  }}
                  sx={{
                    marginRight: 3,
                  }}
                  variant="outlined"
                  startIcon={<ArrowBackIosRoundedIcon sx={{ width: "15px" }} />}>
                  Voltar
                </BotaoSecundario>

                <BotaoPrimario
                  variant="contained"
                  endIcon={
                    <ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />
                  }
                  onClick={(e: any) => {
                    lerTexto(e)
                    criarProposta()
                  }}>
                  Enviar
                </BotaoPrimario>
              </BoxBotoesPriSec>
            </BoxContainerBotoes>
          </>
        )}

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={3000}
          open={feedbackAberto}
          onClose={() => { setFeedbackAberto(false); setMensagemDoErro("") }}>

          <Alert onClose={() => { setFeedbackAberto(false); setMensagemDoErro("") }} severity="error" sx={{ width: '100%' }}>
            {mensagemDoErro}
          </Alert>
        </Snackbar>
      </ContainerGeral>
    </BoxConteudo>
  )
}
