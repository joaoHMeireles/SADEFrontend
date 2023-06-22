import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createContext, useContext, useMemo, useState } from 'react';
import { MainTheme } from '../../Themes';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

// function MyApp() {
//     const theme = useTheme();
//     const colorMode = useContext(ColorModeContext);


//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 width: '100%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 bgcolor: 'background.default',
//                 color: 'text.primary',
//                 borderRadius: 1,
//                 p: 3,
//             }}
//         >
//             {theme.palette.mode} mode
//             <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//                 {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//         </Box>
//     );
// }

export default function ToggleColorMode({ children }: { children: any }) {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>

            createTheme(MainTheme, {
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}