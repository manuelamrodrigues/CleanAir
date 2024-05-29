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

SELECT COUNT(nome) as QTD_Dengue FROM doencas WHERE nome = 'dengue';
SELECT COUNT(nome) as QTD_Malaria FROM doencas WHERE nome = 'malaria';
SELECT COUNT(nome) as QTD_Leishmaniose FROM doencas WHERE nome = 'leishmaniose';
SELECT COUNT(nome) as QTD_Febre FROM doencas WHERE nome = 'febre';


select usuario.nome as 'Nome do usuário',
count(doencas.nome) as 'Total de doenças'
from doencas join usuario
on doencas.fkUsuario = usuario.idUsuario 
where doencas.nome='dengue'
group by usuario.nome;
