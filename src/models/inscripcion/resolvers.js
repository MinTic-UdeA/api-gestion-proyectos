import { InscripcionModel } from "./inscripcion.js";

const resolversInscripcion = {
    Query: {
        listarInscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find({lider:args.lider})
                                                        .populate("proyecto")
                                                        .populate("estudiante")
            console.log(inscripciones);
            return inscripciones         
        }
    },
    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscripcionModel.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante
        }) 
        return inscripcionCreada     
    }, 
        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscripcionModel.findOneAndUpdate( args.id, {
                estado: "ACEPTADA",
                fechaIngreso: Date.now()
            }, { new: true })
            return inscripcionAprobada
        }
    }

}

export { resolversInscripcion };