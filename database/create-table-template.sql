-- Active: 1677646812468@@127.0.0.1@3306@starwars
CREATE TABLE Persons(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
  name VARCHAR(255) NOT NULL COMMENT 'Name',
  height INT COMMENT 'Height',
  mass FLOAT COMMENT 'Mass',
  hair_color VARCHAR(255) COMMENT 'Hair Color',
  skin_color VARCHAR(255) COMMENT 'Skin Color',
  eye_color VARCHAR(255) COMMENT 'Eye Color',
  birth_year INT COMMENT 'Birth Year',
  gender CHAR(1) COMMENT 'Gender',
  homeworld VARCHAR(255) COMMENT 'Homeworld',
  create_time DATETIME COMMENT 'Create Time'
) COMMENT 'Tabla de personas';