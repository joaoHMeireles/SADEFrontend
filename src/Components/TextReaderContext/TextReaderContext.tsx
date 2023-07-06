import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import SpatialAudioRoundedIcon from '@mui/icons-material/SpatialAudioRounded';

export const TextReaderContext: any = createContext(null)

export function TextReaderProvider({ children }: { children: any }) {
    const [leituraDeSiteAtiva, setLeituraDeSiteAtiva] = useState(false)
    const contextValue = useMemo(() => ({
        lerTexto,
        leituraDeSiteAtiva,
        setLeituraDeSiteAtiva
    }), [lerTexto, leituraDeSiteAtiva, setLeituraDeSiteAtiva]);

    function lerTexto(event: any) {
        if (!leituraDeSiteAtiva) {
            return
        }

        const msg = new SpeechSynthesisUtterance();
        const voices = window.speechSynthesis.getVoices();

        msg.voice = voices[0];
        msg.text = event.target.innerText;

        window.speechSynthesis.speak(msg);
    }

    return (
        <TextReaderContext.Provider value={contextValue}>
            {children}
        </TextReaderContext.Provider>
    )
}

export function TextReaderComponent() {
    const { leituraDeSiteAtiva, setLeituraDeSiteAtiva } = useContext(TextReaderContext) as any

    return (
        <Box sx={{ width: "40px", height: "40px", position: "fixed", right: "10px", top: "34vh", zIndex: 3000 }}>
            <Box sx={{ alignItems: "center", backgroundImage: "linear-gradient(to right, #0c94bd, #0c529d)", borderRadius: "13px", display: "flex", height: "100%", justifyContent: "center", width: "100%" }}>
                <IconButton onClick={() => { setLeituraDeSiteAtiva(!leituraDeSiteAtiva) }}>
                    <SpatialAudioRoundedIcon sx={{ width: "20px", color: (leituraDeSiteAtiva ? "#00579d" : "#fff") }} />
                </IconButton>
            </Box>
        </Box>
    )
}

