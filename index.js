import { Servidor } from "./models/Server.js"




const servidor = new Servidor()
const hotfix1 = 123;
const desarrollo_4 = 123;
try {
    servidor.HabilitarServidor()
} catch (error) {
    console.log(error)
}