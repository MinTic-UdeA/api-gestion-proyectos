import { ProyectoModel } from "./proyecto.js";

const resolversProyecto = {

  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProyectoModel.find().populate("lider").populate("avances")
      return proyectos;
    },
    Proyecto: async (parent, args) => {
      const Proyecto = await ProyectoModel.findById({ _id: args._id })
      return Proyecto;
    },
    listarProyectosByLider: async (parent, args) => {
      // const proyectos = await ProyectoModel.find({ lider: args.lider}, {estado: args.estado}]})
      const proyectos = await ProyectoModel.find({ lider: args._id })
      return proyectos;
    }
  },

  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProyectoModel.create({
        nombre: args.nombre,
        objGeneral: args.objGeneral,
        objEspecificos: args.objEspecificos,
        presupuesto: args.presupuesto,
        lider: args.lider,
      })
      return proyectoCreado
    },
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ProyectoModel.findByIdAndUpdate( args._id,
        {
          nombre: args.nombre,
          objGeneral: args.objGeneral,
          objEspecificos: args.objEspecificos,
          presupuesto: args.presupuesto
        },
        { new: true })

      return proyectoEditado;
    },

    aprobarProyecto: async (parent, args) => {
        const proyectoAprobado = await ProyectoModel.findByIdAndUpdate(args._id, {
        estado: "ACTIVO",
        fase: "INICIADO",
        fechaInicio: new Date(Date.now()).toISOString().split("T")[0]
      }, { new: true })
      return proyectoAprobado
      },

    desactivarProyecto: async (parent, args) => {
      const proyectoDesactivado = await ProyectoModel.findByIdAndUpdate(args._id, {
        estado: "INACTIVO",
        fechaFin: new Date(Date.now()).toISOString().split("T")[0]
      }, { new: true })
      return proyectoDesactivado
    },

    terminarProyecto: async (parent, args) => {
      const proyectoTerminado = await ProyectoModel.findByIdAndUpdate(args._id, {
        estado: "INACTIVO",
        fase: "TERMINADO",
        fechaFin: new Date(Date.now()).toISOString().split("T")[0]
      }, { new: true })
      return proyectoTerminado
    },

    reactivarProyecto: async (parent, args) => {
      const proyectoReactivado = await ProyectoModel.findByIdAndUpdate(args._id, {
        estado: "ACTIVO",
        fechaInicio: new Date(Date.now()).toISOString().split("T")[0]
      }, { new: true })
      return proyectoReactivado
    },

    eliminarProyecto: async (parent, args) => {
      const proyectoEliminado = await ProyectoModel.findOneAndDelete({ _id: args._id })
      return proyectoEliminado
    }
  }
}

export { resolversProyecto };

// {
//   $and: [{ _id: args._id }, { estado: args.estado }]
// },