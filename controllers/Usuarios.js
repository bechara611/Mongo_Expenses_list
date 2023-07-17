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