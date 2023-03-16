import { TipoColecaoComponenteProcesso, TipoComponenteProcesso, StatusComponenteProcesso, TamanhoComponenteProcesso } from './enuns'

export interface InterfaceComponenteProcesso {
    id: number,
    tituloDemanda: string,
    score: number,
    usuario: any,
    statusDemanda: StatusComponenteProcesso,
    tamanho: TamanhoComponenteProcesso,
    frequenciaUso: string,
    tipo: TipoComponenteProcesso,
    link?: String,
    escolhidaCriacao?: boolean
}

export interface InterfaceColecaoComponenteProcesso {
    id: number,
    tipo: TipoColecaoComponenteProcesso,
    dataReuniao: Date,
    tituloReuniao: string,
    propostas: any[]
}