import { request, response } from "express";
import GastosModelo from "../models/Gastos.js";

export const getGastos = async (req = request, res = response) => {
    const gastosBD = await GastosModelo.find().populate('usuario');
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Get gastos',
            gastosBD

        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}
export const GetGastosPorUsuario=async(req=request,res=response)=>{

    const gastosPorElUsuario = await GastosModelo.find({usuario:req.params.idUsuario})
try {
    return res.status(200).json({
        ok:true,
        msg:'get por usuario los gastos',
        gastos:gastosPorElUsuario
    })
} catch (error) {
    console.log(error)
    return res.status(400).json({
        ok: false,
        msg: 'INTERNAL ERROR'
    })
}
}
export const PostGastos = async (req = request, res = response) => {
    //TODO DEBES RECIBIR LOS DATOS DE LOS GASTOS

    try {
        const { nombre, total, categoria, fecha, fechaUnix, usuario } = req.body
        const GastoRegistrado = new GastosModelo({ nombre, total, categoria, fecha, fechaUnix, usuario })
        const respues = await GastoRegistrado.save();
        return res.status(200).json({
            ok: true,
            msg: 'Post gastos',
            body: {
                nombre, total, categoria, fecha, fechaUnix, usuario
            },
            respues

        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}

export const DeleteGasto = (req = request, res = response) => {
    const { id } = req.params
    try {
        return res.status(200).json({
            ok: true,
            msg: 'DeleteGasto',
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


