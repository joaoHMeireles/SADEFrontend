import { Box, Button, styled } from "@mui/material";
const styledBox = styled(Box);
const styledButton = styled(Button);

export const BotaoPrimario = styledButton({
    backgroundColor: "#00579d",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    fontSize: "16px",
    height: "auto",
    '&:hover': {
        backgroundColor: "#003c6d",
        transition: 'ease-in-out',
        transitionDuration: "0.7s"
    },
    padding: "0.75rem 2rem",
    width: "auto"
});

export const BotaoSecundario = styledButton({
    borderColor: "#00579d",
    border: "1px solid #00579d",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    color: '#00579d',
    fontSize: "16px",
    '&:hover': {
        backgroundColor: "#00579d20",
        borderColor: "#00579d",
        transition: 'ease-in-out',
        transitionDuration: "0.7s"
    },
    height: "auto",
    padding: "0.75rem 2rem",
    width: "auto"
});

export const BotaoTerciario = styledButton({
    borderColor: "#595959",
    border: "1px solid #595959",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    color: '#595959',
    fontSize: "16px",
    '&:hover': {
        backgroundColor: "#59595920",
        borderColor: "#595959",
        transition: 'ease-in-out',
        transitionDuration: "0.7s"
    },
    height: "auto",
    padding: "0.75rem 2rem",
    width: "auto"
});

export const BoxContainer = styledBox({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});

export const BoxConteudo = styledBox({
    margin: "24px"
});

export const BoxDraggable = styledBox({
    backgroundColor: "rgb(255,255,255, 0.9)",
    borderRadius: "5px",
    bottom: "0px",
    cursor: "move",
    left: "24vw",
    padding: "1.5rem",
    position: "absolute",  
    width: "50vw"
});

export const MainBox = styledBox({
    flexGrow: 1,
    width: "auto",
});