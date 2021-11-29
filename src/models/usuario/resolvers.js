import { UsuarioModel } from "./usuario.js";

const resolversUsuario = {
// Los args son los que pasa el usuario
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
            });
            if (Object.keys(args).includes("estado")) {
                usuarioCreado.estado = args.estado
            }
            return usuarioCreado
        },
        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UsuarioModel.findOneAndUpdate(args._id, { 
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado
            }, { new: true })
            return usuarioEditado
        },
        eliminarUsuario: async (parent, args) => {
            const key = Object.keys(args)
            const usuarioEliminado = await UsuarioModel.findOneAndDelete( { key } )
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