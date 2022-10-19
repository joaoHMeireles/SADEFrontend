import { processComponent, processComponentSize, processComponentStatus } from '../DefinitionFiles/enuns'

export interface ProcessComponentInterface {
    id: number,
    titulo: string,
    tamanho: processComponentSize,
    solicitante: string,
    status: processComponentStatus,
    tipo: processComponent,
    score: number
}