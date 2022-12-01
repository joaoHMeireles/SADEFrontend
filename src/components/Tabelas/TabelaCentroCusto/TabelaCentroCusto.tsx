import { TableBody, TableHead, TableRow, Typography } from "@mui/material"
import { BoxContainerTabela, TableCellEstilzada, TableContainerEstilizado, TableRowEstilizada } from "../Tabelas.style"
import { BoxCentroCusto, BoxContainerCentroCusto, BoxTabelaCusto, BoxTitulosCentroCusto } from "./TabelaCentroCusto.style"

export default function TabelasCusto(props: { tabelasCusto: any[] }) {
    const elementosTabelaCusto = props.tabelasCusto.map((tabela: any, index: number) => {
        let tempoTotal = 0, valorTotal = 0

        const linhasTabela = tabela.linhas.map((linha: { recurso: string, esforco: number, valor: number }, indexLinha: number) => {
            const total = linha.valor * linha.esforco
            tempoTotal += linha.esforco
            valorTotal += total

            return (
                <TableRowEstilizada key={indexLinha}>
                    <TableCellEstilzada align='center'>{linha.recurso}</TableCellEstilzada>
                    <TableCellEstilzada align='center'>{linha.esforco}{!tabela.isLicenca ? "h" : ""} </TableCellEstilzada>
                    <TableCellEstilzada align='center'>R$ {linha.valor}</TableCellEstilzada>
                    <TableCellEstilzada align='center'>R$ {total}</TableCellEstilzada>
                </TableRowEstilizada>
            )
        })

        const centrosCusto = tabela.centrosCusto.map((centroDeCusto: any, indexcentroCusto: number) => {
            const porcentagem = centroDeCusto.porcentagem * 100

            return (
                <Typography key={indexcentroCusto} variant="body1" sx={{ color: "#595959" }}>
                    {centroDeCusto.centroCusto} - {porcentagem}%
                </Typography>
            )
        })

        return (
            <BoxTabelaCusto key={index} >
                <BoxContainerTabela>
                    <TableContainerEstilizado sx={{ width: "auto" }}>
                        <TableHead >
                            <TableRow >
                                <TableCellEstilzada align='center'>{tabela.titulo}</TableCellEstilzada>
                                <TableCellEstilzada align='center'>{!tabela.isLicenca ? "Esforço" : "Licenças"}</TableCellEstilzada>
                                <TableCellEstilzada align='center'>Valor </TableCellEstilzada>
                                <TableCellEstilzada align='center'>Total</TableCellEstilzada>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {linhasTabela}
                            <TableRowEstilizada>
                                <TableCellEstilzada align='center'> <b>Total {tabela.titulo}</b></TableCellEstilzada>
                                <TableCellEstilzada align='center'> <b>{tempoTotal}{!tabela.isLicenca ? "h" : ""}</b></TableCellEstilzada>
                                <TableCellEstilzada align='center'> </TableCellEstilzada>
                                <TableCellEstilzada align='center'> <b>R$ {valorTotal}</b></TableCellEstilzada>
                            </TableRowEstilizada>
                        </TableBody>
                    </TableContainerEstilizado>
                </BoxContainerTabela>
                <BoxContainerCentroCusto>
                    <BoxTitulosCentroCusto>
                        Centros de Custo
                    </BoxTitulosCentroCusto>
                    <BoxCentroCusto>
                        {centrosCusto}
                    </BoxCentroCusto>
                </BoxContainerCentroCusto>
            </BoxTabelaCusto>
        )

    })


    return (
        <>
            {elementosTabelaCusto}
        </>
    )
}