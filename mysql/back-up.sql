/* 
 SELECT CONVERT_TZ(NOW(),'UTC','America/Argentina/Buenos_Aires') AS FechaHoraBuenosAires;
 */
/* 
 mysql_tzinfo_to_sql/usr/share/zoneinfo|mysql -u root -p mysql;
SET time_zone='America/Argentina/Buenos_Aires';
 */
DROP DATABASE IF EXISTS gimnasio;
create DATABASE gimnasio;
use gimnasio;
CREATE TABLE Registro_Cliente (
    id INT AUTO_INCREMENT,               
    Nombre VARCHAR(20) NOT NULL,
    Apellido VARCHAR(20) NOT NULL,
    DNI INT(20) UNIQUE NOT NULL,          
    Telefono INT(10) NOT NULL,
    Mail VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)                       
);

show TABLEs;
INSERT INTO Registro_Cliente (Nombre, Apellido, DNI, Telefono, Mail) VALUES
('Lionel', 'Messi', 1234567890, 1123456789, 'lionel.messi@futbol.com'),
('Maradona', 'Diego', 1234567891, 1123456790, 'diego.maradona@futbol.com'),
('Luis', 'Suarez', 1234567892, 1123456791, 'luis.suarez@futbol.com'),
('Gabriela', 'Sabatini', 1234567893, 1123456792, 'gabriela.sabatini@tenis.com'),
('Ricardo', 'Darín', 1234567894, 1123456793, 'ricardo.darin@cine.com'),
('Charly', 'García', 1234567895, 1123456794, 'charly.garcia@musica.com'),
('Jorge', 'Luis', 1234567896, 1123456795, 'jorge.luis@actor.com'),
('Eva', 'Perón', 1234567897, 1123456796, 'eva.peron@politica.com'),
('Mercedes', 'Sosa', 1234567898, 1123456797, 'mercedes.sosa@musica.com'),
('Carlos', 'Gardel', 1234567899, 1123456798, 'carlos.gardel@tango.com'),
('Ricardo', 'Arjona', 1234567900, 1123456799, 'ricardo.arjona@musica.com'),
('Martín', 'Palermo', 1234567901, 1123456800, 'martin.palermo@futbol.com'),
('Sofía', 'Vergara', 1234567902, 1123456801, 'sofia.vergara@actriz.com'),
('Carlos', 'Tevez', 1234567903, 1123456802, 'carlos.tevez@futbol.com'),
('Cecilia', 'Roth', 1234567904, 1123456803, 'cecilia.roth@actriz.com'),
('Pedro', 'Almodóvar', 1234567905, 1123456804, 'pedro.almodovar@cine.com'),
('Florencia', 'Kirrchner', 1234567906, 1123456805, 'florencia.kirchner@politica.com'),
('Abel', 'Pintos', 1234567907, 1123456806, 'abel.pintos@musica.com'),
('Guillermo', 'Del Toro', 1234567908, 1123456807, 'guillermo.del.toro@cine.com'),
('Ricardo', 'Pintos', 1234567909, 1123456808, 'ricardo.pintos@futbol.com');
SELECT * from Registro_Cliente;
CREATE TABLE Membresia (
    id_membresia INT AUTO_INCREMENT,
    Estado BOOLEAN DEFAULT TRUE,
    fecha_inicio DATETIME DEFAULT CURRENT_TIMESTAMP,  
    fecha_vencimiento DATETIME AS (DATE_ADD(fecha_inicio, INTERVAL 30 DAY)),  
    PRIMARY KEY(id_membresia)
);
show TABLEs;
