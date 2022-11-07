import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const styledBox = styled(Box);
const styledTypography = styled(Typography);

// Chats component

export const ContainerGeneralChats = styledBox({
    margin: 24
})

export const ContainerChats = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    height: "80%"
})

export const LeftSideChats = styledBox({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 16,
    marginBottom: 16,
    maxHeight: "80vh",
    overflowX: "hidden",
    overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "25%",
})

export const LeftSideChat = styledBox({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    maxHeight: "auto",
    width: "100%",
})

export const RightSideChats = styledBox({
    alignItems: "center",
    background: "#EEEEEE",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "80vh",
    width: "75%",
})

export const RightSideChat = styledBox({
    maxHeight: "75vh",
    minHeight: "70vh",
    overflowX: "hidden",
    overflowY: "scroll",
    '&::-webkit-scrollbar': { backgroundColor: "transparent" },
    width: "100%",
})

export const BoxSearchBar = styledBox({
    alignItems: "center",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    height: "10%",
    padding: 1,
    width: "100%",
})

export const SearchBar = styled(TextField)({
    "& input": { padding: "5px", fontSize: "12px" },
    padding: "5px",
    width: "85%",
})

// ---------------------------------------------------
// Messages component

export const BoxGeneralMessagesRightSide = styledBox({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
})

export const BoxGeneralMessagesLeftSide = styledBox({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
})

export const BoxMessagesRightSides = styledBox({
    width: "10%",
    maxWidth: "50%",
    wordWrap: "break-word",
    height: "100%",
    position: "relative",
    top: 30,
    right: 10,
    marginTop: 8,
    marginBottom: 8
})

export const BoxMessagesLeftSides = styledBox({
    width: "10%",
    maxWidth: "50%",
    wordWrap: "break-word",
    height: "100%",
    position: "relative",
    top: 30,
    left: 10,
    marginTop: 8,
    marginBottom: 8
})

export const BoxMessagesRightSide = styledBox({
    background: "#FFF",
    borderRadius: "5px 5px 0 5px",
    padding: 4,
    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
    width: "auto",
    height: "auto"
})

export const BoxMessagesLeftSide = styledBox({
    background: "#FFF",
    borderRadius: "5px 5px 5px 0px",
    padding: 4,
    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
    width: "auto",
    height: "auto"
})

export const TypographyPerson = styledTypography({
    color: "#00579D",
    fontWeight: "bold",
    fontSize: "12px"
})

export const TypographyMessage = styledTypography({
    color: "#595959",
    fontSize: "12px"
})