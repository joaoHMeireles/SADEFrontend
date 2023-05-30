import { getTituloBotao } from "../../utils"
import { Botao } from "../../constants/interfaces"
import { Badge } from "@mui/material"
import ChatBubbleRounded from '@mui/icons-material/ChatBubbleRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { BotaoIcone, BotaoPrimarioHeader, BotaoSecundarioHeader, BotaoTerciarioHeader, BoxBotoes } from "./ButtonsHeader.styles";


export default function ButtonsHeader(props: { listaBotoes: Botao[] }) {
    let contagemBotoesAcoes = 0
    let botoes = []

    function getBotao(botao: string) {
        if (botao == "chat") {
            return <ChatBubbleRounded />
        } else if (botao == "historico") {
            return <HistoryRoundedIcon />
        } else {
            return <LanRoundedIcon />
        }
    }

    for (let i = props.listaBotoes.length - 1; i >= 0; i--) {
        const componenteBotao = props.listaBotoes[i]
        const botao = componenteBotao.nome
        const nomeBotao = getTituloBotao(botao)

        if (botao == "chat" || botao == "historico" || botao.includes("workflow")) {
            const iconeBotao = getBotao(botao)

            if (botao.includes("!")) {
                botoes.push(
                    <BotaoIcone key={i} onClick={componenteBotao.function}>
                        <Badge badgeContent={<ErrorRoundedIcon fontSize='small' sx={{ color: "#FAD271" }} />}>
                            {iconeBotao}
                        </Badge>
                    </BotaoIcone>
                )
                continue
            }

            botoes.push(
                <BotaoIcone key={i} onClick={componenteBotao.function}>
                    {iconeBotao}
                </BotaoIcone>
            )
        } else {
            contagemBotoesAcoes++
            switch (contagemBotoesAcoes) {
                case 1:
                    botoes.push(
                        <BotaoPrimarioHeader variant='contained' key={i} onClick={componenteBotao.function}>
                            {nomeBotao}
                        </BotaoPrimarioHeader>
                    )
                    break
                case 2:
                    botoes.push(
                        <BotaoSecundarioHeader variant='outlined' key={i} onClick={componenteBotao.function}>
                            {nomeBotao}
                        </BotaoSecundarioHeader>
                    )
                    break
                case 3:
                    botoes.push(
                        <BotaoTerciarioHeader variant='outlined' key={i} onClick={componenteBotao.function}>
                            {nomeBotao}
                        </BotaoTerciarioHeader>
                    )
                    break
            }
        }

    }

    return (
        <BoxBotoes>
            {botoes}
        </BoxBotoes>
    )
}