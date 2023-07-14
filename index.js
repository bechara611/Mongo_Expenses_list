import { Servidor } from "./Server.js"



const servidor = new Servidor()

try {
    servidor.HabilitarServidor()
} catch (error) {
    console.log(error)
}