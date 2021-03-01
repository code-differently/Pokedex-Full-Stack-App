DROP DATABASE IF EXISTS Pokedex;
CREATE DATABASE Pokedex;

USE Pokedex;

CREATE TABLE IF NOT EXISTS pokemon (
     pokemonID INT PRIMARY KEY,
     pokemonName VARCHAR(128),
     sprite TEXT(65535)
);


CREATE TABLE IF NOT EXISTS pokeType (
	typeID INT PRIMARY KEY,
	pokemonType VARCHAR (128)
);


CREATE TABLE IF NOT EXISTS mapType (
	mappingID INT,
	pokemonID INT,
	typeID INT,
	FOREIGN KEY (pokemonID) REFERENCES pokemon (pokemonID),
	FOREIGN KEY (typeID) REFERENCES pokeType (typeID)
);

INSERT INTO
    pokemon (
        pokemonID,
        pokemonName,
        sprite
    )
VALUES
    (
        "1",
        "Bulbasaur",
        "https://www.https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F2%2F28%2FPok%25C3%25A9mon_Bulbasaur_art.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBulbasaur&tbnid=KtgjmFXIcd8sVM&vet=12ahUKEwjh5ZKN34PvAhX5lXIEHXNuABQQMygAegUIARDlAQ..i&docid=dDlg1E6hw6SY6M&w=275&h=256&q=image%20bulbasaur&ved=2ahUKEwjh5ZKN34PvAhX5lXIEHXNuABQQMygAegUIARDlAQ#imgrc=KtgjmFXIcd8sVM&imgdii=7QuAFbKQuiFkrM"
    );

INSERT INTO
    pokeType (typeID, pokemonType)
VALUES
    ("1", "grass"); 