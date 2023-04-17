import { useState, useEffect, SetStateAction } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Tooltip from '@mui/material/Tooltip';

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LegendToggleRoundedIcon from "@mui/icons-material/LegendToggleRounded";

import {
  BoxContainerTabela,
  TableContainerEstilizado,
  TableRowEstilizada,
  TableCellEstilzada,
} from "../Tabelas.style";

import { BoxIconsAddMinus } from "./TabelaCustoCriacao.styles";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Button, Chip } from "@mui/material";
import { TypographyStyled } from "../../EscopoProposta/EscopoProposta.styles";

export default function TabelaCustoCriacao(props: {
  centroCusto: any
  centroCustoEscolhidas: Object[]
  setCentroCustoEscolhidas: React.Dispatch<React.SetStateAction<Object[]>>
}) {
  const [quantidadeTabela, setQuantidadeTabela] = useState(1);
  const [tabelas, setTabelas] = useState<JSX.Element[]>([])

  useEffect(() => {
    const newTabelas = []

    for (let i = 0; i < quantidadeTabela; i++) {
      newTabelas.push(<Tabela tabela={i} quantidadeTabela={quantidadeTabela} centroCusto={props.centroCusto} centroCustoEscolhidas={props.centroCustoEscolhidas}
        setCentroCustoEscolhidas={props.setCentroCustoEscolhidas} />)
    }

    setTabelas(newTabelas)
  }, [quantidadeTabela])

  return (
    <>
      {tabelas}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {quantidadeTabela > 1 &&
          <Tooltip
            title="Remover Tabela">
            <RemoveRoundedIcon
              sx={{ color: "#595959", cursor: "pointer", marginRight: 3 }}
              onClick={() => setQuantidadeTabela(quantidadeTabela - 1)}
            />
          </Tooltip>
        }
        <Tooltip
          title="Adicionar Tabela">
          <AddRoundedIcon
            sx={{ color: "#595959", cursor: "pointer" }}
            onClick={() => setQuantidadeTabela(quantidadeTabela + 1)}
          />
        </Tooltip>
      </Box>
    </>
  );
}

function Tabela(props: {
  tabela: number
  quantidadeTabela: number
  centroCusto: any
  centroCustoEscolhidas: Object[]
  setCentroCustoEscolhidas: React.Dispatch<React.SetStateAction<Object[]>>
}) {
  const [quantidadeLinha, setQuantidadeLinha] = useState(1);
  const [esforcoTotal, setEsforcoTotal] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)
  const [centroCusto, setCentroCusto] = useState<string[]>([])
  const [linhas, setLinhas] = useState<JSX.Element[]>([])
  const [centroCustoEscolhidos, setCentroCustoEscolhidos] = useState<any[]>([])
  const [atualizouPorcentagem, setAtualizouPorcentagem] = useState(false)
  const [valorCentroCustoInput, setValorCentroCustoInput] = useState([])

  useEffect(() => {
    const newLinhas = []

    for (let i = 0; i < quantidadeLinha; i++) {
      newLinhas.push(<LinhaTabela
        index={i}
        indexTabela={props.tabela}
        atualizarValor={atualizarValor}
      />)
    }

    setLinhas(newLinhas)
  }, [quantidadeLinha])

  useEffect(() => {
    if (centroCustoEscolhidos.length == 0) {
      return
    }

    props.centroCustoEscolhidas[props.tabela] = centroCustoEscolhidos
    props.setCentroCustoEscolhidas(props.centroCustoEscolhidas);
  }, [centroCustoEscolhidos])

  useEffect(() => {
    atualizarCentrosDeCusto()
  }, [valorCentroCustoInput])

  useEffect(() => {
    if (atualizouPorcentagem) {
      atualizarCentrosDeCusto()
      setAtualizouPorcentagem(false)
    }
  }, [atualizouPorcentagem])

  function atualizarCentrosDeCusto() {
    let listaCentroCustoTabela: any[] = [];

    for (let centroCustoSelecionada of valorCentroCustoInput) {
      for (let centroCusto of props.centroCusto) {
        if (centroCustoSelecionada == centroCusto.nomeCentroCusto) {
          const valorPorcetagem = document.getElementById(`chipCentroCusto${centroCusto.idCentroCusto}`) as HTMLButtonElement;
          let porcentagemNumero = valorPorcetagem.innerText.slice(0, valorPorcetagem.innerText.length - 1);

          listaCentroCustoTabela.push({ idCentroCusto: centroCusto.idCentroCusto, nomeCentroCusto: centroCusto.nomeCentroCusto, tabela: props.tabela, porcentagem: porcentagemNumero })
        }
      }
    }

    setCentroCustoEscolhidos(listaCentroCustoTabela);
  }

  function atualizarValor() {
    let newEsforcoTotal = 0
    let newValorTotal = 0

    for (let i = 0; i < quantidadeLinha; i++) {
      const esforco = (document.getElementById(`esforco${props.tabela}-${i}`) as HTMLInputElement).value;
      const valorHora = (document.getElementById(`valorHora${props.tabela}-${i}`) as HTMLInputElement).value;

      if (esforco && valorHora) {
        newEsforcoTotal += Number.parseInt(esforco)
        newValorTotal += Number.parseInt(esforco) * Number.parseInt(valorHora)
      }
    }

    setEsforcoTotal(newEsforcoTotal)
    setValorTotal(newValorTotal)
  }

  function mudarPorcentagem(porcentagem: number, setPorcentagem: React.Dispatch<SetStateAction<number>>) {
    setAtualizouPorcentagem(true)

    if (porcentagem == 5) {
      setPorcentagem(100)
      return
    }

    setPorcentagem(porcentagem - 5)
  }

  return (
    <>
      <BoxContainerTabela className="tabelaCustoCriacao">
        <TableContainerEstilizado sx={{ boxShadow: "none" }}>
          <Table>
            <TableHead>
              <TableRowEstilizada>
                <TableCellEstilzada align="center">
                  <TextField id={`tituloTabela${props.tabela}`} placeholder="Titulo tabela"
                    sx={{ width: "100%", input: { color: "#595959", borderColor: "#FFF", backgroundColor: "#FFF", borderRadius: "5px" } }}></TextField>
                </TableCellEstilzada>
                <TableCellEstilzada align="center">
                  Esforço (h)
                </TableCellEstilzada>
                <TableCellEstilzada align="center">
                  Valor Hora
                </TableCellEstilzada>
              </TableRowEstilizada>
            </TableHead>
            <TableBody>
              {linhas}
            </TableBody>
          </Table>
        </TableContainerEstilizado>
        <BoxIconsAddMinus>
          {quantidadeLinha > 1 ? (
            <Tooltip title="Remover linha">
              <RemoveRoundedIcon
                sx={{ color: "#595959", cursor: "pointer", marginRight: 3 }}
                onClick={() => setQuantidadeLinha(quantidadeLinha - 1)}
              />
            </Tooltip>
          ) : (
            ""
          )}
          <Tooltip title="Adicionar linha">
            <AddRoundedIcon
              sx={{ color: "#595959", cursor: "pointer" }}
              onClick={() => setQuantidadeLinha(quantidadeLinha + 1)}
            />
          </Tooltip>
        </BoxIconsAddMinus>
      </BoxContainerTabela>
      <Box>
        <TypographyStyled>Centro de Custo:</TypographyStyled>
        <Autocomplete
          id={`centroCusto${props.tabela}`}
          sx={{ boxShadow: "5px 5px 10px 0 #00000050", marginBottom: 2 }}
          multiple
          disableCloseOnSelect
          onChange={(e, valor: any) => {
            setValorCentroCustoInput(valor)
          }}
          renderOption={(props, cc: any, { selected }) => {
            return (
              <li {...props}>
                <Checkbox
                  id="checkbox"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {cc}
              </li>
            );
          }}
          renderTags={(elementos: any) => {
            const elementosRenderizados = elementos.map((nome: string, index: number) => {

              return <ChipAutocompleteCentroCusto id={`chipCentroCusto${index + 1}`} nome={nome} mudarPorcentagem={mudarPorcentagem} />
            })


            return elementosRenderizados
          }}
          options={props.centroCusto.map((centroCusto: any) => centroCusto.nomeCentroCusto)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </>
  );
}

