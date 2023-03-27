import { TableBody, TableHead, TableRow, Typography } from "@mui/material"
import { BoxContainerTabela, TableCellEstilzada, TableContainerEstilizado, TableRowEstilizada } from "../Tabelas.style"
import { BoxCentroCusto, BoxContainerCentroCusto, BoxTabelaCusto, BoxTitulosCentroCusto } from "./TabelaCentroCusto.style"

export default function TabelasCusto(props: { tabelasCusto: any[] }) {
    const elementosTabelaCusto = props.tabelasCusto.map((tabela: any, index: number) => {
        let tempoTotal = 0, valorTotal = 0

        const linhasTabela = tabela.linhasTabela.map((linha: { idLinhaTabela: number, nomeRecurso: string, quantidade: number, valorQuantidade: number }, indexLinha: number) => {
            const total = linha.valorQuantidade * linha.quantidade
            tempoTotal += linha.quantidade
            valorTotal += total

            return (
                <TableRowEstilizada key={indexLinha}>
                    <TableCellEstilzada align='center'>{linha.nomeRecurso}</TableCellEstilzada>
                    <TableCellEstilzada align='center'>{linha.quantidade}{!tabela.isLicenca ? "h" : ""} </TableCellEstilzada>
                    <TableCellEstilzada align='center'>R$ {linha.valorQuantidade}</TableCellEstilzada>
                    <TableCellEstilzada align='center'>R$ {total}</TableCellEstilzada>
                </TableRowEstilizada>
            )
        })

        const centrosCusto = tabela.centrosCustoPagantes.map((centroDeCusto: any, indexcentroCusto: number) => {
            const porcentagem = centroDeCusto.porcentagemDespesa * 100

            return (
                <Typography key={indexcentroCusto} variant="body1" sx={{ color: "#595959" }}>
                    {centroDeCusto.centroCusto.nomeCentroCusto} - {porcentagem}%
                </Typography>
            )
        })

        return (
            <BoxTabelaCusto key={index} >
                <BoxContainerTabela>
                    <TableContainerEstilizado sx={{ width: "auto" }}>
                        <TableHead >
                            <TableRow >
                                <TableCellEstilzada align='center'>{tabela.tituloTabela}</TableCellEstilzada>
                                <TableCellEstilzada align='center'>{!tabela.isLicenca ? "Esforço" : "Licenças"}</TableCellEstilzada>
                                <TableCellEstilzada align='center'>Valor </TableCellEstilzada>
                                <TableCellEstilzada align='center'>Total</TableCellEstilzada>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {linhasTabela}
                            <TableRowEstilizada>
                                <TableCellEstilzada align='center'> <b>Total {tabela.tituloTabela}</b></TableCellEstilzada>
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