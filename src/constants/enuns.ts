export enum Persona {
    Solicitante = "Solicitante",
    GerenteNegocio = "Gerente de negócio",
    AnalistaTI = "Analista de TI",
    GerenteTI = "Gerente de TI"
}

export enum TipoComponenteProcesso {
    Demanda = "Demanda",
    Proposta = "Proposta"
}

export enum TipoColecaoComponenteProcesso {
    Pauta = "Pauta",
    ATA = "ATA"
}

export enum TamanhoComponenteProcesso {
    MuitoPequeno = "Muito Pequeno",
    Pequeno = "Pequeno",
    Medio = "Médio",
    Grande = "Grande",
    MuitoGrande = "Muito Grande"
}

export enum StatusComponenteProcesso {
    Backlog = "Backlog",
    Assesment = "Assesment",
    BusinessCase = "BusinessCase",
    Canceled = "Canceled",
    ToDo = "ToDo"
}

export enum sessaoTI {
    STD = "Sistemas de Tecnologias Digitais",
    AGD = "Arquitetura e Governança de Dados",
    SEG = "Segurança",
    SGI = "Suporte",
    TIN = "Tecnologias",
    AAS = "Atendimento",
    PTI = "Projetos de TI",
    SCO = "Sistemas Corporativos",
    SIM = "Sistemas de Manufatura",
    SIE = "Sistemas de Engenharia",
    SVE = "Sistemas de Vendas e E Commerce "
}

export enum TarefaExecucao {
    AVALIARDEMANDA = "Avaliar Demanda",
    CLASSIFICAR = "Classificar Demanda",
    APROVAR = "Aprovar Demanda",
    REPROVAR = "Reprovar Demanda",
    DEVOLVER = "Devolver Demanda",
    REENVIAR = "Reenviar Demanda",
    ADICIONARINFORMACOES = "Adicionar Informações",
    CRIARPROPOSTA = "Criar Proposta",
    INICIARWORKFLOW = "Iniciar Workflow",
    AVALIARWORKFLOW = "Avaliar Workflow",
    CRIARPAUTA = "Criar Pauta",
    ADICIONARPAUTA = "Adicionar a uma pauta",
    INFORMARPARECERFORUM = "Informar Parecer Fórum",
    INFORMARPARECERDG = "Informar Parecer DG"
}

export enum StatusTarefaHistorico {
    EMAGUARDO = "Em Aguardo",
    EMANDAMENTO = "Em Andamento", 
    CONCLUIDO = "Concluído", 
    ATRASADO = "Atrasado" 
}