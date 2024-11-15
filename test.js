import BaseDeDatos from './DB.js';

async function probarConexion() {
    const db = new BaseDeDatos();

    // Crear la conexión
    const connection = await db.CrearConexionDB();
    if (connection) {
        // Si la conexión es exitosa, puedes hacer algunas consultas

        // Probar el método de obtener registros de clientes (solo un ejemplo)
        const registros = await db.registroClienteDB(connection);
        console.log("Registros de clientes:", registros);

        // Agregar un nuevo cliente (también es un ejemplo)
        await db.agregaRegistroCliente(connection, 'Juan', 'Perez', '1234567890', 'juan.perez@example.com');
        
        // Cerrar la conexión
        await db.cerraConexionDb(connection);
    }
}

probarConexion();
