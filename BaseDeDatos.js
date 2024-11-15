import { TABLA_REGISTRO_CLIENTE, AGREGAR_CLIENTE_REGISTRO_CLIENTE, ELIMINAR_CLIENTE_TABLA_CLIENTE } from './constante/const.js';
import { createConnection } from "mysql2/promise";
class BaseDeDatos {
    /**
     * @returns la conexion con la base de datos
     */
    async CrearConexionDB() {
        try {
            const conexionDB = await createConnection({
                host: "localhost",
                user: "root",
                database: "gimnasio",
                password: "kukito"
            });
            console.log("Conexión exitosa a la base de datos.");
            return conexionDB;
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error);
        }
    }
    /**
     * cierra la conexion la base de datos
     * @returns cierra conexion con la base de datos
     */
    async cerraConexionDb(conexionDB) {
        try {
            await conexionDB.end();
            console.log("Conexión cerrada correctamente.");
        } catch (error) {
            console.error("Error al cerrar la conexión:", error);
        }
    }
    /**
     * @returns la tabla completa de Registro Cliente 
     */
    async mostrarRegistroClienteDB(conexionDB) {
        try {
            const [rows] = await conexionDB.query(TABLA_REGISTRO_CLIENTE);
            return rows;
        } catch (error) {
            console.error("Error al ejecutar la consulta de registroClienteDB:", error);
        }
    }
    /**
     *  agrega un registro
     */
    async agregaRegistroCliente(conexionDB, nombre, apellido, telefono, mail) {
        try {
            await conexionDB.query(AGREGAR_CLIENTE_REGISTRO_CLIENTE, [nombre, apellido, telefono, mail]);
            console.log("Cliente agregado correctamente.");
        } catch (error) {
            console.error("Error al agregar cliente:", error);
        }
    }

    async elimanarCliente(conexionDB, datoUusario) {
        try {
            this.mostrarRegistroClienteDB()
            await conexionDB.query(ELIMINAR_CLIENTE_TABLA_CLIENTE[datoUusario])
        } catch (error) {
            console.error("error al eliminar cliente", error)
        }

    }

}
export default BaseDeDatos;
