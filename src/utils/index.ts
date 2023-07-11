import { useLocation } from 'react-router-dom';
import { MouseEventHandler, useEffect, useState } from 'react';
import { StatusTarefaHistorico } from '../constants/enuns';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import FolderZipRoundedIcon from '@mui/icons-material/FolderZipRounded';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded'
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import { Botao } from '../constants/interfaces';


/**
 * Conforme o final da url escolhida, informa a que tipo de processo a tela atual se refere
 * 
 * @param location 
 * @returns 
 */
export function getNomeComponente(location: string) {
    const fragmentoTipo = location.slice(location.length - 3)

    switch (fragmentoTipo) {
        case "ata": return "ATA"
        case "nda": return "PAUTA"
        case "sal": return "PROPOSTA"
        case "and": return "DEMANDA"
    }
}

/**
 * Retorna a cor do sistema para um determinado tipo de processo
 * 
 * @param tipo 
 * @returns 
 */
export function getCorTipo(tipo: string | undefined) {
    const coresStatus = {
        Demanda: "#00579D",
        // Proposta: "#6AACDA",
        Proposta: "#9acae5",
        // Pauta: "#2382BA",
        Pauta: "#3d83bc",
        // ATA: "#28B9DA"
        ATA: "#4ebbde"
    }

    if (tipo != undefined) {
        return (coresStatus as any)[tipo]
    }
}

/**
 * Retorna a cor do sistema para um determinado status
 * 
 * @param status 
 * @returns 
 */
export function getCorStatus(status: string | undefined) {
    const coresStatus = {
        BACKLOG: "#8862A2",
        ASSESSMENT: "#ef8300",
        BUSINESSCASE: "#ffd600",
        CANCELLED: "#ff1616",
        TODO: "#00612e"
    }

    if (status != undefined) {
        return (coresStatus as any)[status]
    } else {
        return "#444"
    }
}

/**
 * Valida se a string informada é uma url válida
 * 
 * @param urlString 
 * @returns 
 */
export function urlValida(urlString: string) {
    var inputElement = document.createElement('input');
    inputElement.type = 'url';
    inputElement.value = urlString;

    if (!inputElement.checkValidity()) {
        return false;
    } else {
        return true;
    }
}

/**
 * Recebe uma palavra de uma rota e retorna o título certo para o breadcrumb daquela página
 * 
 * @param palavra
 * @return
 */
export function getNomeRota(palavra: string) {
    const nomesRotas = {
        home: "Início",
        createdemand: "Criar Demanda",
        createproposal: "Criar Proposta",
        createagenda: "Criar Pauta",
        createata: "Criar Ata",
        demand: "Demanda",
        proposal: "Proposta",
        agenda: "Pauta",
        ata: "ATA",
        mydemands: "Minhas demandas",
        notifications: "Notificações",
        profile: "Perfil",
        draft: "Rascunho",
        mydrafts: "Meus rascunhos",
        continuedemand: "Criar Demanda",
        editdemand: "Editar Demanda",
        chats: "Chats",
        chat: "Chat",
        history: "Histórico",
        alteration: "Alteração",
        userhelp: "Ajuda ao usuário"
    }

    return (nomesRotas as any)[palavra]
}

export function getIconeArquivo(nomeAnexo: string) {
    const iconesAnexos = {
        txt: ArticleRoundedIcon,
        doc: ArticleRoundedIcon,
        ocx: ArticleRoundedIcon,
        xls: BackupTableRoundedIcon,
        pdf: PictureAsPdfRoundedIcon,
        ppt: CoPresentRoundedIcon,
        png: ImageRoundedIcon,
        jpg: ImageRoundedIcon,
        peg: ImageRoundedIcon,
        avi: SlideshowRoundedIcon,
        zip: FolderZipRoundedIcon,
    }
    const tipoAnexo = nomeAnexo.slice(nomeAnexo.length - 3)
    const valor = (iconesAnexos as any)[tipoAnexo]

    return (valor != null ? valor : InsertDriveFileRoundedIcon)
}

/**
 * Função para realizar algo quando a página for trocada
 * 
 * @param action 
 */
export function useLocationChange(action: any) {
    const newLocation = useLocation()
    const [previousLocation, setPreviousLocation] = useState({
        to: newLocation,
        from: newLocation
    });

    useEffect(() => {
        setPreviousLocation((previous: any) => ({ to: newLocation, from: previous.to }))
    }, [newLocation]);

    useEffect(() => { action(previousLocation.to, previousLocation.from) }, [previousLocation])
}


export function getCorStatusHistorico(status: StatusTarefaHistorico) {
    const cores = {
        "Em Aguardo": "#444",
        "Em Andamento": "#00579d",
        "Concluído": "#00612e",
        "Atrasado": "#ff1616"
    }

    return (cores as any)[status]
}

