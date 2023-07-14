import { Router, request, response } from "express";
import { InicioGet } from "../controllers/Inicio.js";

export const RouterInicio = Router();

RouterInicio.get('/',InicioGet)