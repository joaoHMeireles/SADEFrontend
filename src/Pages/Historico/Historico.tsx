import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Persona, StatusTarefaHistorico, TarefaExecucao } from "../../constants/enuns";
import { BoxConteudo } from "../App.styles";

const historicosDemandas: Historico[] = [
    //demanda 1
    {
        id: 1,
        tarefa: TarefaExecucao.AVALIARDEMANDA,
        status: StatusTarefaHistorico.CONCLUIDO,
        dataRecebimento: new Date("June 13, 2022 08:13:00"),
        conclusaoTarefa: new Date("June 13, 2022 08:37:00"),
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
        conclusaoTarefa: new Date("June 13, 2022 08:32:00"),
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
        conclusaoTarefa: new Date("June 13, 2022 09:03:00"),
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
        conclusaoTarefa: new Date("June 13, 2022 14:12:00"),
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
        conclusaoTarefa: new Date("June 13, 2022 14:58:00"),
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
        conclusaoTarefa: new Date("June 13, 2022 10:11:00"),
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
        conclusaoTarefa: new Date("June 13, 2022 10:25:00"),
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
        conclusaoTarefa: new Date("June 13, 2022 16:06:00"),
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
        conclusaoTarefa: new Date("June 14, 2022 07:52:00"),
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
        conclusaoTarefa: new Date("June 23, 2022 09:29:00"),
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
        conclusaoTarefa: new Date("June 28, 2022 11:20:00"),
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
        conclusaoTarefa: new Date("July 04, 2022 08:09:00"),
        tarefaExecutada: TarefaExecucao.INFORMARPARECERFORUM,
        pdfHistorico: "BUIVvcyiv9ygVC6c4CYBUOI08bVTvnbyuivyvob",
        usuario: {
            nome: "Kaique Macedos",
            tipoPessoa: Persona.AnalistaTI
        },
        idDemanda: 4
    }
]

export default function Historico(props: {}) {
    const location = useLocation()

    console.log(location);
    

    return (
        <BoxConteudo>
            <Breadcrumb />
            
        </BoxConteudo>
    )
}

interface Historico {
    id: number,
    tarefa: TarefaExecucao,
    status: StatusTarefaHistorico,
    dataRecebimento?: Date,
    prazoExecucao?: Date,
    conclusaoTarefa?: Date,
    pdfHistorico?: string,
    motivoDevolucao?: string,
    tarefaExecutada?: TarefaExecucao,
    usuario?: {
        nome: string,
        tipoPessoa: Persona
    },
    idDemanda: number
}