import { useState } from "react";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Notificacao from "../../Components/Notificacao/Notificacao";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import EditNotificationsRoundedIcon from "@mui/icons-material/EditNotificationsRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
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

const [lista, setLista] = useState(listaNotificacoes);

/**
 *
 * @returns Retorna uma lista de componentes de notificações, sendo que cada componente tem seus dados puxados de um lista estatica
 */
export default function Notificacoes() {
  localStorage.setItem("PAGINATUAL", "notification");

  return (
    <BoxContainerNotificacoes>
      <Breadcrumb />
      <Container>
        <Box>
          {listaNotificacoes.map((notificacao, index) => (
            <Notificacao
              key={index}
              id={notificacao.id}
              Icone={notificacao.Icone}
              titulo={notificacao.titulo}
              mensagem={notificacao.mensagem}
              lista={lista}
              setLista={setLista}
            />
          ))}
        </Box>
      </Container>
    </BoxContainerNotificacoes>
  );
}
