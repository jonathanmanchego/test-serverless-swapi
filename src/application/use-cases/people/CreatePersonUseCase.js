class CreatePersonUseCase {
  constructor({ db }) {
    this.db = db;
  }

  async execute(body) {
    const PersonRepository = require("../../../infrastructure/database/mysql/repository/PersonRepository");
    const personRepository = new PersonRepository({ db: this.db });
    const response = await personRepository.create(body);
    return { created: response.affectedRows === 1 };
  }
}

module.exports = CreatePersonUseCase;
