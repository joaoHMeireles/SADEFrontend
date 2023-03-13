import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Persona,
  StatusTarefaHistorico,
  TarefaExecucao,
} from "../../constants/enuns";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ContainerProcesso from "../../Components/ContainerProcesso/ContainerProcesso";
import {
  Box,
  Container,
  GlobalStyles,
  IconButton,
  Modal,
  Toolbar,
  Tooltip,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import { GridColDef, GridCellParams, ptBR } from "@mui/x-data-grid";
import { BoxContainer, BoxConteudo } from "../App.styles";
import { BoxHeader } from "../TelaProcesso/TelaProcesso.styles";
import {
  DataGridEstilizado,
  GridToolbarContainerEstilizado,
  GridToolbarColumnsButtonEstilizado,
  GridToolbarExportEstilizado,
  GridToolbarFilterButtonEstilizado,
} from "./Historico.styles";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdfAssets from "../../Assets/2.pdf";
import api from "../../api/api";

const historicosDemandas: Historico[] = [
  //demanda 1
  {
    id: 1,
    tarefa: TarefaExecucao.AVALIARDEMANDA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 08:13:00"),
    dataConclusao: new Date("June 13, 2022 08:37:00"),
    pdfHistorico: "sacoifgdaifa9sfvqIv976V9WVQCYIDAVCUsvdcyuv",
    motivoDevolucao: "Meio fraquinha",
    tarefaExecutada: TarefaExecucao.DEVOLVER,
    usuario: {
      nome: "Rodrigo Antunes",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 1,
  },
  {
    id: 2,
    status: StatusTarefaHistorico.EMANDAMENTO,
    tarefa: TarefaExecucao.REENVIAR,
    dataRecebimento: new Date("June 13, 2022 08:37:01"),
    prazoExecucao: new Date("June 18, 2022 08:37:01"),
    usuario: {
      nome: "Fabrício Marínho",
      tipoPessoa: Persona.Solicitante,
    },
    idDemanda: 1,
  },

  //demanda 3
  {
    id: 3,
    tarefa: TarefaExecucao.AVALIARDEMANDA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 08:21:00"),
    dataConclusao: new Date("June 13, 2022 08:32:00"),
    pdfHistorico: "dsftv87V9gbsufbidsuvbFIV789vV97V9vuidvsf",
    tarefaExecutada: TarefaExecucao.APROVAR,
    usuario: {
      nome: "Marcelo Gonzaga Vieira",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 3,
  },
  {
    id: 4,
    tarefa: TarefaExecucao.CLASSIFICAR,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 08:32:01"),
    prazoExecucao: new Date("June 18, 2022 08:32:01"),
    dataConclusao: new Date("June 13, 2022 09:03:00"),
    pdfHistorico: "safasuidofhsdfb8GofdhfbOYUDFSUIFB",
    tarefaExecutada: TarefaExecucao.CLASSIFICAR,
    usuario: {
      nome: "Marcelo Gonzaga Vieira",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 3,
  },
  {
    id: 5,
    tarefa: TarefaExecucao.AVALIARDEMANDA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 09:03:01"),
    prazoExecucao: new Date("June 18, 2022 09:03:01"),
    dataConclusao: new Date("June 13, 2022 14:12:00"),
    pdfHistorico: "fdbayuiV9mpsomOADOHREobd07FESFCMçidnfuoibS",
    tarefaExecutada: TarefaExecucao.APROVAR,
    usuario: {
      nome: "Maria Gonçalves de Souza",
      tipoPessoa: Persona.GerenteNegocio,
    },
    idDemanda: 3,
  },
  {
    id: 6,
    tarefa: TarefaExecucao.ADICIONARINFORMACOES,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 14:12:01"),
    prazoExecucao: new Date("June 18, 2022 14:12:01"),
    dataConclusao: new Date("June 13, 2022 14:58:00"),
    pdfHistorico: "sacoifgdaifa9sfvqIv976V9WVQCYIDAVCUsvdcyuv",
    tarefaExecutada: TarefaExecucao.ADICIONARINFORMACOES,
    usuario: {
      nome: "Marcelo Gonzaga Vieira",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 3,
  },
  {
    id: 7,
    tarefa: TarefaExecucao.CRIARPROPOSTA,
    status: StatusTarefaHistorico.EMANDAMENTO,
    dataRecebimento: new Date("June 13, 2022 14:58:01"),
    prazoExecucao: new Date("June 20, 2022 14:58:01"),
    usuario: {
      nome: "Marcelo Gonzaga Vieira",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 3,
  },

  //proposta 4
  {
    id: 8,
    tarefa: TarefaExecucao.AVALIARDEMANDA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 09:42:00"),
    dataConclusao: new Date("June 13, 2022 10:11:00"),
    pdfHistorico: "dsftv87V9gbsufbidsuvbFIV789vV97V9vuidvsf",
    tarefaExecutada: TarefaExecucao.APROVAR,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 9,
    tarefa: TarefaExecucao.CLASSIFICAR,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 10:11:01"),
    prazoExecucao: new Date("June 18, 2022 10:11:01"),
    dataConclusao: new Date("June 13, 2022 10:25:00"),
    pdfHistorico: "safasuidofhsdfb8GofdhfbOYUDFSUIFB",
    tarefaExecutada: TarefaExecucao.CLASSIFICAR,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 10,
    tarefa: TarefaExecucao.AVALIARDEMANDA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 10:25:01"),
    prazoExecucao: new Date("June 18, 2022 10:25:00"),
    dataConclusao: new Date("June 13, 2022 16:06:00"),
    pdfHistorico: "fdbayuiV9mpsomOADOHREobd07FESFCMçidnfuoibS",
    tarefaExecutada: TarefaExecucao.APROVAR,
    usuario: {
      nome: "Marcelo Siqueira Peixoto",
      tipoPessoa: Persona.GerenteNegocio,
    },
    idDemanda: 4,
  },
  {
    id: 11,
    tarefa: TarefaExecucao.ADICIONARINFORMACOES,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 16:06:01"),
    prazoExecucao: new Date("June 13, 2022 16:06:01"),
    dataConclusao: new Date("June 14, 2022 07:52:00"),
    pdfHistorico: "sacoifgdaifa9sfvqIv976V9WVQCYIDAVCUsvdcyuv",
    tarefaExecutada: TarefaExecucao.ADICIONARINFORMACOES,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 12,
    tarefa: TarefaExecucao.CRIARPROPOSTA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 14, 2022 07:52:01"),
    prazoExecucao: new Date("June 28, 2022 07:52:01"),
    dataConclusao: new Date("June 23, 2022 09:29:00"),
    pdfHistorico: "OIM98CIDSAMNCpocmsdppomnDINdapNCSDMPSDCD",
    tarefaExecutada: TarefaExecucao.CRIARPROPOSTA,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 13,
    tarefa: TarefaExecucao.ADICIONARPAUTA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 23, 2022 09:29:01"),
    dataConclusao: new Date("June 28, 2022 11:20:00"),
    tarefaExecutada: TarefaExecucao.ADICIONARPAUTA,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 14,
    tarefa: TarefaExecucao.INFORMARPARECERFORUM,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 28, 2022 11:20:01"),
    prazoExecucao: new Date("July 03, 2022 11:20:01 "),
    dataConclusao: new Date("July 04, 2022 08:09:00"),
    tarefaExecutada: TarefaExecucao.INFORMARPARECERFORUM,
    pdfHistorico: "BUIVvcyiv9ygVC6c4CYBUOI08bVTvnbyuivyvob",
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },

  //testes
  {
    id: 15,
    tarefa: TarefaExecucao.AVALIARDEMANDA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 09:42:00"),
    dataConclusao: new Date("June 13, 2022 10:11:00"),
    pdfHistorico: "dsftv87V9gbsufbidsuvbFIV789vV97V9vuidvsf",
    tarefaExecutada: TarefaExecucao.APROVAR,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 16,
    tarefa: TarefaExecucao.CLASSIFICAR,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 10:11:01"),
    prazoExecucao: new Date("June 18, 2022 10:11:01"),
    dataConclusao: new Date("June 13, 2022 10:25:00"),
    pdfHistorico: "safasuidofhsdfb8GofdhfbOYUDFSUIFB",
    tarefaExecutada: TarefaExecucao.CLASSIFICAR,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 17,
    tarefa: TarefaExecucao.AVALIARDEMANDA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 10:25:01"),
    prazoExecucao: new Date("June 18, 2022 10:25:00"),
    dataConclusao: new Date("June 13, 2022 16:06:00"),
    pdfHistorico: "fdbayuiV9mpsomOADOHREobd07FESFCMçidnfuoibS",
    tarefaExecutada: TarefaExecucao.APROVAR,
    usuario: {
      nome: "Marcelo Siqueira Peixoto",
      tipoPessoa: Persona.GerenteNegocio,
    },
    idDemanda: 4,
  },
  {
    id: 18,
    tarefa: TarefaExecucao.ADICIONARINFORMACOES,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 13, 2022 16:06:01"),
    prazoExecucao: new Date("June 13, 2022 16:06:01"),
    dataConclusao: new Date("June 14, 2022 07:52:00"),
    pdfHistorico: "sacoifgdaifa9sfvqIv976V9WVQCYIDAVCUsvdcyuv",
    tarefaExecutada: TarefaExecucao.ADICIONARINFORMACOES,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 19,
    tarefa: TarefaExecucao.CRIARPROPOSTA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 14, 2022 07:52:01"),
    prazoExecucao: new Date("June 28, 2022 07:52:01"),
    dataConclusao: new Date("June 23, 2022 09:29:00"),
    pdfHistorico: "OIM98CIDSAMNCpocmsdppomnDINdapNCSDMPSDCD",
    tarefaExecutada: TarefaExecucao.CRIARPROPOSTA,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
  {
    id: 20,
    tarefa: TarefaExecucao.ADICIONARPAUTA,
    status: StatusTarefaHistorico.CONCLUIDO,
    dataRecebimento: new Date("June 23, 2022 09:29:01"),
    dataConclusao: new Date("June 28, 2022 11:20:00"),
    tarefaExecutada: TarefaExecucao.ADICIONARPAUTA,
    usuario: {
      nome: "Kaique Macedos",
      tipoPessoa: Persona.AnalistaTI,
    },
    idDemanda: 4,
  },
];

const colunas: GridColDef[] = [
  {
    field: "tarefa",
    headerClassName: "titulo-tabela",
    headerName: "Tarefa requisitada",
    width: 155,
    renderCell: (params: any) => {
      console.log(params);

      return (
        <Tooltip title={params.row.tarefa}>
          <span className="table-cell-trucate">{params.row.tarefa}</span>
        </Tooltip>
      );
    },
  },
  {
    field: "nomeUsuario",
    headerClassName: "titulo-tabela",
    headerName: "Usuário responsável",
    width: 165,
    renderCell: (params: any) => {
      return (
        <Tooltip
          title={params.row.nomeUsuario + ": " + params.row.cargoUsuario}
        >
          <span className="table-cell-trucate">{params.row.nomeUsuario}</span>
        </Tooltip>
      );
    },
  },
  {
    field: "dataRecebimento",
    headerClassName: "titulo-tabela",
    headerName: "Data recebida",
    width: 120,
  },
  {
    field: "dataPrazoExecucao",
    headerClassName: "titulo-tabela",
    headerName: "Data prazo",
    width: 100,
  },
  {
    field: "status",
    headerClassName: "titulo-tabela",
    headerName: "Status atual",
    width: 110,
    renderCell: (params: any) => {
      console.log(params);

      return (
        <Tooltip title={params.row.status}>
          <span className="table-cell-trucate">{params.row.status}</span>
        </Tooltip>
      );
    },
  },
  {
    field: "tarefaExecutada",
    headerClassName: "titulo-tabela",
    headerName: "Tarefa executada",
    width: 155,
    renderCell: (params: any) => {
      console.log(params);

      return (
        <Tooltip title={params.row.tarefaExecutada}>
          <span className="table-cell-trucate">
            {params.row.tarefaExecutada}
          </span>
        </Tooltip>
      );
    },
  },
  {
    field: "dataConclusao",
    headerClassName: "titulo-tabela",
    headerName: "Data conclusão",
    width: 130,
  },
  {
    field: "pdfHistorico",
    headerClassName: "titulo-tabela ultima",
    headerName: "PDF",
    width: 60,
    disableColumnMenu: true,
    renderCell: (params: any) => {
      return (
        <Link to={"/visualizarCriacaoPDF"}>
          <Tooltip title="Ver pdf">
            <PictureAsPdfRoundedIcon
              sx={{ color: "#595959", "&:hover": { color: "#00579d" } }}
            />
          </Tooltip>
        </Link>
      );
    },
  },
];

export default function Historico(props: {}) {
  const [historicosDemanda, setHistoricosDemanda] = useState<any[]>([])
  const [tamanhoPagina, setTamanhoPagina] = useState(5);
  const [datagridHeight, setDatagridheight] = useState("44.5vh");
  const [mostrarPDF, setMostrarPDF] = useState(false);
  const [arquivoPDF, setArquivoPDF] = useState("");

  const pdf =
    "https://www.caceres.mt.gov.br/fotos_institucional_downloads/2.pdf";

  const location = useLocation();
  const inicioDaPalavra = location.pathname.length - 14;
  const finalDaPalavra = inicioDaPalavra + 6;
  const eUmaDemanda =
    location.pathname.slice(inicioDaPalavra, finalDaPalavra) == "demand";

  const informacaoProcessoCru = localStorage.getItem(
    eUmaDemanda ? "DEMANDAESCOLHIDA" : "PROPOSTAESCOLHIDA"
  );

  const informacaoProcesso = JSON.parse(
    informacaoProcessoCru != null ? informacaoProcessoCru : ""
  );

  const historicos = historicosDemandas.filter(
    (historico) => historico.idDemanda == informacaoProcesso.id
  );

  const historicosFormatados = historicos.map(
    (historico: Historico, index: number) => {
      let dataPrazoExecucao: any =
        historico.prazoExecucao?.toLocaleDateString();

      if (index != historicos.length) {
        if (
          historico.prazoExecucao == null ||
          historico.prazoExecucao == undefined
        ) {
          dataPrazoExecucao = "-----------";
        }
      }

      return {
        id: index,
        tarefa: historico.tarefa,
        status: historico.status,
        dataRecebimento: historico.dataRecebimento?.toLocaleDateString(),
        prazoExecucaoTotal: historico.prazoExecucao,
        dataPrazoExecucao: dataPrazoExecucao,
        dataConclusaoTotal: historico.dataConclusao,
        dataConclusao: historico.dataConclusao?.toLocaleDateString(),
        pdfHistorico: historico.pdfHistorico,
        tarefaExecutada: historico.tarefaExecutada,
        nomeUsuario: historico.usuario?.nome,
        cargoUsuario: historico.usuario?.tipoPessoa,
      };
    }
  );
  const tamanhoLista = historicosFormatados.length;

  useEffect(() => {
    mudarTamanhoDatagrid(5);

    const demanda = JSON.parse(localStorage.getItem("DEMANDAESCOLHIDA") as string)

    api.get("/sod/historicoWorkflow/demanda/" + demanda.idDemanda).then((response) => {
      const lista: any[] = []
      
      for(let historico of response.data){
        console.log(historico);
        

        const objetoHistorico = {

        }

        lista.push(objetoHistorico)
      }

      console.log(lista);
      

      // setHistoricosDemanda(lista)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  function fecharPDF() {
    setMostrarPDF(false);
  }

  function pegarClassesCelulas(cell: GridCellParams<number>) {
    const nomeColuna = cell.field;

    if (nomeColuna === "dataConclusao" || nomeColuna === "horarioConclusao") {
      const infoHistorico = cell.row;

      if (infoHistorico.prazoExecucaoTotal < infoHistorico.dataConclusaoTotal) {
        return "atrasado";
      }
    } else if (nomeColuna === "status") {
      const cores = {
        "Em Aguardo": "em-aguardo",
        "Em Andamento": "em-andamento",
        Concluído: "concluido",
        Atrasado: "atrasado",
      };

      return (cores as any)[cell.row.status];
    }

    return "celula-grid";
  }

  function acaoCelula(cell: GridCellParams<number>) {
    if (cell.field == "pdfHistorico") {
      setArquivoPDF(pdf);
      //   setArquivoPDF(cell.row.pdfHistorico);
      // setMostrarPDF(true);
    }
  }

  function mudarTamanhoDatagrid(novotamanhoPagina: number) {
    setTamanhoPagina(novotamanhoPagina);

    if (novotamanhoPagina == 5) {
      mudarAlturaTabela(5, "44.5vh");
    } else if (novotamanhoPagina == 10) {
      mudarAlturaTabela(10, "72.5vh");
    } else if (novotamanhoPagina == 20) {
      mudarAlturaTabela(20, "128.5vh");
    }
  }

  function mudarAlturaTabela(maximo: number, tamanhoMaximo: string) {
    if (tamanhoLista < maximo) {
      const tamanhoTabela = tamanhoLista * 5.6 + 16.5;
      setDatagridheight(`${tamanhoTabela}vh`);
    } else {
      setDatagridheight(tamanhoMaximo);
    }
  }

  function handlePageChange(page: number) {
    const maximoPagina = (1 + page) * tamanhoPagina;

    if (maximoPagina > tamanhoLista) {
      const tamanhoTabela =
        (tamanhoLista - (maximoPagina - tamanhoPagina)) * 5.6 + 16.5;

      setDatagridheight(`${tamanhoTabela}vh`);
    } else {
      mudarTamanhoDatagrid(tamanhoPagina);
    }
  }

  return (
    <>
      <GlobalStyles
        styles={{
          ".MuiDataGrid-panel .MuiPaper-root": {
            borderRadius: "10px",
            maxWidth: "none",

            "& .MuiDataGrid-panelContent": {
              maxWidth: "none",
            },

            "& .MuiDataGrid-filterForm": {
              backgroundColor: "white",
              borderRadius: "10px",

              "& .MuiDataGrid-filterFormColumnInput": {
                width: "31.25%",

                "& .MuiInputBase-root": {
                  boxSizing: "border-box",
                  color: "#595959",

                  "& .MuiNativeSelect-select ": {
                    "& option": {
                      backgroundColor: "white",
                      border: "none",
                      color: "#595959",
                      fontSize: "16px",
                      padding: "3px",

                      "&:hover": {
                        backgroundColor: "#00579d",
                        color: "white",
                      },
                    },
                  },
                },
              },

              "& .MuiDataGrid-filterFormOperatorInput": {
                left: "20px",
                width: "28.57%",

                "& .MuiInputBase-root": {
                  boxSizing: "border-box",
                  color: "#595959",

                  "& .MuiNativeSelect-select ": {
                    "& option": {
                      backgroundColor: "white",
                      border: "none",
                      color: "#595959",
                      fontSize: "16px",
                      padding: "3px",

                      "&:hover": {
                        backgroundColor: "#00579d",
                        color: "white",
                      },
                    },
                  },
                },
              },

              "& .MuiDataGrid-filterFormValueInput": {
                left: "35px",
                width: "26.78%",

                "& .MuiInputBase-root": {
                  boxSizing: "border-box",
                  color: "#595959",
                },
              },
            },

            "& .MuiDataGrid-panelWrapper": {
              backgroundColor: "white",

              "& .MuiDataGrid-panelHeader": {
                "& .MuiInputLabel-standard": {
                  color: "#595959",
                },

                "& .MuiInputLabel-shrink": {
                  color: "#00579d",
                },
              },

              "& .MuiDataGrid-panelContent": {
                "& .MuiTypography-root": {
                  color: "#595959",
                },

                "& .MuiButtonBase-root": {
                  color: "#00579d",
                },
              },

              "& .MuiDataGrid-panelFooter button": {
                color: "#00579d",
              },
            },
          },

          "& .MuiDataGrid-menu .MuiPaper-root": {
            "& .MuiList-root": {
              backgroundColor: "white",

              "& li": {
                color: "#595959",
              },
            },
          },
        }}
      />
      <Header />
      <BoxConteudo>
        <BoxContainer>
          <Container>
            <ContainerProcesso informacaoProcesso={informacaoProcesso}>
              <Box sx={{ height: datagridHeight, width: "100%" }}>
                <DataGridEstilizado
                  rows={historicosFormatados}
                  columns={colunas}
                  components={{ Toolbar: CustomGridToolbar }}
                  getCellClassName={pegarClassesCelulas}
                  getRowClassName={(cell) =>
                    cell.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                  }
                  onCellClick={acaoCelula}
                  pageSize={tamanhoPagina}
                  onPageChange={handlePageChange}
                  onPageSizeChange={mudarTamanhoDatagrid}
                  rowsPerPageOptions={[5, 10, 20]}
                  pagination
                  hideFooterSelectedRowCount
                  disableSelectionOnClick
                  localeText={
                    ptBR.components.MuiDataGrid.defaultProps.localeText
                  }
                />
              </Box>
            </ContainerProcesso>
            <Modal open={mostrarPDF}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "900px",
                      width: "50%",
                    }}
                  >
                    <Viewer fileUrl={pdfAssets} />
                  </Box>
                </Worker>
                <IconButton
                  onClick={fecharPDF}
                  sx={{
                    position: "fixed",
                    left: "92%",
                    top: "2%",
                    background: "#000",
                  }}
                >
                  <DownloadIcon sx={{ color: "#FFF" }} />
                </IconButton>
                <IconButton
                  onClick={fecharPDF}
                  sx={{
                    position: "fixed",
                    left: "95%",
                    top: "2%",
                    background: "#000",
                  }}
                >
                  <CloseIcon sx={{ color: "#FFF" }} />
                </IconButton>
              </Box>
            </Modal>
          </Container>
        </BoxContainer>
      </BoxConteudo>
    </>
  );
}

function Header() {
  return (
    <>
      <BoxHeader sx={{ paddingTop: "22px" }}>
        <Breadcrumb />
      </BoxHeader>
      <Toolbar />
    </>
  );
}

function CustomGridToolbar() {
  return (
    <GridToolbarContainerEstilizado>
      <GridToolbarFilterButtonEstilizado
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      />
      <GridToolbarColumnsButtonEstilizado
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      />
      <GridToolbarExportEstilizado />
    </GridToolbarContainerEstilizado>
  );
}

interface Historico {
  id: number;
  tarefa: TarefaExecucao;
  status: StatusTarefaHistorico;
  dataRecebimento?: Date;
  prazoExecucao?: Date;
  dataConclusao?: Date;
  pdfHistorico?: string;
  motivoDevolucao?: string;
  tarefaExecutada?: TarefaExecucao;
  usuario?: {
    nome: string;
    tipoPessoa: Persona;
  };
  idDemanda: number;
}
