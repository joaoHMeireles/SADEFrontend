import api from "../../api/api";
import { useLocationChange } from "../../utils";


export default function RascunhoObserver() {

    useLocationChange((newLocation: Location, previousLocation: Location) => {
        if (previousLocation.pathname == "/createdemand") {
            localStorage.removeItem("DADOSDEMANDACRIACAO")
            const objetoDemanda = JSON.parse(localStorage.getItem("OBJETODEMANDACRIADA") as string)
            console.log(objetoDemanda);
            

            if (objetoDemanda != null) {
                let temInformacao = false

                for (let atributo in objetoDemanda) {
                    if(atributo == "usuario"){
                        continue
                    }

                    if (objetoDemanda[atributo] != null) {
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