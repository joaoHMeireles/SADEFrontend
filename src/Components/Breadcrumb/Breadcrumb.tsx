import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useLocation, Link } from "react-router-dom"
import Typography from "@mui/material/Typography";
import { ArrowIcon, BoxRota, BoxBreadcrumb, IconeRota } from "./Breadcrumb.styles";

export default function Breadcrumb() {
    const location = useLocation();
    const breadcrumb = pegarBreadcrumb(location)
    let linksBreadcrumb: ReactJSXElement[] = []

    for (let i = 0; i < breadcrumb.length; i++) {
        let rotaComponente = "", searchComponente = ""

        for (let j = 0; j < i; j++) {
            rotaComponente += breadcrumb[j].path
            searchComponente += breadcrumb[j].search
        }

        if (i == breadcrumb.length - 1) {
            linksBreadcrumb.push(
                <BoxRota key={i} >
                    <Typography variant="h5" sx={{ color: "#00579d" }}>
                        {breadcrumb[i].name}
                    </Typography>
                </BoxRota>
            )
        } else {
            linksBreadcrumb.push(
                <BoxRota key={i} sx={{ color: "#595959" }}>
                    <Link to={rotaComponente + breadcrumb[i].path + searchComponente + breadcrumb[i].search} >
                        <Typography component="h5" variant="h6" sx={{ color: "#595959" }}>
                            {breadcrumb[i].name}
                        </Typography>
                    </Link>
                    <IconeRota>
                        <ArrowIcon />
                    </IconeRota>
                </BoxRota>
            )
        }
    }

    return (
        <>
            {location.pathname != "/" &&
                <BoxBreadcrumb>
                    {linksBreadcrumb}
                </BoxBreadcrumb>
            }
        </>
    )
}

/**
 * Recebe os parâmetros pathname e search de um useLocation e retorna uma lista de
 * objetos contendo a sua chave, o nome da página, o caminho para aquela página e,
 * se o caminho tiver, o parâmetro search para a página
 * 
 * Passa por toda a string da url verificando as palavras entre os '/' e criando um
 * desses objetos com as informações pertinentes para aquela página 
 * 
 * @param location 
 * @returns 
 */
function pegarBreadcrumb(location: { pathname: string, search: string }) {
    let links: { key: number, name: string, path: string, search: string }[] = []
    let palavra = "", key = 1, tamanho = location.pathname.length, etapaUrl = 0, primeiro = true

    for (let letra of location.pathname) {
        if (letra != "/") {
            palavra += letra
        }

        if ((letra == "/" && !primeiro) || etapaUrl + 1 == tamanho) {
            if (getNome(palavra) != null) {
                let rotaId = getId(palavra, location.search)
                if (rotaId == "") {
                    links.push({ key: key, name: getNome(palavra), path: "/" + palavra, search: "" })
                } else {
                    links.push({ key: key, name: getNome(palavra), path: "/" + palavra, search: "?id_" + palavra + "=" + rotaId })
                }
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

/**
 * Recebe uma palavra para procurar no search e retorna o valor de id depois do 
 * símbolo de igual no search
 * 
 * @param palavra 
 * @param search 
 * @returns 
 */
function getId(palavra: string, search: string) {
    let index = search.indexOf(palavra)
    let pegarId = false
    let idPalavra = ""

    for (let letra of search.slice(index)) {
        if (letra == "=") {
            pegarId = true
            continue
        }
        if (pegarId) {
            if (letra == "?") {
                break;
            }
            idPalavra += letra
        }
    }

    return idPalavra
}

/**
 * Recebe uma palavra de uma rota e retorna o título certo para o breadcrumb daquela página
 * 
 * @param palavra
 * @return
 */
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
