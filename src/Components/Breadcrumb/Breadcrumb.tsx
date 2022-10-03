import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

function pegarBreadcrumb(pathname: string) {
    let links: {name: string, path: string}[] = []

    if (pathname.includes("/home")) {
        links.push({ name: "Início", path: "/home" })
    }
    if (pathname.includes("/create")) {
        links.push({ name: "Criar", path: "/create" })
    }
    if (pathname.includes("/demand")) {
        links.push({ name: "Demanda", path: "/demand" })
    }

    return links
}

export default function Breadcrumb() {
    const location = useLocation();
    const breadcrumb = pegarBreadcrumb(location.pathname)
    let linksBreadcrumb: ReactJSXElement[] = []

    for (let i = 0; i < breadcrumb.length; i++) {
        let rotaComponente = ""

        for (let j = 0; j < i; j++) {
            rotaComponente += breadcrumb[j].path
        }

        if (i == breadcrumb.length - 1) {
            linksBreadcrumb.push(
                <div>
                    {breadcrumb[i].name}
                </div>
            )
        } else {
            linksBreadcrumb.push(
                <Link href={rotaComponente + breadcrumb[i].path}>
                    {breadcrumb[i].name}
                </Link>
            )
        }
    }

    return (
        <div id="breadCrumb">
            <Box sx={{display: "flex"}}>
                {linksBreadcrumb.map((e) => {
                    return e
                })}
            </Box>
        </div>
    )
}