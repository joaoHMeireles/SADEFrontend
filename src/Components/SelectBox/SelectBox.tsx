import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

export default function SelectBox(props: { label: string | undefined, valorInicial: any, mudarValor: ((event: SelectChangeEvent<any>, child: ReactNode) => void) | undefined, listaValores: any[], listaLabelValores: any[] }) {

    const itens = props.listaValores.map((valor: any, index: number) => {
        return(
            <MenuItem value={valor}>{props.listaLabelValores[index]}</MenuItem>
        )
    })

    return (
        <FormControl sx={{ maxWidth: "180px", marginLeft: "20px" }}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                value={props.valorInicial}
                label="Age"
                onChange={props.mudarValor}
            >
                {itens}
            </Select>
        </FormControl>
    )
}