import axios from "axios";
import { SetStateAction } from "react";
const url = `http://localhost:8443`

export default axios.create({
  baseURL: url
});

export async function verificarHistoricoAprovado(id: number, setAprovado: React.Dispatch<SetStateAction<boolean>>) {
  axios.get(`${url}/sod/historicoWorkflow/aprovadaGerente/${id}`).then((response: any) => {
    setAprovado(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}

export async function pegarUltimoHistorico(id: number, setUltimohistorico: React.Dispatch<SetStateAction<any>>) {
  axios.get(`${url}/sod/historicoWorkflow/demanda/ultimo/${id}`).then((response: any) => {
    setUltimohistorico(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}

export async function pegarGerenteSolicitante(id: number, setGerenteSolicitante: React.Dispatch<SetStateAction<any>>) {
  axios.get(`${url}/sod/usuario/gerente/usuario/${id}`).then((response: any) => {
    setGerenteSolicitante(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}