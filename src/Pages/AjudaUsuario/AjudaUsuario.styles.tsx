import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const Container = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    height: "100%",
    justifyContent: "flex-start",
    width: "100%"
})

export const FirstColumn = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    padding: "1rem 0 0 1rem",
    width: "20%",
})

export const TitleFirstColumn = styled(Box)({
    fontSize: "14px",
    marginTop: "1rem",
    width: "100%"
})

export const SubtitleFirstColumn = styled(Box)({
    display: "flex;",
    flexDirection: "column",
    fontSize: "12px",
    marginLeft: "1rem",
    width: "100%"
})

export const SecondColumn = styled(Box)({
    height: "100%",
    padding: "0 1rem 1rem 1rem",
    width: "80%"
})

export const TitleSecondColumn = styled(Box)({
    fontSize: "20px",
    marginTop: "2rem",
})

export const SubtitleSecondColumn = styled(Box)({
    fontSize: "18px",
    marginTop: "1rem",
})

export const TextSecondColumn = styled(Box)({
    fontSize: "16px",
    marginTop: "0.5rem",
})