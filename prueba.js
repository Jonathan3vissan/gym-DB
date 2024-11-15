import BaseDeDatos from './BaseDeDatos.js';

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

probarConexion();
