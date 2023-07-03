import { ReactNode, useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { TextReaderContext } from "../TextReaderContext/TextReaderContext";

/**
 * componente que renderiza um select box padrão. A propriedade lable é opcional. A propriedade listaLabelValores
 * é o que será mostrado no input e a propriedade listaValores são os valores que cada item do selectbox vai receber
 * 
 * @param props 
 * @returns 
 */
export default function SelectBox(props: { label?: string, valorInicial: any, mudarValor: ((event: SelectChangeEvent<any>, child: ReactNode) => void) | undefined, listaValores: any[], listaLabelValores: any[], chave: string, maxWidth?: string }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const itens = props.listaValores.map((valor: any, index: number) => {
        return (
            <MenuItem key={index} value={valor} onClick={lerTexto}>{props.listaLabelValores[index]}</MenuItem>
        )
    })

    return (
        <FormControl sx={{ backgroundColor: "#eee", borderRadius: "10px", boxShadow: "5px 5px 10px 0 #00000025", "& fieldset": { border: "none" }, marginLeft: "1rem", width: "7vw" }}>
            <InputLabel onClick={lerTexto}>{props.label}</InputLabel>

            <Select
                id={props.chave}
                value={props.valorInicial}
                label={props.label}
                onChange={props.mudarValor}>
                {itens}
            </Select>
        </FormControl>
    )
}