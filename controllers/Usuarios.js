import { request, response } from "express";
import { CrearToken } from "../helpers/JWT.js";
import UsuarioModelo from '../models/Usuario.js'
import { UsuarioExiste } from "../helpers/BD.js";
export const GetUsuarios = async (req = request, res = response) => {

    const usuarios = await UsuarioModelo.find();
    let usuarios2 = [];
    usuarios.forEach((element, index) => {
        usuarios2[index] = { nombre: element.nombre, correo: element.correo, id: element._id }
    });

    try {
        res.status(200).json({
            ok: true,
            msg: 'Get usuarios',
            usuarios: usuarios2
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
        const existe = await UsuarioExiste(correo)
        if (existe) {
            return res.status(400).json({
                ok: false,
                msg: 'EMAIL ALREADY EXIST'
            })
        }
        const ModeloUsuario = new UsuarioModelo({
            nombre: nombre.toUpperCase(),
            correo: correo.toLowerCase(),
            password: clave
        })
        const usuarioBD = await ModeloUsuario.save();
        return res.status(200).json({
            ok: true,
            msg: 'PostUsuarios',
            usuarioBD
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}

export const PostLogin = async (req = request, res = response) => {
    try {
        const { correo, clave } = req.body;
        //TODO comprobar si existe el usuario y el pass es correcto
        const existeCorreo = await UsuarioExiste(correo)
        if (!existeCorreo) {
            return res.status(400).json({
                ok: false,
                msg: 'EMAIL NOT FOUND'
            })
        }
        const usuarioBD = await UsuarioModelo.findOne({correo:correo,password:clave})
        if (!usuarioBD) {
            return res.status(400).json({
                ok: false,
                msg: 'INCORRECT PASSWORD'
            })
        }
        
        const token = await CrearToken({ id:usuarioBD._id, correo })
        return res.status(200).json({
            ok: true,
            msg: 'Login',
            usuarioBD,
            token

        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}

export const DeleteUsuarios =async (req = request, res = response) => {
    const { id } = req.params
    const usuario =await UsuarioModelo.findById(id)
    if (!usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'USER NOT FOUND'
        })
    }
    const usuariosLuegoDeEliminar = await UsuarioModelo.findByIdAndDelete(id,{new:true})
    try {
        return res.status(200).json({
            ok: true,
            msg: 'USER DELETED',
            id,
            Eliminado: usuariosLuegoDeEliminar
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}