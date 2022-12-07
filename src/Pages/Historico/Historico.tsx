import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Persona, StatusTarefaHistorico, TarefaExecucao } from "../../Constants/enuns";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ContainerProcesso from "../../Components/ContainerProcesso/ContainerProcesso";
import { Box, Container, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarExport, GridToolbarFilterButton, GridCellParams } from '@mui/x-data-grid';
import { BoxContainer, BoxConteudo } from "../App.styles";
import { BoxHeader } from "../TelaProcesso/TelaProcesso.styles";
import {
    DataGridEstilizado, GridToolbarContainerEstilizado, GridToolbarColumnsButtonEstilizado,
    GridToolbarExportEstilizado, GridToolbarFilterButtonEstilizado
} from "./Historico.styles";

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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 1
    },
    {
        id: 2,
        status: StatusTarefaHistorico.EMANDAMENTO,
        tarefa: TarefaExecucao.REENVIAR,
        dataRecebimento: new Date("June 13, 2022 08:37:01"),
        prazoExecucao: new Date("June 18, 2022 08:37:01"),
        usuario: {
            nome: "Fabrício Marínho",
            tipoPessoa: Persona.Solicitante
        },
        idDemanda: 1
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 3
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 3
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
            tipoPessoa: Persona.GerenteNegocio
        },
        idDemanda: 3
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 3
    },
    {
        id: 7,
        tarefa: TarefaExecucao.CRIARPROPOSTA,
        status: StatusTarefaHistorico.EMANDAMENTO,
        dataRecebimento: new Date("June 13, 2022 14:58:01"),
        prazoExecucao: new Date("June 20, 2022 14:58:01"),
        usuario: {
            nome: "Marcelo Gonzaga Vieira",
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 3
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 4
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 4
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
            tipoPessoa: Persona.GerenteNegocio
        },
        idDemanda: 4
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 4
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 4
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 4
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
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 4
    }
]

const colunas: GridColDef[] = [
    { field: 'tarefa', headerClassName: "titulo-tabela", headerName: 'Tarefa requisitada', width: 160 },
    { field: 'nomeUsuario', headerClassName: "titulo-tabela", headerName: 'Usuário responsável', width: 160 },
    { field: 'dataRecebimento', headerClassName: "titulo-tabela", headerName: 'Data recebida', width: 115 },
    { field: 'horarioRecebimento', headerClassName: "titulo-tabela", headerName: 'Horário recebido', width: 130 },
    { field: 'dataPrazoExecucao', headerClassName: "titulo-tabela", headerName: 'Data prazo', width: 110 },
    { field: 'horarioPrazoExecucao', headerClassName: "titulo-tabela", headerName: 'Horário prazo', width: 110 },
    { field: 'status', headerClassName: "titulo-tabela", headerName: 'Status atual', width: 130 },
    { field: 'tarefaExecutada', headerClassName: "titulo-tabela", headerName: 'Tarefa executada', width: 180 },
    { field: 'dataConclusao', headerClassName: "titulo-tabela", headerName: 'Data conclusão', width: 120 },
    { field: 'horarioConclusao', headerClassName: "titulo-tabela", headerName: 'Horário conclusão', width: 140 },
    { field: 'pdfLabel', headerClassName: "titulo-tabela", headerName: 'PDF', width: 90 },
    { field: 'motivoDevolucao', headerClassName: "titulo-tabela", headerName: 'Motivo devolução', width: 140 }
];

