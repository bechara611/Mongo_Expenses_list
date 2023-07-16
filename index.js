import { Servidor } from "./models/Server.js"




const servidor = new Servidor()

try {
    servidor.HabilitarServidor()
} catch (error) {
    console.log(error)
    console.log('1')
    console.log('2')
    console.log('2.3!!!!!!')
    console.log('desarrollo 3!')
}