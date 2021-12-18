import mongoose from 'mongoose';
import { InscripcionModel } from "./inscripcion.js";
import { ProyectoModel } from "../proyecto/proyecto.js";
import { UsuarioModel } from "../usuario/usuario.js";


const resolversInscripcion = {
    Query: {
        listarInscripciones: async (parent, args, context) => {
           
            let listaInscripciones = [];
            console.log(args.lider);

            if (context.userData) {
                const proyectos = await ProyectoModel.find({ lider:  args.lider});

                const listaIdProyectos = proyectos.map((p) => p._id.toString());

                for (let i = 0; i < listaIdProyectos.length; i++) {
                    const inscripcion = await InscripcionModel.find({ proyecto: listaIdProyectos[i] })
                                                                .populate("proyecto")
                                                                .populate("estudiante");

                    inscripcion.forEach((ins) => listaInscripciones.push(ins));
                }
            }
            return listaInscripciones
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
                estado: "RECHAZADA"
            }, { new: true })
            return inscripcionRechazada
        }

    }
}

export { resolversInscripcion };

/* new Date().toISOString().split("T")[0] */

/* if (context.userData.rol === "LIDER") {
    const proyectos = await ProyectoModel.find({ lider: context.userData._id });
    console.log(proyectos)
    if (proyectos) {
        const inscripciones = await InscripcionModel.find({ proyecto: proyectos.map(p => p._id.toLocaleString()) }).populate('estudiante').populate({
            path: 'proyecto',
            populate: {
                path: 'lider'
            }
        });
        return inscripciones;
    } else {
        console.log('No hay inscripciones para el usuario')
    }
} */