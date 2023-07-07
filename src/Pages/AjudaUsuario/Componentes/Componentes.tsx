import "./Componentes.scss";
import { BoxBackground, BoxTitleStatus, Title, P, BoxImage, Space } from "./Componentes.style";
import { Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
// Introdução
import sadeDescricaoAzul from "../../../Assets/AjudaUsuario/Introducao/sadeDescricaoAzul.png";
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
import avaliarWorkflow from "../../../Assets/AjudaUsuario/AvaliarWorkflow/avaliarWorkflow.png"
import avaliarWorkflowFinal from "../../../Assets/AjudaUsuario/AvaliarWorkflow/avaliarWorkflowFinal.png"

const usuarioLogado = localStorage.getItem("TIPOUSUARIO");

export const Introducao = (
    <BoxBackground>
        <Title>
            <p>INTRODUÇÃO</p>
        </Title>

        <P>A Aplicação Web SADE, é uma plataforma que permite aos colaboradores WEG criar, consultar, classificar e avaliar demandas, além de outras atividades. Este manual tem como objetivo ajudar os usuários a navegar e utilizar o site de forma eficiente e eficaz.</P>

        <BoxImage>
            <img id="imgSade" src={sadeDescricaoAzul} alt="Logo - SADE" />
        </BoxImage>
    </BoxBackground >
);

export const CriarDemanda = (
    <BoxBackground>
        <Title>
            <p>Criar Demanda</p>
        </Title>

        <P>Para criar uma Demanda, acesse o tópico pela sidebar no ícone <AddCircleIcon /> e selecione a opção “Demanda”, preencha os inputs da página, que está dividida em três partes, sendo eles:</P>

        <P>
            <p>Primeira parte:</p>

            <ul>
                <li className="liAjudaUsuario"><b>Título:</b> Escreva um título que descreva claramente o problema ou necessidade. O título deve ser conciso e direto ao ponto;</li>
                <li className="liAjudaUsuario"><b>Problema a ser resolvido (situação atual):</b> Escreva uma breve explicação da situação atual, descrevendo o problema em mais detalhes. Forneça informações relevantes e quantitativas, se possível, para apoiar sua argumentação;</li>
                <li className="liAjudaUsuario"><b>Proposta / Solicitação de Proposta:</b> Proponha uma solução ou solicite uma Proposta para resolver o problema. Se você já tiver uma ideia de como resolver o problema, descreva-a em detalhes. Se você não tiver uma solução, solicite propostas de soluções de outras pessoas ou organizações;</li>
                <li className="liAjudaUsuario"><b>Centros de custo:</b> Identifique os centros de custo envolvidos na solução do problema. Isso pode incluir recursos financeiros, materiais ou humanos necessários para implementar a solução.</li>
            </ul>
        </P>

        <P>
            <p>Segunda parte:</p>

            <ul>
                <li className="liAjudaUsuario"><b>Benefícios Reais:</b> Preencha o valor mensal do benefício, a moeda em que ele será expresso e uma breve descrição do benefício real que será alcançado com a solução Proposta. O benefício real refere-se a ganhos financeiros tangíveis que serão obtidos com a solução, como redução de custos, aumento de receita, etc;</li>
                <li className="liAjudaUsuario"><b>Benefícios Potenciais:</b> Preencha o valor mensal do benefício potencial, a moeda em que ele será expresso, uma descrição detalhada do benefício que poderá ser alcançado com a solução e indique se o benefício é uma obrigação legal. O benefício potencial refere-se a ganhos que ainda não foram realizados, mas que podem ser alcançados com a solução, como aumento de produtividade, redução de riscos, etc;</li>
                <li className="liAjudaUsuario"><b>Benefícios Qualitativos:</b> Descreva os benefícios qualitativos que a solução irá proporcionar, como melhoria da qualidade de vida dos funcionários, aumento da satisfação dos clientes, etc. Indique também a frequência de uso da solução, ou seja, com que frequência ela será utilizada para obter esses benefícios.</li>
            </ul>
        </P>

        <P>
            <p>Terceira parte:</p>

            <ul>
                <li className="liAjudaUsuario"><b>Anexos:</b> Refere-se à possibilidade de anexar arquivos que possam complementar ou apoiar as informações apresentadas nas duas primeiras partes. Esta seção é opcional e serve para incluir qualquer informação adicional que possa ajudar a avaliar e implementar a solução Proposta ; Para anexar um arquivo à Demanda, basta clicar no botão "Anexar arquivo" ou arrastar o arquivo até a dropzone.</li>
            </ul>
        </P>

        <Space>.</Space>
    </BoxBackground>
);

export const AvaliarDemanda = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
                <Title>
                    <p>Avaliar Demanda</p>
                </Title>

                <P>Avalie a Demanda: Você pode reprovar, devolver ou aprovar uma Demanda.</P>

                <BoxImage>
                    <img id="imgs" src={avaliarDemandaA} alt="Avaliar Demanda" />
                </BoxImage>

                <P>Caso a ela seja devolvida, explique claramente o motivo. Isso permite que o Solicitante entenda os pontos que precisam ser melhorados ou esclarecidos, para que possa refazer a Demanda e entregá-la novamente. O objetivo é garantir que a Demanda possa ser atendida com sucesso e dentro dos parâmetros estabelecidos.</P>

                <BoxImage>
                    <img id="imgs" src={devolverDemanda} alt="Devolver Demanda" />
                </BoxImage>

                <P>Se a Demanda for aprovada, classifique a Demanda por tamanho, informe a BU Solicitante, a(s) BU(s) beneficiada(s) e a sessão de TI responsável pela Demanda.</P>

                <BoxImage>
                    <img id="imgs" src={aprovarDemandaA} alt="Aprovar Demanda" />
                </BoxImage>

                <Space>.</Space>
            </>
            :
            <>
                <P>Nesta parte, o Analiste de TI ou o Gerente de TI responsável poderá avaliar a Demanda, podendo reprová-la, devolvê-la ou aprová-la. Sendo que quando ele devolve, ele precisa explicar o motivo para o Solicitante editá-la e entregar novamente.</P>
            </>}
    </BoxBackground>
);

