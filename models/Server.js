import express from 'express'
import dotenv from 'dotenv'
import { RouterInicio } from '../routes/Inicio.js';
import { RouterUsuarios } from '../routes/Usuario.js';
dotenv.config();

export class Servidor {

    constructor() {
        this.rutas =
        {
            inicio:'/',
            usuarios:'api/usuarios/'
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
        this.app.use(this.rutas.usuarios,RouterUsuarios)
    }
    HabilitarServidor(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Listen in ${process.env.PORT}`)
        })
    }

}