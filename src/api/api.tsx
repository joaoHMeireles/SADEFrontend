import axios from "axios";
import { SetStateAction } from "react";

export default axios.create({
    baseURL: `https://localhost:8443`
});

/**
 * 
 * @returns response
 * @param id 
 */
export async function verificarHistoricoAprovado(id: number, setAprovado: React.Dispatch<SetStateAction<boolean>>){
    axios.get(`https://localhost:8443/sod/historicoWorkflow/aprovadaGerente/${id}`).then((response) => {
        setAprovado(response.data)
      }).catch((err) => {
        console.log(err);
      })
}