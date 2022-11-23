import { TipoColecaoComponenteProcesso, TipoComponenteProcesso, StatusComponenteProcesso, TamanhoComponenteProcesso } from '../DefinitionFiles/enuns'

export interface InterfaceComponenteProcesso {
    id: number,
    titulo: string,
    score: number,
    solicitante: string,
    status: StatusComponenteProcesso,
    tamanho: TamanhoComponenteProcesso,
    tipo: TipoComponenteProcesso,
}

export interface InterfaceColecaoComponenteProcesso {
    id: number,
    tipo: TipoColecaoComponenteProcesso,
    dataReuniao: Date,
    comissao: string,
    propostas: InterfaceComponenteProcesso[]
}