

CREATE DATABASE Pokemon;

CREATE TABLE Pokemon (
    ID SMALLINT,
    NAME VARCHAR(255),
    TYPE VARCHAR (255)
);   

CREATE TABLE Types(
type_ID INT PRIMARY KEY NOT NULL auto_increment,
type VARCHAR(255) NOT NULL,
);

CREATE TABLE pokemon_type (
    pokemon_type_id INT PRIMARY KEY NOT NULL auto_increment,
    type_ID INT NOT NULL,
    pokemon_id INT NOT NULL,

);

SELECT * FROM Pokemon;
SELECT * FROM Types;
SELECT * FROM pokemon_type;