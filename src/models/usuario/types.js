// Aqui se hace la "copia" de los esquemas de Usuarios que habíamos hecho en Mongoose. 
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

const tiposUsuario = gql`
    
    # definimos los tipos que existen. No olvidar colocar el ID
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        # rol: 
        # estado: 
    }

    ### OJO: estoy pendiente de revisar en el repo si las propiedades que coloca en los tipos de acá arriba son los mismos que reciben las funciones abajo

    """aqui estaríamos haciendo una consulta, y esa consulta se llama Usuario y Usuarios.
    Usuario me devuelve un array de Usuario. Mientras que Usuario me devuelve el Usuario con el ID que le pasé  """ 
    type Query { 
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
    }

    type Mutation {

        #aquí definimos los inputs de estas funciones. Estas son las opciones que nos aparecerán en Apollo
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

export { tiposUsuario };

// En el query digo cómo se llama y qué tipo de dato devuelve. 

