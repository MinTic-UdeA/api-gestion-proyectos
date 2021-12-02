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
    
    # definimos los tipos que existen. No olvidar colocar el ID
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        estado: Enum_EstadoUsuario
    }

    """Aqui estaríamos haciendo una consulta, y esa consulta se llama Usuario y Usuarios.
    Usuario me devuelve un array de Usuario. Mientras que Usuario me devuelve el Usuario con el ID que le pasé""" 
    type Query {
        #READ 
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
    }

    type Mutation {
        # aquí definimos los inputs de estas funciones. Estas son las opciones que nos aparecerán en Apollo
        #CREATE
        crearUsuario(
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        estado: Enum_EstadoUsuario
        password: String!
        ): Usuario

        #UPDATE
        # cada usuario puede editar su propia informacion personal
        editarUsuario(
            _id: String!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            ): Usuario
        # el administrador puede cambiar el estado de adm, est, y lid. Lideres pueden cambiar el estado de estudiantes
        aprobarUsuario(
            _id: String!
            estado: Enum_EstadoUsuario!
        ): Usuario

        #DELETE
        eliminarUsuario(
           _id: String!
        ): Usuario  
    }
`

export { tiposUsuario };

// En el query digo cómo se llama y qué tipo de dato devuelve. 

