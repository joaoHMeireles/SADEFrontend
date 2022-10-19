import { processComponent, processComponentSize, processComponentStatus } from '../DefinitionFiles/enuns'

export interface ProcessComponentInterface {
    id: number,
    titulo: string,
    score: number,
    solicitante: string,
    status: processComponentStatus,
    tamanho: processComponentSize,
    tipo: processComponent,
}