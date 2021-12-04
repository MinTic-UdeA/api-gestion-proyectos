import { AvanceModel } from "./avance.js";

const resolversAvance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AvanceModel.find().populate('proyecto').populate('creadoPor');
            return avances
        },
        filtrarAvance: async (parent, args) => {
            const avanceFiltrado = await AvanceModel.find({ proyecto: args._id })
        }
    },

    Mutation: {

        crearAvance: async (parents, args) => {
            const avanceCreado = await AvanceModel.create({
                fecha: Date.now(),
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },

        editarAvance: async (parents, args) => {
            const avanceEditado = await AvanceModel.findByIdAndUpdate(args._id, {
                descripcion: args.descripcion
            }, { new: true });
            return avanceEditado;
        },
    },


}

export { resolversAvance };