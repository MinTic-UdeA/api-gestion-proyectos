import { InscripcionModel } from "./inscripcion.js";
import { UsuarioModel } from "../usuario/usuario.js";

const resolversInscripcion = {
    Query: {
        listarInscripciones: async (parent, args) => {
<<<<<<< HEAD
            const fecha = new Date(); 
            console.log("ultima query");
            console.log(fecha.toLocaleTimeString());
            console.log(args.lider);
            //{ proyecto: args.lider }
            const inscripciones = await InscripcionModel.find({ lider: args.lider})
                .populate("lider")
                //.populate("inscritos")
            console.log(inscripciones);
=======
            const inscripciones = await InscripcionModel.find({ lider: args.lider })
                .populate("proyecto")
                .populate("estudiante")
>>>>>>> 2c7106b956f698890339954cc3989dbf5e894bb8
            return inscripciones
        }
    },
    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscripcionModel.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
                estado: args.estado,
                fechaIngreso: args.fechaIngreso,
                fechaEgreso: args.fechaEgreso
            })
            return inscripcionCreada
        },
        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(args._id, {
                estado: "ACEPTADA",
                fechaIngreso: new Date().toISOString().split("T")[0]
            }, { new: true })
            return inscripcionAprobada
        },
        rechazarInscripcion: async (parent, args) => {
            const inscripcionRechazada = await InscripcionModel.findByIdAndUpdate(args._id, {
                estado: "PENDIENTE"
            }, { new: true })
            return inscripcionRechazada
        }

    }
}

export { resolversInscripcion };

/* new Date().toISOString().split("T")[0] */