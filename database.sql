create database miproyecto;



use miproyecto;

create table empleados(
idEmpleado int not null auto_increment primary key,
nombre varchar(80) not null,
apellido varchar(80) not null,	
email varchar(80) not null
);


insert into empleados values(
null, "francisco", "garrido", "francisco@hotmail.com"

) 