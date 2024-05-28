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

insert into doencas values 
(1, 'dengue', 1),
(2, 'leishmaniose', 2),
(3, 'malaria', 3),
(4, 'febre amarela', 4);

select * from usuario;
select * from doencas;

select COUNT(nome) from doencas where nome="dengue";
select COUNT(nome) from doencas where nome="malaria";
select COUNT(nome) from doencas where idDoenca=1;

select usuario.nome,
count(doencas.nome) 
from doencas join usuario
on doencas.fkUsuario = usuario.idUsuario 
where doencas.nome='dengue'
group by usuario.nome;


-- ANTIGO 
create table dashboard( 
fkUsuario int, 
fkDoencas int, 
constraint pkComposta primary key (fkUsuario, fkDoencas), 
grauInternacao tinyint);
select * from dashboard;

select doencas.nome as nomeDoenca, 
usuario.idUsuario as idUsuario,
count(usuario.idUsuario) as qntUsuarios
from dashboard join 
usuario on fkUsuario = idUsuario 
join doencas on fkDoencas = idDoenca
group by doencas.nome, usuario.idUsuario;

select doencas.nome as nomeDoenca, 
usuario.idUsuario as idUsuario, 
count(usuario.idUsuario) as qntUsuarios
from doencas join usuario 
on fkUsuario = idUsuario
group by doencas.nome, usuario.idUsuario;







