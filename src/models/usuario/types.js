// Aqui se hace la "copia" de los esquemas de Usuarios que habíamos hecho en Mongoose. 
import { gql } from "apollo-server-express";

//Esto lo usábamos en TS
// enum Enum_EstadoUsuario{
//     AUTORIZADO,
//     NO_AUTORIZADO,
//     PENDIENTE,
// }

// enum Enum_Rol{
//     ESTUDIANTE,
//     LIDER,
//     ADMINISTRADOR
// }

const tiposUsuario = gql`
    
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol
        estado: Enum_EstadoUsuario
    }

    """Aqui estaríamos haciendo una consulta, y esa consulta se llama Usuario y Usuarios.
    Usuario me devuelve un array de Usuario. Mientras que Usuario me devuelve el Usuario con el ID que le pasé""" 
    type Query {
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
    }

    type Mutation {
        # aquí definimos los inputs de estas funciones. Estas son las opciones que nos aparecerán en Apollo
        crearUsuario(
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        estado: Enum_EstadoUsuario
        password: String!
        ): Usuario

        editarUsuario(
            _id: String!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            # password: String!
            ): Usuario
 
        aprobarUsuario(
            _id: String!
            estado: Enum_EstadoUsuario!
        ): Usuario

        eliminarUsuario(
           _id: String!
        ): Usuario  
    }
`

export { tiposUsuario };

