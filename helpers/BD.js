import Usuario from "../models/Usuario.js"

export const UsuarioExiste = async (correo = '') => {
    try {
        const existe = await Usuario.findOne({ correo})
        if (existe) {
            return existe
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }

}