create database cleanair;
use cleanair; 

create table usuario(
idUsuario int primary key auto_increment, 
nome varchar(45), 
email varchar(45), 
senha varchar(20)); 

create table doencas(
idDoenca int primary key auto_increment, 
nome varchar(45),
fkUsuario int, 
constraint fkUsuario foreign key (fkUsuario)
references usuario(idUsuario));


create table dashboard( 
fkUsuario int, 
fkDoencas int, 
constraint pkComposta primary key (fkUsuario, fkDoencas), 
grauInternacao tinyint);
select * from dashboard;

select * from usuario;
select * from doencas;
insert into doencas values 
(1, 'dengue', 1),
(2, 'leishmaniose', 2),
(3, 'malaria', 3),
(4, 'febre amarela', 4);


select doencas.nome as nomeDoenca, 
usuario.idUsuario as idUsuario, 
count(usuario.idUsuario) as qntUsuarios
from doencas join usuario 
on fkUsuario = idUsuario
group by doencas.nome, usuario.idUsuario;


select doencas.nome as nomeDoenca, 
usuario.idUsuario as idUsuario,
count(usuario.idUsuario) as qntUsuarios
from dashboard join 
usuario on fkUsuario = idUsuario 
join doencas on fkDoencas = idDoenca
group by doencas.nome, usuario.idUsuario;







