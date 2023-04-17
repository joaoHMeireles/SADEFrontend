import { ChangeEventHandler, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLocationChange } from "../../utils";
import {
  Box, Checkbox, Collapse, Divider, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, Radio,
  RadioGroup, TextField, Toolbar
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { BoxItemHeader, DrawerFiltro, TypographyItemHeader } from "./Filtro.styles";
import { TipoColecaoComponenteProcesso, TipoComponenteProcesso } from "../../constants/enuns";


export default function Filtro(props: {
  aberto: boolean;
  setAberto: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  filtrarResultados: Function
}) {
  //listas base para os itens do filtros
  const tiposDeComponentes = [
    {
      id: 1,
      nome: "Demanda"
    },
    {
      id: 2,
      nome: "Proposta"
    },
    {
      id: 3,
      nome: "Pauta"
    },
    {
      id: 4,
      nome: "ATA"
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
  const [drawerWidth, setDrawerWidth] = useState("0px");
  const location = useLocation()
  const tipoFiltrado = localStorage.getItem(`VALORFILTROTipo`)

  useEffect(() => {
    if (props.aberto) {
      setDrawerWidth("240px");
      props.setSidebar(false);
    } else {
      setDrawerWidth("0px");
    }
  });

  useLocationChange(() => {
    localStorage.removeItem("VALORFILTROTamanho")

    props.filtrarResultados()

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
          <Item itens={tiposDeComponentes} titulo="Tipo" tipo={1} filtrarResultados={props.filtrarResultados} />
          {tipoFiltrado == "Demanda" || tipoFiltrado == "Proposta" ?
            <>
              <Item itens={status} titulo="Status" tipo={1} filtrarResultados={props.filtrarResultados} />
              <Item itens={tamanhos} titulo="Tamanho" tipo={2} filtrarResultados={props.filtrarResultados} />
              {/* <Item itens={departamentos} titulo="Departamento" tipo={2} filtrarResultados={props.filtrarResultados} /> */}
              <Item titulo="Código PPM" tipo={3} filtrarResultados={props.filtrarResultados} />
            </>
            :
            <>
              <Item titulo="Número" tipo={3} filtrarResultados={props.filtrarResultados} />
              <Item itens={foruns} titulo="Fórum" tipo={2} filtrarResultados={props.filtrarResultados} />
            </>
          }
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
  itens?: { id: number; nome: string }[];
  titulo: string;
  tipo: number;
  filtrarResultados: Function;
}) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    props.filtrarResultados()
  }, [aberto])

  let opcao: JSX.Element = <div />;

  if (!props.itens) {
    opcao = <OpcaoInput filtrarResultados={props.filtrarResultados} />;
  } else {
    if (props.tipo == 1) {
      opcao = <OpcoesRadio itens={props.itens} titulo={props.titulo} filtrarResultados={props.filtrarResultados} />;
    } else if (props.tipo == 2) {
      opcao = <OpcoesCheck itens={props.itens} titulo={props.titulo} filtrarResultados={props.filtrarResultados} />;
    }
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
  const valorDefault = localStorage.getItem(`VALORFILTRO${props.titulo}`)

  function handleClick(valor: string) {
    localStorage.setItem(`VALORFILTRO${props.titulo}`, valor)

    props.filtrarResultados()
  }

  const opcoes = props.itens.map((e) => {
    return (
      <FormControlLabel
        key={e.id}
        value={e.nome}
        control={<Radio />}
        label={e.nome}
        onClick={() => handleClick(e.nome)}
        sx={{
          color: "#595959"
        }}
      />
    );
  });

  return (
    <FormControl>
      <RadioGroup
        id={`grupo-opcoes-${props.titulo}`}
        defaultValue={valorDefault}
      >
        {opcoes}
      </RadioGroup>
    </FormControl>
  );
}

function OpcoesCheck(props: OptionInterface) {
  const opcoesChecadas = localStorage.getItem(`VALORFILTRO${props.titulo}`)
  const [listaOpcoesChecadas, setListaOpcoesChecadas] = useState(opcoesChecadas ? JSON.parse(opcoesChecadas) : [])


  function handleClick(e: any) {
    const elemento = e.target
    const novaListaOpcoesChecadas = listaOpcoesChecadas

    if (elemento.checked) {
      novaListaOpcoesChecadas[Number.parseInt(elemento.id) - 1] = elemento.name
    } else {
      novaListaOpcoesChecadas.splice(novaListaOpcoesChecadas.indexOf(elemento.name), 1)
    }

    setListaOpcoesChecadas(novaListaOpcoesChecadas)
    localStorage.setItem(`VALORFILTRO${props.titulo}`, JSON.stringify(listaOpcoesChecadas))

    props.filtrarResultados()
  }

  return (
    <FormGroup id={`grupo-opcoes-${props.titulo}`} sx={{ color: "#595959" }}>
      {
        props.itens.map((e) =>
          <FormControlLabel
            key={e.id}
            control={<Checkbox onClick={handleClick}
              name={e.nome} id={e.id + ""}
              defaultChecked={listaOpcoesChecadas.includes(e.nome)}
            />}
            label={e.nome}
          />
        )
      }
    </FormGroup>
  )
}

function OpcaoInput(props: { filtrarResultados: Function }) {
  return (
    <TextField id="input-pesquisa-ppm" variant="standard" 
      InputProps={{
        sx: {
          color: "#595959"
        },
        startAdornment: (
          <InputAdornment position="start">
            <SearchRoundedIcon />
          </InputAdornment>
        ),
        onChange: props.filtrarResultados as ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      }} />
  )
}

/**
 * Interface dos atributos dos componentes Options
 */
interface OptionInterface {
  itens: { id: number; nome: string }[],
  titulo: string,
  filtrarResultados: Function
}