export const RevisarDemanda = (
    <BoxBackground>
        {usuarioLogado == "GerenteNegocio" || usuarioLogado == "GerenteTI" ?
            <>
                <Title>
                    <p>Revisar Demanda</p>
                </Title>

                <P>Revise a Demanda: Você pode reprovar ou aprovar uma Demanda.</P>

                <BoxImage>
                    <img id="imgs" src={avaliarDemandaGN} alt="Avaliar Demanda" />
                </BoxImage>

                <P>Se a Demanda for reprovada, explique porquê ela não pode ser atendida. Caso a Demanda for aprovada, ela será devolvida para o Analista.</P>

                <BoxImage>
                    <img id="imgs" src={reprovarDemanda} alt="Reprovar Demanda" />
                </BoxImage>

                <Space>.</Space>
            </>
            :
            <>
                <P>Aqui, o Gerente de Negócio ou o Gerente de TI também avaliarão a Demanda. Podendo apenas reprovar ou aprovar. Caso ele a reprove, terá de explicar o motivo.</P>
            </>}
    </BoxBackground >
);

export const AdicionarInfoDemanda = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
                <Title>
                    <p>Adicionar informações na Demanda</p>
                </Title>

                <P>Após a Demanda ser aprovada pelo Gerente de Negócio ela será devolvida para o Analista que a aprovou. Abra a Demanda e clique no botão "Adicionar informações".</P>

                <BoxImage>
                    <img id="imgs" src={adicionarInfoDemanda} alt="Adicionar informações da Demanda" />
                </BoxImage>

                <P> Abrirá um modal para complementar a Demanda com as informações de prazo de elaboração da Proposta, código PPM e o link para o JIRA;</P>

                <BoxImage>
                    <img id="imgs" src={adicionarInfoDemandaModal} alt="Adicionar informações da Demanda (modal)" />
                </BoxImage>

                <Space>.</Space>
            </>
            :
            <>
                <P>Para esse processo, o Analista de TI ou o Gerente de TI terá que preencher algumas informações da Demanda após ela ser aprovada pelos Analistas e Gerentes. As informações são prazo de elaboração da Proposta, código PPM e o link para o JIRA.</P>
            </>}
    </BoxBackground>
);

export const CriarProposta = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
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

                <P>Posteriormente, adicione os novos atributos, sendo eles o escopo, linhas da tabela de custo, payback, o período de execução e as informações do responsável, o nome e a área que trabalha. Por fim, sendo opcional, os anexos para a Proposta.</P>

                <BoxImage>
                    <img id="imgs" src={criarPropostaFinal} alt="Criar Proposta parte final" />
                </BoxImage>

                <Space>.</Space>
            </>
            :
            <>
                <P>Para criar uma Proposta, o Analista de TI ou o Gerente de TI escolherão uma Demanda para transformar em Proposta, podendo editar os atributos da mesma. E depois adicionar novos atributos, sendo eles o escopo, linhas da tabela de custo, payback, o período de execução e as informações do responsável, o nome e a área que trabalha. Por fim, sendo opcional, os anexos para a Proposta.</P>
            </>}
    </BoxBackground>
);

