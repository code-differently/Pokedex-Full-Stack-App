create database pokedex2;
show databases;
use pokedex2;

#drop table pokemons;

CREATE TABLE `pokemons` (
  `id` INT PRIMARY KEY NOT NULL,
  `name` varchar(50),
  `url` varchar(256),
  PRIMARY KEY (`id`)
);

CREATE TABLE `types` (
  `id` INT PRIMARY KEY NOT NULL,
  `name` varchar(32),
);

CREATE TABLE `pokemon_types` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `pokemonId` INT NOT NULL,
  `typeId` INT NOT NULL,
  foreign key (pokemonId) references pokemons(id),
  foreign key (typeId) references types(id),
  );