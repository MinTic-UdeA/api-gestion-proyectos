import { Schema, model } from "mongoose";
import { Enum_Rol, Enum_EstadoUsuario } from './enums/enums';

interface User {
    correo: string,
    identificacion: string,
    nombre: string,
    apellido: string, 
    rol: Enum_Rol;
    estado: Enum_EstadoUsuario;
}

// Construir el esquema y definir el modelo para poder conectarme con la coleccion de Usuario

const userSchema = new Schema<User>({
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
        enum: Enum_Rol,
    },
    estado: {
        type: String,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.pendiente,
    },
})

//Hasta aquí ya está el esquema, ahora se debe definir el modelo "User"

const UserModel = model("User", userSchema);

export { UserModel };

