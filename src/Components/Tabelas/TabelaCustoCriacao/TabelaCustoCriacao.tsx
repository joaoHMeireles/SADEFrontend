import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Tooltip from '@mui/material/Tooltip';

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

export default function TabelaCustoCriacao() {
  const [tabela, setTabela] = useState(1);

  return (
    <>
      <Tabelas tabela={tabela} centroCustoTabela={props.centroCustoTabela} setCentroCustoTabela={props.setCentroCustoTabela}
        valorTotalTabela={props.valorTotalTabela} setValorTotalTabela={props.setValorTotalTabela}
        esforcoTabela={props.esforcoTabela} setEsforcoTabela={props.setEsforcoTabela}
        tituloLinhaTabela={props.tituloLinhaTabela} setTituloLinhaTabela={props.setTituloLinhaTabela} />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {tabela > 1 &&
          <Tooltip
            title="Remover Tabela">
            <RemoveRoundedIcon
              sx={{ color: "#595959", cursor: "pointer", marginRight: 3 }}
              onClick={() => setTabela(tabela - 1)}
            />
          </Tooltip>
        }
        <Tooltip
          title="Adicionar Tabela">
          <AddRoundedIcon
            sx={{ color: "#595959", cursor: "pointer" }}
            onClick={() => setTabela(tabela + 1)}
          />
        </Tooltip>
      </Box>
    </>
  );
}

function ConteudoTabela(props: {
  centroCustoTabela: string[]
  setCentroCustoTabela: React.Dispatch<React.SetStateAction<string[]>>
  valorTotalTabela: number
  setValorTotalTabela: React.Dispatch<React.SetStateAction<number>>
  esforcoTabela: number
  setEsforcoTabela: React.Dispatch<React.SetStateAction<number>>
  tituloLinhaTabela: string
  setTituloLinhaTabela: React.Dispatch<React.SetStateAction<string>>
  //esforcoTotal, valorTotal
}) {
  //esforco, valor hora

  // useEffect(() => {
  //   setEsforcoTotal(esforcoTotal + esforco)
  // },[
  //   esforco,
  //   valorHora
  // ])




  return (
    <>
      <TableRow>
        <TableCell sx={{ width: "25%" }} align="center">
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <TextField
              onChange={(e: any) => { props.setTituloLinhaTabela(e.target.value) }}
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: <GroupsRoundedIcon sx={{ paddingRight: 1 }} />,
              }}
            />
          </FormControl>
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="center">
          <TextField

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
            id={`valorTotal${props.index}`}
            sx={{ width: "100%" }}
            InputProps={{
              startAdornment: (
                <AttachMoneyRoundedIcon sx={{ paddingRight: "2px" }} />
              ),
            }}
          ></TextField>
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="center">
          <TextField
            id={`centroCusto${props.index}`}
            sx={{ width: "100%" }}
            InputProps={{
              startAdornment: (
                <LegendToggleRoundedIcon sx={{ paddingRight: "4px" }} />
              ),
            }}
          ></TextField>
        </TableCell>
      </TableRow>
    </>
  );
}

function LinhasTabela(props: {
  linha: number
  centroCusto: string[]
  setCentroCusto: React.Dispatch<React.SetStateAction<string[]>>
  valorTotal: number
  setValorTotal: React.Dispatch<React.SetStateAction<number>>
  esforcoTotal: number
  setEsforcoTotal: React.Dispatch<React.SetStateAction<number>>
}) {
  let linhas: JSX.Element[] = [];

  for (let i = 0; i < props.linha; i++) {
    linhas.push(<ConteudoTabela
      centroCusto={props.centroCusto}
      setCentroCusto={props.setCentroCusto}
      valorTotal={props.valorTotal}
      setValorTotal={props.setValorTotal}
      esforcoTotal={props.esforcoTotal}
      setEsforcoTotal={props.setEsforcoTotal}
    //esforcoTotal, valorTotal
    />);
  }

  return (
    <>
      {linhas}
    </>
  )
}

function Tabela() {
  const [linha, setLinha] = useState(1);
  const [esforcoTotal, setEsforcoTotal] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)
  const [centroCusto, setCentroCusto] = useState<string[]>([])
  // esforcoTotal, valorTotal, centrosCusto

  return (
    <>
      <BoxContainerTabela>
        <TableContainerEstilizado sx={{ boxShadow: "none" }}>
          <Table>
            <TableHead>
              <TableRowEstilizada>
                <TableCellEstilzada align="center">
                  <TextField id={`tituloTabela`} placeholder="Titulo tabela"
                    sx={{ width: "100%", input: { color: "#FFF", borderColor: "#FFF" } }}></TextField>
                </TableCellEstilzada>
                <TableCellEstilzada align="center">
                  Esforço (h)
                </TableCellEstilzada>
                <TableCellEstilzada align="center">
                  Valor Hora
                </TableCellEstilzada>
                <TableCellEstilzada align="center">
                  CC Pagante
                </TableCellEstilzada>
              </TableRowEstilizada>
            </TableHead>
            <TableBody>
              <LinhasTabela linha={linha}
                esforcoTotal={esforcoTotal}
                setEsforcoTotal={setEsforcoTotal}
                valorTotal={valorTotal}
                setValorTotal={setValorTotal}
                centroCusto={centroCusto}
                setCentroCusto={setCentroCusto}
              />
            </TableBody>
          </Table>
        </TableContainerEstilizado>
        <BoxIconsAddMinus>
          {linha > 1 ? (
            <Tooltip title="Remover linha">
              <RemoveRoundedIcon
                sx={{ color: "#595959", cursor: "pointer", marginRight: 3 }}
                onClick={() => setLinha(linha - 1)}
              />
            </Tooltip>
          ) : (
            ""
          )}
          <Tooltip title="Adicionar linha">
            <AddRoundedIcon
              sx={{ color: "#595959", cursor: "pointer" }}
              onClick={() => setLinha(linha + 1)}
            />
          </Tooltip>
        </BoxIconsAddMinus>
      </BoxContainerTabela>
    </>
  );
}

function Tabelas(props: { tabela: number }) {
  let tabelas: JSX.Element[] = [];

  for (let i = 0; i < props.tabela; i++) {
    tabelas.push(<Tabela />);
  }

  return <>{tabelas}</>;
}
