import mongoose from 'mongoose';
// import { Schema, model } from "mongoose";
// import { Enum_Rol, Enum_EstadoUsuario } from './enums/enums';
const { Schema, model } = mongoose;

// Esto se usaba para TS
// interface User {
//   correo: string;
//   identificacion: string;
//   nombre: string;
//   apellido: string;
//   rol: Enum_Rol;
//   estado: Enum_EstadoUsuario;
// }

// Construir el esquema de Mongoose y definir el modelo para poder conectarme con la coleccion de Usuario

const userSchema = new Schema({
    correo: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'El formato del correo electrónico es incorrecto.',
          },
    },
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
    },
    estado: {
        type: String,
        enum: ['AUTORIZADO', 'NO_AUTORIZADO', 'PENDIENTE'],
        default: 'PENDIENTE',
    },
})

// Virtual populate para poder relacionar la información en la relación de One to Many





//Hasta aquí ya está el esquema, ahora se debe definir el modelo "User" (es el nombre que tendrá la colección)

const UsuarioModel = model("User", userSchema);

export { UsuarioModel };

