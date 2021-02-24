create database pokedex;

use pokedex;

DROP TABLE IF EXISTS pokemon_type;

DROP TABLE IF EXISTS pokemon;

CREATE TABLE IF NOT EXISTS pokemon (
    pokemon_id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255),
    type VARCHAR(255),
    type2 VARCHAR(255),
    weakness VARCHAR(255),
    pokemon_sprite VARCHAR(555)
);

DROP TABLE IF EXISTS types;

CREATE TABLE IF NOT EXISTS types (
    type_id INT PRIMARY KEY NOT NULL auto_increment,
    pokemon_type VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS pokemon_type (
    pokemon_type_id INT PRIMARY KEY NOT NULL auto_increment,
    type_id INT NOT NULL,
    pokemon_id INT NOT NULL,
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(pokemon_id),
    FOREIGN KEY (type_id) REFERENCES types(type_id)
);

INSERT INTO
    pokemon (
        pokemon_id,
        name,
        color,
        type,
        type2,
        weakness,
        pokemon_sprite
    )
VALUES
    (
        "1",
        "bulbasaur",
        "green",
        "grass",
        "poison",
        "fire" "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F499829258644446405%2F&psig=AOvVaw3uK51ZkPhSismHMgQFUI7l&ust=1614131631809000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiUhIbz_u4CFQAAAAAdAAAAABAF"
    );

INSERT INTO
    types (type_id, pokemon_type)
VALUES
    ("1", "poison");