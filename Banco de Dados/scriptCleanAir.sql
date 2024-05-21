create database cleanair;
use cleanair; 

create table usuario(
idUsuario int primary key auto_increment, 
nome varchar(45), 
email varchar(45), 
senha varchar(20)); 

create table doencas(
idDoenca int primary key, 
nome varchar(45));

create table dashboard( 
fkUsuario int, 
fkDoencas int, 
constraint pkComposta primary key (fkUsuario, fkDoencas), 
grauInternacao tinyint);