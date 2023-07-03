import { useContext, useState } from "react"
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext"
import { Modal } from "../../../constants/interfaces"
import { sessaoTI } from "../../../constants/enuns"
import { Alert, Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, IconButton, SelectChangeEvent } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import SelectBox from "../../SelectBox/SelectBox"
import { BotaoPrimario, BotaoSecundario } from "../../../Pages/App.styles"
import { BoxBotoesModal, BoxConteudoModal, BoxTituloModal, TypographyTituloAtributo, TypographyTituloModal } from "../../../Pages/TelaProcesso/TelaProcesso.styles"
import { BoxInfoModal, BoxAtributosInfoModal, BoxAtributoInfoModal, BoxBUsBeneficiadas, BoxSessaoTI } from "../Modais.style"

const valoresInputBU: any[] = [
    { idBU: 1, nomeBU: 'Motores Industrial' },
    { idBU: 2, nomeBU: 'Motores Comercial' },
    { idBU: 3, nomeBU: 'Energia' },
    { idBU: 4, nomeBU: 'Automação' },
    { idBU: 5, nomeBU: 'Digital e Sistemas' },
    { idBU: 6, nomeBU: ' Drives e Controles' },
    { idBU: 7, nomeBU: 'Tintas' },
    { idBU: 8, nomeBU: 'Transmissão e Distribuição' }
]

export default function ModalClassificacaoDemanda(props: Modal) {
    let { lerTexto } = useContext(TextReaderContext) as any
    const [BUsBeneficiadasErro, setBUsBeneficiadasErro] = useState({ html: { error: false }, helperText: "" })
    const [tamanhoDemanda, setTamanhoDemanda] = useState("Médio")
    const [BUSolicitante, setBUSolicitante] = useState("Energia")
    const [sessaoTIescolhida, setSessaoTI] = useState("AAS")
    const valoresInputTamanho = ["Muito Pequeno", "Pequeno", "Médio", "Grande", "Muito Grande"]
    const keysSessaoTI = Object.keys(sessaoTI)
    const valoresSessaoTI = Object.values(sessaoTI)
    const nomesBU = valoresInputBU.map((bu) => {
        return bu.nomeBU
    })

    const BUsbeneficiadas = valoresInputBU.map((bu: any, index: number) => {

        if (index + 1 == valoresInputBU.length) {
            return (
                <Grid key={index} item xs={6}>
                    <FormControl {...BUsBeneficiadasErro.html} variant="standard">
                        <FormControlLabel control={<Checkbox id={bu.idBU + ""} className="bu-beneficiada" />} label={bu.nomeBU} className="buBeneficiada" onClick={lerTexto} />
                        <FormHelperText onClick={lerTexto}>{BUsBeneficiadasErro.helperText}</FormHelperText>
                    </FormControl>
                </Grid>
            )
        }

        return (
            <Grid key={index} item xs={6}>
                <FormControlLabel control={<Checkbox id={bu.idBU + ""} className="bu-beneficiada" />} label={bu.nomeBU} className="buBeneficiada" onClick={lerTexto} />
            </Grid>
        )
    })

    const conteudoFeedbackFinalizacao = (
        <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }} onClick={lerTexto}>
            Aprovação concluída
        </Alert>
    )


    function selecionarTamanho(event: SelectChangeEvent) {
        setTamanhoDemanda(event.target.value)
    }

    function selecionarBU(event: SelectChangeEvent) {
        setBUSolicitante(event.target.value)
    }

    function selecionarSessaoTI(event: SelectChangeEvent) {
        setSessaoTI(event.target.value)
    }

    function finalizarAcao() {
        const BUsBeneficiadas = document.getElementsByClassName("buBeneficiada")
        let contador = 0

        for (let buBeneficiada of BUsBeneficiadas) {
            if (!(buBeneficiada.children[0].children[0] as HTMLInputElement).checked) {
                contador++
            }
        }

        if (contador == 8) {
            setBUsBeneficiadasErro({
                html: { error: true },
                helperText: "Nenhuma BU selecionada"
            })
            return
        }

        props.abrirFeedback(conteudoFeedbackFinalizacao)
    }

    return (
        <BoxConteudoModal>
            <BoxTituloModal >
                <TypographyTituloModal variant='h5' onClick={lerTexto}>
                    Processo de aprovação
                </TypographyTituloModal>

                <IconButton onClick={props.fecharModal}>
                    <CloseIcon />
                </IconButton>
            </BoxTituloModal>

            <BoxInfoModal>
                <BoxAtributosInfoModal >
                    <BoxAtributoInfoModal>
                        <TypographyTituloAtributo variant='body1' onClick={lerTexto}>
                            Tamanho:
                        </TypographyTituloAtributo>

                        <SelectBox listaLabelValores={valoresInputTamanho} listaValores={valoresInputTamanho} mudarValor={selecionarTamanho} valorInicial={tamanhoDemanda} chave="input-tamanho" />
                    </BoxAtributoInfoModal>

                    <BoxAtributoInfoModal>
                        <TypographyTituloAtributo variant='body1' onClick={lerTexto}>
                            BU Solicitante:
                        </TypographyTituloAtributo>

                        <SelectBox listaLabelValores={nomesBU} listaValores={nomesBU} mudarValor={selecionarBU} valorInicial={BUSolicitante} chave="input-bu-solicitante" />
                    </BoxAtributoInfoModal>
                </BoxAtributosInfoModal>

                <BoxBUsBeneficiadas>
                    <TypographyTituloAtributo variant='body1' onClick={lerTexto}>
                        BUs beneficiadas:
                    </TypographyTituloAtributo>

                    <FormGroup>
                        <Grid container>
                            {BUsbeneficiadas}
                        </Grid>
                    </FormGroup>
                </BoxBUsBeneficiadas >

                <BoxSessaoTI>
                    <TypographyTituloAtributo variant='body1' onClick={lerTexto}>
                        Sessão TI responsável:
                    </TypographyTituloAtributo>

                    <SelectBox listaLabelValores={valoresSessaoTI} listaValores={keysSessaoTI} mudarValor={selecionarSessaoTI} valorInicial={sessaoTIescolhida} maxWidth="none" chave="input-sessao-ti" />
                </BoxSessaoTI>
            </BoxInfoModal>

            <BoxBotoesModal>
                <BotaoSecundario onClick={(e: any) => { lerTexto(e); props.fecharModal(e) }} variant='outlined'>
                    Cancelar
                </BotaoSecundario>

                <BotaoPrimario onClick={(e: any) => { lerTexto(e); finalizarAcao() }} variant="contained">
                    Enviar
                </BotaoPrimario>
            </BoxBotoesModal>
        </BoxConteudoModal>
    )
}