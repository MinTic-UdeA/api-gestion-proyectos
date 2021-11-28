import { gql } from "apollo-server-express";

const tiposEnum = gql`
    enum Enum_Rol {
        ESTUDIANTE
        ADMINISTRADOR
        LIDER
    }

    enum Enum_EstadoUsuario {
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_EstadoProyecto {
        INACTIVO
        ACTIVO
    }

    enum Enum_FaseProyecto {
        INICIADO
        DESARROLLO
        TERMINADO
        NULO
    }

    enum Enum_EstadoInscripcion {
        PENDIENTE
        ACEPTADA
        RECHAZADA
    }
`

export { tiposEnum };