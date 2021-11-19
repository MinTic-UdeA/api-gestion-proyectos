import { userModel } from "../models/userModel.js";

export async function userCreate (req, res, _next) {
    const { id, nombre, apellidos, correo, contraseña, rol, estado } = req.body;
    console.log(req.body);

    userModel.create(
        {
            _id: id,
            nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            contraseña: contraseña,
            rol: rol,
            estado: estado
        }, (err, userOk) => {
            if (userOk !== null && !(err !== null)) {
                res.status(200).json('ok');
            } else {
                console.error(err);
                res.status(500).json("Error: " + err);
            }
        }
    );
}

export async function usersRead (_req, res, _next) {
    console.log("Ingreso a todos los usuarios");
    //res.json({ msg: "Visor de usuarios"});

    const users = await userModel.find({});

    console.log(users);

    if (users !== null) {
        res.status(200).json(users);
    } else {
        res.status(200).json("No existen registros");
    }
}

export function userReadById (req, res, _next) {
    const id = Number(req.params.id);

    userModel.findById(id, (err, userOk) => {
        //console.log("usuario", user);
        //console.log("error: ", err);
        if (userOk !== null) {
            res.status(200).json(user);
        } else {
            res.status(200).json("No existe el registro numero: " + id);
        }

        if (err !== null) {
            res.status(500).json("Error: " + err);
        }
    });
}

export function userUpdateById (req, res, _next) {
    const id = Number(req.params.id);

    console.log(req.body);

    userModel.findByIdAndUpdate(id, {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            contraseña: req.body.contraseña,
            rol: req.body.rol,
            estado: req.body.estado
        },
        {},
        (err, userOk) => {
            if (userOk !== null) {
                res.status(200).json('ok');
            }

            if (err !== null) {
                res.status(500).json("Error: " + err);
            }
        }
    );
}

export function userDeleteById (req, res, _next) {
    const id = Number(req.params.id);
    
    userModel.findByIdAndDelete(id, {}, (err, userOk) =>{
        if (userOk !== null) {
            res.status(200).json('ok');
        }

        if (err !== null) {
            res.status(500).json("Error: " + err);
        }       
    });
}