import { request, response } from "express";
import GastosModelo from "../models/Gastos.js";
import { fromUnixTime, getUnixTime } from "date-fns";

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
        console.log(fromUnixTime(fechaUnix))
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

export const DeleteGasto = async (req = request, res = response) => {
    const { id } = req.params

    const existe = await GastosModelo.findById(id)
    if(!existe){
        return res.status(400).json({ok:false,
        msg:'ID NOT FOUND'})
    }

    const GastoBorrado = await GastosModelo.findByIdAndDelete(id)
    const gastos = await GastosModelo.find();
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Success',
            GastoBorrado,
            gastos
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}


