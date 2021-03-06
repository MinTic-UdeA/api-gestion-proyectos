import { InscripcionModel } from "./inscripcion.js";

const resolversInscripcion = {
    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find()
            return inscripciones         
        }
    },
    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscripcionModel.create({
                
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