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

UsuarioModelo.methods.toJSON= function () {
    const {__v,...resto}= this.toObject();
    return resto;
}
export default model('Usuarios',UsuarioModelo);