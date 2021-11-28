import { ProyectoModel } from "./proyecto.js";

const resolversProyecto = {

    Query: {
        Proyectos: async (parent, args) => {
            const Proyectos = await ProyectoModel.find()
            return Proyectos;
        },
        Proyecto: async (parent, args) => {
            const Proyecto = await ProyectoModel.find({_id: args._id})
            return Proyecto;
        }
    },
    
    Mutation: {
    }
}

export { resolversProyecto };