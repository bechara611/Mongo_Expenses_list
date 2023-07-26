import { Router } from "express";
import { getGastos,PostGastos,DeleteGasto } from "../controllers/Gastos.js";
import { Comprobar } from "../helpers/ValidationResults.js";
import { check } from "express-validator";

export const RouterGastos = Router();

RouterGastos.get('/',getGastos)

RouterGastos.post('/',
check('nombre','PLEASE INSERT A NAME').not().isEmpty(),
check('total','PLEASE INSERT A TOTAL').not().isEmpty(),
check('categoria','PLEASE INSERT A CATEGORY').not().isEmpty(),
check('fecha','PLEASE INSERT A DATE').not().isEmpty(),
check('fechaUnix','PLEASE INSERT A UNIX DATE').not().isEmpty(),
check('usuario','PLEASE INSERT AN USER').not().isEmpty(),
check('usuario','PLEASE INSERT A VALID ID USER').isMongoId(),
Comprobar,
PostGastos)

//TODO token
RouterGastos.delete('/:id',
check('id','INSERT A VALID ID').isMongoId(),
DeleteGasto)