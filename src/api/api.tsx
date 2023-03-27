import axios from "axios";
import { SetStateAction } from "react";
const url = `http://localhost:8443`

export default axios.create({
  baseURL: url
});

/**
 * 
 * @returns response
 * @param id 
 */
export async function verificarHistoricoAprovado(id: number, setAprovado: React.Dispatch<SetStateAction<boolean>>) {
  axios.get(`${url}/sod/historicoWorkflow/aprovadaGerente/${id}`).then((response) => {
    setAprovado(response.data)
  }).catch((err) => {
    console.log(err);
  })
}

export async function pegarUltimoHistorico(id: number, setUltimohistorico: React.Dispatch<SetStateAction<any>>) {
  axios.get(`${url}/sod/historicoWorkflow/demanda/ultimo/${id}`).then((response) => {
    setUltimohistorico(response.data)
  }).catch((err) => {
    console.log(err);
  })
}
