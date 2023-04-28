import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Toolbar from "../Components/Toolbar/Toolbar";
import Filter from "../Components/Filtro/Filtro";
import Login from "./Login/Login";
import Inicio from "./Inicio/Inicio";
import CriacaoDemanda from "./CriacaoDemanda/CriacaoDemanda";
import TelaColecaoProcesso from "./TelaColecaoProcesso/TelaColecaoProcesso";
import TelaProcesso from "./TelaProcesso/TelaProcesso";
import Notificacoes from "./Notificacoes/Notificacoes";
import Chats from "./Chats/Chats";
import Perfil from "./Perfil/Perfil"
import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MainBox } from "./App.styles";
import { MainTheme, ContentTheme } from "../Themes";
import Historico from "./Historico/Historico";
import CriacaoProposta from "./CriacaoProposta/CriacaoProposta";
import Rascunho from "./Rascunho/Rascunho";
import CriacaoPauta from "./CriacaoPauta/CriacaoPauta";
import VisualizarCriacaoPDF from "./VisualizarCriacaoPDF/VisualizarCriacaoPDF";
import Enviadas from "./Enviadas/Enviadas";
import api from "../api/api";
import { TipoColecaoComponenteProcesso, TipoComponenteProcesso } from "../constants/enuns";
import { getNomeStatus } from "../utils";
import { useLocationChange } from "../utils";
import AjudaUsuario from "./AjudaUsuario/AjudaUsuario";

import { WebSocketService } from "../api/websocketservice.jsx";


