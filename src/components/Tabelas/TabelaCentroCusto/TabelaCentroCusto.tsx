import { TableBody, TableHead, TableRow, Typography } from "@mui/material"
import { BoxContainerTabela, TableCellEstilzada, TableContainerEstilizado, TableRowEstilizada } from "../Tabelas.style"
import { BoxCentroCusto, BoxContainerCentroCusto, BoxTabelaCusto, BoxTitulosCentroCusto } from "./TabelaCentroCusto.style"
import { useContext } from "react"
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext"

export default function TabelasCusto(props: { tabelasCusto: any[] }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const elementosTabelaCusto = props.tabelasCusto.map((tabela: any, index: number) => {
        let tempoTotal = 0, valorTotal = 0

        const linhasTabela = tabela.linhasTabela.map((linha: { idLinhaTabela: number, nomeRecurso: string, quantidade: number, valorQuantidade: number }, indexLinha: number) => {
            const total = linha.valorQuantidade * linha.quantidade
            tempoTotal += linha.quantidade
            valorTotal += total

            return (
                <TableRowEstilizada key={indexLinha}>
                    <TableCellEstilzada align='center' onClick={lerTexto}>{linha.nomeRecurso}</TableCellEstilzada>
                    <TableCellEstilzada align='center' onClick={lerTexto}>{linha.quantidade}{!tabela.licenca ? "h" : ""} </TableCellEstilzada>
                    <TableCellEstilzada align='center' onClick={lerTexto}>R$ {linha.valorQuantidade}</TableCellEstilzada>
                    <TableCellEstilzada align='center' onClick={lerTexto}>R$ {total}</TableCellEstilzada>
                </TableRowEstilizada>
            )
        })

        const centrosCusto = tabela.centrosCustoPagantes.map((centroDeCusto: any, indexcentroCusto: number) => {
            const porcentagem = centroDeCusto.porcentagemDespesa * 100

            return (
                <Typography key={indexcentroCusto} variant="body1" sx={{ color: "#444", width: "auto", height: "auto", padding: 2, fontSize: 14 }} onClick={lerTexto}>
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
                                <TableCellEstilzada align='center' onClick={lerTexto}>{tabela.tituloTabela}</TableCellEstilzada>
                                <TableCellEstilzada align='center' onClick={lerTexto}>{!tabela.licenca ? "Esforço" : "Licenças"}</TableCellEstilzada>
                                <TableCellEstilzada align='center' onClick={lerTexto}>Valor </TableCellEstilzada>
                                <TableCellEstilzada align='center' onClick={lerTexto}>Total</TableCellEstilzada>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {linhasTabela}
                            <TableRowEstilizada>
                                <TableCellEstilzada align='center' onClick={lerTexto}> <b>Total {tabela.tituloTabela}</b></TableCellEstilzada>
                                <TableCellEstilzada align='center' onClick={lerTexto}> <b>{tempoTotal}{!tabela.isLicenca ? "h" : ""}</b></TableCellEstilzada>
                                <TableCellEstilzada align='center' onClick={lerTexto}> </TableCellEstilzada>
                                <TableCellEstilzada align='center' onClick={lerTexto}> <b>R$ {valorTotal}</b></TableCellEstilzada>
                            </TableRowEstilizada>
                        </TableBody>
                    </TableContainerEstilizado>
                </BoxContainerTabela>
                <BoxContainerCentroCusto>
                    <BoxTitulosCentroCusto onClick={lerTexto}>
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