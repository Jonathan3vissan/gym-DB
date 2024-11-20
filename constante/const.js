const TABLA_REGISTRO_CLIENTE = "SELECT * FROM Registro_Cliente";
const AGREGAR_CLIENTE = `INSERT INTO Registro_Cliente(Nombre,Apellido,DNI, Mail,Telefono) values(?,?,?,?,?)`;
const ELIMINAR_CLIENTE_TABLA_CLIENTE = "DELETE FROM Registro_Cliente where DNI= ?"


export {
    TABLA_REGISTRO_CLIENTE,
    AGREGAR_CLIENTE,
    ELIMINAR_CLIENTE_TABLA_CLIENTE
}