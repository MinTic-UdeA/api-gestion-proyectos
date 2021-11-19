import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from './enums/enums';
import { UserModel } from "./user";

interface Proyecto {
    nombre: string,
    presupuesto: number,
    fechaInicio: Date,
    fechaFin: Date,
    estado: Enum_EstadoProyecto,
    fase: Enum_FaseProyecto,
    lider: Schema.Types.ObjectId,
    objetivos: Schema.Types.ObjectId
}


const proyectoSchema = new Schema<Proyecto>({
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
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.inactivo
    },
    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.nulo
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
            enum: Enum_TipoObjetivo,
            required: true,
          },
        },
      ],
});

const ProyectoModel = model("Proyecto", proyectoSchema);

export { ProyectoModel };