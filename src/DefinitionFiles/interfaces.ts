import { processComponent, processComponentCollection ,processComponentSize, processComponentStatus } from '../DefinitionFiles/enuns'

export interface ProcessComponentInterface {
    id: number,
    titulo: string,
    score: number,
    solicitante: string,
    status: processComponentStatus,
    tamanho: processComponentSize,
    tipo: processComponent,
}

export interface ProcessComponentCollectionInterface {
    id: number,
    tipo: processComponentCollection,
    dataReuniao: Date,
    comissao: string,
    propostas: ProcessComponentInterface[]
}