-- create database pokedex; 
use pokedex;
CREATE TABLE Pokemon(
pokemon_ID INT PRIMARY KEY NOT NULL,
pokemon_image blob,
pokemon_type varchar(50),
pokemon_name varchar(50)
);

CREATE TABLE Types (
type_ID INT PRIMARY KEY NOT NULL,
type_name varchar(50)
);
CREATE TABLE Poke_Type (
pokeType_ID INT PRIMARY KEY NOT NULL,
pokemon_ID INT NOT NULL,
FOREIGN KEY (pokemon_ID) REFERENCES Pokemon(pokemon_ID),
type_ID INT NOT NULL, 
FOREIGN KEY (type_ID) REFERENCES Types(type_ID)
);
