// import conectarBD from "./src/db/db.js";
// import dotenv from 'dotenv';
// // import { Enum_Rol } from "./src/db/models/enums/enums";
// import { UsuarioModel } from "./src/models/user.js";
// import { ProyectoModel } from "./src/models/proyecto.js";
// import { AvanceModel } from "./src/models/avance.js"
// import { InscripcionModel } from "./src/models/inscripcion.js"

// dotenv.config();

// const main = async () => {
//     await conectarBD();

// // CREAR un Usuario

// await UsuarioModel.create({
//   correo: "luciana@hotmail.com",
//   identificacion: "999",
//   nombre: "luciana",
//   apellido: "celis",
//   rol: "ESTUDIANTE",
//   password: "123456"  
// })
// .then((u)=> console.log("Usuario creado", u))
// .catch((e)=> console.error("error creando el usuario", e));

// // OBTENER un Usuario

// // await UsuarioModel.find()
// // .then((u)=> console.log("usuario", u))
// // .catch((e)=> console.log("error obteniendo el usuario", e))


// // EDITAR un Usuario

// /* await UsuarioModel.findOneAndUpdate({ correo: "lilo@gmail.com"}, { nombre: "mora" })
// .then((u)=> console.log("usuario", u))
// .catch((e)=> console.log("error cambiando el usuario", e))  */


// //ELIMINAR un Usuario

// // await UsuarioModel.findOneAndDelete({ correo: "lilo@gmail.com"})
// // .then((u)=> console.log("usuario", u))
// // .catch((e)=> console.log("error eliminando el usuario", e))

// // CREAR un Proyecto

// // await ProyectoModel.create({
// //   nombre: "proyecto8",
// //   objGeneral: "objetivo general",
// //   objEspecificos: "objetivo especifico",
// //   presupuesto: 2500,
// //   fechaInicio: Date.now(),
// //   fechaFin: new Date("2022/06/01"),
// //   lider: "61986d5781b9ac6ec44de11b"
// // })
// // .then((p) => {console.log('project', p)})
// // .catch((e) => {console.error(e);});

// // CREAR un Avance

// // await AvanceModel.create({
// //   fecha: Date.now(),
// //   descripcion: "este es un avance",
// //   observaciones: "observacion de un avance",
// //   proyecto: "6199cd18e817dbf93817b800",
// //   creadoPor: "61986d5781b9ac6ec44de11b"
// // })
// // .then((a) => {console.log('avance', a)})
// // .catch((e) => {console.error(e);});

// // Crear una Inscripcion   

// // await InscripcionModel.create({
// //   fechaIngreso: Date.now(),
// //   proyecto: "6199cd18e817dbf93817b800",
// //   estudiante: "61986c6185afd0257d7e001e"
// // })

// };
// main();

