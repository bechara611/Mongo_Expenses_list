import express from 'express'
import dotenv from 'dotenv'
import { RouterInicio } from '../routes/Inicio.js';
dotenv.config();

export class Servidor {

    constructor() {
        this.rutas =
        {
            inicio: '/*',
            usuarios: 'usuarios/'
        }
        this.app = express()
        this.Middlewares();
        this.Rutas_metodos();
    }
    Middlewares(){
        this.app.use(express.static('public'));
        this.app.use(express.json())
    }

    Rutas_metodos(){
        this.app.use(this.rutas.inicio,RouterInicio)
    }
    HabilitarServidor(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Listen in ${process.env.PORT}`)
        })
    }

}