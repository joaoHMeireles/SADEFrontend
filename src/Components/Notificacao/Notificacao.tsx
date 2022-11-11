import { Box } from "@mui/system";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import {
  BoxNotificacao, NotificacaoBoxIcone, NotificacaoLadoEsquerdo,
  NotificacaoLadoDireito, TypographyMensagem, TypographyTitulo
} from "./Notificacao.styles";


/**
 * 
 * @param props 
 * @returns Retorna um componente de notificação
 */

export default function Notificacao(props: {
  Icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  titulo: string;
  mensagem: string;
}) {
  return (
    <>
      <BoxNotificacao>
        <NotificacaoLadoEsquerdo >
          <NotificacaoBoxIcone >
            <props.Icone sx={{ color: "#595959" }}></props.Icone>
          </NotificacaoBoxIcone>
          <Box>
            <Box>
              <TypographyTitulo
                variant="h6"
              >
                {props.titulo}
              </TypographyTitulo>
            </Box>
            <Box>
              <TypographyMensagem
                variant="caption"
              >
                {props.mensagem}
              </TypographyMensagem>
            </Box>
          </Box>
        </NotificacaoLadoEsquerdo>
        <NotificacaoLadoDireito>
          <DeleteRoundedIcon sx={{ color: "#595959" }} />
        </NotificacaoLadoDireito>
      </BoxNotificacao>
    </>
  );
}
