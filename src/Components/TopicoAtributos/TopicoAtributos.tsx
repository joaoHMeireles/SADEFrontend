import { useContext } from "react"
import { TextReaderContext } from "../TextReaderContext/TextReaderContext"
import { List, ListItem, ListItemIcon } from "@mui/material"
import { CircleIconPonto } from "../../Pages/TelaProcesso/TelaProcesso.styles"


/**
 * Componente dos atributos em lista das informações gerais
 * 
 * @param props 
 * @returns 
 */
export default function TopicoAtributos(props: { valorAtributo: [] }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    let contadorPeriodoExecucao = 0
    const valores = props.valorAtributo.map((valor: any, index) => {
        //ver condição para data
        // if (typeof valor === typeof new Date()) {
        //     contadorPeriodoExecucao++
        //     const valorData: Date = valor
        //     return (
        //         <ListItem key={index} onClick={lerTexto}>
        //             <ListItemIcon>
        //                 <CircleIconPonto />
        //             </ListItemIcon>
        //             {contadorPeriodoExecucao == 1 ? "Início: " : "Fim: "}
        //             {valorData.toLocaleDateString()}
        //         </ListItem>
        //     )
        // }

        const nomeMostrar = valor.nomeCentroCusto ? valor.nomeCentroCusto : valor.nomeBU

        return (
            <ListItem key={index} onClick={lerTexto}>
                <ListItemIcon>
                    <CircleIconPonto />
                </ListItemIcon>
                {nomeMostrar}
            </ListItem>
        )
    })


    return (
        <List>
            {valores}
        </List>
    )
}
