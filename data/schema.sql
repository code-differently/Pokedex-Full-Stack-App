CREATE
/*Table structure for table `customers` */
DROP TABLE IF EXISTS `pokemon_type`;
DROP TABLE IF EXISTS `pokemon`;
DROP TABLE IF EXISTS `type`;
CREATE TABLE pokemon (
  ID int,
  pokename VARCHAR(10),
  sprites varchar(10),
  primary key(ID)
);
CREATE TABLE type (
  id int NOT NULL auto_increment,
  type_name varchar(10) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE pokemon_type (
  pokedex_id int NOT NULL,
  type_id int NOT NULL,
  FOREIGN KEY (pokemon_id) REFERENCES pokemon (ID),
  FOREIGN KEY (type_id) REFERENCES type (ID),
  PRIMARY KEY (pokedex_id, type_id)
);
INSERT INTO
  type(type_name)
VALUES
  ('normal'),
  ('fire'),
  ('water'),
  ('electric'),
  ('grass'),
  ('ice'),
  ('fighting'),
  ('poison'),
  ('ground'),
  ('flying'),
  ('psychic'),
  ('bug'),
  ('rock'),
  ('ghost'),
  ('dragon'),
  ('dark'),
  ('steel'),
  ('fairy');