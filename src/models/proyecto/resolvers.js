import { ProyectoModel } from "./proyecto.js";

const resolversProyecto = {
    
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProyectoModel.find().populate("lider")
            return proyectos;
        },
        Proyecto: async (parent, args) => {
            const Proyecto = await ProyectoModel.findOne({ _id: args._id })
            return Proyecto;
        }
    },

    Mutation: {
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
        editarProyecto: async (parent, args) => {
            const proyectoEditado = await ProyectoModel.findByIdAndUpdate( args._id, {
                nombre: args.nombre,
                objGeneral: args.objGeneral,
                objEspecificos: args.objEspecificos,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
            }, { new: true })
            return proyectoEditado
        }, 
        // Falta que: Cuando cambia de inactivo a activo, y la fase es nula, esta fase se actualiza a iniciado y se captura la fecha inicial
        aprobarProyecto: async (parent, args) => {
            const proyectoAprobado = await ProyectoModel.findByIdAndUpdate( args._id, {
                estado: "ACTIVO"
            }, { new: true })
            return proyectoAprobado
        },
        eliminarProyecto: async (parent, args) => {
            const proyectoEliminado = await ProyectoModel.findOneAndDelete({ _id: args._id })
            return proyectoEliminado
        }
    }
}

export { resolversProyecto };
