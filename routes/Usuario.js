import { Router } from "express";
import { DeleteUsuarios, GetUsuarios, PostUsuarios } from "../controllers/Usuarios.js";
import { check } from "express-validator";
import { Comprobar } from "../helpers/ValidationResults.js";

export const RouterUsuarios = Router();

RouterUsuarios.get('/',GetUsuarios)


RouterUsuarios.post('/',
check('nombre','PLEASE INSERT A NAME').not().isEmpty(),
check('correo','PLEASE INSERT A EMAIL').not().isEmpty(),
check('clave','PLEASE INSERT A PASSWORD').not().isEmpty(),
Comprobar,
PostUsuarios)

//TODO token para la accion
RouterUsuarios.delete('/:id',
 check('id','INSERT A VALID ID').isMongoId(),
Comprobar,
DeleteUsuarios)