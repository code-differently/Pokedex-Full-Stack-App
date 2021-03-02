DROP TABLE IF EXISTS poke_type;
DROP TABLE IF EXISTS pokemon;
CREATE TABLE IF NOT EXISTS pokemon (
	poke_id INT NOT NULL PRIMARY KEY,
   poke_name varchar (100) NOT NULL,
	poke_sprite varchar (1000)
);

-- DROP TABLE IF EXISTS type;
CREATE TABLE IF NOT EXISTS type (
	type_id INT NOT NULL PRIMARY KEY,
   type_name VARCHAR(40) NOT NULL
);

-- DROP TABLE IF EXISTS poke_type;
CREATE TABLE IF NOT EXISTS poke_type (
	poke_type_id varchar(40) NOT NULL PRIMARY KEY,
   poke_id INT NOT NULL,
   FOREIGN KEY (poke_id) REFERENCES pokemon (poke_id),
   type_id INT NOT NULL,
   FOREIGN KEY (type_id) REFERENCES type (type_id)
);