export const CriarPauta = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
                <Title>
                    <p>Criar Pauta</p>
                </Title>

                <P>Para criar uma Pauta, acesse o tópico pela sidebar no ícone <AddCircleIcon /> e selecione a opção “Pauta”. Na próxima tela, selecione uma ou mais propostas a serem incluídas na Pauta. Para isso, procure pelas propostas disponíveis na lista e clique naquelas que deseja adicionar</P>

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
            </>
            :
            <>
                <P>Para criar um Pauta, o Analista de TI ou o Gerente de TI escolherão uma ou mais Propostas para colocar na Pauta, esta que será discutida em uma reunião com uma Comissão. Após selecionar a(s) Proposta(s), escolherão um título para a reunião, o fórum que irá descutir a Pauta e a data e a hora da reunião.</P>
            </>}
    </BoxBackground>
);

export const InformarParecerComissao = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
                <Title>
                    <p>Informar o parecer da Comissão</p>
                </Title>

                <P>Após a Pauta passar pela reunião, será necessário informar o parecer da Comissão que a discutiu. Para isso, dentro da Pauta, clique no botão de "Informar parecer".</P>

                <BoxImage>
                    <img id="imgs" src={informarParecerComissao} alt="Informar o parecer da Comissão" />
                </BoxImage>

                <P>Agora, escolha o status da Pauta, podendo ser Cancelled, Business Case, To Do ou Assessment, escreva os comentários necessários e escolha se vai ser uma ATA publicada ou uma ATA não publicada e sendo opcional, os anexos que a complementarão.</P>

                <BoxImage>
                    <img id="imgs" src={informarParecerComissaoFinal} alt="Informar o parecer da Comissão parte final" />
                </BoxImage>

                <Space>.</Space>
            </>
            :
            <>
                <P>Após uma Pauta passar pela reunião, o Analista de TI ou o Gerente de TI terão que informar qual foi o parecer da Comissão que a discutiu, escolhendo o status da Pauta, podendo ser Cancelled, Business Case, To Do ou Assessment, escreva os comentários necessários e escolha se vai ser uma ATA publicada ou uma ATA não publicada e sendo opcional, os anexos que a complementarão.</P>
            </>}
    </BoxBackground>
);

export const CriarATA = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
                <Title>
                    <p>Criar ATA</p>
                </Title>

                <P>Para criar uma ATA, acesse o tópico pela sidebar no ícone <AddCircleIcon /> e selecione a opção "ATA". Depois, escolha a Pauta que quer transformar em ATA.</P>

                <BoxImage>
                    <img id="imgs" src={criarATAIcone} alt="Criar ATA pela sidebar" />
                </BoxImage>

                <P>Posteriormente, você irá à uma página para preencher as informações da ATA que será discutida na reunião da Diretoria Geral.</P>

                <BoxImage>
                    <img id="imgs" src={criarATAIconeFinal} alt="Criar ATA pela sidebar parte final" />
                </BoxImage>

                <P>Você também pode fazer esse processo já estando dentro de uma Pauta, mas ela não pode ter o parecer da Comissão já informado. Basta clicar no botão de "Informar o parecer", embaixo das infomações da Pauta, com isso abrirá campos para preencher as informações sobre a ATA.</P>

                <BoxImage>
                    <img id="imgs" src={criarATAPauta} alt="Criar ATA pela Pauta" />
                </BoxImage>

                <P>Será aberto os mesmos campos sobre a ATA para serem preenchidos</P>

                <BoxImage>
                    <img id="imgs" src={criarATAPautaFinal} alt="Criar ATA pela Pauta parte final" />
                </BoxImage>

                <P>Se você apertar no ícone <RemoveRoundedIcon /> e enviar o parecer da Comissão, a ATA será excluída e você só poderá repetir esse processo seguindo os passos de criar a ATA pela sidebar</P>

                <Space>.</Space>
            </>
            :
            <>
                <P>Depois de uma Pauta passar pela reunião e ter seu parecer informado, o Analista de TI ou o Gerente de TI a colocarão dentro de uma ATA, tendo que preencher as informações da mesma.</P>
            </>}
    </BoxBackground>
);

export const InformarParecerDiretoriaGeral = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
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
            </>
            :
            <>
                <P>Após uma ATA ser criada e passar pela reunião com a Diretoria Geral, o Analista de TI ou o Gerente de TI terão que informar qual foi o parecer da mesma, escolhendo o status da ATA, podendo ser Cancelled, Business Case, To Do ou Assessment, informendo também o número da ATA da DG, e sendo opcional, anexar aquivos e escrever os comentários necessários.</P>
            </>}
    </BoxBackground>
);

