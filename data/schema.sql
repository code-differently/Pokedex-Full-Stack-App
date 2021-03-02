USE pokedex;

CREATE TABLE pokemon(
	pokeid INT PRIMARY KEY,
	name VARCHAR(20),
	img VARCHAR(266)
);

CREATE TABLE types(
	pokeid INT ,
	typeid INT PRIMARY KEY,
	typeName VARCHAR(266)
);

CREATE TABLE mapping(
	mappingid INT PRIMARY KEY AUTO_INCREMENT,
	pokeid INT,
	typeid INT,
    FOREIGN KEY (pokeid) REFERENCES pokemon(pokeid),
    FOREIGN KEY (typeid) REFERENCES types(typeid)
);