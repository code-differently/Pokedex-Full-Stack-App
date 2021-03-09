-- CREATE DATABASE pokedex;
CREATE DATABASE pokedex;
USE pokedex;

CREATE TABLE pokemon(
	id INT PRIMARY KEY NOT NULL,
	name VARCHAR(50),
	img VARCHAR(256)
);

CREATE TABLE types(
	id INT PRIMARY KEY NOT NULL,
	name VARCHAR(32)
);

CREATE TABLE poke_type(
	id INT PRIMARY KEY AUTO_INCREMENT,
	pokeId INT NOT NULL,
	typeId INT NOT NULL,
    FOREIGN KEY (pokeId) REFERENCES pokemon(id),
    FOREIGN KEY (typeId) REFERENCES types(id)
);

SELECT pokemon.ID AS id, name,types.type, img FROM pokemon join poke_type on pokemon.id = poke_type.pokeId join types on poke_type.typeId = types.id order by pokeId;