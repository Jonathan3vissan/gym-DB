import { TABLA_REGISTRO_CLIENTE, AGREGAR_CLIENTE, ELIMINAR_CLIENTE_TABLA_CLIENTE } from './constante/const.js';
import { createConnection } from "mysql2/promise";

/**
 * Crea la conexión con la base de datos
 * @returns la conexión con la base de datos
 */
async function crearConexionDB() {
    try {
        const conexionDB = await createConnection({
            host: "localhost",
            user: "root",
            database: "gimnasio", // Cambia esto por el nombre correcto de tu base de datos
            password: "kukito" // Cambia esto por tu contraseña
        });
        console.log("Conexión exitosa a la base de datos.");
        return conexionDB;
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}

/**
 * Cierra la conexión con la base de datos
 * @param {Object} conexionDB - conexión de la base de datos
 */
async function cerraConexionDb(conexionDB) {
    try {
        await conexionDB.end();
        console.log("Conexión cerrada correctamente.");
    } catch (error) {
        console.error("Error al cerrar la conexión:", error);
    }
}

/**
 * Realiza la consulta de mostrar la tabla de clientes registrados
 * @param {Object} conexionDB - conexión con la base de datos
 * @returns los registros de clientes
 */
async function mostrarRegistroClienteDB(conexionDB) {
    try {
        const [rows] = await conexionDB.query(TABLA_REGISTRO_CLIENTE);
        return rows;
    } catch (error) {
        console.error("Error al ejecutar la consulta de registroClienteDB:", error);
    }
}

/**
 * Agrega un cliente a la tabla de registro_cliente
 * @param {Object} conexionDB  conexión con la base de datos
 * @param {String} nombre  del nuevo cliente
 * @param {String} apellido  del nuevo cliente
 * @param {Number} dni  del nuevo cliente
 * @param {String} mail  del nuevo cliente
 * @param {Number} telefono del nuevo cliente
 */
async function agregaRegistroCliente(conexionDB, nombre, apellido, dni, mail, telefono) {
    try {
        await conexionDB.query(AGREGAR_CLIENTE, [nombre, apellido, dni, mail, telefono]);
        console.log("Cliente agregado correctamente.");
    } catch (error) {
        console.error("Error al agregar cliente:", error);
    }
}

/**
 * Elimina un cliente de la base de datos por el dni
 * @param {Object} conexionDB - conexión con la base de datos
 * @param {Number} dni - dni del usuario a eliminar
 */
async function eliminarCliente(conexionDB, dni) {
    try {
        await conexionDB.query(ELIMINAR_CLIENTE_TABLA_CLIENTE, [dni]);
        console.log("Cliente eliminado correctamente.");
    } catch (error) {
        console.error("Error al eliminar cliente:", error);
    }
}

// Exporta las funciones para su uso en otros módulos
export default {
    crearConexionDB,
    cerraConexionDb,
    mostrarRegistroClienteDB,
    agregaRegistroCliente,
    eliminarCliente
};
