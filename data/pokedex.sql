CREATE TABLE IF NOT EXISTS Pokemon (
ID INT AUTO_INCREMENT,
    Name VARCHAR(15),
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS PokeTypes (
ID INT AUTO_INCREMENT,
    Type VARCHAR(15),
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS PokeIndex (
ID INT AUTO_INCREMENT,
    PokemonID INT,
    Type1 INT,
    Type2 INT,
    PRIMARY KEY (ID),
    FOREIGN KEY (PokemonID) REFERENCES Pokemon(ID),
    FOREIGN KEY (Type1) REFERENCES PokeTypes(ID),
    FOREIGN KEY (Type2) REFERENCES PokeTypes(ID)    
);

SELECT * FROM PokeIndex;
SELECT * FROM PokeTypes;
SELECT * FROM Pokemon;

INSERT INTO PokeTypes VALUES (1, 'normal'), (2, 'fire'), (3, 'water'), (4, 'electric'), (5, 'grass'), (6, 'ice'), (7, 'fighting'), (8, 'poison'), (9, 'ground'), (10, 'flying'), (11, 'psychic'), (12, 'bug'), (13, 'rock'), (14, 'ghost'), (15, 'dragon'), (16, 'dark'), (17, 'steel'), (18, 'fairy');
