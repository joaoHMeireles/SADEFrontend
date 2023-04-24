import "./AjudaUsuario.scss";
import { BoxConteudo } from "../App.styles";
import Box from "@mui/material/Box";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import { Container, FirstColumn, TitleFirstColumn, SubtitleFirstColumn, SecondColumn, TitleSecondColumn, SubtitleSecondColumn, TextSecondColumn } from "./AjudaUsuario.styles";
import { BoxHeader } from "../TelaProcesso/TelaProcesso.styles";
import { Toolbar } from "@mui/material";

export default function AjudaUsuario(props: { aberto: boolean, sidebarAberta: boolean }) {
    function irParaTitulo(id: string) {
        const elemento = document.getElementById(id);
        elemento?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <>
            <BoxHeader sx={{ width: (props.sidebarAberta ? "88.35%" : "96.5%") }}>
                <Breadcrumb />
            </BoxHeader>

            <Toolbar />

            <BoxConteudo>
                <Container>
                    <FirstColumn>
                        <TitleFirstColumn>
                            <span className="text" onClick={() => { irParaTitulo("introducao") }}>INTRODUÇÃO</span>
                        </TitleFirstColumn>

                        <TitleFirstColumn>
                            <span className="text">ATIVIDADES PRINCIPAIS</span>
                        </TitleFirstColumn>

                        <SubtitleFirstColumn>
                            <span className="text" onClick={() => { irParaTitulo("criarDemanda") }}>Criar Demanda</span>
                            <span className="text" onClick={() => { irParaTitulo("avaliarDemandaA") }}>Avaliar Demanda (Analista)</span>
                            <span className="text" onClick={() => { irParaTitulo("avaliarDemandaG") }}>Avaliar Demanda (Gerente)</span>
                            <span className="text" onClick={() => { irParaTitulo("addInfoDemanda") }}>Adicionar informações na Demanda (Analista)</span>
                            <span className="text" onClick={() => { irParaTitulo("criarProsposta") }}>Criar Proposta</span>
                            <span className="text" onClick={() => { irParaTitulo("criarPauta") }}>Criar Pauta</span>
                            <span className="text" onClick={() => { irParaTitulo("informarParecerComissao") }}>Informar o parecer do Comissão (Analista)</span>
                            <span className="text" onClick={() => { irParaTitulo("criarATA") }}>Criar ATA</span>
                            <span className="text" onClick={() => { irParaTitulo("informarParecerDG") }}>Informar o parecer da Diretoria Geral</span>
                        </SubtitleFirstColumn>

                        <TitleFirstColumn>
                            <span className="text">ATIVIDADES SECUNDÁRIAS</span>
                        </TitleFirstColumn>

                        <SubtitleFirstColumn>
                            <span className="text" onClick={() => { irParaTitulo("iniciarWorkflow") }}>Iniciar Workflow de Aprovação (Analista)</span>
                            <span className="text" onClick={() => { irParaTitulo("avaliarWorkflow") }}>Avaliar Workflow de Aprovação (Gerentes)</span>
                        </SubtitleFirstColumn>
                    </FirstColumn>

                    <SecondColumn>
                        <TitleSecondColumn id="introducao">
                            <p>INTRODUÇÃO</p>
                        </TitleSecondColumn>

                        <TextSecondColumn>
                            <p>A Aplicação Web SOD, é uma plataforma que permite aos colaboradores WEG criar, consultar, classificar e avaliar demandas, além de outras diversas atividades. Este manual tem como objetivo ajudar os usuários a navegar e utilizar o site de forma eficiente e eficaz.</p>
                        </TextSecondColumn>

                        <TitleSecondColumn>
                            <p>ATIVIDADES PRINCIPAIS</p>
                        </TitleSecondColumn>

                        <SubtitleSecondColumn id="criarDemanda">
                            <p>Criar Demanda</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Para criar uma demanda, acesse o tópico pela sidebar no ícone  e selecione a opção “Demanda”, preencha os inputs da página, que está dividida em três partes, sendo eles:</p>

                            <p>Primeira parte:</p>

                            <ul>
                                <li className="topicText">
                                    <p><b>Título:</b> Escreva um título que descreva claramente o problema ou necessidade. O título deve ser conciso e direto ao ponto;</p>
                                </li>
                                <li className="topicText">
                                    <p><b>Problema a ser resolvido (situação atual):</b> Escreva uma breve explicação da situação atual, descrevendo o problema em mais detalhes. Forneça informações relevantes e quantitativas, se possível, para apoiar sua argumentação;</p>
                                </li>
                                <li className="topicText">
                                    <p><b>Proposta / Solicitação de proposta:</b> Proponha uma solução ou solicite uma proposta para resolver o problema. Se você já tiver uma ideia de como resolver o problema, descreva-a em detalhes. Se você não tiver uma solução, solicite propostas de soluções de outras pessoas ou organizações;</p>
                                </li>
                                <li className="topicText">
                                    <p><b>Centros de custo:</b> Identifique os centros de custo envolvidos na solução do problema. Isso pode incluir recursos financeiros, materiais ou humanos necessários para implementar a solução.</p>
                                </li>
                            </ul>

                            <p>Segunda parte:</p>

                            <ul>
                                <li className="topicText">
                                    <p><b>Benefícios Reais:</b> Preencha o valor mensal do benefício, a moeda em que ele será expresso e uma breve descrição do benefício real que será alcançado com a solução proposta. O benefício real refere-se a ganhos financeiros tangíveis que serão obtidos com a solução, como redução de custos, aumento de receita, etc;</p>
                                </li>
                                <li className="topicText">
                                    <p><b>Benefícios Potenciais:</b> Preencha o valor mensal do benefício potencial, a moeda em que ele será expresso, uma descrição detalhada do benefício que poderá ser alcançado com a solução e indique se o benefício é uma obrigação legal. O benefício potencial refere-se a ganhos que ainda não foram realizados, mas que podem ser alcançados com a solução, como aumento de produtividade, redução de riscos, etc;</p>
                                </li>
                                <li className="topicText">
                                    <p><b>Benefícios Qualitativos:</b> Descreva os benefícios qualitativos que a solução irá proporcionar, como melhoria da qualidade de vida dos funcionários, aumento da satisfação dos clientes, etc. Indique também a frequência de uso da solução, ou seja, com que frequência ela será utilizada para obter esses benefícios.</p>
                                </li>
                            </ul>
                            
                            <p>Terceira parte:</p>

                            <ul>
                                <li className="topicText">
                                    <p><b>Anexos:</b> Refere-se à possibilidade de anexar arquivos que possam complementar ou apoiar as informações apresentadas nas duas primeiras partes. Esta seção é opcional e serve para incluir qualquer informação adicional que possa ajudar a avaliar e implementar a solução proposta ; Para anexar um arquivo à demanda, basta clicar no botão "Anexar arquivo" ou arrastar o arquivo até a dropzone.</p>
                                </li>
                            </ul>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="avaliarDemandaA">
                            <p>Avaliar Demanda(Analista)</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Avalie a demanda: Caso a ela seja devolvida, explique claramente o motivo. Isso permite que o solicitante entenda os pontos que precisam ser melhorados ou esclarecidos, para que possa refazer a demanda e entregá-la novamente. O objetivo é garantir que a demanda possa ser atendida com sucesso e dentro dos parâmetros estabelecidos.</p>

                            <p>Se a demanda for reprovada, explique porquê ela não pode ser atendida. Isso pode ocorrer por vários motivos, como falta de recursos técnicos ou financeiros, incompatibilidade com as estratégias da organização, ou simplesmente por não ser viável. O objetivo é fornecer informações claras para o solicitante, para que ele possa entender as razões da reprovação.</p>

                            <p>Finalmente, se a demanda for aprovada, classifique a demanda por tamanho, informe a BU solicitante, a(s) BU(s) beneficiada(s) e a sessão de TI responsável pela demanda.</p>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="avaliarDemandaG">
                            <p>Avaliar Demanda(Gerente)</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Avalie a demanda: Se a demanda for reprovada, explique porquê ela não pode ser atendida. Caso a demanda for aprovada, ela será devolvida para o analista;</p>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="addInfoDemanda">
                            <p>Adicionar Informações na Demanda(Analista)</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Após a demanda ser aprovada pelo Gerente de Negócio, complemente a demanda com as informações de prazo de elaboração da proposta, código PPM e o link para o JIRA;</p>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="criarProsposta">
                            <p>Criar Proposta</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Para criar uma proposta, acesse o tópico pela sidebar no ícone  e selecione a opção “Proposta”. Escolha a demanda que quer transformar em proposta podendo editar seus atributos. Posteriormente, adicione os novos atributos, sendo eles o escopo, linhas da tabela de custo, payback, o período de execução e as informações do responsável, o nome e a área que trabalha. Por fim, sendo opcional, os anexos para a proposta.</p>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="criarPauta">
                            <p>Criar Pauta</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Para criar uma proposta, acesse o tópico pela sidebar no ícone  e selecione a opção “Proposta”. Escolha a demanda que quer transformar em proposta podendo editar seus atributos. Posteriormente, adicione os novos atributos, sendo eles o escopo, linhas da tabela de custo, payback, o período de execução e as informações do responsável, o nome e a área que trabalha. Por fim, sendo opcional, os anexos para a proposta.</p>

                            <p>Após a seleção das propostas, escolha a comissão que participará da reunião. Para isso, deve-se clicar na opção "Comissão" e selecionar a comissão desejada;</p>

                            <p>Por fim, escolha a data da reunião. Para isso, clique na opção "Data" e selecione a data desejada no calendário.</p>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="informarParecerComissao">
                            <p>Informar o parecer do Comissão (Analista)</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Para informar o parecer da comissão, escolha o status da pauta, podendo ser Cancelled, Business Case, To Do ou Assessment, escreva os comentários necessários e escolha se vai ser uma ATA publicada ou uma ATA não publicada.</p>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="criarATA">
                            <p>Criar ATA</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>A ATA será criada automaticamente após a pauta que a sucede ser discutida na reunião com a comissão. Posteriormente, como ATA, será discutida na reunião com a Diretoria Geral.</p>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="informarParecerDG">
                            <p>Informar o parecer da Diretoria Geral</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Para informar o parecer da comissão, escolha o status da ATA, podendo ser Cancelled, Business Case, To Do ou Assessment, informe o número da ATA da DG, anexe os arquivos sendo opcional e escreva os comentários necessários.</p>
                        </TextSecondColumn>

                        <TitleSecondColumn>
                            <p>ATIVIDADES SECUNDÁRIAS</p>
                        </TitleSecondColumn>

                        <SubtitleSecondColumn id="iniciarWorkflow">
                            <p>Iniciar Workflow de Aprovação (Analista)</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Dentro de uma proposta, aperte o botão de criar um workflow de aprovação. Quando o Workflow de Aprovação é aprovado pelos Gerentes de Negócio e de TI, a proposta automaticamente torna-se uma pauta aprovada (não passará pela reunião com a comissão).</p>
                        </TextSecondColumn>

                        <SubtitleSecondColumn id="avaliarWorkflow">
                            <p>Avaliar Workflow de Aprovação (Gerentes)</p>
                        </SubtitleSecondColumn>

                        <TextSecondColumn>
                            <p>Dentro de uma proposta, quando um Workflow for iniciado pelo Analista, o ícone de Workflow para os Gerentes de Negócio e de TI vai exibir uma notificação. Clique para abrir um modal onde poderás aprovar ou reprovar.</p>
                        </TextSecondColumn>
                    </SecondColumn>
                </Container>
            </BoxConteudo>
        </>
    );
}