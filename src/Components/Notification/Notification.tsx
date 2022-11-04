import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Box } from "@mui/system";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Typography from "@mui/material/Typography";

import { NotificationBox, NotificationBoxIcon, NotificationLeftSide, NotificationRightSide, TypographyMessage, TypographyTitle } from "./Notification.styles";

export default function Notification(props: {
  Icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  titulo: string;
  mensagem: string;
}) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItens: "center",
          backgroundColor: "#EEEEEE",
          borderRadius: "5px",
          margin: 2,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginX: 3 }}>
            <props.Icone sx={{ color: "#595959" }}></props.Icone>
          </Box>
          <Box >
            <Box>
              <Typography
                variant="h6"
                component="h1"
                sx={{ color: "#595959" }}
              >
                {props.titulo}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                component="h2"
                sx={{ color: "#999999" }}
              >
                {props.mensagem}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <DeleteRoundedIcon sx={{ color: "#595959" }} />
        </Box>
      </Box>
    </>
  );
}
