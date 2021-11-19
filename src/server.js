import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url'
import { dbConnection } from "./database.js";
import { project } from "./routes/projectRoutes.js";
import { user } from "./routes/userRoutes.js";

function mainServer() {
  //Varibles
  dotEnv.config();
  const app = express();

  //Conexion base de datos
  dbConnection();

  //Configuración
  app.set('port', process.env.PORT);
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));

  //Rutas
  app.use(project);
  app.use(user);

  app.all('*', (req, res) => {
    res.status(404).send("Recurso no encontrado o metodo no soportado.");
  })

  //Manejo de errores
  app.use((error, req, res, next) => {
    console.log("Error: ", error);
    res.redirect('/')
  });

  //Arranque del servidor
  app.listen(process.env.PORT,() => {
      console.log("Servidor funcionando en el puerto", process.env.PORT);
  });
}

const nodePath = path.resolve(process.argv[1]);
const modulePath = path.resolve(fileURLToPath(import.meta.url))
const isRunningDirectlyViaCLI = nodePath === modulePath

if (isRunningDirectlyViaCLI) {

  mainServer();
  
}