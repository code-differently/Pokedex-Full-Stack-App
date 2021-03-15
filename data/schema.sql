Run once to setup MySQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

create database pokedex;

use pokedex;

CREATE TABLE pokemon (
	pokemon_id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255),
    type VARCHAR(255),
    type2 VARCHAR(255),
    weakness VARCHAR(255)
    );

CREATE TABLE types (
	type_id INT PRIMARY KEY NOT NULL auto_increment,
    type VARCHAR(255) NOT NULL,
    FOREIGN KEY (type_id) REFERENCES pokemon_type(type_id)
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

INSERT INTO pokemon (pokemon_id, name, color, weakness) VALUES (10, 'Caterpie', 'Green', 'Fire');
UPDATE pokemon SET weakness = 'Grass' WHERE name = 'Blastoise';

SELECT * FROM pokemon;