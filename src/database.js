import mongoose from "mongoose";
import dotEnv from "dotenv"

dotEnv.config();

export function dbConnection() {

    try {
        //conexion con el cluster de bases de datos
        mongoose.connect(
            process.env.URL_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, 
            () => console.log("Conexion con la base de datos exitosa")
        );
    } catch(e){
        console.log("Error en la conexion: ", e);
    }
}
