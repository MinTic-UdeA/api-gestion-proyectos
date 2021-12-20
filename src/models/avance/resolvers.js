import { AvanceModel } from "./avance.js";
import { InscripcionModel } from "../inscripcion/inscripcion.js";
import { ProyectoModel } from "../proyecto/proyecto.js";

const resolversAvance = {
  Query: {
    Avances: async (parent, args, context) => {
      if (context.userData.rol === "ESTUDIANTE") {

        const inscripcionAceptada = await InscripcionModel.find({ //busco la inscripcion a el proyecto y si esta aceptada 
          estudiante: context.userData._id,
          // estado: 'ACEPTADA',
          proyecto: args.proyectoId,
        })

        if (inscripcionAceptada[0]) {

          const avances = await AvanceModel.find({ proyecto: args.proyectoId })
            .populate('proyecto')
            .populate('creadoPor')

          return avances;
        }

      } else if (context.userData.rol === "LIDER") {

        const avances = await AvanceModel.find({ proyecto: args.proyectoId })
          .populate('proyecto')
          .populate('creadoPor')

        return avances;

      }
    },
  },

  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = await AvanceModel.create({
        fecha: new Date().toISOString().split("T")[0],
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

    crearObservacion: async (parent, args) => {
      const observacionCreada = await AvanceModel.findByIdAndUpdate(args._id,
        {$push: { observaciones: args.observacion}
        }, {new:true});
        return observacionCreada;
    }
  },
}

export { resolversAvance };

// if (context.userData.rol === 'ESTUDIANTE') {
//   const inscripciones = await InscripcionModel.find({ $and: [{ estudiante: context.userData._id }, { estado: "ACEPTADO" }] })
//   console.log(inscripciones)
//   if (inscripciones) {
//     const avances = await AvanceModel.find({ proyecto: inscripciones.map(p => p.proyecto) }).populate('proyecto').populate('creadoPor');
//     return avances;
//   } else {
//     console.log("No hay avances")
//   }
// } else if (context.userData.rol === 'LIDER') {
//   const proyectos = await ProyectoModel.find({ lider: context.userData._id })
//   console.log(proyectos)
//   if (proyectos) {
//     const avances = await AvanceModel.find({ proyecto: proyectos.map(p => p._id) }).populate('proyecto').populate('creadoPor');
//     return avances;
//   } else {
//     console.log("no hay avances")
//   }
// } else {
//   const avances = await AvanceModel.find().populate('proyecto').populate('creadoPor');
//   return avances;
// }