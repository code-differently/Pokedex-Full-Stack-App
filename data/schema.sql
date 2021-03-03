drop database IF EXISTS classicmodels;
drop database IF EXISTS pokedex ;
create database pokedex;
use pokedex;

CREATE TABLE pokemon (
    pokemon_id INT PRIMARY KEY NOT NULL,
	name VARCHAR(255) NOT NULL,
	-- color VARCHAR(255),
    type VARCHAR(255)
    -- type2 VARCHAR(255),
    -- weakness VARCHAR(255)
    );
    CREATE TABLE types (
type_id INT PRIMARY KEY NOT NULL auto_increment,
type VARCHAR(255) NOT NULL
 );
    CREATE TABLE pokemon_type (
    pokemon_type_id INT PRIMARY KEY NOT NULL auto_increment,
    type_id INT NOT NULL,
    pokemon_id INT NOT NULL,
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(pokemon_id),
    FOREIGN KEY (type_id) REFERENCES types(type_id)
);

ALTER TABLE pokemon_type ADD FOREIGN KEY(pokemon_id) REFERENCES pokemon(pokemon_id);
ALTER TABLE pokemon_type ADD FOREIGN KEY(type_id) REFERENCES types(type_id);

INSERT INTO pokemon (pokemon_id, name)
VALUES
(1,'bulbasaur'),
(2, 'ivysaur'),
(3, 'venusaur'),
(4, 'charmander'),
(5, 'charmeleon'),
(6, 'charizard'),
(7, 'squirtle'),
(8, 'wartortle'),
(9, 'blastoise'),
(10, 'caterpie');

INSERT INTO types(type)
VALUES
('fire'),
('bug'),
('grass'),
('water'),
('normal'),
('electric'),
('poison'),
('ground'),
('fairy'),
('psychic'),
('rock'),
('fighting'),
('ghost'),
('ice'),
('dragon'),
('steel'),
('dark'),
('flying');

INSERT INTO pokemon_type(type_id, pokemon_id)
VALUES
(3, 1),
(3, 2),
(3, 3),
(1, 4),
(1, 5),
(1, 6),
(4, 7),
(4, 8),
(4, 9),
(2, 10);


-- SELECT p.name, tp.type, pt.pokemon_type_id
-- FROM pokemon p
-- LEFT JOIN pokemon_type pt
-- ON p.pokemon_id = pt.pokemon_id
-- INNER JOIN types tp
-- ON tp.type_id = pt.type_id;