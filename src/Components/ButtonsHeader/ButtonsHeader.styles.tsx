import { Box, IconButton } from '@mui/material'
import { BotaoPrimario, BotaoSecundario, BotaoTerciario } from '../../Pages/App.styles';
import { styled } from '@mui/material/styles';


export const BotaoIcone = styled(IconButton)({
    marginLeft: "1rem"
})

export const BotaoPrimarioHeader = styled(BotaoPrimario)({
    marginLeft: "1rem"
})

export const BotaoSecundarioHeader = styled(BotaoSecundario)({
    marginLeft: "1rem"
})

export const BotaoTerciarioHeader = styled(BotaoTerciario)({
    marginLeft: "1rem"
})

export const BoxBotoes = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    width: "auto"
})