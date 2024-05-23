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

select * from usuario;
select * from dashboard;
select * from doencas;
insert into doencas values 
(1, 'dengue'),
(2, 'leishmaniose'),
(3, 'malaria'),
(4, 'febre amarela');


select doencas.nome as nomeDoenca, 
usuario.idUsuario as idUsuario,
count(usuario.idUsuario) as qntUsuarios
from dashboard join 
usuario on fkUsuario = idUsuario 
join doencas on fkDoencas = idDoenca
group by doencas.nome, usuario.idUsuario;





