import { request } from "express";

export const getGastos=(req=request,res=response)=>{
    try {
        return  res.status(200).json({
             ok:true,
             msg:'Get gastos',
            
         })
         
     } catch (error) {
         console.log(error)
       return  res.status(400).json({
             ok:false,
             msg:'INTERNAL ERROR'
         })
     }
}

export const PostGastos=(req=request,res=response)=>{
    //TODO DEBES RECIBIR LOS DATOS DE LOS GASTOS
    try {
        return  res.status(200).json({
             ok:true,
             msg:'Post gastos',
            
         })
         
     } catch (error) {
         console.log(error)
       return  res.status(400).json({
             ok:false,
             msg:'INTERNAL ERROR'
         })
     }
}

export const DeleteGasto=(req=request,res=response)=>{
    const {id}= req.params
    try {
     return   res.status(200).json({
            ok:true,
            msg:'DeleteGasto',
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