/**
 * Função que transforma o nome de um status do banco para uma conversão mais compreensível
 *
 * @param status
 * @returns
 */
export function getNomeStatus(status: string) {
    const nomeStatus = {
        BACKLOG: "Aguardando revisão",
        ASSESSMENT: "Em planejamento",
        BUSINESSCASE: "Em planejamento demorado",
        CANCELLED: "Cancelado",
        TODO: "A fazer",
    };

    const nomeStatusEscolhido = (nomeStatus as any)[status]

    return nomeStatusEscolhido == null ? "Aguardando avaliação" : nomeStatusEscolhido;
}

export function getBeneficiosPorTipo(listaBeneficios: any[], tipoBeneficio: string) {
    return listaBeneficios.filter((beneficio: any) => beneficio.tipoBeneficio == tipoBeneficio)
}

/**
 * Serve para pegar um valor de uma chave do enumerador
 * 
 * @param enumerador 
 * @param valor 
 * @returns 
 */
export function getValueEnum(enumerador: Object, valor: any) {
    return Object.values(enumerador)[Object.keys(enumerador).indexOf(valor)]
}

/**
 * Serve para pegar a chave de um valor do enumerador
 * 
 * @param enumerador 
 * @param valor 
 * @returns 
 */
export function getKeyEnum(enumerador: Object, valor: any) {
    return Object.keys(enumerador)[Object.values(enumerador).indexOf(valor)]
}

