import { Router } from "express";
import { GetUsuarios } from "../controllers/Usuarios.js";

export const RouterUsuarios = Router();

RouterUsuarios.get('/',GetUsuarios)