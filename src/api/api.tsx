import axios from "axios";
import { SetStateAction } from "react";
const url = `http://localhost:8443`

const axiosEntity = axios.create({
  baseURL: url,
  withCredentials: true
});

export default axiosEntity

export async function verificarHistoricoAprovado(id: number, setAprovado: React.Dispatch<SetStateAction<boolean>>) {
  axiosEntity.get(`${url}/sade/historicoWorkflow/aprovadaGerente/${id}`).then((response: any) => {
    setAprovado(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}

export async function pegarUltimoHistorico(id: number, setUltimohistorico: React.Dispatch<SetStateAction<any>>) {
  axiosEntity.get(`${url}/sade/historicoWorkflow/demanda/ultimo/${id}`).then((response: any) => {
    setUltimohistorico(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}

export async function pegarUltimoHistoricoConcluido(id: number, setUltimohistoricoConcluido: React.Dispatch<SetStateAction<any>>) {
  axiosEntity.get(`${url}/sade/historicoWorkflow/demanda/ultimo/${id}`).then((response: any) => {
    setUltimohistoricoConcluido(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}

export async function pegarGerenteSolicitante(id: number, setGerenteSolicitante: React.Dispatch<SetStateAction<any>>) {
  axiosEntity.get(`${url}/sade/usuario/gerente/usuario/${id}`).then((response: any) => {
    setGerenteSolicitante(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}

export async function pegarGerenteTISolicitante(id: number, setGerenteTISolicitante: React.Dispatch<SetStateAction<any>>) {
  axiosEntity.get(`${url}/sade/usuario/gerenteTI/usuario/${id}`).then((response: any) => {
    setGerenteTISolicitante(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}

export async function pegarAnalistaTIResponsavel(id: number, setAnalistaTIResponsavel: React.Dispatch<SetStateAction<any>>) {
  axiosEntity.get(`${url}/sade/historicoWorkflow/analistaResponsavel/${id}`).then((response: any) => {
    setAnalistaTIResponsavel(response.data)
  }).catch((err: any) => {
    console.log(err);
  })
}