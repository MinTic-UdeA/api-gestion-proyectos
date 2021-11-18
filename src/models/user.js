import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
    _id: Number,
    nombre: String,
    apellidos: String,
    correo: String,
    contraseña: String,
    rol: String,
    fecha: {type: Date, default: Date.now}
});

export const userModel = mongoose.model('Usuario', userSchema);
