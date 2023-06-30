import { Grid } from "@mui/material";
import { GridProposta } from "../../Pages/TelaColecaoProcesso/TelaColecaoProcesso.styles";
import { BoxCorStatus } from "../ContainerProcesso/ContainerProcesso.styles";

export default function CardProposta(props: { cor: string; tamanhoCorCard: number; children: any;}) {
  return (
    <GridProposta container>
      <Grid item xs={props.tamanhoCorCard}>
        <BoxCorStatus sx={{ backgroundColor: props.cor, width: "100% !important" }}></BoxCorStatus>
      </Grid>

      <Grid item xs={12 - props.tamanhoCorCard} sx={{ backgroundColor: props.tamanhoCorCard == 0.1 ?"white" : "#eee", borderRadius: "0 10px 10px 0", padding: "1.5rem 1rem" }} >
        {props.children}
      </Grid>
    </GridProposta>
  );
}
