// funcion para generar tokens
import jwt from 'jsonwebtoken'

/* guardar informacion del usuario que le queremos mandar al front.
Ej: info que podemos ponerla en un contexto para que este disponible
en toda la aplicacion y utilizarla en un naavbar por ejemplo
payload = carga. info que viaja con el token
expiresIn : en cuanto tiempo expira un token, tiempo que le damos al usuario para
que mantenga la sesion iniciada. 
*/

const validateToken = (token) => {
    if (token) {
        const verification = jwt.verify(token, 'secret', (err, data) => {
            if (data) {
                return {
                    data: data,
                };
            }
            if (err) {
                return {
                    error: err,
                };
            }
        });
        return verification;
    }
}

const generateToken = (payload) => {
    return jwt.sign(payload, "secret", { expiresIn: "24h" })
}

export { generateToken, validateToken }
// exportamos y lo usamos en el resolver de AUTH, Donde esta la mutacion de Registro.