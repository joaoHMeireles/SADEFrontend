import "./Componentes.scss";
import { BoxBackground, Title, P, BoxImage, Space } from "./Componentes.style";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
// Introdução
import SOD from "../../../Assets/AjudaUsuario/Introducao/SOD.jpg";
// Avaliar Demanda - Analista de TI ou Gerente de TI
import aprovarDemandaA from "../../../Assets/AjudaUsuario/AvaliarDemandaA/aprovarDemanda.png";
import avaliarDemandaA from "../../../Assets/AjudaUsuario/AvaliarDemandaA/avaliarDemanda.png";
import devolverDemanda from "../../../Assets/AjudaUsuario/AvaliarDemandaA/devolverDemanda.png";
// Avaliar Demanda - Gerente de Negócio ou Gerente de TI
import avaliarDemandaGN from "../../../Assets/AjudaUsuario/AvaliarDemandaGN/avaliarDemanda.png";
import reprovarDemanda from "../../../Assets/AjudaUsuario/AvaliarDemandaGN/reprovarDemanda.png";
// Adicionar informações na Demanda
import adicionarInfoDemanda from "../../../Assets/AjudaUsuario/AdicionarInfoDemanda/adicionarInfoDemanda.png";
import adicionarInfoDemandaModal from "../../../Assets/AjudaUsuario/AdicionarInfoDemanda/adicionarInfoDemandaModal.png";
// Criar Proposta
import criarPropostaIcone from "../../../Assets/AjudaUsuario/CriarProposta/criarPropostaIcone.png";
import criarPropostaDemanda from "../../../Assets/AjudaUsuario/CriarProposta/criarPropostaDemanda.png";
import criarPropostaFinal from "../../../Assets/AjudaUsuario/CriarProposta/criarPropostaFinal.png";
// Criar Pauta
import criarPautaIcone from "../../../Assets/AjudaUsuario/CriarPauta/criarPautaIcone.png";
import criarPautaProposta from "../../../Assets/AjudaUsuario/CriarPauta/criarPautaProposta.png";
import criarPautaFinal from "../../../Assets/AjudaUsuario/CriarPauta/criarPautaFinal.png";
// Informar o parecer da Comissão
import informarParecerComissao from "../../../Assets/AjudaUsuario/InformarParecerComissao/informarParecerComissao.png";
import informarParecerComissaoFinal from "../../../Assets/AjudaUsuario/InformarParecerComissao/informarParecerComissaoFinal.png";
// Criar ATA
import criarATAIcone from "../../../Assets/AjudaUsuario/CriarATA/criarATAIcone.png"
import criarATAIconeFinal from "../../../Assets/AjudaUsuario/CriarATA/criarATAIconeFinal.png"
import criarATAPauta from "../../../Assets/AjudaUsuario/CriarATA/criarATAPauta.png"
import criarATAPautaFinal from "../../../Assets/AjudaUsuario/CriarATA/criarATAPautaFinal.png"
// Informar o parecer da Diretoria Geral
import informarParecerDiretoriaGeral from "../../../Assets/AjudaUsuario/InformarParecerDiretoriaGeral/informarParecerDiretoriaGeral.png";
import informarParecerDiretoriaGeralFinal from "../../../Assets/AjudaUsuario/InformarParecerDiretoriaGeral/informarParecerDiretoriaGeralFinal.png";
// Iniciar Workflow de Aprovação
import iniciarWorkflow from "../../../Assets/AjudaUsuario/IniciarWorkflow/iniciarWorkflow.png";
// Avaliar Workflow de Aprovação


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

        <P>Para criar uma demanda, acesse o tópico pela sidebar no ícone <AddCircleIcon /> e selecione a opção “Demanda”, preencha os inputs da página, que está dividida em três partes, sendo eles:</P>

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
            <img id="imgs" src={avaliarDemandaA} alt="Avaliar Demanda" />
        </BoxImage>

        <P>Caso a ela seja devolvida, explique claramente o motivo. Isso permite que o solicitante entenda os pontos que precisam ser melhorados ou esclarecidos, para que possa refazer a demanda e entregá-la novamente. O objetivo é garantir que a demanda possa ser atendida com sucesso e dentro dos parâmetros estabelecidos.</P>

        <BoxImage>
            <img id="imgs" src={devolverDemanda} alt="Devolver Demanda" />
        </BoxImage>

        <P>Se a demanda for aprovada, classifique a demanda por tamanho, informe a BU solicitante, a(s) BU(s) beneficiada(s) e a sessão de TI responsável pela demanda.</P>

        <BoxImage>
            <img id="imgs" src={aprovarDemandaA} alt="Aprovar Demanda" />
        </BoxImage>

        <Space>.</Space>
    </BoxBackground>
);

