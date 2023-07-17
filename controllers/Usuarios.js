import { request, response } from "express";

export const GetUsuarios=(req=request,res=response)=>{
    try {
        res.status(200).json({
            ok:true,
            msg:'Get usuarios'
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            ok:false,
            msg:'INTERNAL ERROR'
        })
    }
}

export const PostUsuarios=(req=request,res=response)=>{
    const {nombre,correo,clave}=req.body;
    try {
       return  res.status(200).json({
            ok:true,
            msg:'PostUsuarios',
            usuario:{
                nombre,
                correo,
                clave
            }
        })
        
    } catch (error) {
        console.log(error)
      return  res.status(400).json({
            ok:false,
            msg:'INTERNAL ERROR'
        })
    }
}

export const DeleteUsuarios=(req=request,res=response)=>{
    const {id}= req.params
    try {
     return   res.status(200).json({
            ok:true,
            msg:'DeleteUsuarios',
            id
        })
        
    } catch (error) {
        console.log(error)
     return  res.status(400).json({
            ok:false,
            msg:'INTERNAL ERROR'
        })
    }
}