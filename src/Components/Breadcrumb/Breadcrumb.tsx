import { useLocation, Link } from "react-router-dom"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box } from "@mui/system";

function getNome(palavra: string){
    const nomesRotas = {
        home: "Início",
        createdemand: "Criar Demanda",
        createproposal: "Criar Proposta",
        createagenda: "Criar Agenda",
        demand: "Demanda",
        proposal: "Proposta",
        agenda: "Pauta",
        ata: "ATA",
        mydemands: "Minhas demandas",
        notifications: "Notificações",
        profile: "Perfil",
        draft: "Rascunho",
        mydrafts: "Meus rascunhos",
        chats: "Chats",
        chat: "Chat",
        history: "Histórico",
        alter: "Alteração"
    }

    return (nomesRotas as any)[palavra]
}

function pegarBreadcrumb(pathname: string) {
    let links: {key: number, name: string, path: string}[] = []
    let palavra = "", key = 1, tamanho = pathname.length, etapaUrl= 0, primeiro = true

    for(let letra of pathname){
        if(letra != "/"){
            palavra += letra
        }
        
        if((letra == "/" && !primeiro)||etapaUrl + 1 == tamanho){
            if(getNome(palavra) != null){
                links.push({key: key, name: getNome(palavra), path: "/" + palavra})
                key++
            }
            palavra = ""
        }

        if(primeiro){
            primeiro = false
        }

        etapaUrl++
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
                <div key={i}>
                    {breadcrumb[i].name}
                </div>
            )
        } else {
            linksBreadcrumb.push(
                <Link key={i} to={rotaComponente + breadcrumb[i].path}>
                    {breadcrumb[i].name}
                </Link>
            )
        }
    }

    return (
        <div id="breadCrumb">
            <Box sx={{display: "flex"}}>
                {linksBreadcrumb}
            </Box>
        </div>
    )
}