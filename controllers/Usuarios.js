import { request, response } from "express";
import { CrearToken } from "../helpers/JWT.js";

export const GetUsuarios = (req = request, res = response) => {
    try {
        res.status(200).json({
            ok: true,
            msg: 'Get usuarios'
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}

export const PostUsuarios = async (req = request, res = response) => {
    try {
        const { nombre, correo, clave } = req.body;
    
        return res.status(200).json({
            ok: true,
            msg: 'PostUsuarios',
            usuario: {
                nombre,
                correo,
                clave,
                token
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}

export const PostLogin = async(req = request, res = response)=>{
    try {
        const {correo, clave } = req.body;
        //TODO comprobar si existe el usuario y el pass es correcto
        const token = await CrearToken({ id: 123, correo })
        return res.status(200).json({
            ok: true,
            msg: 'Login',
            usuario: {
                correo,
                clave,
                token
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}

export const DeleteUsuarios = (req = request, res = response) => {
    const { id } = req.params
    try {
        return res.status(200).json({
            ok: true,
            msg: 'DeleteUsuarios',
            id
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}