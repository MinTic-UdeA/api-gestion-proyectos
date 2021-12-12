import { UsuarioModel } from '../../models/usuario/usuario.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';

const resolversAutenticacion = {
  // encriptar la contrasena
  // crear el usuario
  // crear el token
  // devolver el token al front
  Mutation: {
    registrar: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const usuarioRegistrado = await UsuarioModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
        estado: args.estado
      }); return {
        token: generateToken({
          _id: usuarioRegistrado._id,
          nombre: usuarioRegistrado.nombre,
          apellido: usuarioRegistrado.apellido,
          identificacion: usuarioRegistrado.identificacion,
          correo: usuarioRegistrado.correo,
          rol: usuarioRegistrado.rol,
          estado: usuarioRegistrado.estado
        })
      }
      // hasta aqui ya metimos la informacion de usuario registrado en ese Token. 
    },


    // generamos un token si la comparacion es TRUE
    login: async (parent, args) => {
      const usuarioEcontrado = await UsuarioModel.findOne({ correo: args.correo });
      if (await bcrypt.compare(args.password, usuarioEcontrado.password)) {
        return {
          token: generateToken({
            _id: usuarioEcontrado._id,
            nombre: usuarioEcontrado.nombre,
            apellido: usuarioEcontrado.apellido,
            identificacion: usuarioEcontrado.identificacion,
            correo: usuarioEcontrado.correo,
            rol: usuarioEcontrado.rol,
            estado: usuarioEcontrado.estado
          }),
        };
      }
    },

    refreshToken: async (parent, args, context) => {
      console.log("contexto", context);
      if (!context.userData) {
        return {
          error: "TOKEN NO VÁLIDO"
        };
      } else {
        return {
          token: generateToken({
            _id: context.userData._id,
            nombre: context.userData.nombre,
            apellido: context.userData.apellido,
            identificacion: context.userData.identificacion,
            correo: context.userData.correo,
            rol: context.userData.rol,
            estado: context.userData.estado
          }),
        }
      }
    }
  }
}

export { resolversAutenticacion }
