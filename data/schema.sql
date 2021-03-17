drop database pokedex2;
create database pokedex2;
use pokedex2;


drop table if exists pokemon;
CREATE TABLE pokemon(
id INT PRIMARY KEY NOT NULL,
img varchar(256),
name varchar(50)
);
drop table if exists type;
CREATE TABLE type (
id INT PRIMARY KEY NOT NULL,
name varchar(50)
);
drop table if exists pokemon_type;
CREATE TABLE pokemon_type (
id INT PRIMARY KEY NOT NULL auto_increment,
pokemonId INT NOT NULL,
FOREIGN KEY (pokemonId) REFERENCES pokemon(id),
typeId INT NOT NULL, 
FOREIGN KEY (typeId) REFERENCES type(id)
);