// Aqui vamos a importar todos los resolvers y exportarlos en una sola constante que llamaremos resolvers
import { resolversUsuario } from "../models/usuario/resolvers.js"
import { resolversProyecto } from "../models/proyecto/resolvers.js"
import { resolversAvance } from "../models/avance/resolvers.js"
import { resolversInscripcion } from "../models/inscripcion/resolvers.js"


export const resolvers = [ resolversUsuario, resolversProyecto, resolversAvance, resolversInscripcion ];

