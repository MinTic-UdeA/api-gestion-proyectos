import { UsuarioModel } from "./usuario.js";

const resolversUsuario = {

    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UsuarioModel.find()
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UsuarioModel.findOne({_id: args._id})
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
            })
            return usuarioCreado
        },
        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UsuarioModel.findByIdAndUpdate(args._id, { 
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
            }, { new: true })
            return usuarioEditado
        },
        aprobarUsuario: async (parent, args) => {
            const usuarioAprobado = await UsuarioModel.findByIdAndUpdate(args._id, {
                estado: args.estado
            }, { new: true })
            return usuarioAprobado
        },
        eliminarUsuario: async (parent, args) => {
            const key = Object.keys(args)
            const usuarioEliminado = await UsuarioModel.findByIdAndDelete( { key } )
            return usuarioEliminado
        },
    }
}

export { resolversUsuario };

// Otra forma de eliminarUsuario: 
// if (Object.keys(args).includes('_id')) {
//     const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
//     return usuarioEliminado;
//   } else if (Object.keys(args).includes('correo')) {
//     const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo });
//     return usuarioEliminado;
//   }