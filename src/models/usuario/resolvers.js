import { UsuarioModel } from "./usuario.js";

const resolversUsuario = {

    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UsuarioModel.find()
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UsuarioModel.find({_id: args._id})
            return usuario;
        }
    },
    
    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UsuarioModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                estado: args.estado
            });
            if (Object.keys(args).includes("estado")) {
                usuarioCreado.estado = args.estado
                // Los args son los que pasa el usuario
            }
            return usuarioCreado
        },
        eliminarUsuario: async (parent, args) => {
            const usuarioEliminado = await UsuarioModel.findOneAndDelete({_id: args._id})
            return usuarioEliminado
        },
        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UsuarioModel.findOneAndUpdate(args._id, { 
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol})
            return usuarioEditado
        }
    }
}

export { resolversUsuario };