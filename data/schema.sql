DROP TABLE if exists pokemon_junction;
DROP TABLE if exists pokemon_tbl;
create table if not exists pokemon_tbl(
  pokemon_id INT NOT NULL PRIMARY KEY,
  pokemon_sprite VARCHAR(1000),
  pokemon_name VARCHAR(100) NOT NULL
);

DROP TABLE if exists pokemon_type;
create table if not exists pokemon_type(
  pokemon_type_id INT NOT NULL PRIMARY KEY,
  pokemon_type_name VARCHAR(40) NOT NULL
);

create table if not exists pokemon_junction(
	pokemon_id INT NOT NULL,
    foreign key (pokemon_id)REFERENCES pokemon_tbl (pokemon_id),
    pokemon_type_id INT NOT NULL,
    foreign key (pokemon_type_id) REFERENCES pokemon_type (pokemon_type_id),
    pokemon_junction_id VARCHAR(40) NOT NULL PRIMARY KEY
);



-- POKEMON TABLE--
INSERT INTO pokemon_tbl (
	pokemon_id,
    pokemon_sprite,
    pokemon_name
    )
    VALUES (
		"1",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png" ,
        "Bulbasaur"
    );
    INSERT INTO pokemon_tbl (
	pokemon_id,
    pokemon_sprite,
    pokemon_name
    )
    VALUES (
		"2",
        null ,
        "Ivysaur"
    );
    
       INSERT INTO pokemon_tbl (
	pokemon_id,
    pokemon_sprite,
    pokemon_name
    )
    VALUES (
		"3",
        null ,
        "Venasaur"
    );
    
       INSERT INTO pokemon_tbl (
	pokemon_id,
    pokemon_sprite,
    pokemon_name
    )
    VALUES (
		"4",
        null ,
        "Charmander"
    );
           INSERT INTO pokemon_tbl (
	pokemon_id,
    pokemon_sprite,
    pokemon_name
    )
    VALUES (
		"5",
        null ,
        "Charmeleon"
    );
           INSERT INTO pokemon_tbl (
	pokemon_id,
    pokemon_sprite,
    pokemon_name
    )
    VALUES (
		"6",
        null ,
        "Charizard"
    );
           INSERT INTO pokemon_tbl (
	pokemon_id,
    pokemon_sprite,
    pokemon_name
    )
    VALUES (
		"7",
        null ,
        "Squirtle"
    );
    
    
   -- TYPES TABLE --
   
   INSERT INTO pokemon_type(
		pokemon_type_id,
        pokemon_type_name
    )
    VALUES (
		1,
        "Grass"
	);
    
      INSERT INTO pokemon_type(
		pokemon_type_id,
        pokemon_type_name
    )
    VALUES (
		2,
        "Fire"
	);
    
      INSERT INTO pokemon_type(
		pokemon_type_id,
        pokemon_type_name
    )
    VALUES (
		3,
        "Water"
	);
    
      INSERT INTO pokemon_type(
		pokemon_type_id,
        pokemon_type_name
    )
    VALUES (
		4,
        "Poison"
	);
    
      INSERT INTO pokemon_type(
		pokemon_type_id,
        pokemon_type_name
    )
    VALUES (
		5,
        "Flying"
	);
    
      INSERT INTO pokemon_type(
		pokemon_type_id,
        pokemon_type_name
    )
    VALUES (
		1,
        "Grass"
	);
    
    
    
    
    
    
    -- END TYPES TABLE --
-- SELECT * FROM pokemon_tbl;
SELECT * FROM pokemon_type;