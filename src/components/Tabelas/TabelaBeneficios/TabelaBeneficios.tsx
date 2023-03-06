import { Table, TableBody, TableHead, TableRow } from "@mui/material"
import { BoxTabela, TypographyTitulo } from "../../../Pages/TelaProcesso/TelaProcesso.styles"
import { TableCellEstilzada, TableContainerEstilizado, TableRowEstilizada } from "../Tabelas.style"

export default function TabelaBeneficios(props: { atributos: any[], title: string }) {

    const beneficios = props.atributos.map((beneficio: { descricao: string, moeda: string, valor: string, memoriaCalculo: string }, index: number) => {

        return (
            <TableRowEstilizada key={index}>
                <TableCellEstilzada align='center' >{beneficio.descricao}</TableCellEstilzada>
                <TableCellEstilzada align='center'>{beneficio.moeda}</TableCellEstilzada>
                <TableCellEstilzada align='center'>{beneficio.valor}</TableCellEstilzada>
            </TableRowEstilizada>
        )
    })

    return (
        <BoxTabela sx={{ marginBottom: "30px" }}>
            <TypographyTitulo variant='subtitle1'>
                {props.title}
            </TypographyTitulo>
            <TableContainerEstilizado sx={{ width: "40vw" }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCellEstilzada align='center'>Descrição</TableCellEstilzada>
                            <TableCellEstilzada align='center'>Moeda</TableCellEstilzada>
                            <TableCellEstilzada align='center'>Valor</TableCellEstilzada>
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