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

CREATE TABLE Registro_Cliente  (
    id_cliente INT AUTO_INCREMENT,
    Nombre VARCHAR(20) NOT NULL,
    Apellido VARCHAR(20) NOT NULL,
    Telefono VARCHAR(10) NOT NULL,
    Mail VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_cliente)
);

show TABLEs;


insert into Registro_Cliente(Nombre,Apellido,Telefono,Mail) values("juna ","lopez","12456789","juna@mail"),
("leo ","Alamda","12456789","leo@mail"),
("esteban ","lopez","12456789","Esteban@mail"),
("martina","lopez","12456789","Martina@mail");

CREATE TABLE Membresia (
    id_membresia INT AUTO_INCREMENT,
    Estado BOOLEAN DEFAULT TRUE,
    fecha_inicio DATETIME DEFAULT CURRENT_TIMESTAMP,  
    fecha_vencimiento DATETIME AS (DATE_ADD(fecha_inicio, INTERVAL 30 DAY)),  
    PRIMARY KEY(id_membresia)
);