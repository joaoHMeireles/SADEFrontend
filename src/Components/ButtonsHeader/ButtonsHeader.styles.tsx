import { Box, IconButton } from '@mui/material'
import { BotaoPrimario, BotaoSecundario, BotaoTerciario } from '../../Pages/App.styles';
import { styled } from '@mui/material/styles';


export const BotaoIcone = styled(IconButton)({
    marginLeft: "1vw"
})

export const BotaoPrimarioHeader = styled(BotaoPrimario)({
    marginLeft: "1vw"
})

export const BotaoSecundarioHeader = styled(BotaoSecundario)({
    marginLeft: "1vw"
})

export const BotaoTerciarioHeader = styled(BotaoTerciario)({
    marginLeft: "1vw"
})

export const BoxBotoes = styled(Box)({
    display: "flex",
    flexDirection: 'row-reverse',
    justifyContent: "space-between",
    width: "auto"
})