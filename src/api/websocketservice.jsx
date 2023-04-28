import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react"
import sockjs from "sockjs-client/dist/sockjs"
import * as Stomp from "stompjs";

export const WebSocketContext = createContext(null)

export const WebSocketService = ({ children }) => {
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
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

        conectar()
    }, [])

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
            return stompClient.subscribe(caminho, acao);
        }
    }

    return (
        <WebSocketContext.Provider value={{ stompClient, desconectar, enviar, inscrever }} >
            {children}
        </WebSocketContext.Provider>
    )
}