import { BoxBackground, Title, P, BoxImage } from "./Componentes.style";
import SOD from "../../Assets/SOD.png"

export const Introducao = (
    <BoxBackground>
        <Title>
            <P>INTRODUÇÃO</P>
        </Title>

        <P>A Aplicação Web SOD, é uma plataforma que permite aos colaboradores WEG criar, consultar, classificar e avaliar demandas, além de outras diversas atividades. Este manual tem como objetivo ajudar os usuários a navegar e utilizar o site de forma eficiente e eficaz.</P>
    
        <BoxImage>
            <img src={SOD} alt="Imagem SOD" />
        </BoxImage>
    </BoxBackground>
);

export const CriarDemanda = (
    <BoxBackground>
        <Title>
            <P>Criar Demanda</P>
        </Title>

        <P></P>
    </BoxBackground>
);

export const AvaliarDemandaA = (
    <BoxBackground>
        <Title>
            <P>Avaliar Demanda</P>
        </Title>

        <P></P>
    </BoxBackground>
);

export const AvaliarDemandaGN = (
    <BoxBackground>
        <Title>
            <P>Avaliar Demanda</P>
        </Title>

        <P>Avalie a demanda: Se a demanda for reprovada, explique porquê ela não pode ser atendida. Caso a demanda for aprovada, ela será devolvida para o analista.</P>
    </BoxBackground>
);

export const AdicionarInfoDemanda = (
    <BoxBackground>
        <Title>
            <P>Adicionar informações na Demanda</P>
        </Title>

        <P>Após a demanda ser aprovada pelo Gerente de Negócio, complemente a demanda com as informações de prazo de elaboração da proposta, código PPM e o link para o JIRA;</P>
    </BoxBackground>
);

export const CriarProposta = (
    <BoxBackground>
        <Title>
            <P>Criar Proposta</P>
        </Title>

        <P></P>
    </BoxBackground>
);

export const CriarPauta = (
    <BoxBackground>
        <Title>
            <P>Criar Pauta</P>
        </Title>

        <P></P>
    </BoxBackground>
);

export const InformarParecerComissao = (
    <BoxBackground>
        <Title>
            <P>Informar o parecer da Comissão</P>
        </Title>

        <P>Para informar o parecer da comissão, escolha o status da pauta, podendo ser Cancelled, Business Case, To Do ou Assessment,, escreva os comentários necessários e escolha se vai ser uma ATA publicada ou uma ATA não publicada.</P>
    </BoxBackground>
);

export const CriarATA = (
    <BoxBackground>
        <Title>
            <P>Criar ATA</P>
        </Title>

        <P>A ATA será criada automaticamente após a pauta que a sucede ser discutida na reunião com a comissão. Posteriormente, como ATA, será discutida na reunião com a Diretoria Geral.</P>
    </BoxBackground>
);

export const InformarParecerDiretoriaGeral = (
    <BoxBackground>
        <Title>
            <P>Informar o parecer da Diretoria Geral</P>
        </Title>

        <P>Para informar o parecer da comissão, escolha o status da ATA, podendo ser Cancelled, Business Case, To Do ou Assessment, informe o número da ATA da DG, anexe os arquivos sendo opcional e escreva os comentários necessários.</P>
    </BoxBackground>
);

export const IniciarWorkflow = (
    <BoxBackground>
        <Title>
            <P>Iniciar Workflow de Aprovação</P>
        </Title>

        <P>Dentro de uma proposta, aperte o botão de criar um workflow de aprovação. Quando o Workflow de Aprovação é aprovado pelos Gerentes de Negócio e de TI, a proposta automaticamente torna-se uma pauta aprovada (não passará pela reunião com a comissão).</P>
    </BoxBackground>
);

export const AvaliarWorkflow = (
    <BoxBackground>
        <Title>
            <P>Avaliar Workflow de Aprovação</P>
        </Title>

        <P>Dentro de uma proposta, quando um Workflow for iniciado pelo Analista, o ícone de Workflow para os Gerentes de Negócio e de TI vai exibir uma notificação. Clique para abrir um modal onde poderás aprovar ou reprovar.</P>
    </BoxBackground>
);