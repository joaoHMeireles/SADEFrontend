import { useContext, useEffect, useState } from "react";
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
  Grid,
  IconButton,
  Modal,
  Toolbar,
  Tooltip,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import { GridColDef, GridCellParams, ptBR, GridToolbarFilterButton } from "@mui/x-data-grid";
import { BoxContainer, BoxConteudo } from "../App.styles";
import { BoxHeader } from "../TelaProcesso/TelaProcesso.styles";
import {
  DataGridEstilizado,
  GridToolbarContainerEstilizado,
  GridToolbarColumnsButtonEstilizado,
  GridToolbarExportEstilizado
} from "./Historico.styles";

import "@react-pdf-viewer/core/lib/styles/index.css";

import { PDFViewer } from "@progress/kendo-react-pdf-viewer";
import { baixarArquivo } from "../../utils";

import api from "../../api/api";
import { getValueEnum } from "../../utils";
import { TextReaderContext } from "../../Components/TextReaderContext/TextReaderContext";


export default function TelaHistoricos(props: {sidebarAberta: boolean}) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [historicosDemanda, setHistoricosDemanda] = useState<any[]>([])
  const [tamanhoPagina, setTamanhoPagina] = useState(5);
  const [datagridHeight, setDatagridheight] = useState("44.5vh");
  const [mostrarPDF, setMostrarPDF] = useState(false);
  const [arquivoPDF, setArquivoPDF] = useState<any>();
  const [historicosFormatados, setHistoricosFormatados] = useState<any[]>([])
  const [tamanhoLista, setTamanhoLista] = useState(5)
  const pdf = "https://www.caceres.mt.gov.br/fotos_institucional_downloads/2.pdf";
  const location = useLocation();
  const inicioDaPalavra = location.pathname.length - 14;
  const finalDaPalavra = inicioDaPalavra + 6;
  const eUmaDemanda = location.pathname.slice(inicioDaPalavra, finalDaPalavra) == "demand";
  const informacaoProcessoCru = (localStorage.getItem(
    eUmaDemanda ? "DEMANDAESCOLHIDA" : "PROPOSTAESCOLHIDA"
  ) as string);
  const informacaoProcesso = JSON.parse(informacaoProcessoCru != null ? informacaoProcessoCru : "");
  const colunas: GridColDef[] = [
    {
      field: "tarefa",
      headerClassName: "titulo-tabela",
      headerName: "Tarefa requisitada",
      width: 155,
      renderHeader: renderHeader,
      renderCell: (params: any) => {
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
      renderHeader: renderHeader,
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
      renderHeader: renderHeader,
    },
    {
      field: "dataPrazoExecucao",
      headerClassName: "titulo-tabela",
      headerName: "Data prazo",
      width: 100,
      renderHeader: renderHeader,
    },
    {
      field: "status",
      headerClassName: "titulo-tabela",
      headerName: "Status atual",
      width: 110,
      renderHeader: renderHeader,
      renderCell: (params: any) => {

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
      renderHeader: renderHeader,
      renderCell: (params: any) => {

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
      renderHeader: renderHeader,
    },
    {
      field: "pdfHistorico",
      headerClassName: "titulo-tabela ultima",
      headerName: "PDF",
      width: 60,
      disableColumnMenu: true,
      renderHeader: renderHeader,
      renderCell: (params: any) => {
        return (
          // <Link to={"/visualizarCriacaoPDF"}>
          <>
            {params.row.pdfHistorico != null ?
              <Tooltip title="Ver pdf">
                <PictureAsPdfRoundedIcon
                  sx={{ color: "#444", "&:hover": { color: "#00579d" } }}
                />
              </Tooltip>
              :
              <div>
                -
              </div>
            }
          </>

          // </Link>
        );
      },
    },
  ];

  useEffect(() => {
    mudarTamanhoDatagrid(5);

    api.get("/sade/historicoWorkflow/demanda/" + informacaoProcesso.id).then((response) => {
      const lista: Historico[] = []

      for (let historico of response.data) {

        const objetoHistorico: Historico = {
          id: historico.idHistoricoWorkflow,
          tarefa: getValueEnum(TarefaExecucao, historico.tarefa),
          status: getValueEnum(StatusTarefaHistorico, historico.status),
          dataRecebimento: historico.recebimento != null ? new Date(historico.recebimento) : "-----------",
          prazoExecucao: historico.prazo != null ? new Date(historico.prazo) : "-----------",
          dataConclusao: historico.conclusaoTarefa != null ? new Date(historico.conclusaoTarefa) : "-----------",
          pdfHistorico: historico.arquivoHistoricoWorkflow,
          tarefaExecutada: getValueEnum(TarefaExecucao, historico.acaoFeita),
          usuario: {
            nome: historico.usuario != null ? historico.usuario.nomeUsuario : null,
            tipoPessoa: localStorage.getItem("TIPOUSUARIO"),
          }
        }
        lista.push(objetoHistorico)
      }

      setTamanhoLista(lista.length)
      setHistoricosDemanda(lista)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    const histForm = historicosDemanda.map(
      (historico: Historico, index: number) => {
        return {
          id: index,
          tarefa: historico.tarefa,
          status: historico.status,
          dataRecebimento: typeof historico.dataRecebimento === typeof "" ? historico.dataRecebimento : (historico.dataRecebimento as Date).toLocaleDateString(),
          prazoExecucaoTotal: historico.prazoExecucao,
          dataPrazoExecucao: typeof historico.prazoExecucao === typeof "" ? historico.prazoExecucao : (historico.prazoExecucao as Date).toLocaleDateString(),
          dataConclusaoTotal: historico.dataConclusao,
          dataConclusao: typeof historico.dataConclusao === typeof "" ? historico.dataConclusao : (historico.dataConclusao as Date).toLocaleDateString(),
          pdfHistorico: historico.pdfHistorico,
          tarefaExecutada: historico.tarefaExecutada == null ? "-----------" : historico.tarefaExecutada,
          nomeUsuario: historico.usuario?.nome == null ? "-----------" : historico.usuario.nome,
          cargoUsuario: historico.usuario?.tipoPessoa,
        };
      }
    );

    setHistoricosFormatados(histForm)
  }, [historicosDemanda])

  function fecharPDF() {
    setMostrarPDF(false);
  }

  function pegarClassesCelulas(cell: GridCellParams<any>) {
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
        "Concluído": "concluido",
        "Atrasado": "atrasado",
        "Concluído com Atraso": "concluido-atraso"
      };

      return (cores as any)[cell.row.status];
    }

    return "celula-grid";
  }

  function acaoCelula(cell: GridCellParams<any>) {
    if (cell.field == "pdfHistorico") {
      console.log(cell.row.pdfHistorico.arquivo);

      setArquivoPDF(cell.row.pdfHistorico.arquivo);
      setMostrarPDF(true);
    } else {
      const e = {
        target: {
          innerText: cell.formattedValue
        }
      }
      lerTexto(e)
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

  function renderHeader(info: any) {
    return <Box className="MuiDataGrid-columnHeaderTitle css-1jbbcbn-MuiDataGrid-columnHeaderTitle" onClick={lerTexto}> {info.colDef.headerName}</Box>
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
                  color: "#444",

                  "& .MuiNativeSelect-select ": {
                    "& option": {
                      backgroundColor: "white",
                      border: "none",
                      color: "#444",
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
                  color: "#444",

                  "& .MuiNativeSelect-select ": {
                    "& option": {
                      backgroundColor: "white",
                      border: "none",
                      color: "#444",
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
                  color: "#444",
                },
              },
            },

            "& .MuiDataGrid-panelWrapper": {
              backgroundColor: "white",

              "& .MuiDataGrid-panelHeader": {
                "& .MuiInputLabel-standard": {
                  color: "#444",
                },

                "& .MuiInputLabel-shrink": {
                  color: "#00579d",
                },
              },

              "& .MuiDataGrid-panelContent": {
                "& .MuiTypography-root": {
                  color: "#444",
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
                color: "#444",
              },
            },
          },
        }}
      />
      <BoxHeader sx={{ paddingTop: "22px", width: (props.sidebarAberta ? "88.35%" : "96.5%") }}>
        <Breadcrumb />
      </BoxHeader>
      <Toolbar />
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
                  getRowClassName={(cell: any) =>
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
                {arquivoPDF == null ? "" :
                  <Box sx={{
                    width: "50vw",
                    height: "80vh",
                    display: "flex",
                    justifyContent: "center"
                  }}>
                    <PDFViewer data={arquivoPDF} />
                  </Box>
                }
                <IconButton
                  onClick={() => baixarArquivo(arquivoPDF)}
                  sx={{
                    position: "fixed",
                    left: "92%",
                    top: "2%",
                    background: "#000",
                  }}
                >
                  <DownloadIcon sx={{ color: "#fff" }} />
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
                  <CloseIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
            </Modal>
          </Container>
        </BoxContainer>
      </BoxConteudo>
    </>
  );
}

function CustomGridToolbar() {
  return (
    <GridToolbarContainerEstilizado>
      <GridToolbarFilterButton
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined} />

      <GridToolbarColumnsButtonEstilizado
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined} />

      <GridToolbarExportEstilizado />
    </GridToolbarContainerEstilizado>
  );
}

interface Historico {
  id: number;
  tarefa: TarefaExecucao;
  status: StatusTarefaHistorico;
  dataRecebimento?: Date | string;
  prazoExecucao?: Date | string;
  dataConclusao?: Date | string;
  pdfHistorico?: string;
  motivoDevolucao?: string;
  tarefaExecutada?: TarefaExecucao;
  usuario?: {
    nome: string;
    tipoPessoa: string | null;
  };
}
