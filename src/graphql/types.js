// Aqui vamos a definir los tipos globales e importar los tipos de otros archivos que hemos creado
import { gql } from "apollo-server-express";
import { tiposUsuario } from "..models/usuario/usuario.js"
import { tiposProyecto } from "..models/usuario/usuario.js"
//import { tiposUsuario } from "..models/usuario/usuario.js"


const tiposGlobales = gql`

    scalar Date

`
export const tipos = [ tiposUsuario, tiposProyecto, tiposGlobales ]

// lo exporto de esa forma para asegurar que pueda usar todos al tiempo, debo ir al index y cambiar el valor de typeDefs por tipos



