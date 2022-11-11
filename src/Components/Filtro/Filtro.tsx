import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box, Checkbox, Collapse, Divider, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, Radio,
  RadioGroup, TextField, Toolbar
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { BoxItemHeader, DrawerFiltro, TypographyItemHeader } from "./Filtro.styles";


//listas base para os itens do filtros
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

export default function Filtro(props: {
  aberto: boolean;
  setAberto: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const location = useLocation()
  const [drawerWidth, setDrawerWidth] = useState("0px");

  useEffect(() => {
    if (props.aberto) {
      setDrawerWidth("240px");
      props.setSidebar(false);
    } else {
      setDrawerWidth("0px");
    }
  });

  useLocationChange(() => {
    props.setAberto(false)
  })

  return (
    <>
      {location.pathname != "/" &&
        <DrawerFiltro
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={props.aberto}
        >
          <Toolbar variant="dense" sx={{ marginBottom: "10px" }} />
          <Item itens={tiposDeComponentes} titulo="Tipo" tipo={1} />
          <Item itens={[]} titulo="Código PPM" tipo={3} />
          <Item itens={[]} titulo="Número" tipo={3} />
          <Item itens={foruns} titulo="Fórum" tipo={2} />
          <Item itens={departamentos} titulo="Departamento" tipo={2} />
          <Item itens={tamanhos} titulo="Tamanho" tipo={2} />
          <Item itens={status} titulo="Status" tipo={1} />
        </DrawerFiltro>
      }
    </>
  );
}

/**
 * Item do filtro que pode conter um RadioOptions (tipo = 1), um CheckOptions
 * (tipo = 2) ou um InputOption (tipo = 3) e controla se está aberto ou não
 * para ser usado
 * 
 * @param props 
 * @returns 
 */
function Item(props: {
  itens: { id: number; nome: string }[];
  titulo: string;
  tipo: number;
}) {
  const [aberto, setAberto] = useState(false);

  let opcao: JSX.Element;
  if (props.tipo == 1) {
    opcao = <OpcoesRadio itens={props.itens} />;
  } else if (props.tipo == 2) {
    opcao = <OpcoesCheck itens={props.itens} />;
  } else {
    opcao = <OpcaoInput />;
  }

  function mudarAberto() {
    setAberto(!aberto);
  }

  return (
    <>
      <Box sx={{ padding: "8px" }}>
        <BoxItemHeader>
          <TypographyItemHeader variant="subtitle1">{props.titulo}</TypographyItemHeader>
          <IconButton onClick={mudarAberto}>
            {aberto ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
          </IconButton>
        </BoxItemHeader>
        <Collapse in={aberto} timeout="auto" unmountOnExit>
          {aberto && opcao}
        </Collapse>
      </Box>
      <Divider />
    </>
  );
}

function OpcoesRadio(props: OptionInterface) {
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

function OpcoesCheck(props: OptionInterface) {
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

function OpcaoInput() {
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

/**
 * Função para realizar algo quando a página for trocada
 * 
 * @param action 
 */
function useLocationChange(action: any) {
  const newLocation = useLocation()
  useEffect(() => { action(newLocation) }, [newLocation])
}

/**
 * Interface dos atributos dos componentes Options
 */
interface OptionInterface {
  itens: { id: number; nome: string }[]
}
