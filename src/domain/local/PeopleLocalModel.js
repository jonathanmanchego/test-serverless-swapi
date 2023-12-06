class PeopleLocalModel {

  constructor({
    nombre,
    altura,
    masa,
    color_cabello,
    color_piel,
    color_ojos,
    anio_nacimiento,
    genero,
    planeta,
    peliculas,
    especies,
    vehiculos,
    naves,
    creado,
    editado,
    url
  }) {
    this.nombre = nombre;
    this.altura = altura;
    this.masa = masa;
    this.color_cabello = color_cabello;
    this.color_piel = color_piel;
    this.color_ojos = color_ojos;
    this.anio_nacimiento = anio_nacimiento;
    this.genero = genero;
    this.planeta = planeta;
    this.peliculas = peliculas;
    this.especies = especies;
    this.vehiculos = vehiculos;
    this.naves = naves;
    this.creado = creado;
    this.editado = editado;
    this.url = url;
  }
}

module.exports = PeopleLocalModel;