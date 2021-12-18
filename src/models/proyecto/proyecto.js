import mongoose from 'mongoose';
// import { Schema, model } from "mongoose";
// import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from './enums/enums';
import { UsuarioModel } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

const proyectoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    objGeneral: { 
        type: String,
        required: true,
    },
    objEspecificos: {
        type: String,
        required: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: String,
        required: false
    },
    fechaFin: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        default: 'INACTIVO',
    },
    fase: {
        type: String,
        enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
        default: 'NULO',
    },
    lider: {
        type: Schema.Types.ObjectId,
        ref: UsuarioModel
    },
},
    {
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);

// populate para habilitar populate y campos virtuales 

proyectoSchema.virtual('inscripciones', {
    ref: 'Inscripciones',
    localField: '_id',
    foreignField: 'proyecto',
  })

proyectoSchema.virtual("avances", {
    ref: "Avances",
    localField: "_id",
    foreignField: "proyecto"
})

const ProyectoModel = model("Proyecto", proyectoSchema);

export { ProyectoModel };