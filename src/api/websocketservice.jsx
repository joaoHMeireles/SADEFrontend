import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react"
import sockjs from "sockjs-client/dist/sockjs"
import api from "./api"
import { novaNotificacao } from "../Pages/Notificacoes/Notificacoes";
import * as Stomp from "stompjs";

export const WebSocketContext = createContext(null)

export const WebSocketService = ({ children }) => {
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        if (stompClient == null) {
            conectar()
        } else {
            if (localStorage.getItem("INSCRITONASDEMANDAS") != "true") {
                api.get("/sod/demanda/usuario/" + localStorage.getItem("IDUSUARIO")).then((res) => {
                    for (const demanda of res.data) {
                        inscrever(`/notificacao/demanda/${demanda.idDemanda}`, novaNotificacao)
                    }

                    localStorage.setItem("INSCRITONASDEMANDAS", "true")
                })
            }
        }
    }, [stompClient])

    const conectar = () => {
        const socket = new sockjs("http://localhost:8443/sod/websocket");

        const stomp = Stomp.over(socket);
        stomp.connect({}, () => {
            setStompClient(stomp)
        }, (erro) => {
            console.log(erro);

            setTimeout(() => {
                console.log("Tentando reconectar...");
                conectar();
            }, 5000)
        })
    }

    const desconectar = () => {
        if (stompClient) {
            stompClient.disconnect();
        }
    }

    const enviar = (destino, mensagem) => {
        if (stompClient) {
            stompClient.send(destino, {}, JSON.stringify(mensagem));
        } else {
            console.log("Conexão não estabelecidade");
        }
    }

    const inscrever = (caminho, acao) => {
        if (!stompClient.subscriptions[caminho]) {
            console.log("subescreveu: " + caminho);
            return stompClient.subscribe(caminho, acao);
        }
    }

    return (
        <WebSocketContext.Provider value={{ stompClient, desconectar, enviar, inscrever, conectar }} >
            {children}
        </WebSocketContext.Provider>
    )
}