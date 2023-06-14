import api from "../../api/api";
import { useLocationChange } from "../../utils";


export default function RascunhoObserver() {

    useLocationChange((newLocation: Location, previousLocation: Location) => {
        if(previousLocation.pathname == "/createdemanda" || previousLocation.pathname == "/continuedemand" || previousLocation.pathname == "/editdemand"){
            localStorage.removeItem("DADOSDEMANDACRIACAO")
            localStorage.removeItem("DEMANDASELECIONADA")
            localStorage.removeItem("RASCUNHOESCOLHIDO")
        }

        if (previousLocation.pathname == "/createdemand") {
            localStorage.removeItem("DADOSDEMANDACRIACAO")
            const objetoDemanda = JSON.parse(localStorage.getItem("OBJETODEMANDACRIADA") as string)
            console.log(objetoDemanda);
            

            if (objetoDemanda != null) {
                let temInformacao = false

                for (let atributo in objetoDemanda) {
                    if(atributo == "usuario" || atributo == "rascunho"){
                        continue
                    } else if( atributo == "centroCustoDemanda"){
                        if(objetoDemanda[atributo].length != 0){
                            temInformacao = true
                            break
                        } else {
                            continue
                        }
                    }

                    if (objetoDemanda[atributo] != null && objetoDemanda[atributo] != "") {
                        temInformacao = true
                        break
                    }
                }

                if (temInformacao) {
                    if (localStorage.getItem("DEMANDACADASTRADA") == "false") {
                        const formData = new FormData()
                        objetoDemanda.rascunho = true

                        formData.append("demanda", JSON.stringify(objetoDemanda))

                        api.post("/sade/demanda/rascunho", formData)
                    }
                }
            }
        }
    })

    return (<></>)
}