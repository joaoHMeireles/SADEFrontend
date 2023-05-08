import api from "../../api/api";
import { useLocationChange } from "../../utils";


export default function RascunhoObserver() {

    useLocationChange((newLocation: Location, previousLocation: Location) => {
        console.log("agora: ", newLocation);
        console.log("anterior: ", previousLocation);

        if (previousLocation.pathname == "/createdemand") {
            const objetoDemanda = JSON.parse(localStorage.getItem("OBJETODEMANDACRIADA") as string)

            if (objetoDemanda != null) {
                let temInformacao = false

                for (let atributo in objetoDemanda) {
                    if (objetoDemanda[atributo] != null) {
                        temInformacao = true
                        break
                    }
                }

                if (temInformacao) {
                    if (localStorage.getItem("DEMANDACADASTRADA") == "false") {
                        const formData = new FormData()

                        objetoDemanda.rascunho = true

                        formData.append("demanda", objetoDemanda)

                        console.log("VAI CADASTRAR", objetoDemanda);


                        // api.post("/sod/demanda/rascunho", formData).then((response) => {
                        //     console.log(response.data);
                        // })
                    }
                }
            }
        }
    })

    return (<></>)
}