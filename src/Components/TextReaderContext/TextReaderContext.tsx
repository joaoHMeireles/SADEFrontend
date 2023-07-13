import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import SpatialAudioRoundedIcon from '@mui/icons-material/SpatialAudioRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { BoxIcone } from "./TextReaderContext.styles";

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

export function TextReaderComponent(props: { filtroAberto: boolean }) {
    const { leituraDeSiteAtiva, setLeituraDeSiteAtiva } = useContext(TextReaderContext) as any

    return (
        <BoxIcone onClick={() => { setLeituraDeSiteAtiva(!leituraDeSiteAtiva) }} sx={{ right: props.filtroAberto ? "250px" : "10px" }}>
            <BoxIcone sx={{ backgroundImage: (leituraDeSiteAtiva ? "linear-gradient(to right, #006281, #05274c)" : "linear-gradient(to right, #008db9, #0c529d)") }}>
                <IconButton>
                    {leituraDeSiteAtiva ?
                        <CloseRoundedIcon sx={{ color: "#fff" }} />
                        :
                        <SpatialAudioRoundedIcon sx={{ width: "20px", color: "#fff" }} />
                    }
                </IconButton>
            </BoxIcone>
        </BoxIcone>
    )
}

