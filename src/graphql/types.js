// Aqui vamos a definir los tipos globales e importar los tipos de otros archivos que hemos creado
import { gql } from "apollo-server-express"
import { tiposUsuario } from "../models/usuario/types.js"
import { tiposProyecto } from "../models/proyecto/types.js"
import { tiposAvance } from "../models/avance/types.js"
import { tiposInscripcion } from "../models/inscripcion/types.js"
import { tiposEnums } from '../models/enums/types.js';

const tiposGlobales = gql`

    scalar Date

`

export const tipos = [ tiposGlobales, tiposUsuario, tiposProyecto, tiposAvance, tiposInscripcion, tiposEnums ]

// lo exporto de esa forma para asegurar que pueda usar todos al tiempo, debo ir al index y cambiar el valor de typeDefs por tipos



