import { useLocation, Link } from "react-router-dom"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import { BoxRota, BoxBreadcrumb, ArrowIcon } from "./Breadcrumb.styles";

function getId(palavra: string, search: string){
    let index = search.indexOf(palavra)
    console.log(index);
    
}

function getNome(palavra: string) {
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
        alteration: "Alteração"
    }

    return (nomesRotas as any)[palavra]
}

function pegarBreadcrumb(location: {pathname: string, search: string}) {
    let links: { key: number, name: string, path: string }[] = []
    let palavra = "", key = 1, tamanho = location.pathname.length, etapaUrl = 0, primeiro = true

    for (let letra of location.pathname) {
        if (letra != "/") {
            palavra += letra
        }

        if ((letra == "/" && !primeiro) || etapaUrl + 1 == tamanho) {
            if (getNome(palavra) != null) {
                let rotaId: string = "";
                if(palavra == "demand" || palavra == "proposal" || palavra == "agenda" || palavra == "ata" 
                || palavra == "alteration" || palavra == "draft" || palavra == "chat"){
                    rotaId = palavra + getId(palavra, location.search)
                }
                links.push({ key: key, name: getNome(palavra), path: "/" + (rotaId == "" ? palavra : rotaId)})
                key++
            }
            palavra = ""
        }

        if (primeiro) {
            primeiro = false
        }

        etapaUrl++
    }

    return links
}

export default function Breadcrumb() {
    const location = useLocation();
    console.log(getId("demand", location.search));
    const breadcrumb = pegarBreadcrumb(location)
    let linksBreadcrumb: ReactJSXElement[] = []

    for (let i = 0; i < breadcrumb.length; i++) {
        let rotaComponente = ""

        for (let j = 0; j < i; j++) {
            rotaComponente += breadcrumb[j].path
        }

        if (i == breadcrumb.length - 1) {
            linksBreadcrumb.push(
                <BoxRota key={i} >
                    <Typography color="primary" variant="h5">
                        {breadcrumb[i].name}
                    </Typography>
                </BoxRota>
            )
        } else {
            linksBreadcrumb.push(
                <BoxRota sx={{ color: "#595959" }}>
                    <Link key={i} to={rotaComponente + breadcrumb[i].path} >
                        <Typography component="h5" variant="h6" sx={{color: "#595959"}}>
                            {breadcrumb[i].name}
                        </Typography>
                    </Link>
                    <Icon>
                        <ArrowIcon />
                    </Icon>
                </BoxRota>
            )
        }
    }

    return (
        <>
            {location.pathname != "/" &&
                <div>
                    <BoxBreadcrumb>
                        {linksBreadcrumb}
                    </BoxBreadcrumb>
                </div>
            }
        </>
    )
}