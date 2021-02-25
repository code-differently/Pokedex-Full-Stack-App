create database pokedex;
show databases;
use pokedex;

#drop table pokemon;

CREATE TABLE `pokemons` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `url` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

describe pokemons;


#drop table type;
CREATE TABLE `types` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

describe types;

CREATE TABLE `pokemon_types` (
  `ptid` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `pokemonId` smallint unsigned NOT NULL,
  `typeId` smallint unsigned NOT NULL,
  foreign key (pokemonId) references pokemons (id),
  foreign key (typeId) references types (id),
  primary key(ptid)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

describe pokemon_types;
show tables;