export const AvaliarDemandaGN = (
    <BoxBackground>
        <Title>
            <p>Avaliar Demanda</p>
        </Title>

        <P>Avalie a demanda: Você pode reprovar ou aprovar uma demanda.</P>

        <BoxImage>
            <img id="imgs" src={avaliarDemandaGN} alt="Avaliar Demanda" />
        </BoxImage>

        <P>Se a demanda for reprovada, explique porquê ela não pode ser atendida. Caso a demanda for aprovada, ela será devolvida para o analista.</P>

        <BoxImage>
            <img id="imgs" src={reprovarDemanda} alt="Reprovar Demanda" />
        </BoxImage>

        <Space>.</Space>
    </BoxBackground>
);

export const AdicionarInfoDemanda = (
    <BoxBackground>
        <Title>
            <p>Adicionar informações na Demanda</p>
        </Title>

        <P>Após a demanda ser aprovada pelo Gerente de Negócio ela será devolvida para o Analista que a aprovou. Abra a demanda e clique no botão "Adicionar informações".</P>

        <BoxImage>
            <img id="imgs" src={adicionarInfoDemanda} alt="Adicionar informações da Demanda" />
        </BoxImage>

        <P> Abrirá um modal para complementar a demanda com as informações de prazo de elaboração da proposta, código PPM e o link para o JIRA;</P>

        <BoxImage>
            <img id="imgs" src={adicionarInfoDemandaModal} alt="Adicionar informações da Demanda (modal)" />
        </BoxImage>

        <Space>.</Space>
    </BoxBackground>
);

export const CriarProposta = (
    <BoxBackground>
        <Title>
            <p>Criar Proposta</p>
        </Title>

        <P>Para criar uma Proposta, acesse o tópico pela sidebar no ícone <AddCircleIcon /> e selecione a opção “Proposta”. Depois, escolha a Demanda que quer adicionar na Proposta, podendo editar seus atributos.</P>

        <BoxImage>
            <img id="imgs" src={criarPropostaIcone} alt="Criar Proposta pela sidebar" />
        </BoxImage>

        <P>Você também pode fazer esse processo já estando dentro de uma Demanda, basta clicar no botão de "Criar Proposta", este processo levará direto para a tela de edição dos atributos da Demanda.</P>

        <BoxImage>
            <img id="imgs" src={criarPropostaDemanda} alt="Criar Proposta pela Demanda" />
        </BoxImage>

        <P>Posteriormente, adicione os novos atributos, sendo eles o escopo, linhas da tabela de custo, payback, o período de execução e as informações do responsável, o nome e a área que trabalha. Por fim, sendo opcional, os anexos para a proposta.</P>

        <BoxImage>
            <img id="imgs" src={criarPropostaFinal} alt="Criar Proposta parte final" />
        </BoxImage>

        <Space>.</Space>
    </BoxBackground>
);

export const CriarPauta = (
    <BoxBackground>
        <Title>
            <p>Criar Pauta</p>
        </Title>

        <P>Para criar uma pauta, acesse o tópico pela sidebar no ícone <AddCircleIcon /> e selecione a opção “Pauta”. Na próxima tela, selecione uma ou mais propostas a serem incluídas na pauta. Para isso, procure pelas propostas disponíveis na lista e clique naquelas que deseja adicionar</P>

        <BoxImage>
            <img id="imgs" src={criarPautaIcone} alt="Criar Pauta pela sidebar" />
        </BoxImage>

        <P>Você também pode fazer esse processo já estando dentro de uma Proposta, basta clicar no botão de "Criar Pauta".</P>

        <BoxImage>
            <img id="imgs" src={criarPautaProposta} alt="Criar Pauta pela Proposta" />
        </BoxImage>

        <P>Após a seleção das propostas, escolha um título para a reunião, o fórum que irá descuti-lá, a data e a hora da reunião.</P>

        <BoxImage>
            <img id="imgs" src={criarPautaFinal} alt="Criar Pauta parte final" />
        </BoxImage>

        <Space>.</Space>
    </BoxBackground>
);

