create database pokedex;
show databases;
use pokedex;

drop table pokemons;

CREATE TABLE `pokemons` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `url` varchar(500) NOT NULL,
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

use pokedex;
INSERT INTO types (id, name) values( null, 'grass'),
( null, 'poison'),
( null, 'fire'),
( null, 'flying'),
( null, 'water'),
( null, 'bug');

select * from types;

INSERT INTO pokemons (id, name, url) values (null, 'bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'),
(null, 'ivysaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'),
(null, 'venusaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'),
(null, 'charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'),
(null, 'charmeleon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'),
(null, 'charizard', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'),
(null, 'squirtle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'),
(null, 'wartortle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'),
(null, 'blastoise', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'),
(null, 'caterpie', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'),
(null, 'metapod', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'),
(null, 'butterfree', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png');

select * from pokemons;

select * from pokemon_types;
INSERT INTO `pokedex`.`pokemon_types` values
(null, 123,123 ),
(null, 123, 124 ),
(null, 124, 123),
(null, 124,124 ),
(null, 125, 123 ),
(null, 125, 124),
(null, 126, 125),
(null, 127, 125),
(null, 128, 125),
(null, 128, 126),
(null, 129, 127),
(null, 130, 127),
(null, 131, 127),
(null, 132, 128),
(null, 133, 128),
(null, 134, 128),
(null, 134, 126);


select * from pokemons as p inner join pokemon_types as pt on p.id = pt.pokemonId
inner join types as t on t.id = pt.typeId
order by p.id;
