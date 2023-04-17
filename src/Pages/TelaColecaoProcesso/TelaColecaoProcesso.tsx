import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNomeComponente, getCorStatus, getCorTipo, getBeneficiosPorTipo, getNomeStatus } from "../../utils";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Toolbar from "../../Components/Toolbar/Toolbar";
import TabelaBeneficios from "../../Components/Tabelas/TabelaBeneficios/TabelaBeneficios";
import TabelasCusto from "../../Components/Tabelas/TabelaCentroCusto/TabelaCentroCusto";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  RadioGroup,
  Typography,
  Radio,
  TextField,
  FormHelperText,
  Snackbar,
  Alert,
  Divider,
  Dialog,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  BotaoPrimarioHeader,
  BotaoSecundarioHeader,
  BoxBotoes,
  BoxHeader,
  GridPequenosAtributos,
  TypographyTexto,
  TypographyTitulo,
  TypographyTituloAtributo,
} from "../TelaProcesso/TelaProcesso.styles";
import {
  BoxContainer,
  BoxConteudo,
  BotaoTerciario,
  BotaoPrimario,
} from "../App.styles";
import { GridLinkTypograpfy } from "../../Components/ComponenteProcesso/ComponenteProcesso.styles";
import {
  AccordionProposta,
  GridContainerColecao,
  GridFooter,
  GridInfoATA,
  GridProposta,
  TypographyTextoColecao,
  TypographyTituloDecisao,
  TypographyTituloInput,
} from "./TelaColecaoProcesso.styles";
import {
  BoxCorStatus,
  GridContainerHeader,
  GridTitulo,
} from "../../Components/ContainerProcesso/ContainerProcesso.styles";
import Bandeira from "../../Components/Bandeira/Bandeira";
import CardProposta from "../../Components/CardProposta/CardProposta";

