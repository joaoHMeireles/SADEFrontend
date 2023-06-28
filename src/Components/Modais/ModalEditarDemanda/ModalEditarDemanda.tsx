import { useEffect, useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import api from '../../../api/api';
import { BoxMotivoDevolucao } from '../Modais.style';

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(4)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  backgroundColor: "#00579d",
  minHeight: "2rem !important",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function ModalEditarDemanda() {
  const [open, setOpen] = useState(false);
  const [motivoDevolucao, setMotivoDevolucao] = useState("")

  useEffect(() => {
    const demanda = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string)

    api.get("/sade/historicoWorkflow/ultimoconcluido/" + demanda.idDemanda).then((response: any) => {
      setMotivoDevolucao(response.data.motivoDevolucao)
    }).catch((err: any) => {
      console.log(err);
    })

  })



  function toggleDrawer() {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open} anchor='right' sx={{ '& .MuiDrawer-paper': { position: "absolute", top: "10vh", height: open ? "150px" : "64px", borderRadius: "10px 0 0 10px", } }}>
        <DrawerHeader sx={{color: "white", padding: !open ? 0 : "0 16px"}}>
          {open && <>Motivo da devolução</>}
          <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
            {open ? <ChevronRightIcon /> : <InfoRoundedIcon />}
          </IconButton>
        </DrawerHeader>
        {open &&
          <BoxMotivoDevolucao>
           {motivoDevolucao}
           {/* Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais preonhecimentos  */}
          </BoxMotivoDevolucao>
        }
      </Drawer>
    </Box>
  );
}