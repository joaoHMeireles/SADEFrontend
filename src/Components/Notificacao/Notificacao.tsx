import api from "../../api/api";

import { Box } from "@mui/system";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import {
  BoxNotificacao,
  NotificacaoBoxIcone,
  NotificacaoLadoEsquerdo,
  NotificacaoLadoDireito,
  TypographyMensagem,
  TypographyTitulo,
} from "./Notificacao.styles";

/**
 *
 * @param props
 * @returns Retorna um componente de notificação
 */
export default function Notificacao(props: {
  idNotificacao: number;
  Icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  titulo: string;
  mensagem: string;
  notificacoes: any[];
  setNotificacoes: React.Dispatch<React.SetStateAction<Array<Object>>>;
  tipoNotificacao: any;
  linkNotificacao: any;
  idComponenteLink: any;
}) {
  const idUsuario = localStorage.getItem("IDUSUARIO") as string;

  const bodyNotificacaoDTO: any = {
    notificacao: {
      idNotificacao: props.idNotificacao
    },
    usuario: {
      idUsuario: parseInt(idUsuario)
    }
  }

  function redirecionar(){
    if(props.tipoNotificacao == "DEMANDA"){
      api.get("/sod/demanda/" + props.idComponenteLink).then((response) => {
        localStorage.setItem(
          `DEMANDAESCOLHIDA`,
          JSON.stringify(response.data)
        );

        location.href = props.linkNotificacao
      })
    } else if (props.tipoNotificacao == "PROPOSTA"){
      api.get("/proposta/" + props.idComponenteLink).then((response) => {
        localStorage.setItem(
          `PROPOSTAESCOLHIDA`,
          JSON.stringify(response.data)
        );

        location.href = props.linkNotificacao
      })
    }

  }

  return (
    <BoxNotificacao onClick={redirecionar}>
      <NotificacaoLadoEsquerdo>
        <NotificacaoBoxIcone>
          <props.Icone sx={{ color: "#595959" }}></props.Icone>
        </NotificacaoBoxIcone>
        <Box>
          <Box>
            <TypographyTitulo variant="h6">{props.titulo}</TypographyTitulo>
          </Box>
          <Box>
            <TypographyMensagem variant="caption">
              {props.mensagem}
            </TypographyMensagem>
          </Box>
        </Box>
      </NotificacaoLadoEsquerdo>
      <NotificacaoLadoDireito>
        <DeleteRoundedIcon
          sx={{ color: "#595959", cursor: "pointer" }}
        // onClick={() => {
        //   api.put(`/sod/usuario/deletarNotificacao`, bodyNotificacaoDTO).then((res) => {
        //     props.setNotificacoes(res.data.notificacoesUsuario)
        //   }).catch((err) => {
        //     console.log(err);
        //   });
        // }}
        />
      </NotificacaoLadoDireito>
    </BoxNotificacao>
  );
}
