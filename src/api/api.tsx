import axios from "axios";
import { SetStateAction } from "react";

export default axios.create({
    baseURL: `http://localhost:8080`
});

/**
 * 
 * @returns response
 * @param id 
 */
export async function verificarHistoricoAprovado(id: number, setAprovado: React.Dispatch<SetStateAction<boolean>>){
    axios.get(`http://localhost:8080/sod/historicoWorkflow/aprovadaGerente/${id}`).then((response) => {
        setAprovado(response.data)
      }).catch((err) => {
        console.log(err);
      })
}