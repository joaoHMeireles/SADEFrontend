import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import InformacoesGerais from './InformacoesGerais/InformacoesGerais';
import DemandasContribuidas from './DemandasContribuidas/DemandasContribuidas';
import MeuDesempenho from './MeuDesempenho/MeuDesempenho';
import { TextReaderContext } from '../../Components/TextReaderContext/TextReaderContext';
import { useContext, useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Perfil() {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '1rem' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Informações gerais" {...a11yProps(0)} onClick={lerTexto}/>

          {/* <Tab label="Demandas contribuídas" {...a11yProps(1)} /> */}

          <Tab label="Meu desempenho" {...a11yProps(1)} onClick={lerTexto}/>
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <InformacoesGerais />
      </TabPanel>

      {/* <TabPanel value={value} index={1}>
        <DemandasContribuidas />
      </TabPanel> */}

      <TabPanel value={value} index={1}>
        <MeuDesempenho />
      </TabPanel>
    </Box>
  );
}