export default function Historico(props: {}) {
    const [pageSize, setPageSize] = useState(5);
    const [modalAberto, setModalAberto] = useState(false)
    const [mostrarPDF, setMostrarPDF] = useState(false)
    const [arquivoPDF, setArquivoPDF] = useState()
    const [motivoDevolucao, setMotivoDevolucao] = useState("")
    const location = useLocation()
    const inicioDaPalavra = location.pathname.length - 14
    const finalDaPalavra = inicioDaPalavra + 6
    const eUmaDemanda = location.pathname.slice(inicioDaPalavra, finalDaPalavra) == "demand"

    const informacaoProcessoCru = localStorage.getItem((eUmaDemanda ? "DEMANDAESCOLHIDA" : "PROPOSTAESCOLHIDA"))
    const informacaoProcesso = JSON.parse((informacaoProcessoCru != null ? informacaoProcessoCru : ""))

    const historicos = historicosDemandas.filter(historico => historico.idDemanda == informacaoProcesso.id)
    const historicosFormatados = historicos.map((historico: Historico, index: number) => {
        let dataPrazoExecucao: any = historico.prazoExecucao?.toLocaleDateString()
        let horarioPrazoExecucao: any = historico.prazoExecucao?.toLocaleTimeString()

        if (index != historicos.length) {
            if (historico.prazoExecucao == null || historico.prazoExecucao == undefined) {
                dataPrazoExecucao = "-----------"
                horarioPrazoExecucao = "-----------"
            }
        }

        return {
            id: index,
            tarefa: historico.tarefa,
            status: historico.status,
            dataRecebimento: historico.dataRecebimento?.toLocaleDateString(),
            horarioRecebimento: historico.dataRecebimento?.toLocaleTimeString(),
            prazoExecucaoTotal: historico.prazoExecucao,
            dataPrazoExecucao: dataPrazoExecucao,
            horarioPrazoExecucao: horarioPrazoExecucao,
            dataConclusaoTotal: historico.dataConclusao,
            dataConclusao: historico.dataConclusao?.toLocaleDateString(),
            horarioConclusao: historico.dataConclusao?.toLocaleTimeString(),
            pdfLabel: "Ver pdf",
            pdfHistorico: historico.pdfHistorico,
            motivoDevolucao: historico.motivoDevolucao,
            tarefaExecutada: historico.tarefaExecutada,
            nomeUsuario: historico.usuario?.nome,
            cargoUsuario: historico.usuario?.tipoPessoa
        }
    })

    function fecharModal() {
        setModalAberto(false)
        fecharPDF()
    }

    function fecharPDF() {
        setMostrarPDF(false)
    }

    return (
        <>
            <Header />
            <BoxConteudo >
                <BoxContainer>
                    <Container>
                        <ContainerProcesso informacaoProcesso={informacaoProcesso}>
                            {/* fazer mudar o tamanho se ele mudar a quantidade que é pra mostrar por página */}
                            <Box sx={{ height: "44.4vh", width: '100%' }}>
                                <DataGridEstilizado
                                    rows={historicosFormatados}
                                    columns={colunas}

                                    components={{ Toolbar: CustomGridToolbar }}
                                    getRowClassName={(cell) =>
                                        cell.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                                    }

                                    getCellClassName={(cell: GridCellParams<number>) => {
                                        const nomeColuna = cell.field
                                        if (nomeColuna === 'dataConclusao' || nomeColuna === "horarioConclusao") {
                                            const infoHistorico = cell.row

                                            if (infoHistorico.prazoExecucaoTotal < infoHistorico.dataConclusaoTotal)

                                                return 'atrasado'
                                        } else if (nomeColuna === "status"){
                                            // return getCorStatusHistorico()
                                        }

                                            // console.log(cell.value);


                                        return '';
                                    }}

                                    onCellClick={(cell) => {
                                        if (cell.field == "pdfLabel") {
                                            setModalAberto(true)
                                            setArquivoPDF(cell.row.pdfHistorico);
                                            setMostrarPDF(true)
                                        } else if (cell.field == "motivoDevolucao") {
                                            setModalAberto(true)
                                            setMotivoDevolucao(cell.row.motivoDevolucao)
                                        }
                                    }}

                                    pageSize={pageSize}
                                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                    rowsPerPageOptions={[5, 10, 20]}
                                    pagination

                                    disableSelectionOnClick
                                />
                            </Box>
                        </ContainerProcesso>
                        <Dialog open={modalAberto} sx={{ '& .MuiPaper-root': { height: "80vh", width: "80vw" } }}>
                            {mostrarPDF ?
                                <Box>
                                    <embed src={arquivoPDF} type="application/pdf" width="100%" height="100%" />
                                    <IconButton onClick={fecharModal}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                :
                                <Box>
                                    {motivoDevolucao}
                                    <IconButton onClick={fecharModal}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                            }

                        </Dialog>
                    </Container>
                </BoxContainer>
            </BoxConteudo>
        </>
    )
}

function Header() {

    return (
        <>
            <BoxHeader sx={{ paddingTop: "22px" }}>
                <Breadcrumb />
            </BoxHeader>
            <Toolbar />
        </>
    )
}

function CustomGridToolbar() {

    return (
        <GridToolbarContainerEstilizado>
            <GridToolbarFilterButtonEstilizado nonce={undefined} onResize={undefined} onResizeCapture={undefined} />
            <GridToolbarColumnsButtonEstilizado nonce={undefined} onResize={undefined} onResizeCapture={undefined} />
            <GridToolbarExportEstilizado />
        </GridToolbarContainerEstilizado>
    )
}

interface Historico {
    id: number,
    tarefa: TarefaExecucao,
    status: StatusTarefaHistorico,
    dataRecebimento?: Date,
    prazoExecucao?: Date,
    dataConclusao?: Date,
    pdfHistorico?: string,
    motivoDevolucao?: string,
    tarefaExecutada?: TarefaExecucao,
    usuario?: {
        nome: string,
        tipoPessoa: Persona
    },
    idDemanda: number
}