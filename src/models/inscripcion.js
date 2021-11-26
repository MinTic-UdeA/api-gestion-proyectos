import mongoose from 'mongoose';
import { Schema, model } from "mongoose";
import { UserModel } from "./src/models/user.js";
// import { Enum_EstadoInscripcion } from "./enums/enums"

// interface Inscripcion {
//     estado: Enum_EstadoInscripcion;
//     fechaIngreso: Date;
//     fechaEgreso: Date;
//     proyecto: Schema.Types.ObjectId;
//     estudiante: Schema.Types.ObjectId;
// }

const inscripcionSchema = new Schema({
    estado: {
        type: String,
        enum: ['ACEPTADA', 'RECHAZADA', 'PENDIENTE'],
        default: 'PENDIENTE',
        required: true,
    },
    fechaIngreso: {
        type: Date,
        required: false,
    },
    fechaEgreso: {
        type: Date,
        required: false,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProyectoModel,
        required: true,
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});

const InscripcionModel = model('Inscripciones', inscripcionSchema);

export { InscripcionModel };