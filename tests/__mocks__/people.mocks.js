class Mocks {
  personResponseMock = {
    nombre: "Darth Vader",
    altura: "202",
    masa: "136",
    color_cabello: "none",
    color_piel: "white",
    color_ojos: "yellow",
    anio_nacimiento: "41.9BBY",
    genero: "male",
    planeta: "https://swapi.dev/api/planets/1/",
    peliculas: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    especies: [],
    vehiculos: [],
    naves: ["https://swapi.dev/api/starships/13/"],
    creado: "2014-12-10T15:18:20.704000Z",
    editado: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.dev/api/people/4/",
  };

  personResponseSwapiMock = {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    species: [],
    vehicles: [],
    starships: ["https://swapi.dev/api/starships/13/"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.dev/api/people/4/",
  };
}

module.exports = Mocks;
