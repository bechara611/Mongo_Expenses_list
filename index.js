import { Servidor } from "./models/Server.js"




const servidor = new Servidor()

try {
    servidor.HabilitarServidor()
} catch (error) {
    console.log(error)
    console.log('')
}