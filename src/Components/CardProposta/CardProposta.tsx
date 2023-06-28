import { Grid } from "@mui/material";
import { GridProposta } from "../../Pages/TelaColecaoProcesso/TelaColecaoProcesso.styles";
import { BoxCorStatus } from "../ContainerProcesso/ContainerProcesso.styles";

export default function CardProposta(props: { cor: string; children: any }) {
  return (
    <GridProposta container>
      <Grid item xs={0.2}>
        <BoxCorStatus sx={{ backgroundColor: props.cor }}></BoxCorStatus>
      </Grid>

      <Grid item xs={11.8} sx={{ backgroundColor: "#eee", borderRadius: "0 10px 10px 0", padding: "1rem" }} >
        {props.children}
      </Grid>
    </GridProposta>
  );
}
