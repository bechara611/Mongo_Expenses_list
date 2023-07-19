
import mongoose from "mongoose"

export const ConectarBD = async()=>{
try {
    await mongoose.connect(process.env.URL_BD,{})
    console.log('conectado')
} catch (error) {
    console.log(error)
    throw new Error('Error conectando a la BD')

}
}