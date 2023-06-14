import { Table, TableBody, TableHead, TableRow } from "@mui/material"
import { BoxTabela, TypographyTitulo } from "../../../Pages/TelaProcesso/TelaProcesso.styles"
import { TableCellEstilzada, TableContainerEstilizado, TableRowEstilizada } from "../Tabelas.style"
import { useContext } from "react"
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext"

export default function TabelaBeneficios(props: { atributos: any[], title: string }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const beneficios = props.atributos.map((beneficio: { descricao: string, moeda: string, valor: string, memoriaCalculo: string }, index: number) => {
        return (
            <TableRowEstilizada key={index}>
                <TableCellEstilzada sx={{ width: "60%" }} align='center' onClick={lerTexto}>{beneficio.descricao}</TableCellEstilzada>
                <TableCellEstilzada align='center' onClick={lerTexto}>{beneficio.moeda}</TableCellEstilzada>
                <TableCellEstilzada align='center' onClick={lerTexto}>{beneficio.valor}</TableCellEstilzada>
            </TableRowEstilizada>
        )
    })

    return (
        <BoxTabela sx={{ marginBottom: "50px" }}>
            <TypographyTitulo variant='h6' onClick={lerTexto}>
                {props.title}
            </TypographyTitulo>
            <TableContainerEstilizado sx={{ width: "40vw" }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCellEstilzada align='center' onClick={lerTexto}>Descrição</TableCellEstilzada>
                            <TableCellEstilzada align='center' onClick={lerTexto}>Moeda</TableCellEstilzada>
                            <TableCellEstilzada align='center' onClick={lerTexto}>Valor</TableCellEstilzada>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {beneficios}
                    </TableBody>
                </Table>
            </TableContainerEstilizado>
        </BoxTabela>
    )
}