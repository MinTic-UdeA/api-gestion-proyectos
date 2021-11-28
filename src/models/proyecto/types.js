/* 1. Importamos gql
2. Definimos la variable tiposNombre
3. En el template de gql definimos siempre los tipos, luego el query, y el mutation.
4. Recordar que en los tipos no puede faltar el ID. 
*/ 
import { gql } from "apollo-server-express";

const tiposProyecto = gql`
    type Proyecto: {
        _id: ID
        nombre: String!
        objGeneral: String!
        objEspecificos: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto
        fase: Enum_FaseProyecto
        lider: Usuario!
        # para hacer virtual populate

    }
    type Query: {
        Proyectos: [Proyecto]
        Proyecto(_id: String!): Proyecto
    }
    type Mutation: {
        #CREATE
        crearProyecto(
            nombre: String!
            objGeneral: String!
            objEspecificos: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            lider: String!
        ): Proyecto
        #UPDATE
        EditarProyecto(
            nombre: String!
            objGeneral: String!
            objEspecificos: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            lider: String!
        ): Proyecto
        #DELETE
        EliminarProyecto(_id: String!): Proyecto
    }

`
export { tiposProyecto };