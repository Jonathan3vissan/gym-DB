const TABLA_REGISTRO_CLIENTE = "SELECT * FROM Registro_Cliente";
const AGREGAR_CLIENTE_REGISTRO_CLIENTE = `INSERT INTO Registro_Cliente(Nombre,Apellido,Telefono,Mail) values("?","?","?","?")`;

export {
    TABLA_REGISTRO_CLIENTE,
    AGREGAR_CLIENTE_REGISTRO_CLIENTE
}