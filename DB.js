import CONST from "./constante/const.js"
import { createConnection } from ("mysql2/promise");
class BaseDeDatos {
    /**
     * @returns la conexion con la base de datos
     */
    async CrearConexionDB() {
        return await createConnection({
            host: "localhost",
            user: "root",
            database: "gimnasio",
            password: "kukito"
        })
    }
    /**
     * cierra la conexion la base de datos
     * @returns cerra conexion con base de datos
     */
    async cerraConexionDb() {
        return await this.CrearConexionDB.end()
    }
    /**
     * @returns la tabla completade Registro Cliente 
     */
    async registroClienteDB() {
        return await this.CrearConexionDB().querry(CONST.TABLA_REGISTRO_CLIENTE);
    }

    async agregaRegistroCliente(nombre, apellido, telefono, mail) {
        await this.CrearConexionDB().querry(CONST.AGREGAR_CLIENTE_REGISTRO_CLIENTE[nombre, apellido, telefono, mail])
    }
}
export default BaseDeDatos; 