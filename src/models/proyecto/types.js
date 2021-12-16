/* 1. Importamos gql
2. Definimos la variable tiposNombre
3. En el template de gql definimos siempre los tipos, luego el query, y el mutation.
4. Recordar que en los tipos no puede faltar el ID. 
*/ 
import { gql } from "apollo-server-express";

const tiposProyecto = gql`

    type Proyecto {
        _id: ID!
        nombre: String!
        objGeneral: String!
        objEspecificos: String!
        presupuesto: Float!
        fechaInicio: Date
        fechaFin: Date
        estado: Enum_EstadoProyecto
        fase: Enum_FaseProyecto
        lider: Usuario!
        avances: [Avance]
        inscripciones: [Inscripcion]
    }

    type Query {
        # lid, est, y adm pueden ver los proyectos
        Proyectos: [Proyecto]
        Proyecto(_id: String!): Proyecto
        listarProyectosByLider(_id: String): [Proyecto]
    }
    
    type Mutation {
        #CREATE
        # lideres crean proyectos
        crearProyecto(
            nombre: String!
            objGeneral: String
            objEspecificos: String
            presupuesto: Float!
            lider: String!
        ): Proyecto
        #UPDATE
        # lideres actualizan proyectos
        editarProyecto(
            _id: String!
            nombre: String!
            objGeneral: String!
            objEspecificos: String!
            presupuesto: Float!
        ): Proyecto 
        # admin aprueba los proyectos creados actualizando su estado
        aprobarProyecto(
            _id: String!
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
            fechaInicio: String
        ): Proyecto
        #Admin actualiza el estado del proyecto
        desactivarProyecto(
            _id: String!
            estado: Enum_EstadoProyecto
            fechaFin: String
        ): Proyecto
        #Admin termina un proyecto
        terminarProyecto(
            _id: String!
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
            fechaFin: String
        ): Proyecto 
        #Admin reactiva un proyecto
        reactivarProyecto(
            _id: String!
            estado: Enum_EstadoProyecto
            fechaInicio: String
        ): Proyecto 
        #DELETE
        eliminarProyecto(_id: String!): Proyecto
    }
`
export { tiposProyecto };
