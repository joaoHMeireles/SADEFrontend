import { TipoColecaoComponenteProcesso, TipoComponenteProcesso, StatusComponenteProcesso, TamanhoComponenteProcesso } from './enuns'

export interface InterfaceComponenteProcesso {
    id: number,
    titulo: string,
    score: number,
    solicitante: string,
    status: StatusComponenteProcesso,
    tamanho: TamanhoComponenteProcesso,
    tipo: TipoComponenteProcesso,
    link?: String
}

export interface InterfaceColecaoComponenteProcesso {
    id: number,
    tipo: TipoColecaoComponenteProcesso,
    dataReuniao: Date,
    comissao: string,
    propostas: InterfaceComponenteProcesso[]
}