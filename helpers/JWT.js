import { request, response } from 'express';
import JWT from 'jsonwebtoken'

export const CrearToken = async (payload = {}) => {
    try {
        const token = JWT.sign(payload, process.env.KEY);
        return token
    } catch (error) {
        console.log(error)
        return null;
    }

}

export const VerificarToken = (token = '') => {
    try {
        const token = JWT.verify(token, process.env.KEY)
        return token;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const MiddlewareToken = (token,next,req=request) => {
    try {
        const payload = JWT.verify(token, process.env.KEY)
        if (payload) {
            console.log(payload)
            req.usuario = payload
           return true;
        }
    } catch (error) {
    throw new Error('INVALID TOKEN')
    }

}