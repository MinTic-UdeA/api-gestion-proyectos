import { gql } from 'apollo-server-express';

const tiposAutenticacion = gql`

# puedo devolver o un token o un error.
  type Token {
    token: String
    error: String
  }

  type Mutation {
    registrar(
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        estado: Enum_EstadoUsuario
        password: String!
        ): Token!
  }
`;

export { tiposAutenticacion };

// se exporta a los types globales