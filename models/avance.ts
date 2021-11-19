import { Schema, model } from "mongoose";
import { ProyectoModel } from "./proyecto"
import { UserModel } from "./user";

interface Avance {
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  proyecto: Schema.Types.ObjectId;
  creadoPor: Schema.Types.ObjectId
}

const avanceSchema = new Schema<Avance>({
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
    ref: UserModel,
    required: true,
  },
});

const ModeloAvance = model('Avance', avanceSchema);

export { ModeloAvance };
