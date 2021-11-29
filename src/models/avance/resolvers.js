import { AvanceModel } from "./avance.js";

const resolversAvance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AvanceModel.find()
            return avances
        },
        filtrarAvance: async (parent, args) => {
            const avanceFiltrado = await AvanceModel.find({ proyecto: args._id })
        }
    },

    Mutation: {
        crearAvance: async (parents, args) => {
            const avanceCreado = ModeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
    }
}

export { resolversAvance };