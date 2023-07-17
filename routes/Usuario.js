import { Router } from "express";
import { DeleteUsuarios, GetUsuarios, PostUsuarios } from "../controllers/Usuarios.js";

export const RouterUsuarios = Router();

RouterUsuarios.get('/',GetUsuarios)
RouterUsuarios.post('/',PostUsuarios)
RouterUsuarios.delete('/:id',DeleteUsuarios)