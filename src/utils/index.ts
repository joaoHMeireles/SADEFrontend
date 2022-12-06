/**
 * Conforme o final da url escolhida, informa a que tipo de processo a tela atual se refere
 * 
 * @param location 
 * @returns 
 */
export function getNomeComponente(location: string) {
    const fragmentoTipo = location.slice(location.length - 3)

    switch(fragmentoTipo){
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
        Backlog: "#DDDDDD",
        Assesment: "#595959",
        BusinessCase: "#FFD600",
        Canceled: "#FF1616",
        ToDo: "#00612e"
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
        createagenda: "Criar Agenda",
        demand: "Demanda",
        proposal: "Proposta",
        agenda: "Pauta",
        ata: "ATA",
        mydemands: "Minhas demandas",
        notifications: "Notificações",
        profile: "Perfil",
        draft: "Rascunho",
        mydrafts: "Meus rascunhos",
        chats: "Chats",
        chat: "Chat",
        history: "Histórico",
        alteration: "Alteração"
    }

    return (nomesRotas as any)[palavra]
}
