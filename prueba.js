/* import BaseDeDatos from './BaseDeDatos.js';

async function probarConexion() {
    const db = new BaseDeDatos();

    // Crear la conexión
    const conexionDB = await db.CrearConexionDB();
    if (conexionDB) {

        // Agregar un nuevo cliente (también es un ejemplo)
        await db.agregaRegistroCliente(conexionDB, 'Juan', 'Perez', '1234567890', 'juan.perez@example.com');
        console.log(await db.mostrarRegistroClienteDB(conexionDB));

        // Cerrar la conexión
        await db.cerraConexionDb(conexionDB);
    }
}

probarConexion(); */



import BaseDeDatos from './BaseDeDatos.js'; // Asegúrate de que la ruta sea correcta

async function pruebaCRUD() {
    const conexionDB = await BaseDeDatos.crearConexionDB();

    if (!conexionDB) {
        console.error("No se pudo conectar a la base de datos.");
        return;
    }

    // 1. Crear un nuevo cliente
    await BaseDeDatos.agregaRegistroCliente(conexionDB, 'Juan', 'Pérez', 20856947, 'juan.perez@example.com', 1122334455);

    // 2. Mostrar los registros de clientes
    const clientes = await BaseDeDatos.mostrarRegistroClienteDB(conexionDB);
    console.log("Registros de clientes:");
    console.table(clientes);

    // 3. Eliminar un cliente (por ejemplo, el cliente con DNI 1234567890)
    await BaseDeDatos.eliminarCliente(conexionDB, 1234567890);

    // 4. Mostrar los registros de clientes después de eliminar
    const clientesActualizados = await BaseDeDatos.mostrarRegistroClienteDB(conexionDB);
    console.log("Registros de clientes después de eliminar:");
    console.table(clientesActualizados);

    // Cerrar la conexión a la base de datos
    await BaseDeDatos.cerraConexionDb(conexionDB);
}

pruebaCRUD();
