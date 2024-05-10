show databases;

-- criar bonco de dados
create database food;
use food;

-- criar tabela usuário
create table usuario (
	id_usuario int auto_increment,
    nome varchar(100),
    email varchar(100),
    senha varchar(100),
    adm bool not null default false,
    primary key (id_usuario)
);
show tables;
show columns from usuario;

-- criar tabela produtos
create table produto (
	id_produto int auto_increment,
    nome varchar(100),
    descricao varchar (200),
    preco decimal(9,2),
    foto varchar(1000),
    primary key (id_produto)
);
show columns from produto;

-- criar tabela pedido 
create table pedido (
	id_pedido int auto_increment,
    id_usuario int,
    nome varchar(100),
    email varchar(100),
    fone varchar(50),
    end_logradouro varchar(200),
    end_numero varchar(10),
    end_bairro varchar(100),
    end_cidade varchar(50),
    end_uf char(2),
    end_cep char(8),
    total decimal(9,2),
    primary key (id_pedido),
    foreign key (id_pedido) 
		references usuario (id_usuario)
);
show columns from pedido;

-- criar tabela pedido_item
create table pedido_item (
	id_item int auto_increment,
    id_pedido int,
    id_produto int,
    quantidade decimal(9,2),
    valor_unitario decimal(9,2),
    primary key (id_item),
    foreign key (id_pedido)
		references pedido (id_pedido),
	foreign key (id_produto)
		references produto (id_produto)
);
show columns from pedido_item;

-- popular o banco
insert into usuario values (
	null, 'Administrador', 'adm@adm.com.br', 'adm', True);

insert into produto (nome, descricao, preco) values (
	'X-Salada', 'Hamburguer de 180g, queijo, tomate, milho, alface e cebola', 24.90);
    
-- select
select * from usuario;
select * from produto;