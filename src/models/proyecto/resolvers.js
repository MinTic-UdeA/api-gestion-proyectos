import { ProyectoModel } from "./proyecto.js";

const resolversProyecto = {

    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProyectoModel.find()
            return proyectos;
        },
        Proyecto: async (parent, args) => {
            const Proyecto = await ProyectoModel.findOne({ _id: args._id })
            return Proyecto;
        }
    },

    Mutation: {
        // lideres crean proyectos
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProyectoModel.create({
                nombre: args.nombre,
                objGeneral: args.objGeneral,
                objEspecificos: args.objEspecificos,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                lider: args.lider
            })
            return proyectoCreado
        },
        // lideres editan proyectos
        EditarProyecto: async (parent, args) => {
            const proyectoEditado = await ProyectoModel.findOneAndUpdate( args.id, {
                nombre: args.nombre,
                objGeneral: args.objGeneral,
                objEspecificos: args.objEspecificos,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
            }, { new: true })
            return proyectoEditado
        },
        EliminarProyecto: async (parent, args) => {
            const proyectoEliminado = await ProyectoModel.findOneAndDelete({ _id: args._id })
            return proyectoEliminado
        }
    }
}

export { resolversProyecto };
