const PeopleSwapiModel = require("../../../domain/swapi/PeopleSwapiModel");
const SwapiResponse = require("../../../domain/swapi/swapi-response");
const PeopleModelDto = require("../../../infrastructure/dto/PeopleModelDto");
const ConsumerBase = require("../../../shared/ConsumerBase");

class FindPeopleUseCase {
  constructor() {
    this.service = new ConsumerBase();
  }

  async execute(personId) {
    const response = await this.service.get({ path: `/people/${personId}/` });
    const swapiResponse = new SwapiResponse({ results: [response] });
    const swapiPerson = swapiResponse.data[0];
    const localPeople = new PeopleSwapiModel(swapiPerson);

    const dto = new PeopleModelDto({
      swapiModel: localPeople,
    });
    return dto.getOne();
  }
}

module.exports = FindPeopleUseCase;
