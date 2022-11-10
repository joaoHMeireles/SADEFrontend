import { Box, Button, styled } from "@mui/material";
const styledBox = styled(Box)
const styledButton = styled(Button)

export const ContainerBox = styledBox({
    width: "100%", 
    height: "100%", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
})

export const MainBox = styledBox({
    flexGrow: 1,
    width: "auto",
})

export const ContentBox = styledBox({
    margin: "24px"
})

export const BotaoPrimario = styledButton({
    backgroundColor: "#00579d",
    '&:hover': { 
        backgroundColor: "#003c6d", 
        transition: 'ease-in-out', 
        transitionDuration: "0.7s"
    }
})

export const BotaoSecundario = styledButton({
    borderColor: "#00579d80",
    color: '#00579d',  
    '&:hover': { 
        backgroundColor: "#00579d20", 
        border: "1px solid #00579d80",
        transition: 'ease-in-out', 
        transitionDuration: "0.7s"
    }
})

export const BotaoTerciario = styledButton({
    borderColor: "#59595980",
    color: '#595959',  
    '&:hover': { 
        backgroundColor: "#59595920", 
        border: "1px solid #59595980",
        transition: 'ease-in-out', 
        transitionDuration: "0.7s"
    }
})