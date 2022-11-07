import { Box } from "@mui/system";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import { NotificationBox, NotificationBoxIcon, NotificationLeftSide, 
  NotificationRightSide, TypographyMessage, TypographyTitle } from "./Notification.styles";

export default function Notification(props: {
  Icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  titulo: string;
  mensagem: string;
}) {
  return (
    <>
      <NotificationBox>
        <NotificationLeftSide >
          <NotificationBoxIcon >
            <props.Icone sx={{ color: "#595959" }}></props.Icone>
          </NotificationBoxIcon>
          <Box>
            <Box>
              <TypographyTitle
                variant="h6"
              >
                {props.titulo}
              </TypographyTitle>
            </Box>
            <Box>
              <TypographyMessage
                variant="caption"
              >
                {props.mensagem}
              </TypographyMessage>
            </Box>
          </Box>
        </NotificationLeftSide>
        <NotificationRightSide>
          <DeleteRoundedIcon sx={{ color: "#595959" }} />
        </NotificationRightSide>
      </NotificationBox>
    </>
  );
}
