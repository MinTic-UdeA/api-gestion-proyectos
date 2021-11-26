// Aqui se hace la copia de los esquemas
import { gql } from "apollo-server-express";

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
// estado: Enum_EstadoUsuario!
// rol: Enum_Rol!

const typeDefs = gql`

    scalar Date

    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
    }

    type Query { 
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
    }

    type Mutation {
        crearUsuario(
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        ): Usuario

        eliminarUsuario(
           _id: String!
        ): Usuario

        editarUsuario(
        _id: String!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        ): Usuario
    }
`

export { typeDefs };

// En el query digo como se llama y que tipo de dato devuelve. 

