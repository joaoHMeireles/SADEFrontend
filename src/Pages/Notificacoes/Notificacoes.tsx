import { useEffect, useState } from "react";
import api from "../../api/api";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Notificacao from "../../Components/Notificacao/Notificacao";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import EditNotificationsRoundedIcon from "@mui/icons-material/EditNotificationsRounded";
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { BoxContainerNotificacoes } from "./Notificacoes.styles";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";

import semNotificacao from "../../Assets/notification-bell.png"
import { useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";

/**
 *
 * @returns Retorna uma lista de componentes de notificações, sendo que cada componente tem seus dados puxados de um lista estatica
 */
export default function Notificacoes() {
  localStorage.setItem("PAGINATUAL", "notification");
  const idUsuario = localStorage.getItem("IDUSUARIO");
  const [notificacoes, setNotificacoes] = useState<any[]>([]);

  let icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };

  useEffect(() => {
    api.get(`/sod/usuario/${idUsuario}`)
      .then((notificacao) => {
        setNotificacoes(notificacao.data.notificacoesUsuario)
        atualizarNotificacoes(setNotificacoes)
      }).catch(err => {
        console.log(err);
      })
  }, [])

  function getTipoIcone(acao: string) {
    for (let i = 0; i < notificacoes.length; i++) {
      if (acao == "DEMANDAAPROVADA") {
        icone = CheckBoxRoundedIcon;
      } else if (acao == "REDEFINICAOREQUERIDA") {
        icone = EditNotificationsRoundedIcon;
      } else if (acao == "NOVOWORKFLOWAPROVACAO") {
        icone = LanRoundedIcon;
      } else if (acao == "CHAT") {
        icone = QuestionAnswerRoundedIcon;
      } else if (acao == "REUNIAO") {
        icone = GroupsRoundedIcon;
      } else if (acao == "STATUSDEMANDA") {
        icone = NewReleasesRoundedIcon;
      } else if (acao == "PRAZOELABORACAO") {
        icone = AccessTimeRoundedIcon;
      } else if (acao == "AVALIARDEMANDA") {
        icone = CheckBoxRoundedIcon;
      } else if (acao == "VIROUATA") {
        icone = CheckBoxRoundedIcon;
      }
    }
  }

  const notificacoesElement = notificacoes.map((notificacao: any) => {
    getTipoIcone(notificacao.acao)
    return (
      <Notificacao key={notificacao.idNotificacao}
        idNotificacao={notificacao.idNotificacao}
        Icone={icone}
        titulo={notificacao.tituloNotificacao}
        mensagem={notificacao.descricaoNotificacao}
        notificacoes={notificacoes}
        setNotificacoes={setNotificacoes}
        tipoNotificacao={notificacao.tipoNotificacao}
        linkNotificacao={notificacao.linkNotificacao}
        idComponenteLink={notificacao.idComponenteLink}
      />
    )
  })


  return (
    <BoxContainerNotificacoes>
      <Breadcrumb />
      <Container>
        <Box>
          {notificacoesElement.length != 0 ?
            <>
              {notificacoesElement}
            </>
            :
            <ResultadoVazio imagem={semNotificacao} legenda={"Nenhuma notificação presente"} />
          }
        </Box>
      </Container>
    </BoxContainerNotificacoes>
  );
}

export const atualizarNotificacoes = (setNotificacoes?: any, novaNotifica?: any) => {
  if (setNotificacoes && novaNotifica) {
    setNotificacoes((notificacoesPrevias: any) => [...notificacoesPrevias, novaNotifica])
  }
}

export const novaNotificacao = (response: any) => {  
  const location = useLocation()

  const novaNotifica = JSON.parse(response.body);

  if (location.pathname == "/notifications") {
    atualizarNotificacoes(novaNotifica)
  } else {    
    semAtualizarNotificacao(novaNotifica)

    // pesquisar propriedade MUI que adiciona isso
    // deixar bolinha da notificação vermelha
  }
}

function semAtualizarNotificacao(notificacao: any){
  console.log("Notificacao: " + notificacao);
}


interface TipoNotificacao {
  DEMANDA: string
  PROPOSTA: string
  PAUTA: string
  ATA: string
  CHAT: string
}


interface NotificacaoInfo {
  idNotificacao: number
  tituloNotificacao: string
  descricaoNotificacao: string
  linkNotificacao: string
  tipoNotificacao: TipoNotificacao
  idComponenteLink: number
  acao: string
}
