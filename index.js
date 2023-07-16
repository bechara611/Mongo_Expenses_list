import { Servidor } from "./models/Server.js"




const servidor = new Servidor()
const hotfix1 = 123;
try {
    servidor.HabilitarServidor()
} catch (error) {
    console.log(error)
    console.log('1')
    console.log('2')
    console.log('2.3!!!!!!')
}