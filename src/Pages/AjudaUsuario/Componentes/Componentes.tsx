import "./Componentes.scss";
import { BoxBackground, Title, P, BoxImage } from "./Componentes.style";
// Introdução
import SOD from "../../../Assets/AjudaUsuario/Introducao/SOD.jpg";
// Avaliar Demanda - Analista de TI
import aprovarDemanda from "../../../Assets/AjudaUsuario/AvaliarDemandaA/aprovarDemanda.png";
import avaliarDemanda from "../../../Assets/AjudaUsuario/AvaliarDemandaA/avaliarDemanda.png";
import devolverDemanda from "../../../Assets/AjudaUsuario/AvaliarDemandaA/devolverDemanda.png";

export const Introducao = (
    <BoxBackground>
        <Title>
            <p>INTRODUÇÃO</p>
        </Title>

        <P>A Aplicação Web SOD, é uma plataforma que permite aos colaboradores WEG criar, consultar, classificar e avaliar demandas, além de outras atividades. Este manual tem como objetivo ajudar os usuários a navegar e utilizar o site de forma eficiente e eficaz.</P>

        <BoxImage>
            <img id="imgSod" src={SOD} alt="Imagem SOD" />
        </BoxImage>
    </BoxBackground>
);

export const CriarDemanda = (
    <BoxBackground>
        <Title>
            <p>Criar Demanda</p>
        </Title>

        <P>Para criar uma demanda, acesse o tópico pela sidebar no ícone  e selecione a opção “Demanda”, preencha os inputs da página, que está dividida em três partes, sendo eles:</P>

        <P>
            <p>Primeira parte:</p>

            <ul>
                <li id="liAjudaUsuario"><b>Título:</b> Escreva um título que descreva claramente o problema ou necessidade. O título deve ser conciso e direto ao ponto;</li>
                <li id="liAjudaUsuario"><b>Problema a ser resolvido (situação atual):</b> Escreva uma breve explicação da situação atual, descrevendo o problema em mais detalhes. Forneça informações relevantes e quantitativas, se possível, para apoiar sua argumentação;</li>
                <li id="liAjudaUsuario"><b>Proposta / Solicitação de proposta:</b> Proponha uma solução ou solicite uma proposta para resolver o problema. Se você já tiver uma ideia de como resolver o problema, descreva-a em detalhes. Se você não tiver uma solução, solicite propostas de soluções de outras pessoas ou organizações;</li>
                <li id="liAjudaUsuario"><b>Centros de custo:</b> Identifique os centros de custo envolvidos na solução do problema. Isso pode incluir recursos financeiros, materiais ou humanos necessários para implementar a solução.</li>
            </ul>
        </P>

        <P>
            <p>Segunda parte:</p>

            <ul>
                <li id="liAjudaUsuario"><b>Benefícios Reais:</b> Preencha o valor mensal do benefício, a moeda em que ele será expresso e uma breve descrição do benefício real que será alcançado com a solução proposta. O benefício real refere-se a ganhos financeiros tangíveis que serão obtidos com a solução, como redução de custos, aumento de receita, etc;</li>
                <li id="liAjudaUsuario"><b>Benefícios Potenciais:</b> Preencha o valor mensal do benefício potencial, a moeda em que ele será expresso, uma descrição detalhada do benefício que poderá ser alcançado com a solução e indique se o benefício é uma obrigação legal. O benefício potencial refere-se a ganhos que ainda não foram realizados, mas que podem ser alcançados com a solução, como aumento de produtividade, redução de riscos, etc;</li>
                <li id="liAjudaUsuario"><b>Benefícios Qualitativos:</b> Descreva os benefícios qualitativos que a solução irá proporcionar, como melhoria da qualidade de vida dos funcionários, aumento da satisfação dos clientes, etc. Indique também a frequência de uso da solução, ou seja, com que frequência ela será utilizada para obter esses benefícios.</li>
            </ul>
        </P>

        <P>
            <p>Terceira parte:</p>

            <ul>
                <li id="liAjudaUsuario"><b>Anexos:</b> Refere-se à possibilidade de anexar arquivos que possam complementar ou apoiar as informações apresentadas nas duas primeiras partes. Esta seção é opcional e serve para incluir qualquer informação adicional que possa ajudar a avaliar e implementar a solução proposta ; Para anexar um arquivo à demanda, basta clicar no botão "Anexar arquivo" ou arrastar o arquivo até a dropzone.</li>
            </ul>
        </P>
    </BoxBackground>
);

