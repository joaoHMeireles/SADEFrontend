import { Box, Container, styled } from "@mui/material";
const styledBox = styled(Box);
const styledContainer = styled(Container);

export const LineChart = styledBox({
    height: "auto",
    paddingTop: "1rem",
    width: "10vw"
});

export const BoxLine = styledBox({
    alignItems: "center",
    backgroundColor: "#EEE",
    boxShadow: "5px 5px 10px 0 #00000050",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    margin: "1rem 2rem",
    padding: "2rem 1rem",
    width: "auto"
});

export const ContainerLines = styledBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around"
});

export const DoughnutChart = styledBox({
    alignItems: "center",
    diplay: "flex",
    height: "10vw",
    justifyContent: "flex-end",
    width: "10vw"
});

export const ColorStatus = styledBox({
    borderRadius: "100%",
    boxShadow: "5px 5px 10px 0 #00000050",
    height: "30px",
    margin: "0.5rem 1rem 0.5rem 0",
    width: "30px" 
});

export const StatusDoughnut = styledBox({
    alignItems: "center",
    display: "flex"
});

export const BoxStatusDoughnut = styledBox({
    marginRight: "2rem"
});

export const BoxDoughnut = styledBox({
    alignItems: "center",
    backgroundColor: "#EEE",
    borderRadius: "1rem",
    boxShadow: "5px 5px 10px 0 #00000050",
    display: "flex",
    height: "auto", 
    ustifyContent: "center",
    margin: "2rem",
    padding: "1rem",
    width: "auto"
});

export const BarChart = styledBox({
    alignItems: "center",
    diplay: "flex",
    height: "auto",
    justifyContent: "flex-end",
    width: "20vw"
});

export const BoxStatusBar = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "80%",
    justifyContent: "space-between",
    paddingRight: "1rem",
    width: "auto"
});

export const BoxBar = styledBox({
    alignItems: "center",
    backgroundColor: "#EEE",
    borderRadius: "1rem",
    boxShadow: "5px 5px 10px 0 #00000050",
    display: "flex",
    height: "20vh",
    justifyContent: "space-between",
    margin: "2rem",
    padding: "1rem",
    width: "auto"
});

export const ContainerCharts = styledBox({
    alignItems: "center",
    display: "flex",
    height: "auto",
    justifyContent: "center",
    width: "100%"
});

export const Page = styledContainer({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "75vh",
    justifyContent: "space-around",
    width: "100%"
});