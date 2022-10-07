import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Box } from "@mui/system";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Typography from "@mui/material/Typography";

export default function Notification(props: {
    Icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }, titulo: string, mensagem: string
}) {
    return (
        <>
            <Box sx={{
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                alignItens: "center",
                backgroundColor: "#DDDDDD",
                borderRadius: "5px",
                margin: 2
            }}>
                <Box sx={{ width: "40%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Box>
                        <props.Icone sx={{ color: "#595959" }}></props.Icone>
                    </Box>
                    <Box sx={{ marginRight: 5 }}>
                        <Box>
                            <Typography variant="h6" component="h1">
                                {props.titulo}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" component="h2">
                                {props.mensagem}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}>
                    <DeleteRoundedIcon sx={{ color: "#595959" }} />
                </Box>
            </Box>
        </>
    )
}