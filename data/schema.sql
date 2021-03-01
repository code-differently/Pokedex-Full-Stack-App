CREATE TABLE mapping(
	mappingid int PRIMARY KEY,
	pokeid int,
	typeid varchar(4)
);

CREATE TABLE pokemon(
	pokeid int PRIMARY KEY,
	name varchar(10),
	img varchar(100),
    FOREIGN KEY (pokeid) REFERENCES mapping(pokeid)
);

CREATE TABLE types(
	typeid int PRIMARY KEY,
	typeName varchar(10),
    FOREIGN KEY (typeid) REFERENCES mapping(typeid)
);