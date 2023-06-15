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
    MUITOPEQUENO = "Muito Pequeno",
    PEQUENO = "Pequeno",
    MEDIO = "Médio",
    GRANDE = "Grande",
    MUITOGRANDE = "Muito Grande"
}

export enum StatusComponenteProcesso {
    BACKLOG = "Backlog",
    ASSESSMENT = "Assessment",
    BUSINESSCASE = "Business Case",
    CANCELLED = "Cancelled",
    TODO = "ToDo",
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
    CRIARDEMANDA = "Criar Demanda",
    AVALIARDEMANDA = "Avaliar Demanda",
    CLASSIFICARDEMANDA = "Classificar Demanda",
    APROVARDEMANDA = "Aprovar Demanda",
    REPROVARDEMANDA = "Reprovar Demanda",
    DEVOLVERDEMANDA = "Devolver Demanda",
    REENVIARDEMANDA = "Reenviar Demanda",
    ADICIONARINFORMACOESDEMANDA = "Adicionar Informações",
    CRIARPROPOSTA = "Criar Proposta",
    INICIARWORKFLOW = "Iniciar Workflow",
    AVALIARWORKFLOW = "Avaliar Workflow",
    APROVARWORKFLOW = "Aprovar Workflow",
    REPROVARWORKFLOW = "Reprovar Workflow",
    CRIARPAUTA = "Criar Pauta",
    INFORMARPARECERFORUM = "Informar Parecer Fórum",
    INFORMARPARECERDG = "Informar Parecer DG",
    FINALIZAR = "Finalizar histórico"
}

export enum StatusTarefaHistorico {
    EMAGUARDO = "Em Aguardo",
    EMANDAMENTO = "Em Andamento", 
    CONCLUIDO = "Concluído", 
    ATRASADO = "Atrasado",
    CONCLUIDOCOMATRASO = "Concluído com atraso"
}