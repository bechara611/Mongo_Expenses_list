import { Schema, model } from "mongoose";

const GastoModelo = new Schema({
    nombre:{
        type:String,
        required:[true,'PLEASE INSERT A VALUE FOR NOMBRE']
    },
    total:{
        type:Number,
        required:[true,'PLEASE INSERT A VALUE FOR TOTAL']
    },
    categoria:{
        type:String,
        required:[true,'PLEASE INSERT A VALUE FOR CATEGORIA']
    },
    fecha:{
        type:Date,
        required:[true,'PLEASE INSERT A VALUE FOR FECHA']
    },
    fechaUnix:{
        type:String,
        required:[true,'PLEASE INSERT A VALUE FOR fechaUnix']
    }
})

export default model('GASTOS',GastoModelo)