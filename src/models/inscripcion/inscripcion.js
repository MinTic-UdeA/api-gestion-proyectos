import mongoose from 'mongoose';
// import { Schema, model } from "mongoose";
import { UsuarioModel } from "../usuario/usuario.js";
import { ProyectoModel } from "../proyecto/proyecto.js";
// import { Enum_EstadoInscripcion } from "./enums/enums";
const { Schema, model } = mongoose;

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
        ref: UsuarioModel,
        required: true,
    }
},
    {
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);

inscripcionSchema.virtual('lider', {
    ref: 'Proyecto',
    localField: 'proyecto',
    foreignField: 'lider',
})

/*inscripcionSchema.virtual('inscritos', {
    ref: 'User',
    localField: 'estudiante',
    foreignField: '._id',
})*/


const InscripcionModel = model('Inscripciones', inscripcionSchema);

export { InscripcionModel };