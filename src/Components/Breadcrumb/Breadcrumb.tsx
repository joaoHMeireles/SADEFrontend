import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

function pegarBreadcrumb(pathname: string){
    if(pathname == "/home"){
        return "Início"
    }

    return ""
}

export default function Breadcrumb(){
    const location = useLocation();
    const [breadcrumb, setBreadcrumb] = useState("")

    useEffect(() => {
        setBreadcrumb(pegarBreadcrumb(location.pathname))
    })

    return(
        <div>
            {breadcrumb}
        </div>
    )
}