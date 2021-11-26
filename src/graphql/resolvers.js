// Aqui se hace la copia de los resolvers
import { UserModel } from "../models/user.js";

const resolvers = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find()
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UserModel.find({_id: args._id})
            return usuario;
        }
    },
    
    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol
            });
            if (Object.keys(args).includes("estado")) {
                usuarioCreado.estado = args.estado
                // Los args son los que pasa el usuario
            }
            return usuarioCreado
        },
        eliminarUsuario: async (parent, args) => {
            const usuarioEliminado = await UserModel.findOneAndDelete({_id: args._id})
            return usuarioEliminado
        },
        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findOneAndUpdate(args._id, { 
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol})
            return usuarioEditado
        }
    }
}

export { resolvers };