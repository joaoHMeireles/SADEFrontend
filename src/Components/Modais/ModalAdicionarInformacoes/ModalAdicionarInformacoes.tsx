import { ChangeEvent, useContext, useState } from "react"
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext"
import { Modal } from "../../../constants/interfaces"
import { Dayjs } from "dayjs"
import { Alert, Box, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, TextField } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { BotaoPrimario, BotaoSecundario } from "../../../Pages/App.styles"
import { BoxBotoesModal, BoxConteudoModal, BoxTituloModal, TypographyTituloModal } from "../../../Pages/TelaProcesso/TelaProcesso.styles"
import { BoxAtributoInfoModal2, BoxAtributosInfoModal, BoxInfoModal, TextFieldURL, TypographyTituloAtributoModal } from "../Modais.style"
import { TypographyTituloDecisao } from "../../../Pages/TelaColecaoProcesso/TelaColecaoProcesso.styles"
import { urlValida } from "../../../utils"

export default function ModalAdiconarInformacoes(props: Modal) {
    let { lerTexto } = useContext(TextReaderContext) as any
    const [valorData, setValorData] = useState<Dayjs | null>(null)
    const [erroObjectPrazo, setErroObjectPrazo] = useState({ error: false, helperText: "" })
    const [erroObjectCodigoPPM, setErroObjectCodigoPPM] = useState({ error: false, helperText: "" })
    const [erroObjectLink, setErroObjectLink] = useState({ error: false, helperText: "" })
    const conteudoFeedback = (
        <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }} onClick={lerTexto}>
            Informações adicionadas
        </Alert>
    )


    function checarValor(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const valor = Number.parseInt(e.target.value)
        if (valor < 0) {
            e.target.value = 0 + ""
        }
    }

    function finalizarAcao() {
        const inputPrazoElaboracao = (document.getElementById("inputDataInformacoes") as HTMLInputElement).value
        const inputCodigPPM = (document.getElementById("inputCodigoPPM") as HTMLInputElement).value
        const inputLinkJira = (document.getElementById("inputLinkJira") as HTMLInputElement).value

        if (inputPrazoElaboracao == "" || inputCodigPPM == "" || inputLinkJira == "") {
            if (inputPrazoElaboracao == "") {
                setErroObjectPrazo({
                    error: true,
                    helperText: "Data não informada"
                })
            } else {
                setErroObjectPrazo({
                    error: false,
                    helperText: ""
                })
            }

            if (inputCodigPPM == "") {
                setErroObjectCodigoPPM({
                    error: true,
                    helperText: "Código não informado"
                })
            } else {
                setErroObjectCodigoPPM({
                    error: false,
                    helperText: ""
                })
            }

            if (inputLinkJira == "") {
                setErroObjectLink({
                    error: true,
                    helperText: "Link não informado"
                })
            } else {
                setErroObjectLink({
                    error: false,
                    helperText: ""
                })
            }

            return
        } else {
            setErroObjectPrazo({
                error: false,
                helperText: ""
            })

            setErroObjectCodigoPPM({
                error: false,
                helperText: ""
            })

            setErroObjectLink({
                error: false,
                helperText: ""
            })
        }

        if (!urlValida(inputLinkJira)) {
            setErroObjectLink({
                error: true,
                helperText: "Texto informado não é um link"
            })

            return
        } else {
            setErroObjectLink({
                error: false,
                helperText: ""
            })
        }

        if (!inputLinkJira.includes("jira")) {
            setErroObjectLink({
                error: true,
                helperText: "Link informado é inválido"
            })

            return
        } else {
            setErroObjectLink({
                error: false,
                helperText: ""
            })
        }

        props.abrirFeedback(conteudoFeedback)
    }

    return (
        <BoxConteudoModal>
            <BoxTituloModal >
                <TypographyTituloModal variant='h5' onClick={lerTexto}>
                    Informações
                </TypographyTituloModal>
                <IconButton onClick={props.fecharModal}>
                    <CloseIcon />
                </IconButton>
            </BoxTituloModal>
            <BoxInfoModal>
                <BoxAtributosInfoModal >
                    <BoxAtributoInfoModal2 sx={{ width: "60%" }}>
                        <TypographyTituloDecisao variant="body1" onClick={lerTexto}>
                            Status escolhido:
                        </TypographyTituloDecisao>
                        <FormControl error sx={{ display: "flex", flexDirection: "row" }}>
                            <RadioGroup sx={{ display: "flex", flexDirection: "row" }}>
                                <FormControlLabel
                                    className='radio-status'
                                    value="Assesment"
                                    control={<Radio sx={{ "&.Mui-checked": { color: "#444" } }} />}
                                    label="Assesment"
                                />
                                <FormControlLabel
                                    className='radio-status'
                                    value="Business Case"
                                    control={<Radio sx={{ "&.Mui-checked": { color: "#ffd600" } }} />}
                                    label="Business Case"
                                />
                            </RadioGroup>
                        </FormControl>
                    </BoxAtributoInfoModal2>
                </BoxAtributosInfoModal>
                <BoxAtributosInfoModal >
                    <BoxAtributoInfoModal2 sx={{ width: "50%" }}>
                        <TypographyTituloAtributoModal variant='body1' onClick={lerTexto}>
                            Prazo de elaboração:
                        </TypographyTituloAtributoModal>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={valorData}
                                onChange={(newValue) => {
                                    setValorData(newValue);
                                }}
                                renderInput={(params: any) => <TextField id='inputDataInformacoes' {...params} {...erroObjectPrazo} />}
                            />
                        </LocalizationProvider>
                    </BoxAtributoInfoModal2>
                    <BoxAtributoInfoModal2>
                        <TypographyTituloAtributoModal variant='body1' onClick={lerTexto}>
                            Código PPM:
                        </TypographyTituloAtributoModal>
                        <TextField type='number' id='inputCodigoPPM' onChange={checarValor} {...erroObjectCodigoPPM} />
                    </BoxAtributoInfoModal2>
                </BoxAtributosInfoModal>
                <Box sx={{ width: "100%" }}>
                    <TypographyTituloAtributoModal variant='body1' onClick={lerTexto}>
                        Link Jira:
                    </TypographyTituloAtributoModal>
                    <TextFieldURL placeholder='https://exemplo.com' type={'url'} id="inputLinkJira" {...erroObjectLink} />
                </Box>
            </BoxInfoModal>
            <BoxBotoesModal>
                <BotaoSecundario onClick={(e: any) => { lerTexto(e); props.fecharModal(e) }} variant='outlined'>
                    Cancelar
                </BotaoSecundario>
                <BotaoPrimario onClick={(e: any) => { lerTexto(e); finalizarAcao() }} variant="contained" sx={{ marginLeft: "20px" }}>
                    Enviar
                </BotaoPrimario>
            </BoxBotoesModal>
        </BoxConteudoModal>
    )
}