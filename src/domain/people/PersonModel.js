const CommonModel = require("../CommonModel");

class PersonModel extends CommonModel {
  constructor({
    id,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    create_time,
  }) {
    super({ id, create_time });
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.skin_color = skin_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.gender = gender;
    this.homeworld = homeworld;
  }
}

module.exports = PersonModel;
