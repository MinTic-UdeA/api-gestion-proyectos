/* 1. Importamos gql
2. Definimos la variable tiposNombre
3. En el template de gql definimos siempre los tipos, luego el query, y el mutation.
4. Recordar que en los tipos no puede faltar el ID. 
*/
import { gql } from "apollo-server-express";

const tiposAvance = gql`
    type Avance {
        _id: ID!
        fecha: Date!
        descripcion: String!
        observaciones: [String]
        proyecto: Proyecto!
        creadoPor: Usuario!
    }

    type Query {
        Avances: [Avance]
        filtrarAvance(_id: String!): [Avance]
    }

    type Mutation { 
        crearAvance(
            fecha: Date
            descripcion: String!
            proyecto: String!
            creadoPor: String!
        ): Avance
        editarAvance(
            _id: String!
            descripcion: String!
        ): Avance
    }
`
export { tiposAvance };