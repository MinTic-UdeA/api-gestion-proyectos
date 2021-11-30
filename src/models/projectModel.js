import mongoose from "mongoose";

const { Schema } = mongoose;
const projectSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    objGeneral: {
        type: String,
        required: true
    },
    objEspecificos: {
        type: String,
        required: true,
    },
    presupuesto: {
        type: Number,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true,
        default: Date.now
    },
    fechaFin: {
        type: Date,
        required: true
    },
    lider_id: {
        type: Schema.Types.Number,
        required: true,
        ref:"Usuarios"
    },
    lider_nombre: {
        type: Schema.Types.String,
        ref:"Usuarios"
    },
    estado: {
        type: String,
        required: true,
        //enum: ['INACTIVO', 'ACTIVO']
        default: 'INACTIVO'
    },
    fase: {
        type: String,
        //enum: ['INICIADO', 'EN DESARROLLO', 'TERMINADO'],
        default: null
    }
    
});

export const projectModel = mongoose.model('Proyectos', projectSchema);