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
        fechaInicio: Date!
        fechaFin: Date!
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
        listarProyectosByLider(lider: String): [Proyecto]
    }
    
    type Mutation {
        #CREATE
        # lideres crean proyectos
        crearProyecto(
            nombre: String!
            objGeneral: String!
            objEspecificos: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            lider: String!
            # estado: Enum_EstadoProyecto
            # fase: Enum_FaseProyecto
        ): Proyecto
        #UPDATE
        # lideres actualizan proyectos
        editarProyecto(
            _id: String!
            nombre: String!
            objGeneral: String!
            objEspecificos: String!
            presupuesto: Float!
            estado: Enum_EstadoProyecto!
            lider: String!
        ): Proyecto 
        # admin aprueba los proyectos creados actualizando su estado
        aprobarProyecto(
            _id: String!
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
            fechaInicio: Date
        ): Proyecto
        # lideres
        aprobarProyecto(
            _id: String!
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
            fechaInicio: Date
        ): Proyecto
        #Admin actualiza el estado del proyecto
        cambiarEstadoProyecto(_id: String!, estado: Enum_EstadoProyecto!): Proyecto
        #Admin actualiza el fase del proyecto
        cambiarFaseProyecto(_id: String!, fase: Enum_FaseProyecto!): Proyecto
        #DELETE
        eliminarProyecto(_id: String!): Proyecto
    }
`
export { tiposProyecto };

// const tiposProyecto = gql`

//   type Proyecto {
//     _id: ID!
//     nombre: String!
//     presupuesto: Float!
//     fechaInicio: Date!
//     fechaFin: Date!
//     estado: Enum_EstadoProyecto!
//     fase: Enum_FaseProyecto!
//     lider: Usuario!
//     objetivos: [Objetivo]
//     avances: [Avance]
//     inscripciones: [Inscripcion]
//   }
//   type Query {
//     Proyectos: [Proyecto]
//   }
//   type Mutation {
//     crearProyecto(
//       nombre: String!
//       presupuesto: Float!
//       fechaInicio: Date!
//       fechaFin: Date!
//       estado: Enum_EstadoProyecto!
//       fase: Enum_FaseProyecto!
//       lider: String!
//       objetivos: [crearObjetivo]
//     ): Proyecto
//     editarProyecto(_id: String!, campos: camposProyecto!): Proyecto
//     crearObjetivo(idProyecto: String!, campos: camposObjetivo!): Proyecto
//     editarObjetivo(idProyecto: String!, indexObjetivo: Int!, campos: camposObjetivo!): Proyecto
//     eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto
//   }
// `;

// export { tiposProyecto };