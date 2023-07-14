import { request, response } from "express";

export const InicioGet=(req=request,res=response)=>{
    try {
        res.status(200).json({ok:true,msg:'Hola mundo'})
    } catch (error) {
        
    }

}