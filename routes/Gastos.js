import { Router } from "express";
import { getGastos,PostGastos,DeleteGasto } from "../controllers/Gastos.js";

export const RouterGastos = Router();

RouterGastos.get('/',getGastos)

RouterGastos.post('/',PostGastos)

RouterGastos.delete('/:id',DeleteGasto)