/* Código para prender nuestro servidor de graphql.
Importar express,
CORS(librería para que a graphql le puedan entrar request desde varios dominios),
importar apollo server,
importar conexión a la base de datos,
importar dotenv. 

*/
import conectarBD from "./src/db/db.js";
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { tipos } from './src/graphql/types.js';
import { resolvers } from './src/graphql/resolvers.js';

dotenv.config();

// 1. Definir un servidor de GraphQL. Pasamos 2 propiedades: los resolvers y los tipos (cada una de las definiciones que tienen los modelos)

const server = new ApolloServer({
    typeDefs: tipos,
    resolvers: resolvers
})

// 2. Definimos nuestra aplicacion de Express.
// Usamos un middleware que se llama express.json, para que los requests salgan de tipo JSON. 
// Usamos un middleware de cors para poder hacer request desde muchos origenes.

const app = express();
app.use(express.json());
app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
    await conectarBD();
    // Prender servidor de apollo: 
    await server.start()
    // middleware para decirle que utilice los mismos middlewares de express:
    server.applyMiddleware( { app });
    console.log("servidor listo")
})

// 4. Definir en el paso 1 los resolvers y tipos 

// cambios para redespliegue