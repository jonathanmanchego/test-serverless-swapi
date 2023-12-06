const PersonModel = require("../../../../domain/people/PersonModel");

class PersonRepository {
  constructor({ db }) {
    this.db = db;
  }

  async create(person) {
    const personEntity = new PersonModel(person);
    const [rows] = await this.db.query(
      `INSERT INTO persons 
      (name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, create_time) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        personEntity.name,
        personEntity.height,
        personEntity.mass,
        personEntity.hair_color,
        personEntity.skin_color,
        personEntity.eye_color,
        personEntity.birth_year,
        personEntity.gender,
        personEntity.homeworld,
        personEntity.create_time,
      ]
    );
    return rows;
  }

  async findAll() {
    const [rows] = await this.db.query("SELECT * FROM person");
    return rows;
  }

  async findById(id) {
    const [rows] = await this.db.query("SELECT * FROM person WHERE id = ?", [
      id,
    ]);
    return rows;
  }
}

module.exports = PersonRepository;
