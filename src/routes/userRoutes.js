import express from "express";
import { userCreate, usersRead, userReadById, userUpdateById, userDeleteById } from "../controllers/userCtrl.js"

export const user = express.Router();

/**
 * Leer todos los usuarios
 * Leer un usuario por id
 */
user.get('/usuarios', usersRead);
user.get('/usuario/:id', userReadById);

//Creacion de nuevos usuarios
user.post('/usuarios', userCreate);

//Actualizar un usuario
user.put("/usuario/:id", userUpdateById);

//Eliminar un usuario
user.delete("/usuario/:id", userDeleteById);