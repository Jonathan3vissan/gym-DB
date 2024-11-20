import { TABLA_REGISTRO_CLIENTE, AGREGAR_CLIENTE, ELIMINAR_CLIENTE_TABLA_CLIENTE } from './constante/const.js';
import { createConnection } from "mysql2/promise";

/**
 * crea la conexion con la base de datos
 * @returns la conexion con la base de datos
 */
async function crearConexionDB() {
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
 * cierra la conexion con la base de datos
 * @param {Object} conexionDB del usuario
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
 * realiza la consulta de mostrar la tabla de cliente registrados
 * @param {Object} conexionDB del usuario 
 * @returns el registro de clientes
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
 * agrega un cliente a la tabla registro_cliente
 * @param {Object} conexionDB del usuario
 * @param {String} nombre del nuevo cliente
 * @param {String} apellido del nuevo cliente
 * @param {Number} dni del nuevo cliente
 * @param {String} mail del nuevo cliente
 * @param {Number} telefono del nuevo cliente
 */
async function agregaRegistroCliente(conexionDB, nombre, apellido, dni, mail, telefono) {
    try {
        await conexionDB.query(AGREGAR_CLIENTE, [nombre, apellido, dni, mail, telefono
        ]);
        console.log("Cliente agregado correctamente.");
    } catch (error) {
        console.error("Error al agregar cliente:", error);
    }
}

/**
 * elimana un cliente de la base de datos por el dni
 * @param {Object} conexionDB del usuario 
 * @param {*} dni del usuario a eliminar
 */
async function elimanarCliente(conexionDB, dni) {
    try {
        await conexionDB.query(TABLA_REGISTRO_CLIENTE)
        await conexionDB.query(ELIMINAR_CLIENTE_TABLA_CLIENTE[dni])
    } catch (error) {
        console.error("error al eliminar cliente", error)
    }

}

export default BaseDeDatos = {
    conectarDB: crearConexionDB(),
    cerrarConexion: cerraConexionDb(conexionDB),
    mostrarCliente: mostrarRegistroClienteDB(conexionDB),
    agregarCliente: agregaRegistroCliente(conexionDB, nombre, apellido, telefono, mail),
    eliminarCliente: elimanarCliente(conexionDB, dni)


};
