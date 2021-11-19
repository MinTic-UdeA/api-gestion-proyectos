import { connect } from 'mongoose';

const atlasUrl = "mongodb+srv://admin:dI5WbK9p3JhhE7Fv@gestiondeproyectos.tm0ib.mongodb.net/GestionDeProyectos?retryWrites=true&w=majority"

const conectarBD = async () => {
    return await connect(atlasUrl)
      .then(() => {
        console.log('Conexion exitosa');
      })
      .catch((e) => {
        console.error('Error conectando a la bd', e);
      });
  };
  
  export default conectarBD;



  