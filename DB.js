import { TABLA_REGISTRO_CLIENTE, AGREGAR_CLIENTE_REGISTRO_CLIENTE } from './constante/const.js';  

import { createConnection } from "mysql2/promise";

class BaseDeDatos {
    /**
     * @returns la conexion con la base de datos
     */
    async CrearConexionDB() {
        try {
            const connection = await createConnection({
                host: "localhost",
                user: "root",
                database: "gimnasio",
                password: "kukito"
            });
            console.log("Conexión exitosa a la base de datos.");
            return connection;
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error);
        }
    }

    /**
     * cierra la conexion la base de datos
     * @returns cierra conexion con la base de datos
     */
    async cerraConexionDb(connection) {
        try {
            await connection.end();
            console.log("Conexión cerrada correctamente.");
        } catch (error) {
            console.error("Error al cerrar la conexión:", error);
        }
    }

    /**
     * @returns la tabla completa de Registro Cliente 
     */
    async registroClienteDB(connection) {
        try {
            const [rows] = await connection.query(TABLA_REGISTRO_CLIENTE);
            return rows;
        } catch (error) {
            console.error("Error al ejecutar la consulta de registroClienteDB:", error);
        }
    }
 /**
  * 
  * @param {*} connection 
  * @param {*} nombre 
  * @param {*} apellido 
  * @param {*} telefono 
  * @param {*} mail 
  */
    async agregaRegistroCliente(connection, nombre, apellido, telefono, mail) {
        try {
            await connection.query(AGREGAR_CLIENTE_REGISTRO_CLIENTE, [nombre, apellido, telefono, mail]);
            console.log("Cliente agregado correctamente.");
        } catch (error) {
            console.error("Error al agregar cliente:", error);
        }
    }
}

export default BaseDeDatos;
