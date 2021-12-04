import { UsuarioModel } from '../../models/usuario/usuario.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';

const resolversAutenticacion = {

  // encriptar la contrasena
  // crear el usuario
  // crear el token
  // devolver el token al front

  Mutation: {
    registro: async (parent, args) => {

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const usuarioRegistrado = await UsuarioModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword
      })

      return { token: generateToken({
        _id: usuarioRegistrado._id,
        nombre: usuarioRegistrado.nombre,
        apellido: usuarioRegistrado.apellido,
        identificacion: usuarioRegistrado.identificacion,
        correo: usuarioRegistrado.correo,
        rol: usuarioRegistrado.rol,
      }) }

      // hasta aqui ya metimos la informacion de usuario registrado en ese Token. 
    }
  }
}

export { resolversAutenticacion }