function ChipAutocompleteCentroCusto(props: { id: any, nome: string, mudarPorcentagem: Function }) {
  const [porcentagem, setPorcentagem] = useState(100)

  function atualizarPorcentagem() {

    props.mudarPorcentagem(porcentagem, setPorcentagem)

  }

  return (
    <Box sx={{ marginRight: 2 }}>
      <Chip sx={{ borderRadius: "16px 0  0 16px", borderRight: "#59595930 solid 1px" }} label={props.nome} />
      <Button id={props.id} sx={{ backgroundColor: "rgba(0,0,0,0.08)", height: "32px", borderRadius: "0 16px 16px 0" }} onClick={atualizarPorcentagem}>{porcentagem} %</Button>
    </Box>
  )
}

function LinhaTabela(props: {
  index: number
  indexTabela: number
  atualizarValor: Function
}) {
  const [esforco, setEsforco] = useState(0);
  const [valorHora, setValorHora] = useState(0);

  useEffect(() => {
    props.atualizarValor()
  }, [
    esforco,
    valorHora
  ])

  return (
    <>
      <TableRow className={`linhaTabelaCustoCriacao${props.indexTabela}`}>
        <TableCell sx={{ width: "25%" }} align="center">
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <TextField
              id={`tituloLinha${props.indexTabela}-${props.index}`}
              // onChange={(e: any) => { props.set(e.target.value) }}
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: <GroupsRoundedIcon sx={{ paddingRight: 1 }} />,
              }}
            />
          </FormControl>
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="center">
          <TextField
            onChange={(e: any) => { setEsforco(e.target.value) }}
            id={`esforco${props.indexTabela}-${props.index}`}
            sx={{ width: "100%" }}
            InputProps={{
              startAdornment: (
                <AccessTimeRoundedIcon sx={{ paddingRight: 1 }} />
              ),
            }}
          ></TextField>
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="center">
          <TextField
            onChange={(e: any) => { setValorHora(e.target.value) }}
            id={`valorHora${props.indexTabela}-${props.index}`}
            sx={{ width: "100%" }}
            InputProps={{
              startAdornment: (
                <AttachMoneyRoundedIcon sx={{ paddingRight: "2px" }} />
              ),
            }}
          ></TextField>
        </TableCell>
      </TableRow>
    </>
  );
}