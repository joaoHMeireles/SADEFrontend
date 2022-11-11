import { ColecaoComponenteProcesso, ComponenteProcesso, StatusComponenteProcesso, TamanhoComponenteProcesso } from '../DefinitionFiles/enuns'

export interface InterfaceComponenteProcesso {
    id: number,
    titulo: string,
    score: number,
    solicitante: string,
    status: StatusComponenteProcesso,
    tamanho: TamanhoComponenteProcesso,
    tipo: ComponenteProcesso,
}

export interface InterfaceColecaoComponenteProcesso {
    id: number,
    tipo: ColecaoComponenteProcesso,
    dataReuniao: Date,
    comissao: string,
    propostas: InterfaceComponenteProcesso[]
}