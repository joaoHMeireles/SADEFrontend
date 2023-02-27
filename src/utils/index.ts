
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { StatusTarefaHistorico } from '../constants/enuns';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import FolderZipRoundedIcon from '@mui/icons-material/FolderZipRounded';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded'
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';


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
        Proposta: "#6AACDA",
        Pauta: "#2382BA",
        ATA: "#28B9DA"
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
        BACKLOG: "#DDDDDD",
        ASSESTMENT: "#595959",
        BUSINESSCASE: "#FFD600",
        CANCELED: "#FF1616",
        TODO: "#00612e"
    }

    if (status != undefined) {
        return (coresStatus as any)[status]
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
        chats: "Chats",
        chat: "Chat",
        history: "Histórico",
        alteration: "Alteração",

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
    useEffect(() => { action(newLocation) }, [newLocation])
}

//criar função pra pegar as cores dos status dos históricos

export function getCorStatusHistorico(status: StatusTarefaHistorico) {
    const cores = {
        "Em Aguardo": "#595959",
        "Em Andamento": "#00579d",
        "Concluído": "#00612E",
        "Atrasado": "#FF1616"
    }

    return (cores as any)[status]
}

export function getBeneficiosPorTipo(listaBeneficios: any[], tipoBeneficio: string){
    return listaBeneficios.filter((beneficio: any) => beneficio.tipoBeneficio == tipoBeneficio)
}