export const IniciarWorkflow = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
                <Title>
                    <p>Iniciar Workflow de Aprovação</p>
                </Title>

                <P>Dentro de uma Proposta, aperte o botão de criar um workflow de aprovação.</P>

                <BoxImage>
                    <img id="imgs" src={iniciarWorkflow} alt="Iniciar Workflow de Aprovação" />
                </BoxImage>

                <P>Quando o Workflow de Aprovação é aprovado pelos Gerentes de Negócio e de TI, a Proposta automaticamente torna-se uma Pauta aprovada (não passará pela reunião com a Comissão).</P>

                <Space>.</Space>
            </>
            :
            <>
                <P>Dentro de uma Proposta, o Analista de TI ou o Gerente de TI poderão criar um Workflow de Aprovação, que serve agilizar o porcesso de aprovação da Proposta.</P>
            </>}
    </BoxBackground>
);

export const AvaliarWorkflow = (
    <BoxBackground>
        {usuarioLogado == "AnalistaTI" || usuarioLogado == "GerenteTI" ?
            <>
                <Title>
                    <p>Avaliar Workflow de Aprovação</p>
                </Title>

                <P>Dentro de uma Proposta, quando um Workflow for iniciado pelo Analista, o ícone de Workflow para os Gerentes de Negócio e de TI vai exibir uma notificação.</P>

                <BoxImage>
                    <img id="imgs" src={avaliarWorkflow} alt="Avaliar Workflow de Aprovação" />
                </BoxImage>

                <P>Clique para abrir um modal onde poderás aprovar ou reprovar.</P>

                <BoxImage>
                    <img id="imgs" src={avaliarWorkflowFinal} alt="Avaliar Workflow de Aprovação parte final" />
                </BoxImage>

                <Space>.</Space>
            </>
            :
            <>
                <P>Após um Analista de TI ou um Gerente de TI criar um Workflow de Aprovação, ele passára por um Gerente de Negócio ou de TI, quer o aprovarão ou não. Caso seja aprovado, a Proposta automaticamente vira uma Pauta sem precisar passar por uma reunião com a Comissão.</P>
            </>}
    </BoxBackground>
);

// Criar Demanda                         --> Todos
// Avaliar Demanda (três opções)         --> Analista de TI ou Gerente de TI
// Revisar Demanda (duas opções)         --> Gerente de Negócio ou Gerente de TI
// Adicionar informações na Demanda      --> Analista de TI ou Gerente de TI
// Criar Proposta                        --> Analista de TI ou Gerente de TI
// Criar Pauta                           --> Analista de TI ou Gerente de TI
// Informar o parecer da Comissão        --> Analista de TI ou Gerente de TI
// Criar ATA                             --> Analista de TI ou Gerente de TI
// Informar o parecer da Diretoria Geral --> Analista de TI ou Gerente de TI
// Iniciar o Workflow de Aprovação       --> Analista de TI ou Gerente de TI
// Avaliar o Workflow de Aprovação       --> Analista de TI ou Gerente de TI

export const CoresStatus = (
    <BoxBackground>
        <Title>
            <p>Cores dos Status</p>
        </Title>

        <Box>
            <BoxTitleStatus sx={{ color: "#444" }}>
                <ul>
                    <li>Aguardando revisão</li>
                </ul>
            </BoxTitleStatus>
        </Box>

        <Box>
            <BoxTitleStatus sx={{ color: "#FF1616" }}>
                <ul>
                    <li>Cancelado (Cancelled)</li>
                </ul>
            </BoxTitleStatus>
        </Box>

        <Box>
            <BoxTitleStatus sx={{ color: "#8862A2" }}>
                <ul>
                    <li>Aguardando Revisão (Backlog)</li>
                </ul>
            </BoxTitleStatus>
        </Box>

        <Box>
            <BoxTitleStatus sx={{ color: "#00612E" }}>
                <ul>
                    <li>A Fazer (To Do)</li>
                </ul>
            </BoxTitleStatus>
        </Box>

        <Box>
            <BoxTitleStatus sx={{ color: "#EF8300" }}>
                <ul>
                    <li>Em Planejamento (Assessment)</li>
                </ul>
            </BoxTitleStatus>
        </Box>

        <Box>
            <BoxTitleStatus sx={{ color: "#FFD600" }}>
                <ul>
                    <li>Em Planejamento Demorado (Business Case)</li>
                </ul>
            </BoxTitleStatus>
        </Box>
    </BoxBackground>
);