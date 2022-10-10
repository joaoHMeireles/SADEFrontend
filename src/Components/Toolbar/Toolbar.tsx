import { useLocation } from "react-router-dom";
import MuiToolbar from "@mui/material/Toolbar";

export default function Toolbar(){
    const location = useLocation()
        
    return(
        <>
            {location.pathname != "/" &&
                <MuiToolbar variant="dense"/>
            }
        </>
    )
}