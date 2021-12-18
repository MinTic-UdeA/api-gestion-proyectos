import mongoose from 'mongoose';
// import { Schema, model } from "mongoose";
import { ProyectoModel } from "../proyecto/proyecto.js";
import { UsuarioModel } from "../usuario/usuario.js";
const { Schema, model } = mongoose

// interface Avance {
//   fecha: Date;
//   descripcion: string;
//   observaciones: [string];
//   proyecto: Schema.Types.ObjectId;
//   creadoPor: Schema.Types.ObjectId
// }

const avanceSchema = new Schema({
    fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProyectoModel,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UsuarioModel,
    required: true,
  },
});

const AvanceModel = model('Avances', avanceSchema);

export { AvanceModel };