export default function TelaColecaoProcesso(props: { sidebarAberta: boolean }) {
  const [avaliandoProcesso, setAvaliandoProcesso] = useState(false);
  const [verificacaoInputs, setVerificacaoInputs] = useState<boolean[]>([]);
  const [feedbackAberto, setFeedbackAberto] = useState(false);
  const [conteudoFeedback, setConteudoFeedback] = useState(<div />);
  const location = useLocation().pathname;
  const idLocalStorage = localStorage.getItem(
    `${getNomeComponente(location)}ESCOLHIDA`
  );
  const informacaoColecaoProcesso = JSON.parse(
    idLocalStorage != null ? idLocalStorage : ""
  );

  function fecharAvaliacao() {
    setAvaliandoProcesso(false);
    setVerificacaoInputs([]);
  }

  function abrirFeedback(conteudo: JSX.Element) {
    setConteudoFeedback(conteudo);
    setFeedbackAberto(true);
  }

  function aprovarProcesso() {
    const novaVerificacaoInputs: boolean[] = [];
    let feedback: JSX.Element;

    for (let i = 0; i < informacaoColecaoProcesso.propostas.length; i++) {
      const radioButtonsStatus = document.getElementsByClassName(
        `radioButtonStatus${i}`
      );
      const statusPreenchido = checarRadioButtons(radioButtonsStatus);
      const primeiroIndexProposta = i * 10;

      novaVerificacaoInputs[primeiroIndexProposta + 1] = statusPreenchido
        ? true
        : false;

      if (informacaoColecaoProcesso.tipo == "Pauta") {
        const radioButtonsAta = document.getElementsByClassName(
          `radioButtonATA${i}`
        );
        let tipoAtaPreenchida = checarRadioButtons(radioButtonsAta);

        novaVerificacaoInputs[primeiroIndexProposta + 2] = tipoAtaPreenchida
          ? true
          : false;
      } else {
        const inputNumeroAta = (
          document.getElementById(`inputNumeroATA${i}`) as HTMLInputElement
        ).value;
        const inputDocumentoAprovacao = (
          document.getElementById(`inputDocumento${i}`) as HTMLInputElement
        ).value;

        novaVerificacaoInputs[primeiroIndexProposta + 3] =
          inputNumeroAta != "" ? true : false;
        novaVerificacaoInputs[primeiroIndexProposta + 4] =
          inputDocumentoAprovacao != "" ? true : false;
      }
    }

    setVerificacaoInputs(novaVerificacaoInputs);

    if (checarPreenchimento(novaVerificacaoInputs)) {
      fecharAvaliacao();

      feedback = (
        <Alert
          onClose={() => {
            setFeedbackAberto(false);
          }}
          severity="success"
          sx={{ width: "100%" }}
        >
          {informacaoColecaoProcesso.tipo} avaliada com sucesso
        </Alert>
      );

      abrirFeedback(feedback);
    } else {
      feedback = (
        <Alert
          onClose={() => {
            setFeedbackAberto(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          Algum campo obrigatório está em branco
        </Alert>
      );

      abrirFeedback(feedback);
    }
  }

  function checarRadioButtons(listaBotoes: HTMLCollectionOf<Element>) {
    for (let radioButton of listaBotoes) {
      if ((radioButton.children[0].children[0] as HTMLInputElement).checked) {
        return true;
      }
    }

    return false;
  }

  function checarPreenchimento(novaVerificacaoInputs: boolean[]) {
    if (novaVerificacaoInputs.length == 0) {
      return false;
    }

    for (let verificado of novaVerificacaoInputs) {
      if (!verificado && verificado != undefined) {
        return false;
      }
    }

    return true;
  }

  return (
    <>
      <Header
        informacaoColecaoProcesso={informacaoColecaoProcesso}
        avaliandoProcesso={avaliandoProcesso}
        setAvaliandoProcesso={setAvaliandoProcesso}
        aprovarProcesso={aprovarProcesso}
        fecharAvaliacao={fecharAvaliacao}
        sidebarAberta={props.sidebarAberta}
      />
      <BoxConteudo>
        <BoxContainer>
          <Container>
            <ContainerColecaoProcesso
              informacaoColecaoProcesso={informacaoColecaoProcesso}
              avaliandoProcesso={avaliandoProcesso}
              verificacaoInputs={verificacaoInputs}
            />
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              autoHideDuration={3000}
              open={feedbackAberto}
              onClose={() => {
                setFeedbackAberto(false);
              }}
            >
              {conteudoFeedback}
            </Snackbar>
          </Container>
        </BoxContainer>
      </BoxConteudo>
    </>
  );
}

/**
 * Componente para o header da página que controlará os botões que aparecerão
 * de acordo com o status atual daquele processo, informações do processo
 * e a pessoa tualmente logada
 *
 * @param props
 * @returns
 */
function Header(props: {
  informacaoColecaoProcesso: any;
  avaliandoProcesso: boolean;
  setAvaliandoProcesso: React.Dispatch<SetStateAction<boolean>>;
  aprovarProcesso: Function;
  fecharAvaliacao: Function;
  sidebarAberta: boolean;
}) {
  const [acao, setAcao] = useState("");
  const informacaoColecaoProcesso = props.informacaoColecaoProcesso;
  const tipoColecao = informacaoColecaoProcesso.tipo;
  const dataReuniao = informacaoColecaoProcesso.dataReuniao;

  useEffect(() => {
    if (tipoColecao == "Pauta") {
      // if (!informacaoColecaoProcesso.pertenceUmaATA) {
        // if (dataReuniao <= new Date()) {
        setAcao("Informar parecer");
        // }
      // }
    } else {
      if (!informacaoColecaoProcesso.numeroDG) {
        setAcao("Finalizar processo");
      }
    }
  }, []);

  function aprovarProcesso() {
    props.aprovarProcesso();
  }

  /**
   * 1º informar parecer da comissão (Pauta, já passou a data da reunião)
   * 2º finalizar processo (Ata, ainda não passou pela dg)
   * */
  return (
    <>
      <BoxHeader sx={{ width: props.sidebarAberta ? "88.35%" : "96.5%" }}>
        <Breadcrumb />
        {acao != "" && (
          <>
            {!props.avaliandoProcesso ? (
              <BotaoPrimario
                variant="contained"
                onClick={() => {
                  props.setAvaliandoProcesso(true);
                }}
              >
                {acao}
              </BotaoPrimario>
            ) : (
              <BoxBotoes>
                <BotaoPrimarioHeader
                  variant="contained"
                  onClick={aprovarProcesso}
                >
                  {" "}
                  Aprovar
                </BotaoPrimarioHeader>
                <BotaoSecundarioHeader
                  variant="outlined"
                  onClick={() => {
                    props.fecharAvaliacao();
                  }}
                >
                  {" "}
                  Cancelar
                </BotaoSecundarioHeader>
              </BoxBotoes>
            )}
          </>
        )}
      </BoxHeader>
      <Toolbar />
    </>
  );
}

/**
 * Container principal para todas as informações de uma proposta/demanda
 *
 * @param props
 * @returns
 */
function ContainerColecaoProcesso(props: {
  informacaoColecaoProcesso: any;
  avaliandoProcesso: boolean;
  verificacaoInputs: boolean[];
}) {
  const [modalAberto, setModalAberto] = useState(false)
  const informacaoColecaoProcesso = props.informacaoColecaoProcesso;
  const dataFormatada = new Date(
    informacaoColecaoProcesso.dataReuniao
  ).toLocaleDateString();

  function abrirModal(){
    setModalAberto(true)
  }

  return (
    <GridContainerColecao container spacing={2}>
      <Grid item xs={12}>
        <GridContainerHeader container>
          <GridTitulo item xs={10}>
            <Typography variant="h4">
              {informacaoColecaoProcesso.tituloReuniao}
            </Typography>
          </GridTitulo>
          <Grid item xs={2}>
            <Bandeira cor={getCorTipo(informacaoColecaoProcesso.tipo)} />
          </Grid>
        </GridContainerHeader>
      </Grid>

      <GridPequenosAtributos item xs={6}>
        <TypographyTituloAtributo variant='body1'>
          Data da reunião:
        </TypographyTituloAtributo>
        <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
          {dataFormatada}
        </TypographyTexto>
      </GridPequenosAtributos>
      <GridPequenosAtributos item xs={6}>
        <TypographyTituloAtributo variant='body1'>
          Período da reunião:
        </TypographyTituloAtributo>
        <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
          {informacaoColecaoProcesso.inicioReuniao.slice(0, 5)} - {informacaoColecaoProcesso.finalReuniao.slice(0, 5)}
        </TypographyTexto>
      </GridPequenosAtributos>
      {informacaoColecaoProcesso.tipo != "ATA" ?
        <GridPequenosAtributos item xs={6}>
          <TypographyTituloAtributo variant='body1'>
            Fórum responsável:
          </TypographyTituloAtributo>
          <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
            {informacaoColecaoProcesso.forum.nomeForum}
          </TypographyTexto>
        </GridPequenosAtributos>
        :
        <div>
          colcocar o nome das pessoas que vao participar
        </div>
      }
      <GridPequenosAtributos item xs={12}>
        <TypographyTituloAtributo variant='body1'>
          Propostas:
        </TypographyTituloAtributo>
      </GridPequenosAtributos>
      <Propostas
        listaPropostas={informacaoColecaoProcesso.propostas}
        listaPropostasAnteriores={informacaoColecaoProcesso.propostasPauta}
        tipoColecao={informacaoColecaoProcesso.tipo}
        avaliandoProcesso={props.avaliandoProcesso}
        verificacaoInputs={props.verificacaoInputs}
        tituloPauta={informacaoColecaoProcesso.tituloReuniao}
      />
      {informacaoColecaoProcesso.tipo == "ATA" && !props.avaliandoProcesso && (
        <GridFooter item xs={12}>
          <Box display={"flex"}>
            {informacaoColecaoProcesso.numeroAtaDG && (
              <>
                <TypographyTituloAtributo variant="body1">
                  Número da ATA da DG:
                </TypographyTituloAtributo>
                <TypographyTextoColecao variant="body1">
                  {informacaoColecaoProcesso.numeroAtaDG}
                </TypographyTextoColecao>
              </>
            )}
          </Box>
          <BotaoTerciario variant="outlined" onClick={abrirModal}>Ver anexos </BotaoTerciario>
        </GridFooter>
      )}
      <Dialog open={modalAberto} sx={{ '& .MuiPaper-root': { minWidth: "35vw" } }}>
        tá aberto
      </Dialog>
    </GridContainerColecao>
  );
}

function Propostas(props: {
  listaPropostas: [];
  listaPropostasAnteriores?: any[];
  tipoColecao: string;
  avaliandoProcesso: boolean;
  verificacaoInputs: boolean[];
  tituloPauta?: string;
}) {
  const [data, setData] = useState<any>()
  const eUmaPauta = props.tipoColecao == "Pauta" ? true : false;
  const location = useLocation().pathname;
  const linkProposta = location + "/proposal";

  const propostas = props.listaPropostas.map((decisaoProposta: any, index: number) => {
    let propostaAnteriorEquivalente = null

    if (props.listaPropostasAnteriores) {
      for (let propostaAnterior of props.listaPropostasAnteriores) {
        if (propostaAnterior.proposta.idProposta == decisaoProposta.proposta.idProposta) {
          propostaAnteriorEquivalente = propostaAnterior
        }
      }
    }

    return (
      <Proposta
        key={index}
        decisaoProposta={decisaoProposta}
        propostaAnterior={propostaAnteriorEquivalente}
        linkProposta={linkProposta}
        eUmaPauta={eUmaPauta}
        index={index}
        avaliandoProcesso={props.avaliandoProcesso}
        verificacaoInputs={props.verificacaoInputs}
      />
    );
  });

  return (
    <>
      {propostas}
      {props.avaliandoProcesso &&
        <>
          {eUmaPauta ?
            <>
              <Grid item xs={12}>
                <Divider sx={{ marginBottom: "10px" }} />
                <Typography variant="h5">
                  Informações ATA
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <GridInfoATA item xs={12}>
                    <TypographyTituloInput>
                      Dia da reunião
                    </TypographyTituloInput>
                    <TextField type={"date"} id="dataReuniao" />
                  </GridInfoATA>
                  <GridInfoATA item xs={12}>
                    <TypographyTituloInput>
                      Título da reunião
                    </TypographyTituloInput>
                    <TextField sx={{ width: "100%" }} id="tituloReuniao" defaultValue={props.tituloPauta} />
                  </GridInfoATA>
                  <GridInfoATA item xs={6}>
                    <TypographyTituloInput>
                      Início da reunião
                    </TypographyTituloInput>
                    <TextField type={"time"} id="inicioReuniao" defaultValue={"00:00"} />
                  </GridInfoATA>
                  <GridInfoATA item xs={6}>
                    <TypographyTituloInput>
                      Final da reunião
                    </TypographyTituloInput>
                    <TextField type={"time"} id="finalReuniao" defaultValue={"00:00"} />
                  </GridInfoATA>
                </Grid>
              </Grid>
            </>
            :
            <>
              <Grid item xs={12}>
                <TypographyTituloDecisao variant="body1">
                  Documento de aprovação:
                </TypographyTituloDecisao>
                <TextField
                  placeholder="vai ter o inputzao de arquivo"
                  multiline
                  sx={{ width: "100%" }}
                />
              </Grid>
            </>
          }

        </>
      }
    </>
  );
}

export function Proposta(props: {
  decisaoProposta: any;
  propostaAnterior?: any;
  linkProposta: string;
  eUmaPauta: boolean;
  index: number;
  avaliandoProcesso: boolean;
  verificacaoInputs: boolean[];
}) {
  const [expanded, setExpanded] = useState({ expanded: false });
  const [mensagemErroStatus, setMenssagemErroStatus] = useState("");
  const [mensagemErroATA, setMenssagemErroATA] = useState("");
  const [objetoErroNumeroATA, setObjetoErroNumeroATA] = useState({
    error: false,
    helperText: "",
  });
  const [objetoErroDocumento, setObjetoErroDocumento] = useState({
    error: false,
    helperText: "",
  });
  const verificacaoInputs = props.verificacaoInputs;
  const decisaoProposta = props.decisaoProposta;
  const forumEscolhido = props.eUmaPauta ? "comissão" : "direção geral";
  const beneficiosReais = getBeneficiosPorTipo(decisaoProposta.proposta.demanda.beneficiosDemanda, "REAL")
  const beneficioPotenciais = getBeneficiosPorTipo(decisaoProposta.proposta.demanda.beneficiosDemanda, "POTENCIAL")


  const conteudoPropostaInicio = (
    <>
      <Grid item>
        <Grid container >
          <TypographyTitulo variant='h5'>
            Informações Gerais
          </TypographyTitulo>
          <GridPequenosAtributos item xs={6}>
            <TypographyTituloAtributo variant="body1">
              Solicitante:
            </TypographyTituloAtributo>
            <TypographyTextoColecao variant="body1">
              {decisaoProposta.proposta.demanda.usuario.nomeUsuario}
            </TypographyTextoColecao>
          </GridPequenosAtributos>
        </Grid>
      </Grid>
      {
        beneficiosReais.length != 0 &&
        <Grid item xs={12}>
          <TabelaBeneficios
            title="Benefícios reais"
            atributos={beneficiosReais}
          />
        </Grid>
      }
      {
        beneficioPotenciais.length != 0 &&
        <Grid item xs={12}>
          <TabelaBeneficios
            title="Benefícios potenciais"
            atributos={beneficioPotenciais}
          />
        </Grid>
      }
      {
        decisaoProposta.proposta.tabelasCustoProposta && (
          <Grid item xs={12}>
            <TabelasCusto tabelasCusto={decisaoProposta.proposta.tabelasCustoProposta} />
          </Grid>
        )
      }
      {!props.eUmaPauta &&
        <Grid item>
          <Divider />
          <Grid container xs={12} sx={{ marginY: "8px" }} spacing={1}>
            <Grid item xs={12}>
              <TypographyTitulo variant='h5'>
                Informações de Avaliação do Fórum
              </TypographyTitulo>
            </Grid>
            <GridPequenosAtributos item xs={6}>
              <TypographyTituloAtributo variant='body1'>
                Estará em pauta Publicada :
              </TypographyTituloAtributo>
              <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
                {props.propostaAnterior.ataPublicada ? "Sim" : "Não"}
              </TypographyTexto>
            </GridPequenosAtributos>
            <GridPequenosAtributos item xs={6}>
              <TypographyTituloAtributo variant='body1'>
                Status escolhido:
              </TypographyTituloAtributo>
              <TypographyTexto variant='body1' sx={{ marginLeft: "5px" }}>
                {getNomeStatus(props.propostaAnterior.statusDemandaComissao)}
              </TypographyTexto>
            </GridPequenosAtributos>
            <Grid item>
              <TypographyTexto variant='body1' >
                <b>Comentário :</b>   {props.propostaAnterior.comentario}
              </TypographyTexto>
            </Grid>
          </Grid>
        </Grid>
      }
      <Grid item xs={12}>
        <GridLinkTypograpfy variant="body2" width="auto !important">
          <Link
            to={props.linkProposta}
            onClick={() => {
              setProposta(decisaoProposta.proposta);
            }}
          >
            Ver mais
          </Link>
        </GridLinkTypograpfy>
      </Grid>
    </>
  );

  const conteudoPropostaAvaliacao = (
    <>
      <Grid item xs>
        <TypographyTituloDecisao variant="body1">
          Parecer da {forumEscolhido}
        </TypographyTituloDecisao>
        <FormControl error>
          <RadioGroup sx={{ flexDirection: "row" }}>
            <FormControlLabel
              className={`radioButtonStatus${props.index}`}
              value="Canceled"
              control={<Radio sx={{ "&.Mui-checked": { color: "#FF1616" } }} />}
              label="Canceled"
            />
            <FormControlLabel
              className={`radioButtonStatus${props.index}`}
              value="Business Case"
              control={<Radio sx={{ "&.Mui-checked": { color: "#FFD600" } }} />}
              label="Business Case"
            />
            <FormControlLabel
              className={`radioButtonStatus${props.index}`}
              value="To do"
              control={<Radio sx={{ "&.Mui-checked": { color: "#00612E" } }} />}
              label="To do"
            />
            <FormControlLabel
              className={`radioButtonStatus${props.index}`}
              value="Assesment"
              control={<Radio sx={{ "&.Mui-checked": { color: "#595959" } }} />}
              label="Assesment"
            />
          </RadioGroup>
          <FormHelperText id="component-error-text">
            {mensagemErroStatus}
          </FormHelperText>
        </FormControl>
      </Grid>
      {!props.eUmaPauta ? (
        <>
          <Grid item xs={4}>
            <TypographyTituloDecisao variant="body1">
              Número da ATA da DG:
            </TypographyTituloDecisao>
            <TextField
              type="number"
              id={`inputNumeroATA${props.index}`}
              onChange={checarValor}
              {...objetoErroNumeroATA}
            />
          </Grid>
        </>
      ) : (
        <Grid item xs={12}>
          <TypographyTituloDecisao variant="body1">
            Forma de publicação
          </TypographyTituloDecisao>
          <FormControl error>
            <RadioGroup sx={{ flexDirection: "row" }}>
              <FormControlLabel
                className={`radioButtonATA${props.index}`}
                value="Ata publicada"
                control={<Radio />}
                label="Ata publicada"
              />
              <FormControlLabel
                className={`radioButtonATA${props.index}`}
                value="Ata não publicada"
                control={<Radio />}
                label="Ata não publicada"
              />
            </RadioGroup>
            <FormHelperText id="component-error-text">
              {mensagemErroATA}
            </FormHelperText>
          </FormControl>
        </Grid>
      )}
      <Grid item xs={12}>
        <TypographyTituloDecisao variant="body1">
          Comentários
        </TypographyTituloDecisao>
        <TextField
          placeholder="Coloque aqui pontos interessantes que foram discutidos durante a reunião"
          multiline
          rows={5}
          sx={{ width: "100%" }}
        />
      </Grid>
    </>
  );

  useEffect(() => {
    if (verificacaoInputs == null || verificacaoInputs.length == 0) {
      return;
    }

    const primeiroIndexProposta = props.index * 10;

    if (!verificacaoInputs[primeiroIndexProposta + 1]) {
      setMenssagemErroStatus("Nenhum status selecionado");
      setExpanded({ expanded: true });
    } else {
      setMenssagemErroStatus("");
    }

    if (props.eUmaPauta) {
      if (!verificacaoInputs[primeiroIndexProposta + 2]) {
        setMenssagemErroATA("Escolha uma das opções");
        setExpanded({ expanded: true });
      } else {
        setMenssagemErroATA("");
      }
    } else {
      if (!verificacaoInputs[primeiroIndexProposta + 3]) {
        setObjetoErroNumeroATA({
          error: true,
          helperText: "Informe o número da ATA da Direção Geral",
        });
        setExpanded({ expanded: true });
      } else {
        setObjetoErroNumeroATA({ error: false, helperText: "" });
      }

      if (!verificacaoInputs[primeiroIndexProposta + 4]) {
        setObjetoErroDocumento({
          error: true,
          helperText: "Adicione o documento de aprovação",
        });
        setExpanded({ expanded: true });
      } else {
        setObjetoErroDocumento({ error: false, helperText: "" });
      }
    }
  }, [verificacaoInputs]);

  useEffect(() => {
    if (props.avaliandoProcesso && props.index == 0) {
      setExpanded({ expanded: true });
    } else {
      setExpanded({ expanded: false });
    }
  }, [props.avaliandoProcesso]);

  function checarValor(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const valor = Number.parseInt(e.target.value);
    if (valor < 0) {
      e.target.value = 0 + "";
    }
  }

  function setProposta(proposta: any) {
    localStorage.setItem("PROPOSTAESCOLHIDA", JSON.stringify(proposta));
  }

  function mudarAcordeon() {
    setExpanded({ expanded: !expanded.expanded });
  }

  return (
    <Grid
      item
      xs={12}
      key={decisaoProposta.id}
      sx={{ backgroundColor: "transparent" }}
    >
      <CardProposta cor={getCorStatus(decisaoProposta.proposta.demanda.statusDemanda)}>
        <AccordionProposta {...expanded}>
          <AccordionSummary
            onClick={mudarAcordeon}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" sx={{ color: "#595959" }}>
              {decisaoProposta.proposta.demanda.tituloDemanda}
            </Typography>

          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Grid container spacing={2}>
              {!props.avaliandoProcesso
                ? conteudoPropostaInicio
                : conteudoPropostaAvaliacao}
            </Grid>
          </AccordionDetails>
        </AccordionProposta>
      </CardProposta>
    </Grid>
  );
}
