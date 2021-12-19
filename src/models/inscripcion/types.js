/* 1. Importamos gql
2. Definimos la variable tiposNombre
3. En el template de gql definimos siempre los tipos, luego el query, y el mutation.
4. Recordar que en los tipos no puede faltar el ID. 
*/
import { gql } from "apollo-server-express";

const tiposInscripcion = gql`
    type Inscripcion {
        _id: ID!
        estado: Enum_EstadoInscripcion!
        fechaIngreso: String
        fechaEgreso: String
        proyecto: Proyecto
        estudiante: Usuario!
    }
    type Query {
        listarInscripciones(lider: String!): [Inscripcion]
    }
    type Mutation {
        crearInscripcion(
            proyecto: String!
            estudiante: String!
            estado: Enum_EstadoInscripcion
            fechaIngreso: String
            fechaEgreso: String
        ): Inscripcion
        aprobarInscripcion(
            _id: String!
            ): Inscripcion
        rechazarInscripcion(
            _id: String!
            ): Inscripcion
    }
    
`
export { tiposInscripcion };