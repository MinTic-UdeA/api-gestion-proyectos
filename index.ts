import conectarBD from "./db/db";
import { UserModel } from "./models/user";

const main = async () => {
    await conectarBD();

// CREAR un Usuario

/*  await UserModel.create({
    correo: "lilo@gmail.com",
    identificacion: "1144087888",
    nombre: "lilo",
    apellido: "dominguez",
})
.then((u)=> console.log("Usuario creado", u))
.catch((e)=> console.error("error creando el usuario", e)); */


// OBTENER un Usuario

/* await UserModel.find()
.then((u)=> console.log("usuario", u))
.catch((e)=> console.log("error obteniendo el usuario", e)) */


// EDITAR un Usuario

/* await UserModel.findOneAndUpdate({ correo: "lilo@gmail.com"}, { nombre: "mora" })
.then((u)=> console.log("usuario", u))
.catch((e)=> console.log("error cambiando el usuario", e))  */


//ELIMINAR un Usuario

await UserModel.findOneAndDelete({ correo: "lilo@gmail.com"})
.then((u)=> console.log("usuario", u))
.catch((e)=> console.log("error eliminando el usuario", e))

};


main();

