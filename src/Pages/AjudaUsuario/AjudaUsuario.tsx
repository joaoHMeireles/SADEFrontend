import "./AjudaUsuario.scss";
import { BoxConteudo } from "../App.styles";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import { Container, FirstColumn, TitleFirstColumn, SubtitleFirstColumn, SecondColumn, TitleSecondColumn, SubtitleSecondColumn, TextSecondColumn } from "./AjudaUsuario.styles";

export default function AjudaUsuario(props: { aberto: boolean }) {
    function irParaTitulo(id: string) {
        const elemento = document.getElementById(id)
        elemento?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <BoxConteudo >
            <Breadcrumb />

            <Container>
                <FirstColumn>
                    <TitleFirstColumn>
                        <span className="text" onClick={() => { irParaTitulo("introducao") }}>1 INTRODUÇÃO</span>
                    </TitleFirstColumn>

                    <TitleFirstColumn>
                        <span className="text">2 ATIVIDADES PRINCIPAIS</span>
                    </TitleFirstColumn>

                    <SubtitleFirstColumn>
                        <span className="text" onClick={() => { irParaTitulo("criarDemanda") }}>2.1 Criar Demanda</span>
                        <span className="text" onClick={() => { irParaTitulo("avaliarDemandaA") }}>2.2 Avaliar Demanda (Analista)</span>
                        <span className="text" onClick={() => { irParaTitulo("avaliarDemandaG") }}>2.3 Avaliar Demanda (Gerente)</span>
                        <span className="text" onClick={() => { irParaTitulo("addInfoDemanda") }}>2.4 Adicionar informações na Demanda (Analista)</span>
                        <span className="text" onClick={() => { irParaTitulo("criarProsposta") }}>2.5 Criar Proposta</span>
                        <span className="text" onClick={() => { irParaTitulo("criarPauta") }}>2.6 Criar Pauta</span>
                        <span className="text" onClick={() => { irParaTitulo("informarParecerComissao") }}>2.7 Informar o parecer do Comissão (Analista)</span>
                        <span className="text" onClick={() => { irParaTitulo("criarATA") }}>2.8 Criar ATA</span>
                        <span className="text" onClick={() => { irParaTitulo("informarParecerDG") }}>2.9 Informar o parecer da Diretoria Geral</span>
                    </SubtitleFirstColumn>

                    <TitleFirstColumn>
                        <span className="text">3 ATIVIDADES SECUNDÁRIAS</span>
                    </TitleFirstColumn>

                    <SubtitleFirstColumn>
                        <span className="text" onClick={() => { irParaTitulo("iniciarWorkflow") }}>3.1 Iniciar Workflow de Aprovação (Analista)</span>
                        <span className="text" onClick={() => { irParaTitulo("avaliarWorkflow") }}>3.2 Avaliar Workflow de Aprovação (Gerentes)</span>
                    </SubtitleFirstColumn>
                </FirstColumn>

                <SecondColumn>
                    <TitleSecondColumn>
                        <p id="introducao">1 INTRODUÇÃO</p>
                    </TitleSecondColumn>

                    <TextSecondColumn>
                        <p>A Aplicação Web SOD, é uma plataforma que permite aos colaboradores WEG criar, consultar, classificar e avaliar demandas, além de outras diversas atividades. Este manual tem como objetivo ajudar os usuários a navegar e utilizar o site de forma eficiente e eficaz.</p>
                    </TextSecondColumn>

                    <TitleSecondColumn>
                        <p>2 ATIVIDADES PRINCIPAIS</p>
                    </TitleSecondColumn>

                    <SubtitleSecondColumn>
                        <p id="criarDemanda">2.1 Criar Demanda</p>
                    </SubtitleSecondColumn>

                    <TextSecondColumn>
                        Para criar uma demanda, acesse o tópico pela sidebar no ícone  e selecione a opção “Demanda”, preencha os inputs da página, que está dividida em três partes, sendo eles:
                    </TextSecondColumn>

                    <TextSecondColumn>
                        <p>Primeira parte:</p>
                        <ul>
                            <li className="topicText">
                                Título: Escreva um título que descreva claramente o problema ou necessidade. O título deve ser conciso e direto ao ponto;
                            </li>
                            <li className="topicText">
                                Problema a ser resolvido (situação atual): Escreva uma breve explicação da situação atual, descrevendo o problema em mais detalhes. Forneça informações relevantes e quantitativas, se possível, para apoiar sua argumentação;
                            </li>
                            <li className="topicText">
                                Proposta / Solicitação de proposta: Proponha uma solução ou solicite uma proposta para resolver o problema. Se você já tiver uma ideia de como resolver o problema, descreva-a em detalhes. Se você não tiver uma solução, solicite propostas de soluções de outras pessoas ou organizações;
                            </li>
                            <li className="topicText">
                                Centros de custo: Identifique os centros de custo envolvidos na solução do problema. Isso pode incluir recursos financeiros, materiais ou humanos necessários para implementar a solução.
                            </li>
                        </ul>
                    </TextSecondColumn>

                    <TextSecondColumn>
                        <p>Segunda parte:</p>
                        <ul>
                            <li className="topicText">
                            Benefícios Reais: Preencha o valor mensal do benefício, a moeda em que ele será expresso e uma breve descrição do benefício real que será alcançado com a solução proposta. O benefício real refere-se a ganhos financeiros tangíveis que serão obtidos com a solução, como redução de custos, aumento de receita, etc;
                            </li>
                            <li className="topicText">
                            Benefícios Potenciais: Preencha o valor mensal do benefício potencial, a moeda em que ele será expresso, uma descrição detalhada do benefício que poderá ser alcançado com a solução e indique se o benefício é uma obrigação legal. O benefício potencial refere-se a ganhos que ainda não foram realizados, mas que podem ser alcançados com a solução, como aumento de produtividade, redução de riscos, etc;
                            </li>
                            <li className="topicText">
                            Benefícios Qualitativos: Descreva os benefícios qualitativos que a solução irá proporcionar, como melhoria da qualidade de vida dos funcionários, aumento da satisfação dos clientes, etc. Indique também a frequência de uso da solução, ou seja, com que frequência ela será utilizada para obter esses benefícios.
                            </li>
                        </ul>
                    </TextSecondColumn>

                    <TextSecondColumn>
                        <p>Terceira parte:</p>
                        <ul>
                            <li className="topicText">
                            Anexos: Refere-se à possibilidade de anexar arquivos que possam complementar ou apoiar as informações apresentadas nas duas primeiras partes. Esta seção é opcional e serve para incluir qualquer informação adicional que possa ajudar a avaliar e implementar a solução proposta ; Para anexar um arquivo à demanda, basta clicar no botão "Anexar arquivo" ou arrastar o arquivo até a dropzone.
                            </li>
                        </ul>
                    </TextSecondColumn>
                </SecondColumn>
            </Container>
        </BoxConteudo>
    );
}