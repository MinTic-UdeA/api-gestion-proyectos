import mongoose from 'mongoose';
// import { Schema, model } from "mongoose";
// import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from './enums/enums';
import { UserModel } from './src/models/user.js'

const { Schema, model } = mongoose

// interface Proyecto {
//     nombre: string,
//     presupuesto: number,
//     fechaInicio: Date,
//     fechaFin: Date,
//     estado: Enum_EstadoProyecto,
//     fase: Enum_FaseProyecto,
//     lider: Schema.Types.ObjectId,
//     objetivos: Schema.Types.ObjectId
// }

const proyectoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true 
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
        ref: UserModel
    },
    objetivos: [
        {
          descripcion: {
            type: String,
            required: true,
          },
          tipo: {
            type: String,
            enum: ['GENERAL', 'ESPECIFICO'],
            required: true,
          },
        },
      ],
});

const ProyectoModel = model("Proyecto", proyectoSchema);

export { ProyectoModel };