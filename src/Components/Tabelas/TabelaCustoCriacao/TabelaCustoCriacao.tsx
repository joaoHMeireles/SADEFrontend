import { useState, useEffect } from "react";

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

export default function TabelaCustoCriacao(props: {
  centroCusto: any
  centroCustoEscolhidas: any[]
  setCentroCustoEscolhidas: React.Dispatch<React.SetStateAction<any[]>>
}) {
  const [quantidadeTabela, setQuantidadeTabela] = useState(1);
  const [tabelas, setTabelas] = useState<JSX.Element[]>([])

  useEffect(() => {
    const newTabelas = []

    for (let i = 0; i < quantidadeTabela; i++) {
      newTabelas.push(<Tabela tabela={i} />)
    }

    setTabelas(newTabelas)
  }, [quantidadeTabela])

  return (
    <>
      {tabelas}
      <Box>
        <Autocomplete
          id={`centroCusto${quantidadeTabela - 1}`}
          sx={{ boxShadow: "5px 5px 10px 0 #00000050", marginBottom: 2 }}
          multiple
          disableCloseOnSelect
          onChange={(e, valor: any) => {
            let busBeneficiadas: Object[] = []

            for (let buSelecionada of valor) {
              for (let bu of props.informacaoProcesso.busBeneficiadas) {
                if (bu.nomeBU == buSelecionada) {
                  props.valorBUsBeneficadas.push({ idBU: bu.idBU, nomeBU: bu.nomeBU })
                }
              }
            }

            props.setValorBUsBeneficadas(props.valorBUsBeneficadas);
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
                {cc.nomeCentroCusto}
              </li>
            );
          }}
          options={props.centroCusto}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
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

function Tabela(props: { tabela: number }) {
  const [quantidadeLinha, setQuantidadeLinha] = useState(1);
  const [esforcoTotal, setEsforcoTotal] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)
  const [centroCusto, setCentroCusto] = useState<string[]>([])
  const [linhas, setLinhas] = useState<JSX.Element[]>([])

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

  // useEffect(() => {
  //   console.log(props.tabela);
  //   console.log(linha);
  //   for (let i = 0; i < props.tabela; i++) {
  //     for (let j = 0; j < linha; j++) {
  //       console.log(document.getElementById(`tituloLinha${i}`));
  //       console.log(document.getElementById(`tituloLinha${j}`));
  //     }
  //   }
  // }, [props.tabela, linha])

  function atualizarValor() {
    let newEsforcoTotal = 0
    let newValorTotal = 0

    for (let i = 0; i < quantidadeLinha; i++) {
      const esforco = document.getElementById(`esforco${props.tabela}-${i}`).value;
      const valorHora = document.getElementById(`valorHora${props.tabela}-${i}`).value;

      if (esforco && valorHora) {
        newEsforcoTotal += Number.parseInt(esforco)
        newValorTotal += Number.parseInt(esforco) * Number.parseInt(valorHora)
      }
    }

    setEsforcoTotal(newEsforcoTotal)
    setValorTotal(newValorTotal)
  }


  return (
    <>
      <BoxContainerTabela>
        <TableContainerEstilizado sx={{ boxShadow: "none" }}>
          <Table>
            <TableHead>
              <TableRowEstilizada>
                <TableCellEstilzada align="center">
                  <TextField id={`tituloTabela${props.tabela - 1}`} placeholder="Titulo tabela"
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
    </>
  );
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
      <TableRow>
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