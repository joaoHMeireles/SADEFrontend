import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNomeComponente, getCorStatus, getCorTipo, getBeneficiosPorTipo, getNomeStatus, getKeyEnum, getIconeArquivo, baixarArquivo } from "../../utils";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Toolbar from "../../Components/Toolbar/Toolbar";
import TabelaBeneficios from "../../Components/Tabelas/TabelaBeneficios/TabelaBeneficios";
import TabelasCusto from "../../Components/Tabelas/TabelaCentroCusto/TabelaCentroCusto";
import InputAnexos from "../../Components/InputAnexos/InputAnexos";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
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
  List,
  ListItemIcon,
  ListItem,
  IconButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import {
  BoxConteudoModal,
  BoxHeader,
  BoxTituloModal,
  CircleIconPonto,
  GridPequenosAtributos,
  TypographyTexto,
  TypographyTitulo,
  TypographyTituloAtributo,
  TypographyTituloModal,
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
  BoxInputsNumeros,
  GridContainerColecao,
  GridFooter,
  TextFieldEdited,
  GridInfoATA,
  TypographyTextoColecao,
  TypographyTituloDecisao,
  TypographyTituloInput,
} from "./TelaColecaoProcesso.styles";
import {
  GridContainerHeader,
  GridTitulo,
} from "../../Components/ContainerProcesso/ContainerProcesso.styles";
import Bandeira from "../../Components/Bandeira/Bandeira";
import CardProposta from "../../Components/CardProposta/CardProposta";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { StatusComponenteProcesso, TipoComponenteProcesso } from "../../constants/enuns";
import api from "../../api/api";
import { BotaoPrimarioHeader, BotaoSecundarioHeader, BoxBotoes } from "../../Components/ButtonsHeader/ButtonsHeader.styles";
import imagemSemNada from "../../Assets/emptyFolder.png"

