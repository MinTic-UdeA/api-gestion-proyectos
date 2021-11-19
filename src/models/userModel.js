import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
    _id: Number,
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    contraseña: String,
    rol: {
        type: String,
        required: true,
        //enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR']
    },
    estado: {
        type: String,
        //enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
        default: 'PENDIENTE'
    }
    //fecha: {type: Date, default: Date.now}
});

export const userModel = mongoose.model('Usuario', userSchema);