export const AvaliarDemandaA = (
    <BoxBackground>
        <Title>
            <p>Avaliar Demanda</p>
        </Title>

        <P>Avalie a demanda: Você pode reprovar, devolver ou aprovar uma demanda.</P>
        
        <BoxImage>
            <img id="imgs" src={avaliarDemanda} alt="Avaliar Demanda" />
        </BoxImage>

        <P>Caso a ela seja devolvida, explique claramente o motivo. Isso permite que o solicitante entenda os pontos que precisam ser melhorados ou esclarecidos, para que possa refazer a demanda e entregá-la novamente. O objetivo é garantir que a demanda possa ser atendida com sucesso e dentro dos parâmetros estabelecidos.</P>

        <BoxImage>
            <img id="imgs" src={devolverDemanda} alt="Devolver Demanda" />
        </BoxImage>
        
        <P>Se a demanda for aprovada, classifique a demanda por tamanho, informe a BU solicitante, a(s) BU(s) beneficiada(s) e a sessão de TI responsável pela demanda.</P>

        <BoxImage>
            <img id="imgs" src={aprovarDemanda} alt="Aprovar Demanda" />
        </BoxImage>

        <P sx={{ color: "#fff" }}>Espaço</P>
    </BoxBackground>
);

export const AvaliarDemandaGN = (
    <BoxBackground>
        <Title>
            <p>Avaliar Demanda</p>
        </Title>

        <P>Avalie a demanda: Se a demanda for reprovada, explique porquê ela não pode ser atendida. Caso a demanda for aprovada, ela será devolvida para o analista.</P>
    </BoxBackground>
);

export const AdicionarInfoDemanda = (
    <BoxBackground>
        <Title>
            <p>Adicionar informações na Demanda</p>
        </Title>

        <P>Após a demanda ser aprovada pelo Gerente de Negócio, complemente a demanda com as informações de prazo de elaboração da proposta, código PPM e o link para o JIRA;</P>
    </BoxBackground>
);

export const CriarProposta = (
    <BoxBackground>
        <Title>
            <p>Criar Proposta</p>
        </Title>

        <P>Para criar uma proposta, acesse o tópico pela sidebar no ícone  e selecione a opção “Proposta”. Escolha a demanda que quer transformar em proposta podendo editar seus atributos. Posteriormente, adicione os novos atributos, sendo eles o escopo, linhas da tabela de custo, payback, o período de execução e as informações do responsável, o nome e a área que trabalha. Por fim, sendo opcional, os anexos para a proposta.</P>
    </BoxBackground>
);

export const CriarPauta = (
    <BoxBackground>
        <Title>
            <p>Criar Pauta</p>
        </Title>

        <P>Para criar uma pauta, acesse o tópico pela sidebar no ícone  e selecione a opção “pauta”. Na próxima tela, selecione uma ou mais propostas a serem incluídas na pauta. Para isso, procure pelas propostas disponíveis na lista e clique naquelas que deseja adicionar, podendo excluí-las posteriormente.</P>
        <P>Após a seleção das propostas, escolher a comissão que participará da reunião. Para isso, deve-se clicar na opção "Comissão" e selecionar a comissão desejada;</P>
        <P>Por fim, escolha a data da reunião. Para isso, clique na opção "Data" e selecione a data desejada no calendário.</P>
    </BoxBackground>
);

export const InformarParecerComissao = (
    <BoxBackground>
        <Title>
            <p>Informar o parecer da Comissão</p>
        </Title>

        <P>Para informar o parecer da comissão, escolha o status da pauta, podendo ser Cancelled, Business Case, To Do ou Assessment,, escreva os comentários necessários e escolha se vai ser uma ATA publicada ou uma ATA não publicada.</P>
    </BoxBackground>
);

export const CriarATA = (
    <BoxBackground>
        <Title>
            <p>Criar ATA</p>
        </Title>

        <P>A ATA será criada automaticamente após a pauta que a sucede ser discutida na reunião com a comissão. Posteriormente, como ATA, será discutida na reunião com a Diretoria Geral.</P>
    </BoxBackground>
);

export const InformarParecerDiretoriaGeral = (
    <BoxBackground>
        <Title>
            <p>Informar o parecer da Diretoria Geral</p>
        </Title>

        <P>Para informar o parecer da comissão, escolha o status da ATA, podendo ser Cancelled, Business Case, To Do ou Assessment, informe o número da ATA da DG, anexe os arquivos sendo opcional e escreva os comentários necessários.</P>
    </BoxBackground>
);

export const IniciarWorkflow = (
    <BoxBackground>
        <Title>
            <p>Iniciar Workflow de Aprovação</p>
        </Title>

        <P>Dentro de uma proposta, aperte o botão de criar um workflow de aprovação. Quando o Workflow de Aprovação é aprovado pelos Gerentes de Negócio e de TI, a proposta automaticamente torna-se uma pauta aprovada (não passará pela reunião com a comissão).</P>
    </BoxBackground>
);

export const AvaliarWorkflow = (
    <BoxBackground>
        <Title>
            <p>Avaliar Workflow de Aprovação</p>
        </Title>

        <P>Dentro de uma proposta, quando um Workflow for iniciado pelo Analista, o ícone de Workflow para os Gerentes de Negócio e de TI vai exibir uma notificação. Clique para abrir um modal onde poderás aprovar ou reprovar.</P>
    </BoxBackground>
);