export function baixarArquivo(anexo: any) {
    const url = window.URL.createObjectURL(new Blob([anexo.arquivo]));

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${anexo.nome}.pdf`);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function getBotoesPagina(processo: any, funcoes: MouseEventHandler<HTMLButtonElement>[], aprovadoGerente: boolean, ultimoHistorico: any) {
    const tipoPessoa = localStorage.getItem("TIPOUSUARIO")
    const idPessoa = localStorage.getItem("IDUSUARIO")
    const tipoProcesso = processo.tipo
    const statusProcesso = processo.statusDemanda
    const tamanho = processo.tamanho
    const linkJira = processo.linkJira
    const prazoElaboracao = processo.prazoElaboracao
    const estaEmWorkflow = processo.emWorkflow
    const aprovadoWorkflow = processo.aprovadoWorkflow
    const workflowDeadline = processo.prazoWorkflow
    const estaEmProposta = processo.pertenceUmaProposta
    const estaEmPauta = processo.estaEmPauta
    const temChat = processo.temChat
    let listaBotoes: Botao[] = []


    if (temChat) {
        listaBotoes.push({ nome: "chat", function: funcoes[0] })
    } else {
        if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
            listaBotoes.push({ nome: "chat", function: funcoes[11] })
        }
    }
    /**
     *  1º chat, reprovar, devolver, aprovar (Analista de TI, demanda)
        2º chat, histórico, reprovar aprovar (Gerente de negócio, demanda)
        3º chat, histórico, adicionar informações (Analista de TI, demanda)
        4º chat, histórico, criar proposta (Analista de TI, demanda)
        5º chat, histórico, criar proposta sinalização da atraso (Analista de TI, demanda)
        6º chat, histórico, iniciar workflow, ver demanda, criar pauta (Analista de TI, proposta)
        7º chat, histórico, ver demanda (Gerente de negócio, proposta)
        8º chat, histórico, workflow, ver demanda (Gerente de negócio, proposta)
        9º chat, histórico, workflow (notificaçãozinha que ta atrasado), ver demanda (Gerente de negócio, proposta)
        10º chat, histórico, workflow, ver demanda, criar pauta (Gerente de TI, proposta)
        11º chat, histórico, workflow (notificaçãozinha que ta atrasado), ver demanda, criar pauta (Gerente de TI, proposta)
     */
    if (tipoProcesso == "Demanda") {
        const aprovar = { nome: "aprovar", function: funcoes[1] }
        const reprovar = { nome: "reprovar", function: funcoes[2] }
        const historico = { nome: "historico", function: funcoes[4] }

        if (estaEmProposta && (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI")) {
            listaBotoes.push(historico)
        } else {
            if (statusProcesso == "CANCELLED" || ultimoHistorico.tarefa == "REENVIARDEMANDA" && (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI")) {
                listaBotoes.push(historico)
            } else {
                if (!tamanho) {
                    if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                        const devolver = { nome: "devolver", function: funcoes[3] }

                        listaBotoes.push(reprovar, devolver, aprovar)
                    }
                } else {
                    if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                        listaBotoes.push(historico)
                    }

                    if (tipoPessoa == "GerenteNegocio") {
                        if (!aprovadoGerente) {
                            listaBotoes.push(reprovar, aprovar)
                        }
                    } else if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                        if (aprovadoGerente) {
                            if (!linkJira) {
                                const adicionarInfo = { nome: "adicionarInfo", function: funcoes[5] }

                                listaBotoes.push(adicionarInfo)
                            } else {
                                let criarProposta: Botao = { nome: " ", function: funcoes[6] }
                                if (prazoElaboracao < new Date()) {
                                    criarProposta.nome = "criarProposta!"
                                } else {
                                    criarProposta.nome = "criarProposta"
                                }
                                listaBotoes.push(criarProposta)
                            }
                        }
                    }
                }
            }
        }
    } else {
        const historico = { nome: "historico", function: funcoes[4] }
        const verDemanda = { nome: "verDemanda", function: funcoes[8] }
        const criarPauta = { nome: "criarPauta", function: funcoes[9] }

        if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
            listaBotoes.push(historico)
        }

        if (estaEmPauta) {
            listaBotoes.push(verDemanda)
        } else {
            if (!estaEmWorkflow) {
                if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                    const iniciarWorkflow = { nome: "iniciarworkflow", function: funcoes[7] }
                    listaBotoes.push(iniciarWorkflow, verDemanda)

                    if (!estaEmPauta) {
                        listaBotoes.push(criarPauta)
                    }
                } else if (tipoPessoa == "GerenteNegocio") {
                    listaBotoes.push(verDemanda)
                }
            } else {
                if (aprovadoWorkflow) {
                    listaBotoes.push(verDemanda)
                    if (tipoPessoa == "AnalistaTI" || tipoPessoa == "GerenteTI") {
                        if (!estaEmPauta) {
                            listaBotoes.push(criarPauta)
                        }
                    }
                } else {
                    if (workflowDeadline < new Date()) {
                        if (tipoPessoa == "GerenteTI" || tipoPessoa == "GerenteNegocio") {
                            if(ultimoHistorico.usuario != null){
                                if(ultimoHistorico.usuario.idUsuario == idPessoa){
                                    const workflow = { nome: "workflow!", function: funcoes[10] }
        
                                    listaBotoes.push(workflow)

                                }
                            }
                        }
                    } else {
                        if (tipoPessoa == "GerenteTI" || tipoPessoa == "GerenteNegocio") {
                            if(ultimoHistorico.usuario != null){
                                if(ultimoHistorico.usuario.idUsuario == idPessoa){
                                    const workflow = { nome: "workflow", function: funcoes[10] }
        
                                    listaBotoes.push(workflow)
                                }
                            }
                        }
                    }
                    listaBotoes.push(verDemanda)
                }
            }
        }


    }

    return listaBotoes
}

/**
 * Função que retorna o Título formatado de acordo com o atributo de um processo 
 * que receber
 * 
 * @param nomeAtributo 
 * @returns 
 */
export function getNomeAtributo(nomeAtributo: any) {
    const nomesAtributos = {
        numero: "Número do processo:",
        status: "Status:",
        solicitante: "Solicitante:",
        departamento: "Departamento:",
        gerenteResponsavel: "Gerente responsável:",
        frequenciaDeUso: "Frequência de uso:",
        tamanho: "Tamanho:",
        sessaoTIResponsavel: "Sessão de TI Responsável:",
        BUSolicitante: "BU Solicitante:",
        prazoElaboracao: "Prazo de elaboração:",
        codigoPPM: "Código PPM:",
        centrosDeCusto: "Centros de custo:",
        beneficiosQualitativos: "Benefícios qualitativos:",
        BUsBeneficiadas: "BUs beneficiadas:",
        payback: "Payback:",
        periodoDeExecucao: "Período de execução:",
        responsaveis: "Responsáveis:",
        objetivo: "Objetivos:",
        situacaoAtual: "Situação atual:",
        escopo: "Escopo:",
        motivoDevolucao: "Motivo Devolução",
        score: "Score"
    }

    if (nomeAtributo != undefined) {
        return (nomesAtributos as any)[nomeAtributo]
    }
}


export function getTituloBotao(botao: string) {
    const nomeBotao = botao.replace("!", "")
    const titulos = {
        reprovar: "Reprovar",
        devolver: "Devolver",
        aprovar: "Aprovar",
        adicionarInfo: "Adicionar informações",
        criarProposta: "Criar proposta",
        verDemanda: "Ver demanda",
        criarPauta: "Criar pauta"
    }

    return (titulos as any)[nomeBotao]
}

export function arquivoDemandaToFile(arquivo: any) {
    return new File([arquivo.arquivo], arquivo.nome, { type: arquivo.tipo })
}

export function transformArquivosToFile(arquivos: any) {
    const listaArquivos = []
    for (let arquivo of arquivos) {
        const fileArquivo = arquivoDemandaToFile(arquivo)

        listaArquivos.push(fileArquivo)
    }

    return listaArquivos
}

export function randomKeyGenerator(num:number){
    const valor = Math.random() * num / Math.random()
    return valor
}

export function editarNumeroScore(score: number){
    if(score != null){
        return score.toFixed()
    }
    return ""
}