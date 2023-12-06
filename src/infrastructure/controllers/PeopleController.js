class PeopleController {
  constructor({ dbConnection } = { dbConnection: null }) {
    this.dbConnection = dbConnection;
  }

  async getPeople() {
    const ListPeopleUseCase = require("../../application/use-cases/people/ListPeopleUseCase");
    const listPeopleUseCase = new ListPeopleUseCase();
    return await listPeopleUseCase.execute();
  }

  async getPerson(id) {
    const FindPeopleUseCase = require("../../application/use-cases/people/FindPeopleUseCase");
    const findPeopleUseCase = new FindPeopleUseCase();
    return await findPeopleUseCase.execute(id);
  }

  async createPerson(body) {
    const CreatePeopleUseCase = require("../../application/use-cases/people/CreatePersonUseCase");
    const createPeopleUseCase = new CreatePeopleUseCase({
      db: this.dbConnection,
    });
    return await createPeopleUseCase.execute(JSON.parse(body));
  }
}

module.exports = PeopleController;