export default function TelaColecaoProcesso(props: { sidebarAberta: boolean }) {
  const [avaliandoProcesso, setAvaliandoProcesso] = useState(false);
  const [verificacaoInputs, setVerificacaoInputs] = useState<boolean[]>([]);
  const [feedbackAberto, setFeedbackAberto] = useState(false);
  const [conteudoFeedback, setConteudoFeedback] = useState(<div />);
  const [files, setFiles] = useState<any[]>([])
  const [expanded, setExpanded] = useState({ expanded: false });
  const location = useLocation().pathname;
  const idLocalStorage = localStorage.getItem(
    `${getNomeComponente(location)}ESCOLHIDA`
  );
  const [informacaoColecaoProcesso, setInformacaoColecaoProcesso] = useState(JSON.parse(
    idLocalStorage != null ? idLocalStorage : ""
  ))
  const idUsuario = localStorage.getItem("IDUSUARIO")

  useEffect(() => {
    const idRequisicao = informacaoColecaoProcesso.idPauta ? informacaoColecaoProcesso.idPauta : informacaoColecaoProcesso.pauta.idPauta

    api.get("/sade/pauta/arquivos/" + idRequisicao).then((response) => {
      informacaoColecaoProcesso.arquivos = response.data
    }).catch((err) => {
      console.log(err);
    })
  }, [])

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
          `radioButtonPublicacao${i}`
        );
        let tipoAtaPreenchida = checarRadioButtons(radioButtonsAta);

        novaVerificacaoInputs[primeiroIndexProposta + 2] = tipoAtaPreenchida
          ? true
          : false;
      } else {
        const inputNumeroAta = (
          document.getElementById(`inputNumeroATA${i}`) as HTMLInputElement
        ).value;

        novaVerificacaoInputs[primeiroIndexProposta + 3] =
          inputNumeroAta != "" ? true : false;
      }
    }

    setVerificacaoInputs(novaVerificacaoInputs);

    if (checarPreenchimento(novaVerificacaoInputs)) {
      if (informacaoColecaoProcesso.tipo != "ATA") {
        console.log("entrou");

        // console.log(document.getElementById("dataReuniao"));


        const decisoesPauta: any[] = []
        // console.log(dataReuniao);
        // console.log(dataReuniaoCerta);


        for (let i = 0; i < informacaoColecaoProcesso.propostas.length; i++) {
          const botoesStatusDemanda = document.getElementsByClassName(`radioButtonStatus${i}`)
          const botoesFormaPublicacao = document.getElementsByClassName(`radioButtonPublicacao${i}`)
          const comentario = (document.getElementById(`comentario${i}`) as HTMLInputElement).value
          const formatoPublicacaoEscolhido = (botoesFormaPublicacao[0].children[0].children[0] as HTMLInputElement).checked
          let statusEscolhido = ""

          for (let botaoRadio of botoesStatusDemanda) {
            if ((botaoRadio.children[0].children[0] as HTMLInputElement).checked) {
              statusEscolhido = (botaoRadio.children[0].children[0] as HTMLInputElement).value
            }
          }

          statusEscolhido = statusEscolhido.replace(" ", "")
          statusEscolhido = statusEscolhido.replace("d", "D")

          console.log("status escolhido: " + statusEscolhido);


          let propostaPauta = {
            idDecisaoPropostaPauta: informacaoColecaoProcesso.propostas[i].idDecisaoPropostaPauta,
            statusDemandaComissao: getKeyEnum(StatusComponenteProcesso, statusEscolhido),
            ataPublicada: formatoPublicacaoEscolhido,
            comentario: comentario,
            proposta: informacaoColecaoProcesso.propostas[i].proposta
          }

          decisoesPauta.push(propostaPauta);
        }

        const infoPauta = {
          ...informacaoColecaoProcesso,
          propostasPauta: decisoesPauta
        }

        const { propostas, tipo, tituloReuniao, pertenceUmaATA, arquivos, idPauta, ...pautaEditar } = infoPauta

        const formDataPauta = new FormData()

        formDataPauta.append("pauta", JSON.stringify(pautaEditar))

        if (files != null) {
          if (files.length != 0) {
            for (const file of files) {
              formDataPauta.append("arquivos", file)
            }
          }
        }

        console.log(pautaEditar);


        api.put("/sade/pauta/" + idPauta + "/" + idUsuario, formDataPauta).then((response) => {
          console.log(response);


          if (expanded.expanded) {
            const tituloReuniaoInput = (document.getElementById("tituloReuniao") as HTMLInputElement).value
            const dataReuniao = (document.getElementById("dataReuniao") as HTMLInputElement).value
            const inicioReuniao = (document.getElementById("inicioReuniao") as HTMLInputElement).value
            const finalReuniao = (document.getElementById("finalReuniao") as HTMLInputElement).value
            let dataReuniaoCerta = dataReuniao.slice(6) + "/" + dataReuniao.slice(0, 5)
            dataReuniaoCerta = dataReuniaoCerta.replaceAll("/", "-")

            const ataDTO = {
              pauta: response.data,
              tituloReuniaoATA: tituloReuniaoInput,
              dataReuniao: dataReuniaoCerta,
              inicioReuniao: inicioReuniao + ":" + "00",
              finalReuniao: finalReuniao + ":" + "00"
            }

            api.post("/sade/ata", ataDTO).then((responseATA) => {

              console.log(responseATA);

              acaoFinalizada()
            })
          } else {
            acaoFinalizada()
          }
        }).catch((err) => {
          console.log(err);
        })

      } else {
        const decisoesATA: any[] = []

        for (let i = 0; i < informacaoColecaoProcesso.propostas.length; i++) {
          const botoesStatusDemanda = document.getElementsByClassName(`radioButtonStatus${i}`)
          const numeroATADG = (document.getElementById(`inputNumeroATA${i}`) as HTMLInputElement).value
          const comentario = (document.getElementById(`comentario${i}`) as HTMLInputElement).value
          let statusEscolhido = ""

          for (let botaoRadio of botoesStatusDemanda) {
            if ((botaoRadio.children[0].children[0] as HTMLInputElement).checked) {
              statusEscolhido = (botaoRadio.children[0].children[0] as HTMLInputElement).value
            }
          }

          const chaveEnum = getKeyEnum(StatusComponenteProcesso, statusEscolhido)

          let propostaATA = {
            ...informacaoColecaoProcesso.propostas[i],
            numeroSequencial: numeroATADG,
            statusDemandaComissao: chaveEnum != null ? chaveEnum : "TODO",
            comentario: comentario
          }

          const { idDecisaoPropostaAta, ...propostaATACerta } = propostaATA

          decisoesATA.push(propostaATACerta);
        }

        const numeroAno = document.getElementById("numeroAno") as HTMLInputElement;
        const numeroDG = document.getElementById("numeroDG") as HTMLInputElement;

        let todaInfoATA = {
          ...informacaoColecaoProcesso,
          numeroAno: numeroAno.value,
          numeroDG: numeroDG.value,
          propostasAta: decisoesATA
        }

        const { tipo, propostasPauta, propostas, idATA, tituloReuniao, tituloReuniaoATA, pauta, arquivos, usuariosReuniaoATA, ...ataEditar } = todaInfoATA

        const formData = new FormData()

        formData.append("ata", JSON.stringify(ataEditar))

        if (files != null) {
          if (files.length != 0) {
            for (const file of files) {
              formData.append("arquivos", file)
            }
          }
        }

        api.put("/sade/ata/" + informacaoColecaoProcesso.idATA + "/" + idUsuario, formData).then((response) => {
          console.log(response);

          acaoFinalizada()
        }).catch((err) => {
          console.log(err);
        })

      }
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

  function acaoFinalizada() {
    fecharAvaliacao();

    let feedback = (
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
        sidebarAberta={props.sidebarAberta} />

      <BoxConteudo>
        <BoxContainer>
          <Container>
            <ContainerColecaoProcesso
              informacaoColecaoProcesso={informacaoColecaoProcesso}
              avaliandoProcesso={avaliandoProcesso}
              verificacaoInputs={verificacaoInputs}
              files={files}
              setFiles={setFiles}
              expanded={expanded}
              setExpanded={setExpanded} />

            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              autoHideDuration={3000}
              open={feedbackAberto}
              onClose={() => {
                setFeedbackAberto(false);
              }}>
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
      if (informacaoColecaoProcesso.propostas[0].statusDemandaComissao != null) {
        setAcao("Criar ATA")
      } else {
        if (!informacaoColecaoProcesso.pertenceUmaATA) {
          // if (dataReuniao <= new Date()) {
          setAcao("Informar parecer");
          // }
        }
      }
    } else {
      if (!informacaoColecaoProcesso.numeroDG) {
        // if (dataReuniao <= new Date()) {
        setAcao("Finalizar processo");
        // }
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
              <>
                <BotaoPrimario
                  variant="contained"
                  onClick={() => {
                    if (acao != "Criar ATA") {
                      props.setAvaliandoProcesso(true);
                    } else {
                      localStorage.setItem("PAUTACRIARATA", JSON.stringify(informacaoColecaoProcesso))
                      location.href = "/createata"
                    }
                  }}>
                  {acao}
                </BotaoPrimario>
              </>
            ) : (
              <BoxBotoes>
                <BotaoPrimarioHeader
                  variant="contained"
                  onClick={aprovarProcesso}>
                  {" "}
                  Aprovar
                </BotaoPrimarioHeader>
                <BotaoSecundarioHeader
                  variant="outlined"
                  onClick={() => {
                    props.fecharAvaliacao();
                  }}>
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
  files: any;
  setFiles: React.Dispatch<SetStateAction<any>>;
  expanded: any;
  setExpanded: React.Dispatch<SetStateAction<any>>;
}) {
  const [modalAberto, setModalAberto] = useState(false)
  const [anexos, setAnexos] = useState([])
  const informacaoColecaoProcesso = props.informacaoColecaoProcesso;
  const dataFormatada = new Date(
    informacaoColecaoProcesso.dataReuniao
  ).toLocaleDateString();

  function abrirModal() {
    setAnexos(props.informacaoColecaoProcesso.arquivos.map((anexo: any, index: number) => {
      const IconeAnexo = getIconeArquivo(anexo.nome)
      console.log(anexo);

      return (
        <ListItem key={index}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" type='button' onClick={() => { baixarArquivo(anexo) }} >
              <FileDownloadRoundedIcon />
            </IconButton>
          }>
          <ListItemIcon>
            <IconeAnexo />
          </ListItemIcon>
          <ListItemText
            primary={anexo.nome}
            secondary={`Anexado por ${anexo.insersor.nomeUsuario}`}
          />
        </ListItem >
      )
    }))
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

            <Divider />
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
        <Grid item>
          <TypographyTexto variant='body1' >
            <b>Pessoas presentes na reunião:</b>
          </TypographyTexto>

          <List>
            {informacaoColecaoProcesso.usuariosReuniaoATA.map((usuario: any, index: number) => {
              return (
                <ListItem key={index} sx={{ textAlign: "justify" }}>
                  <ListItemIcon>
                    <CircleIconPonto />
                  </ListItemIcon>
                  {usuario.nomeUsuario} - {usuario.cargo} - {usuario.numeroCadastro}
                </ListItem>
              )
            })
            }
          </List>
        </Grid>
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
        files={props.files}
        setFiles={props.setFiles}
        expanded={props.expanded}
        setExpanded={props.setExpanded} />

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

          <BotaoTerciario variant="outlined" onClick={abrirModal}>
            Ver anexos
          </BotaoTerciario>
        </GridFooter>
      )}
      <Dialog open={modalAberto} sx={{ '& .MuiPaper-root': { minWidth: "35vw" } }}>
        <BoxConteudoModal>
          <BoxTituloModal >
            <TypographyTituloModal variant='h5' >
              Anexos da {informacaoColecaoProcesso.tipo.toLowerCase()}
            </TypographyTituloModal>

            <IconButton onClick={() => { setModalAberto(false) }}>
              <CloseIcon />
            </IconButton>
          </BoxTituloModal>

          {anexos == null || anexos.length < 1 ?
            <ResultadoVazio imagem={imagemSemNada} legenda={"Sem anexos aqui!"} />
            :
            <List>
              {anexos}
            </List>
          }
        </BoxConteudoModal>
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
  files: any;
  setFiles: React.Dispatch<SetStateAction<any>>;
  expanded: any;
  setExpanded: React.Dispatch<SetStateAction<any>>;
}) {
  const [valorData, setValorData] = useState<Dayjs | null>(null)
  const [inicioReuniao, setInicioReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T13:30'));
  const [finalReuniao, setFinalReuniao] = useState<Dayjs | any>(dayjs('2022-04-17T14:30'));
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
        verificacaoInputs={props.verificacaoInputs} />
    );
  });

  function mudarAcordeon() {
    props.setExpanded({ expanded: !props.expanded.expanded });
  }

  const adicionarIcon = (
    <Tooltip title="Você pode já criar a ata da reunião da Direção geral">
      <AddRoundedIcon />
    </Tooltip>
  )

  return (
    <>
      {propostas}
      {props.avaliandoProcesso &&
        <>
          {eUmaPauta ?
            <>
              <AccordionProposta {...props.expanded} sx={{ border: "none", borderTop: "#fff" }} >
                <AccordionSummary
                  onClick={mudarAcordeon}
                  expandIcon={props.expanded.expanded ? <RemoveRoundedIcon /> : adicionarIcon}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ border: "none", borderTop: "#fff" }}>
                  {props.expanded.expanded ?
                    <>
                      <Typography variant="h5" sx={{ color: "#444" }}>
                        Informações ATA
                      </Typography>
                    </>
                    :
                    <>
                      <Box sx={{ fontSize: "12px", width: "100%", display: "flex", justifyContent: "end" }}>
                        <Tooltip title="Você pode já criar a ata da reunião da Direção geral">
                          <span>
                            Criar ATA
                          </span>
                        </Tooltip>
                      </Box>
                    </>
                  }
                </AccordionSummary>

                <AccordionDetails sx={{ border: "none", borderTop: "#fff" }}>
                  <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
                    <Box sx={{ marginBottom: "2rem", width: "100%" }}>
                      <TypographyTituloInput>
                        Título da reunião:
                      </TypographyTituloInput>

                      <TextFieldEdited sx={{ width: "100%" }} id="tituloReuniao" defaultValue={props.tituloPauta} />
                    </Box>

                    <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-between", marginBottom: "2rem", width: "100%" }}>
                      <Box>
                        <TypographyTituloInput>
                          Data da reunião:
                        </TypographyTituloInput>

                        <DatePicker
                          value={valorData}
                          onChange={(newValue) => {
                            setValorData(newValue);
                          }}
                          renderInput={(params: any) => <TextField id='dataReuniao' {...params} />}
                          InputProps={{
                            sx: {
                              backgroundColor: "#eee",
                              borderRadius: "10px",
                              boxShadow: "5px 5px 10px 0 #00000025",
                              "& fieldset": { border: "none" },
                              marginRight: "1rem",
                              width: "15vw"
                            }
                          }}
                          disablePast />
                      </Box>

                      <Box>
                        <TypographyTituloInput>
                          Início da reunião:
                        </TypographyTituloInput>

                        <TimePicker
                          ampm={false}
                          value={inicioReuniao}
                          onChange={(newValue) => setInicioReuniao(newValue)}
                          renderInput={(params: any) => {
                            return <TextField id="inicioReuniao" {...params} />;
                          }}
                          InputProps={{
                            sx: {
                              backgroundColor: "#eee",
                              borderRadius: "10px",
                              boxShadow: "5px 5px 10px 0 #00000025",
                              "& fieldset": { border: "none" },
                              width: "15vw"
                            }
                          }} />
                      </Box>

                      <Box>
                        <TypographyTituloInput>
                          Final da reunião:
                        </TypographyTituloInput>

                        <TimePicker
                          ampm={false}
                          value={finalReuniao}
                          onChange={(newValue) => setFinalReuniao(newValue)}
                          renderInput={(params: any) => {
                            return <TextField id="finalReuniao" {...params} />;
                          }}
                          InputProps={{
                            sx: {
                              backgroundColor: "#eee",
                              borderRadius: "10px",
                              boxShadow: "5px 5px 10px 0 #00000025",
                              "& fieldset": { border: "none" },
                              marginLeft: "1rem",
                              width: "15vw"
                            }
                          }} />
                      </Box>
                    </Box>

                    <InputAnexos rascunho={false} proposta={false} files={props.files} setFiles={props.setFiles} />
                  </Box>
                </AccordionDetails>
              </AccordionProposta>
            </>
            :
            <>
              <BoxInputsNumeros>
                <Box>
                  <TypographyTituloDecisao>Número/Ano: </TypographyTituloDecisao>

                  <TextFieldEdited type="number" id="numeroAno"></TextFieldEdited>
                </Box>

                <Box>
                  <TypographyTituloDecisao>Número da DG: </TypographyTituloDecisao>

                  <TextFieldEdited type="number" id="numeroDG"></TextFieldEdited>
                </Box>
              </BoxInputsNumeros>

              <InputAnexos rascunho={false} proposta={false} files={props.files} setFiles={props.setFiles} />
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
            atributos={beneficiosReais} />
        </Grid>
      }
      {
        beneficioPotenciais.length != 0 &&
        <Grid item xs={12}>
          <TabelaBeneficios
            title="Benefícios potenciais"
            atributos={beneficioPotenciais} />
        </Grid>
      }
      {
        decisaoProposta.proposta.tabelasCustoProposta && (
          <Grid item xs={12}>
            <TabelasCusto tabelasCusto={decisaoProposta.proposta.tabelasCustoProposta} />
          </Grid>
        )
      }
      <Grid item xs={12}>
        <GridLinkTypograpfy variant="body2" width="auto !important">
          <Link
            to={props.linkProposta}
            onClick={() => {
              setProposta(decisaoProposta.proposta);
            }}>
            Ver mais
          </Link>
        </GridLinkTypograpfy>
      </Grid>
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
                Estará em pauta Publicada:
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
              <TypographyTexto variant='body1' sx={{ color: "#444" }}>
                <b>Comentário: </b>
                {props.propostaAnterior.comentario}
              </TypographyTexto>
            </Grid>
          </Grid>
        </Grid>
      }
    </>
  );

  const conteudoPropostaAvaliacao = (
    <Box sx={{ margin: "2rem 0 0 1rem", width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <TypographyTituloDecisao variant="body1" sx={{ marginBottom: "0rem !important" }}>
          Parecer da {forumEscolhido}:
        </TypographyTituloDecisao>

        <FormControl error>
          <RadioGroup sx={{ flexDirection: "row" }}>
            <FormControlLabel
              className={`radioButtonStatus${props.index}`}
              value="Cancelled"
              control={<Radio sx={{ "&.Mui-checked": { color: "#ff1616" } }} />}
              label="Cancelled" />

            <FormControlLabel
              className={`radioButtonStatus${props.index}`}
              value="Business Case"
              control={<Radio sx={{ "&.Mui-checked": { color: "#ffd600" } }} />}
              label="Business Case" />

            <FormControlLabel
              className={`radioButtonStatus${props.index}`}
              value="To do"
              control={<Radio sx={{ "&.Mui-checked": { color: "#00612e" } }} />}
              label="To do" />

            <FormControlLabel
              className={`radioButtonStatus${props.index}`}
              value="Assessment"
              control={<Radio sx={{ "&.Mui-checked": { color: "#ef8300" } }} />}
              label="Assessment" />
          </RadioGroup>

          <FormHelperText id="component-error-text">
            {mensagemErroStatus}
          </FormHelperText>
        </FormControl>
      </Box>
      {!props.eUmaPauta ? (
        <Box sx={{ marginTop: "1rem" }}>
          <Box>
            <TypographyTituloDecisao variant="body1">
              Número Sequencial:
            </TypographyTituloDecisao>

            <TextFieldEdited
              type="number"
              id={`inputNumeroATA${props.index}`}
              onChange={checarValor}
              {...objetoErroNumeroATA} />
          </Box>
        </Box>
      ) : (
        <Grid item xs={12}>
          <TypographyTituloDecisao variant="body1">
            Forma de publicação:
          </TypographyTituloDecisao>

          <FormControl error>
            <RadioGroup sx={{ flexDirection: "row" }}>
              <FormControlLabel
                className={`radioButtonPublicacao${props.index}`}
                value="Ata publicada"
                control={<Radio />}
                label="Ata publicada" />

              <FormControlLabel
                className={`radioButtonPublicacao${props.index}`}
                value="Ata não publicada"
                control={<Radio />}
                label="Ata não publicada" />
            </RadioGroup>

            <FormHelperText id="component-error-text">
              {mensagemErroATA}
            </FormHelperText>
          </FormControl>
        </Grid>
      )}
      <Box sx={{ marginTop: "2rem" }}>
        <TypographyTituloDecisao variant="body1">
          Comentários:
        </TypographyTituloDecisao>

        <TextFieldEdited
          id={`comentario${props.index}`}
          placeholder="Coloque aqui pontos interessantes que foram discutidos durante a reunião"
          multiline
          rows={5}
          sx={{ width: "100%" }} />
      </Box>
    </Box>
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

    for (let atributo in proposta.demanda) {
      proposta[atributo] = proposta.demanda[atributo]
    }

    proposta.tipo = TipoComponenteProcesso.Proposta
    proposta.id = proposta.idProposta

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
      sx={{ backgroundColor: "transparent" }}>

      <CardProposta cor={getCorStatus(decisaoProposta.proposta.demanda.statusDemanda)} tamanhoCorCard={0.1} >
        <AccordionProposta {...expanded}>
          <AccordionSummary
            onClick={mudarAcordeon}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography variant="h5" sx={{ color: "#444" }}>
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