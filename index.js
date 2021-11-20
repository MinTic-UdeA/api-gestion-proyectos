import conectarBD from "./src/db/db.js";
// import { Enum_Rol } from "./src/db/models/enums/enums";
import { UserModel } from "./src/models/user.js";
// import { ProyectoModel } from "./src/models/proyecto.js";
import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
    await conectarBD();

// CREAR un Usuario

  await UserModel.create({
    correo: "patricia@hotmail.com",
    identificacion: "444",
    nombre: "patricia",
    apellido: "serrano",
    rol: "ESTUDIANTE"
    
})
.then((u)=> console.log("Usuario creado", u))
.catch((e)=> console.error("error creando el usuario", e));

// OBTENER un Usuario

// await UserModel.find()
// .then((u)=> console.log("usuario", u))
// .catch((e)=> console.log("error obteniendo el usuario", e))


// EDITAR un Usuario

/* await UserModel.findOneAndUpdate({ correo: "lilo@gmail.com"}, { nombre: "mora" })
.then((u)=> console.log("usuario", u))
.catch((e)=> console.log("error cambiando el usuario", e))  */


//ELIMINAR un Usuario

// await UserModel.findOneAndDelete({ correo: "lilo@gmail.com"})
// .then((u)=> console.log("usuario", u))
// .catch((e)=> console.log("error eliminando el usuario", e))

};


main();

