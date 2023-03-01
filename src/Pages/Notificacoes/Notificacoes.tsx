import { useEffect, useState } from "react";
import api from "../../api/api";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Notificacao from "../../Components/Notificacao/Notificacao";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import EditNotificationsRoundedIcon from "@mui/icons-material/EditNotificationsRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { BoxContainerNotificacoes } from "./Notificacoes.styles";

/**
 * Lista de notificações, cuja função é usar como algo mais dinâmico com o componente de notificação
 */
const listaNotificacoes: {
  id: number;
  Icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  titulo: string;
  mensagem: string;
}[] = [
    {
      id: 1,
      Icone: EditNotificationsRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda",
    },
    {
      id: 2,
      Icone: CheckBoxRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda",
    },
    {
      id: 3,
      Icone: EventAvailableRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda",
    },
    {
      id: 4,
      Icone: EditNotificationsRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda",
    },
    {
      id: 5,
      Icone: CheckBoxRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda",
    },
    {
      id: 6,
      Icone: EventAvailableRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda",
    },
  ];

/**
 *
 * @returns Retorna uma lista de componentes de notificações, sendo que cada componente tem seus dados puxados de um lista estatica
 */
export default function Notificacoes() {

  interface TipoNotificacao {
    DEMANDA: string
    PROPOSTA: string
    PAUTA: string
    ATA: string
    CHAT: string
  }

  interface AcaoNotificacao {
    DEMANDAAPROVADA: string,
    REDEFINICAOREQUERIDA: string
    NOVOWORKFLOWAPROVACAO: string
    CHAT: string
    REUNIAO: string
    STATUSDEMANDA: string
    PRAZOELABORACAO: string
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

  // const [lista, setLista] = useState(listaNotificacoes);
  localStorage.setItem("PAGINATUAL", "notification");
  const idUsuario = localStorage.getItem("IDUSUARIO");

  const [notificacoes, setNotificacoes] = useState([]);

  let icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };

  useEffect(() => {
    api.get(`/sod/usuario/${idUsuario}`)
      .then((notificacao) => {
        setNotificacoes(notificacao.data.notificacoesUsuario)
      }).catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <BoxContainerNotificacoes>
      <Breadcrumb />
      <Container>
        <Box>
          {notificacoes.map((notificacao: NotificacaoInfo) => {
            if (notificacao.acao == "DEMANDAAPROVADA") {
              icone = CheckBoxRoundedIcon;
            } else if (notificacao.acao == "REDEFINICAOREQUERIDA") {
              icone = EditNotificationsRoundedIcon;
            } else if (notificacao.acao == "NOVOWORKFLOWAPROVACAO") {
              icone = LanRoundedIcon;
            } else if (notificacao.acao == "CHAT") {
              icone = QuestionAnswerRoundedIcon;
            } else if (notificacao.acao == "REUNIAO") {
              icone = GroupsRoundedIcon;
            } else if (notificacao.acao == "STATUSDEMANDA") {
              icone = NewReleasesRoundedIcon;
            } else if (notificacao.acao == "PRAZOELABORACAO") {
              icone = AccessTimeRoundedIcon;
            }

            return (
              <Notificacao key={notificacao.idNotificacao}
                idNotificacao={notificacao.idNotificacao}
                Icone={icone}
                titulo={notificacao.tituloNotificacao}
                mensagem={notificacao.descricaoNotificacao}
              // notificacoes={notificacoes}
              // setNotificacoes={setNotificacoes} 
              />
            )
          })}
        </Box>
      </Container>
    </BoxContainerNotificacoes>
  );
}
