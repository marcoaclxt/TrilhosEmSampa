-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE trilhosEmSampa;

USE trilhosEmSampa;

CREATE TABLE linha (
	id INT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cor CHAR(14) NOT NULL UNIQUE
);


CREATE TABLE estacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL UNIQUE,
    fk_linha INT NOT NULL,

    CONSTRAINT fk_estacao_linha
        FOREIGN KEY (fk_linha) REFERENCES linha(id)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	
	linhaFavorita VARCHAR(45),
	estacaoFavorita VARCHAR(45),
	frotaFavorita VARCHAR(45),
	frequenciaMetro VARCHAR(45),

	fk_linha INT,
	FOREIGN KEY (fk_linha) REFERENCES linha(id)
);

-- getUsersQtd
SELECT count(id) from usuario;

-- getLinhaFavorita
SELECT
    linha.nome,
    COUNT(*) AS quantidade
FROM usuario
JOIN linha ON usuario.fk_linha = linha.id
GROUP BY linha.nome
ORDER BY quantidade DESC;

select * from usuario;



-- Os IDs correspondem aos números das linhas.
INSERT INTO linha (id, nome, cor) VALUES
(1, 'Linha 1 - Azul', 'Azul'),
(2, 'Linha 2 - Verde', 'Verde'),
(3, 'Linha 3 - Vermelha', 'Vermelha'),
(4, 'Linha 4 - Amarela', 'Amarela'),
(5, 'Linha 5 - Lilás', 'Lilás'),
(15, 'Linha 15 - Prata', 'Prata');

-- Linha 1 - Azul
-- Inclui Luz, Sé, Paraíso, Ana Rosa e Santa Cruz.
INSERT INTO estacao (nome, fk_linha) VALUES
('Tucuruvi', 1),
('Parada Inglesa', 1),
('Jardim São Paulo - Ayrton Senna', 1),
('Santana', 1),
('Carandiru', 1),
('Portuguesa - Tietê', 1),
('Armênia', 1),
('Tiradentes', 1),
('Luz', 1),
('São Bento', 1),
('Sé', 1),
('Japão - Liberdade', 1),
('São Joaquim', 1),
('Vergueiro', 1),
('Paraíso', 1),
('Ana Rosa', 1),
('Vila Mariana', 1),
('Santa Cruz', 1),
('Praça da Árvore', 1),
('Saúde', 1),
('São Judas', 1),
('Conceição', 1),
('Jabaquara', 1);

-- Linha 2 - Verde
-- Paraíso e Ana Rosa já estão vinculadas à Linha 1.
INSERT INTO estacao (nome, fk_linha) VALUES
('Vila Madalena', 2),
('Sumaré', 2),
('Clínicas', 2),
('Consolação', 2),
('Trianon - MASP', 2),
('Brigadeiro', 2),
('Chácara Klabin', 2),
('Santos - Imigrantes', 2),
('Alto do Ipiranga', 2),
('Sacomã', 2),
('Tamanduateí', 2),
('Vila Prudente', 2);

-- Linha 3 - Vermelha
-- Sé já está vinculada à Linha 1.
INSERT INTO estacao (nome, fk_linha) VALUES
('Palmeiras - Barra Funda', 3),
('Marechal Deodoro', 3),
('Santa Cecília', 3),
('República', 3),
('Anhangabaú', 3),
('Pedro II', 3),
('Brás', 3),
('Bresser - Mooca', 3),
('Belém', 3),
('Tatuapé', 3),
('Carrão', 3),
('Penha', 3),
('Vila Matilde', 3),
('Guilhermina - Esperança', 3),
('Patriarca - Vila Ré', 3),
('Artur Alvim', 3),
('Corinthians - Itaquera', 3);

-- Linha 4 - Amarela
-- Luz pertence à Linha 1 e República à Linha 3.
INSERT INTO estacao (nome, fk_linha) VALUES
('Higienópolis - Mackenzie', 4),
('Paulista', 4),
('Oscar Freire', 4),
('Fradique Coutinho', 4),
('Faria Lima', 4),
('Pinheiros', 4),
('Butantã', 4),
('São Paulo - Morumbi', 4),
('Vila Sônia', 4);

-- Linha 5 - Lilás
-- Santa Cruz pertence à Linha 1 e Chácara Klabin à Linha 2.
INSERT INTO estacao (nome, fk_linha) VALUES
('Capão Redondo', 5),
('Campo Limpo', 5),
('Vila das Belezas', 5),
('Giovanni Gronchi', 5),
('Santo Amaro', 5),
('Largo Treze', 5),
('Adolfo Pinheiro', 5),
('Alto da Boa Vista', 5),
('Borba Gato', 5),
('Brooklin', 5),
('Campo Belo', 5),
('Eucaliptos', 5),
('Moema', 5),
('AACD - Servidor', 5),
('Hospital São Paulo', 5);

INSERT INTO estacao (nome, fk_linha) VALUES
('Oratório', 15),
('São Lucas', 15),
('Camilo Haddad', 15),
('Vila Tolstói', 15),
('Vila União', 15),
('Jardim Planalto', 15),
('Sapopemba', 15),
('Fazenda da Juta', 15),
('São Mateus', 15),
('Jardim Colonial', 15);
