import axios from "axios";

export default axios.create({
    baseURL: `https://localhost:8443`
});

export async function verificarHistoricoAprovado(id: number){
// arrumar isso

    axios.get(`https://localhost:8443/sod/historicoWorkflow/demanda/${id}`).then((response) => {
        for (let historico of response.data) {
            console.log(historico);
            
        }

        return null;
      }).catch((err) => {
        console.log(err);
      })
}