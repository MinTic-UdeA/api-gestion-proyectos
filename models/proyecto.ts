import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from './enums/enums';

interface Proyecto {
    nombre: string,
    presupuesto: number,
    fechaInicio: Date,
    fechaFin: Date,
    estado: Enum_EstadoProyecto,
    fase: Enum_FaseProyecto
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
        default: Enum_EstadoProyecto.nulo
    }
});

const ProyectoModel = model("Proyecto", proyectoSchema);

export { ProyectoModel };