ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Lakewoods135';
flush privileges;

CREATE DATABASE Pokedex;
use Pokedex;
CREATE TABLE POKEMON_Card (
Pokemon_ID INT Primary KEY NOT NULL,
Pokemon_Type VARCHAR(255),
Pokemon_Name VARCHAR(255),
Pokemon_Color VARCHAR(255),
);

CREATE TABLE Types(
types_ID INT Primary KEY NOT NULL,
types_name VARCHAR(255)
);
CREATE TABLE Poke_Type(
PokeType_ID INT Primary KEY NOT NULL,
Pokemon_ID INT NOT NULL,
FOREIGN KEY (Pokemon_ID) REFERENCES POKEMON_Card (Pokemon_ID),
types_ID INT NOT NULL,
FOREIGN KEY (types_ID) REFERENCES Types (types_ID)
)ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Lakewoods135';
flush privileges;

CREATE DATABASE Pokedex;
use Pokedex;
CREATE TABLE POKEMON_Card (
Pokemon_ID INT Primary KEY NOT NULL,
Pokemon_Type VARCHAR(255),
Pokemon_Name VARCHAR(255),
Pokemon_Color VARCHAR(255),
);

CREATE TABLE Types(
types_ID INT Primary KEY NOT NULL,
types_name VARCHAR(255)
);
CREATE TABLE Poke_Type(
PokeType_ID INT Primary KEY NOT NULL,
Pokemon_ID INT NOT NULL,
FOREIGN KEY (Pokemon_ID) REFERENCES POKEMON_Card (Pokemon_ID),
types_ID INT NOT NULL,
FOREIGN KEY (types_ID) REFERENCES Types (types_ID)
);
INSERT INTO POKEMON_Card (Pokemon_ID, Pokemon_Type, Pokemon_Name, Pokemon_Color) VALUES (1, 'Grass', 'BLue', 'Blueberry');