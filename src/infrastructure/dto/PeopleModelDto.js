class PeopleModelDto {
  constructor({ swapiModel, swapiModels }) {
    this.swapiModel = swapiModel;
    this.swapiModels = swapiModels;
  }

  transformOne(swapiItemModel) {
    const PeopleLocalModel = require('../../domain/local/PeopleLocalModel');
    const PeopleSwapiModel = require('../../domain/swapi/PeopleSwapiModel');

    const swapiModel = new PeopleSwapiModel(swapiItemModel);
    return new PeopleLocalModel({
      nombre: swapiModel.name,
      altura: swapiModel.height,
      masa: swapiModel.mass,
      color_cabello: swapiModel.hair_color,
      color_ojos: swapiModel.eye_color,
      color_piel: swapiModel.skin_color,
      anio_nacimiento: swapiModel.birth_year,
      genero: swapiModel.gender,
      planeta: swapiModel.homeworld,
      peliculas: swapiModel.films,
      especies: swapiModel.species,
      vehiculos: swapiModel.vehicles,
      naves: swapiModel.starships,
      creado: swapiModel.created,
      editado: swapiModel.edited,
      url: swapiModel.url
    });
  }

  getOne() {
    return this.transformOne(this.swapiModel);
  }

  getMany() {
    return this.swapiModels.map(swapiModel => (this.transformOne(swapiModel)));
  }

}

module.exports = PeopleModelDto;