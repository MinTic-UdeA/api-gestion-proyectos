import express from "express";
import { userModel } from "../models/user.js";

export const user = express.Router();

user.get('/usuarios', async (req, res, next) => {
    console.log("Ingreso a todos los usuarios");
    //res.json({ msg: "Visor de usuarios"});

    const users = await userModel.find({});

    console.log(users);

    if (users !== null) {
        res.status(200).json(users);
    } else {
        res.status(200).json("No existen registros");
    }

});

user.get('/usuario/:id', (req, res, next) => {
    const id = Number(req.params.id);

    userModel.findById(id, function (err, user) {
        //console.log("usuario", user);
        //console.log("error: ", err);
        if (user !== null) {
            res.status(200).json(user);
        } else {
            res.status(200).json("No existe el registro numero: " + id);
        }

        if (err !== null) {
            res.status(500).json("Error: " + err);
        }
    });
});

//Nuevo usuario
user.post('/usuarios', (req, res, next) => {
   const { idUsuario, nombre, apellidos, correo, contraseña, rol, fecha } = req.body;
   console.log(req.body);

   try {
       userModel.create({
        _id: idUsuario,
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        contraseña: contraseña,
        rol: rol,
        fecha: fecha
       });

       res.status(200).json('ok');

   } catch (error) {
       console.error(error);
       res.status(500).json(error);
   }
   
});