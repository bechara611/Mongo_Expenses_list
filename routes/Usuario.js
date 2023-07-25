import { Router } from "express";
import { DeleteUsuarios, GetUsuarios, PostUsuarios,PostLogin } from "../controllers/Usuarios.js";
import { check } from "express-validator";
import { Comprobar } from "../helpers/ValidationResults.js";
import { MiddlewareToken } from "../helpers/JWT.js";

export const RouterUsuarios = Router();

RouterUsuarios.get('/',
check('token','PLEASE INSERT A TOKEN').not().isEmpty(),
check('token','INVALID TOKEN').custom(MiddlewareToken),
Comprobar,
GetUsuarios)


RouterUsuarios.post('/',
check('nombre','PLEASE INSERT A NAME').not().isEmpty(),
check('correo','PLEASE INSERT A EMAIL').not().isEmpty(),
check('clave','PLEASE INSERT A PASSWORD').not().isEmpty(),
check('token','PLEASE INSERT A TOKEN').not().isEmpty(),
check('token','INVALID TOKEN').custom(MiddlewareToken),
Comprobar,
PostUsuarios)

RouterUsuarios.post('/login',
check('correo','INSERT A EMAIL').not().isEmpty(),
check('clave','PLEASE INSERT A PASSWORD').not().isEmpty(),
Comprobar,
PostLogin
)

//TODO token para la accion
RouterUsuarios.delete('/:id',
check('token','PLEASE INSERT A TOKEN').not().isEmpty(),
check('id','INSERT A VALID ID').isMongoId(),
check('token','PLEASE INSERT A TOKEN').not().isEmpty(),
check('token','INVALID TOKEN').custom(MiddlewareToken),
Comprobar,
DeleteUsuarios)