import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Checkbox, Collapse, Divider, FormGroup, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Location, useLocation } from "react-router-dom";

const tiposDeComponentes = [
  {
    id: 1,
    nome: "Demanda",
  },
  {
    id: 2,
    nome: "Proposta",
  },
  {
    id: 3,
    nome: "Pauta",
  },
  {
    id: 4,
    nome: "Ata",
  },
];

const foruns = [
  {
    id: 1,
    nome: "Fórum 1"
  },
  {
    id: 2,
    nome: "Fórum 2"
  },
  {
    id: 3,
    nome: "Fórum 3"
  }
]

const departamentos = [
  {
    id: 1,
    nome: "Departamento 1"
  },
  {
    id: 2,
    nome: "Departamento 2"
  },
  {
    id: 3,
    nome: "Departamento 3"
  },
  {
    id: 4,
    nome: "Departamento 4"
  },
  {
    id: 5,
    nome: "Departamento 5"
  }
]

const tamanhos = [
  {
    id: 1,
    nome: "Muito pequeno"
  },
  {
    id: 2,
    nome: "Pequeno"
  },
  {
    id: 3,
    nome: "Médio"
  },
  {
    id: 4,
    nome: "Grande"
  },
  {
    id: 5,
    nome: "Muito grande"
  },
]

const status = [
  {
    id: 1,
    nome: "Aguardando revisão",
  },
  {
    id: 2,
    nome: "Em planejamento",
  },
  {
    id: 3,
    nome: "Em planejamento demorado",
  },
  {
    id: 4,
    nome: "Cancelado",
  },
  {
    id: 5,
    nome: "A fazer",
  },
];

export default function Filter(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const location = useLocation()
  const [drawerWidth, setDrawerWidth] = useState("0px");

  useEffect(() => {
    if (props.open) {
      setDrawerWidth("240px");
      props.setSidebar(false);
    } else {
      setDrawerWidth("0px");
    }
  });

  useLocationChange(() => {
    props.setOpen(false)
  })

  return (
    <>
      {location.pathname != "/" && <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={props.open}
      >
        <Toolbar variant="dense" sx={{ marginBottom: "10px" }} />
        <Item itens={tiposDeComponentes} titulo="Tipo" tipo={1} />
        <Item itens={[]} titulo="Código PPM" tipo={3} />
        <Item itens={[]} titulo="Número" tipo={3} />
        <Item itens={foruns} titulo="Fórum" tipo={2} />
        <Item itens={departamentos} titulo="Departamento" tipo={2} />
        <Item itens={tamanhos} titulo="Departamento" tipo={2} />
        <Item itens={status} titulo="Status" tipo={1} />
      </Drawer>
      }
    </>
  );
}

function Item(props: {
  itens: { id: number; nome: string }[];
  titulo: string;
  tipo: number;
}) {
  const [aberto, setAberto] = useState(false);

  let opcao: JSX.Element;
  if (props.tipo == 1) {
    opcao = <RadioOptions itens={props.itens} />;
  } else if (props.tipo == 2) {
    opcao = <CheckOptions itens={props.itens} />;
  } else {
    opcao = <InputOption />;
  }

  function mudarAberto() {
    setAberto(!aberto);
  }

  return (
    <>
      <Box sx={{ padding: "8px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ItemHeader titulo={props.titulo} />
          <IconButton onClick={mudarAberto}>
            {aberto ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
          </IconButton>
        </Box>
        <Collapse in={aberto} timeout="auto" unmountOnExit>
          {aberto && opcao}
        </Collapse>
      </Box>
      <Divider />
    </>
  );
}

/**
 * Componente que recebe uma string, para usar como título de um item
 *
 * @param props
 */
function ItemHeader(props: { titulo: string }) {
  return <Typography variant="subtitle1" sx={{ fontWeight: "600", color: "#595959" }}>{props.titulo}</Typography>;
}

/**
 * Componente que recebe uma lista de atributos possíveis para aquele item do filtro
 * e monta eles coordenando quem está e quem não está selecionado
 *
 * @param props
 */
function RadioOptions(props: OptionInterface) {
  const opcoes = props.itens.map((e) => {
    return (
      <FormControlLabel
        key={e.id}
        value={e.nome}
        control={<Radio />}
        label={e.nome}
        sx={{
          color: "#595959"
        }}
      />
    );
  });

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {opcoes}
      </RadioGroup>
    </FormControl>
  );
}

/**
 * Componente que recebe uma lista de atributos possíveis para aquele item do filtro
 * e monta eles
 * @param props
 */
function CheckOptions(props: OptionInterface) {
  const opcoes = props.itens.map((e) => {
    return (
      <FormControlLabel control={<Checkbox />} label={e.nome} />
    )
  })

  return (
    <FormGroup sx={{ color: "#595959" }}>
      {opcoes}
    </FormGroup>
  )
}

/**
 * Componente que dispõem de um input para preencher
 */
function InputOption() {
  return (
    <TextField id="standard-basic" variant="standard" InputProps={{
      sx: {
        color: "#595959"
      },
      startAdornment: (
        <InputAdornment position="start">
          <SearchRoundedIcon />
        </InputAdornment>
      ),
    }} />
  )
}

function useLocationChange(action: any) {
  const newLocation = useLocation()
  useEffect(() => { action(newLocation) }, [newLocation])
}

interface OptionInterface {
  itens: { id: number; nome: string }[]
}

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  zIndex: 1100,
}));
