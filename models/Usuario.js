import { Schema, model } from "mongoose";

const UsuarioModelo= new Schema({
    nombre:{
        type:String,
        required:[true,'PLEASE INSERT A NAME']
    },
    correo:{
        type:String,
        required:[true,'PLEASE INSERT A EMAIL']
    },
    password:{
        type:String,
        required:[true,'PLEASE INSERT A PASSWORD']
    }
})
export default model('USUARIOS',UsuarioModelo);