export const InformarParecerComissao = (
    <BoxBackground>
        <Title>
            <p>Informar o parecer da Comissão</p>
        </Title>

        <P>Após a Pauta passar pela reunião, será necessário informar o parecer da comissão que a discutiu. Para isso, dentro da pauta, clique no botão de "Informar parecer".</P>

        <BoxImage>
            <img id="imgs" src={informarParecerComissao} alt="Informar o parecer da Comissão" />
        </BoxImage>

        <P>Agora, escolha o status da pauta, podendo ser Cancelled, Business Case, To Do ou Assessment, escreva os comentários necessários e escolha se vai ser uma ATA publicada ou uma ATA não publicada e sendo opcional, os anexos que a complementarão.</P>

        <BoxImage>
            <img id="imgs" src={informarParecerComissaoFinal} alt="Informar o parecer da Comissão parte final" />
        </BoxImage>

        <Space>.</Space>
    </BoxBackground>
);

export const CriarATA = (
    <BoxBackground>
        <Title>
            <p>Criar ATA</p>
        </Title>

        <P>Para criar uma Ata, acesse o tópico pela sidebar no ícone <AddCircleIcon /> e selecione a opção "Ata". Depois, escolha a Pauta que quer transformar em Ata.</P>

        <BoxImage>
            <img id="imgs" src={criarATAIcone} alt="Criar Ata pela sidebar" />
        </BoxImage>

        <P>Posteriormente, você irá à uma página para preencher as informações da Ata que será discutida na reunião da Diretoria Geral.</P>

        <BoxImage>
            <img id="imgs" src={criarATAIconeFinal} alt="Criar Ata pela sidebar parte final" />
        </BoxImage>

        <P>Você também pode fazer esse processo já estando dentro de uma Pauta, mas ela não pode ter o parecer da Comissão já informado. Basta clicar no botão de "Informar o parecer", embaixo das infomações da Pauta, com isso abrirá campos para preencher as informações sobre a Ata.</P>

        <BoxImage>
            <img id="imgs" src={criarATAPauta} alt="Criar Ata pela Pauta" />
        </BoxImage>

        <P>Será aberto os mesmos campos sobre a Ata para serem preenchidos</P>

        <BoxImage>
            <img id="imgs" src={criarATAPautaFinal} alt="Criar Ata pela Pauta parte final" />
        </BoxImage>

        <P>Se você apertar no ícone <RemoveRoundedIcon /> e enviar o parecer da Comissão, a Ata será excluída e você só poderá repetir esse processo seguindo os passos de criar a Ata pela sidebar</P>

        <Space>.</Space>
    </BoxBackground>
);

export const InformarParecerDiretoriaGeral = (
    <BoxBackground>
        <Title>
            <p>Informar o parecer da Diretoria Geral</p>
        </Title>

        <P>Para informar o parecer da Diretoria Geral, entre dentro da ATA que desejas informar o parecer, depois, clique no botão de "Finalizar Processo".</P>

        <BoxImage>
            <img id="imgs" src={informarParecerDiretoriaGeral} alt="Informar o parecer da DiretoriaGeral" />
        </BoxImage>

        <P>Escolha o status da ATA, podendo ser Cancelled, Business Case, To Do ou Assessment, informe o número da ATA da DG, anexe os arquivos sendo opcional e escreva os comentários necessários.</P>

        <BoxImage>
            <img id="imgs" src={informarParecerDiretoriaGeralFinal} alt="Informar o parecer da DiretoriaGera parte final" />
        </BoxImage>

        <Space>.</Space>
    </BoxBackground>
);

export const IniciarWorkflow = (
    <BoxBackground>
        <Title>
            <p>Iniciar Workflow de Aprovação</p>
        </Title>

        <P>Dentro de uma proposta, aperte o botão de criar um workflow de aprovação.</P>

        <BoxImage>
            <img id="imgs" src={iniciarWorkflow} alt="Iniciar Workflow de Aprovação" />
        </BoxImage>

        <P>Quando o Workflow de Aprovação é aprovado pelos Gerentes de Negócio e de TI, a proposta automaticamente torna-se uma pauta aprovada (não passará pela reunião com a comissão).</P>
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