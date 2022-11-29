import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

/**
 * componente que renderiza um select box padrão. A propriedade lable é opcional. A propriedade listaLabelValores
 * é o que será mostrado no input e a propriedade listaValores são os valores que cada item do selectbox vai receber
 * 
 * @param props 
 * @returns 
 */
export default function SelectBox(props: { label?: string , valorInicial: any, mudarValor: ((event: SelectChangeEvent<any>, child: ReactNode) => void) | undefined, listaValores: any[], listaLabelValores: any[], maxWidth?: string }) {

    const itens = props.listaValores.map((valor: any, index: number) => {
        return(
            <MenuItem value={valor}>{props.listaLabelValores[index]}</MenuItem>
        )
    })

    return (
        <FormControl sx={{ maxWidth:(props.maxWidth ? props.maxWidth :"180px"), marginLeft: "20px" }}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                value={props.valorInicial}
                label={props.label}
                onChange={props.mudarValor}
            >
                {itens}
            </Select>
        </FormControl>
    )
}