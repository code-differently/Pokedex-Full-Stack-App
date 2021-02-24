
CREATE TABLE IF NOT EXISTS pokemon (
     pokemonID INT PRIMARY KEY,
     pokemonName VARCHAR(128),
     sprite VARCHAR(128)
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