export default function App() {
  const [sidebarAberta, setSidebarAberta] = useState(false)
  const [tamanhoSideBar, setTamanhoSideBar] = useState("220")
  const [filtrar, setFiltrar] = useState(false)
  const [listaComponents, setListaComponents] = useState<any[]>([])
  const [listaFiltrada, setListaFiltrada] = useState<any[]>([]);
  const [listaDemandas, setListaDemandas] = useState<any[]>([])
  const [listaPropostas, setListaPropostas] = useState<any[]>([])
  const [listaPautas, setListaPautas] = useState<any[]>([])
  const [listaATAs, setListaATAs] = useState<any[]>([])
  const tamanhoNavbar = "8.5vh"

  useEffect(() => {
    api.get("/sod/demanda").then((response) => {
      let listaDemandas: any[] = []
      for (let demanda of response.data) {
        demanda.id = demanda.idDemanda
        demanda.tipo = TipoComponenteProcesso.Demanda
        listaDemandas.push(demanda)
      }

      setListaDemandas(listaDemandas);
    }).catch((err) => {
      console.log(err);
    })


    api.get("/sod/proposta").then((response: any) => {
      let listaPropostas: any[] = []
      for (let proposta of response.data) {

        for (let atributo in proposta.demanda) {
          proposta[atributo] = proposta.demanda[atributo]
        }

        proposta.tipo = TipoComponenteProcesso.Proposta
        proposta.id = proposta.idProposta
        listaPropostas.push(proposta)
      }

      setListaPropostas(listaPropostas);
    }).catch((err: any) => {
      console.log(err);
    })


    api.get("/sod/pauta").then((response) => {
      let listaPautas: any[] = []
      for (let pauta of response.data) {
        pauta.propostas = pauta.propostasPauta
        pauta.propostasPauta = null
        pauta.tituloReuniao = pauta.tituloReuniaoPauta

        pauta.tipo = TipoColecaoComponenteProcesso.Pauta
        listaPautas.push(pauta)
      }

      setListaPautas(listaPautas);
    }).catch((err) => {
      console.log(err);
    })

    api.get("/sod/ata").then((response) => {
      let listaATAs: any[] = []
      for (let ata of response.data) {
        ata.propostas = ata.propostasAta
        ata.propostasPauta = ata.pauta.propostasPauta
        ata.tituloReuniao = ata.tituloReuniaoATA

        ata.tipo = TipoColecaoComponenteProcesso.ATA
        listaATAs.push(ata)
      }

      setListaATAs(listaATAs);
    }).catch((err) => {
      console.log(err);
    })

    localStorage.setItem("VALORFILTROTipo", "Demanda")
  }, [])

  useEffect(() => {
    setListaComponents(listaDemandas)
    filtrarResultados()
  }, [listaDemandas])

  useEffect(() => {
    filtrarResultados()
  }, [listaComponents])

  useEffect(() => {
    if (sidebarAberta) {
      setTamanhoSideBar("220");
    } else {
      setTamanhoSideBar("65");
    }
  });

  function filtrarResultados() {
    const grupoOpcoesTipo = document.getElementById("grupo-opcoes-Tipo")
    if (grupoOpcoesTipo) {
      filtrarTipoComponente(grupoOpcoesTipo)
    }

    const inputPesquisa = document.getElementById("input-pesquisa") as HTMLInputElement
    if (inputPesquisa) {
      filtrarPelaSearchBar(inputPesquisa.value)
    }

    const tipoFiltrado = localStorage.getItem(`VALORFILTROTipo`)
    if (tipoFiltrado == "Demanda" || tipoFiltrado == "Proposta") {
      const grupoOpcoesStatus = document.getElementById("grupo-opcoes-Status")

      if (grupoOpcoesStatus) {
        filtrarStatusComponente(grupoOpcoesStatus)
      } else {
        if (grupoOpcoesTipo) {
          filtrarTipoComponente(grupoOpcoesTipo)
        }
      }
    } else {

    }

    const grupoOpcoesTamanho = document.getElementById("grupo-opcoes-Tamanho")
    if (grupoOpcoesTamanho) {
      const tamanhosLocalStorage = localStorage.getItem("VALORFILTROTamanho")
      const tamanhos = tamanhosLocalStorage ? JSON.parse(tamanhosLocalStorage) : null

      if (tamanhos) {
        filtrarTamanhoComponente(tamanhos.filter((tamanho: any) => tamanho != null))
      }
    }

    // const grupoOpcoesDepartamento = document.getElementById("grupo-opcoes-Departamento")
    // if (grupoOpcoesDepartamento) {
    //   const departamentosLocalStorage = localStorage.getItem("VALORFILTROTamanho")
    //   const departamentos = departamentosLocalStorage ? JSON.parse(departamentosLocalStorage) : null

    //   if (departamentos) {
    //     filtrarDepartamentoComponente(departamentos.filter((departamento: any) => departamento != null))
    //   }
    // }

    const inputPesquisaPPM = document.getElementById("input-pesquisa-ppm") as HTMLInputElement
    if (inputPesquisaPPM) {
      filtrarPelaSearchBarPPM(inputPesquisaPPM.value)
    }

  }

  function filtrarTipoComponente(opcoes: HTMLElement) {
    for (let opcao of opcoes.children) {
      if ((opcao.children[0].children[0] as HTMLInputElement).checked) {
        const tipo = (opcao.children[1] as HTMLElement).innerText
        if (tipo == TipoComponenteProcesso.Demanda) {
          setListaComponents(listaDemandas)
        } else if (tipo == TipoComponenteProcesso.Proposta) {
          setListaComponents(listaPropostas)
        } else if (tipo == TipoColecaoComponenteProcesso.Pauta) {
          setListaComponents(listaPautas)
        } else if (tipo == TipoColecaoComponenteProcesso.ATA) {
          setListaComponents(listaATAs)
        }
      }
    }
  }

  function filtrarPelaSearchBar(valorPesquisa: string) {
    if (valorPesquisa !== '') {
      const filteredData = listaComponents.filter((item) => {
        let listaAtributos = []

        if (item.tipo == "Demanda" || item.tipo == "Proposta") {
          listaAtributos.push(item.usuario.nomeUsuario, item.tituloDemanda)
        } else {
          listaAtributos.push(item.tituloReuniao)
        }

        return listaAtributos.join('').toLowerCase().includes(valorPesquisa.toLowerCase())
      })
      setListaFiltrada(filteredData)
    }
    else {
      setListaFiltrada(listaComponents)
    }
  }

  function filtrarStatusComponente(opcoes: HTMLElement) {
    for (let opcao of opcoes.children) {
      if ((opcao.children[0].children[0] as HTMLInputElement).checked) {
        const status = (opcao.children[1] as HTMLElement).innerText
        const novaListaComponentes = listaComponents.filter((componente: any) => getNomeStatus(componente.statusDemanda) == status)
        setListaFiltrada(novaListaComponentes)
      }
    }
  }

  function filtrarTamanhoComponente(tamanhos: string[]) {
    if (tamanhos.length > 0) {
      const mapObject: any = {
        "MUITOPEQUENO": "Muito pequeno",
        "PEQUENO": "Pequeno",
        "MEDIO": "Médio",
        "GRANDE": "Grande",
        "MUITOGRANDE": "Muito grande"
      }
      const novaListaComponentes = listaComponents.filter((componente: any) => tamanhos.indexOf(mapObject[componente.tamanho]) != -1)

      setListaFiltrada(novaListaComponentes)
    } else {
      setListaFiltrada(listaComponents)
    }
  }

  // function filtrarDepartamentoComponente(departamentos: string[]) {
  //   // if (departamentos.length > 0) {
  //     const mapObject: any = {
  //       "MUITOPEQUENO": "Muito pequeno",
  //       "PEQUENO": "Pequeno",
  //       "MEDIO": "Médio",
  //       "GRANDE": "Grande",
  //       "MUITOGRANDE": "Muito grande"
  //     }  

  //     for(let componente of listaComponents){
  //       console.log(componente.usuario.departamento);
  //     }

  //   //   const novaListaComponentes = listaComponents.filter((componente: any) => tamanhos.indexOf(mapObject[componente.tamanho]) != -1)

  //   //   setListaFiltrada(novaListaComponentes)
  //   // } else {
  //   //   setListaFiltrada(listaComponents)
  //   // }
  // }

  function filtrarPelaSearchBarPPM(valorPesquisa: string) {
    if (valorPesquisa !== '') {
      const filteredData = listaComponents.filter((item) => {
        let listaAtributos: string[] = [item.codigoPPM]

        return listaAtributos.join('').toLowerCase().includes(valorPesquisa.toLowerCase())
      })
      setListaFiltrada(filteredData)
    }
    else {
      setListaFiltrada(listaComponents)
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <WebSocketService>
        <BrowserRouter>
          <ThemeProvider theme={MainTheme}>
            <Navbar aberto={sidebarAberta} setAberto={setSidebarAberta} tamanhoNavbar={tamanhoNavbar} setFiltro={setFiltrar} />
            <Box sx={{ marginLeft: sidebarAberta ? `${tamanhoSideBar}px` : 0, display: "flex" }} >
              <Sidebar aberto={sidebarAberta} tamanho={tamanhoSideBar} setAberto={setSidebarAberta} setFiltro={setFiltrar} />
              <MainBox component="main" sx={{ marginLeft: tamanhoSideBar }}>
                <Toolbar />
                <ThemeProvider theme={ContentTheme}>
                  <Routes>
                    <Route path="/" element={<Login setAberto={setSidebarAberta} tamanhoNavbar={tamanhoNavbar} setFiltro={setFiltrar} />} />
                    <Route path="/home" element={<Inicio setFiltrar={setFiltrar} filtrar={filtrar} listaComponents={listaFiltrada} filtrarResultados={filtrarResultados} />} />
                    <Route path="/notifications" element={<Notificacoes />} />
                    <Route path="/chats" element={<Chats aberto={sidebarAberta} />}></Route>
                    <Route path="/createdemand" element={<CriacaoDemanda rascunho={false} />} />
                    <Route path="/createproposal" element={<CriacaoProposta setFiltrar={setFiltrar} filtrar={filtrar} />} />
                    <Route path="/createagenda" element={<CriacaoPauta setFiltrar={setFiltrar} filtrar={filtrar} listaComponents={listaFiltrada} filtrarResultados={filtrarResultados} />} />

                    <Route path="/home/demand" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />
                    <Route path="/mydemands/demand" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />
                    <Route path="/notifications/demand" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />
                    <Route path="/home/proposal/demand" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />
                    <Route path="/home/agenda/proposal/demand" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />
                    <Route path="/home/ata/proposal/demand" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />

                    <Route path="/mydemands" element={<Enviadas setFiltrar={setFiltrar} filtrar={filtrar} />}></Route>

                    <Route path="/mydrafts" element={<Rascunho setFiltrar={setFiltrar} filtrar={filtrar} />}></Route>
                    <Route path="/continuedemand" element={<CriacaoDemanda rascunho={true} />}></Route>

                    <Route path="/home/demand/history" element={<Historico />} />
                    <Route path="/mydemands/demand/history" element={<Historico />} />
                    <Route path="/notifications/demand/history" element={<Historico />} />
                    <Route path="/home/proposal/demand/history" element={<Historico />} />
                    <Route path="/home/agenda/proposal/demand/history" element={<Historico />} />
                    <Route path="/home/ata/proposal/demand/history" element={<Historico />} />

                    <Route path="/home/proposal/history" element={<Historico />} />
                    <Route path="/home/agenda/proposal/history" element={<Historico />} />
                    <Route path="/home/ata/proposal/history" element={<Historico />} />

                    <Route path="/home/proposal" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />
                    <Route path="/home/agenda/proposal" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />
                    <Route path="/home/ata/proposal" element={<TelaProcesso sidebarAberta={sidebarAberta} />} />

                    <Route path="/profile" element={<Perfil />} />

                    <Route path="/home/agenda" element={<TelaColecaoProcesso sidebarAberta={sidebarAberta} />} />
                    <Route path="/home/ata" element={<TelaColecaoProcesso sidebarAberta={sidebarAberta} />} />

                    <Route path="/visualizarCriacaoPDF" element={<VisualizarCriacaoPDF />} />

                    <Route path="/userhelp" element={<AjudaUsuario aberto={sidebarAberta} sidebarAberta={sidebarAberta} />} />
                  </Routes>
                </ThemeProvider>
              </MainBox>
              <Filter aberto={filtrar} setAberto={setFiltrar} setSidebar={setSidebarAberta} filtrarResultados={filtrarResultados} />
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </WebSocketService>
    </LocalizationProvider >
  );
}
