const PeopleSwapiModel = require('../../../domain/swapi/PeopleSwapiModel');
const SwapiResponse = require('../../../domain/swapi/swapi-response');
const PeopleModelDto = require('../../../infrastructure/dto/PeopleModelDto');
const ConsumerBase = require('../../../shared/ConsumerBase');
class ListPeopleUseCase {
  constructor() {
    this.service = new ConsumerBase();
  }

  async execute() {
    const response = await this.service.get({
      path: '/people/',
    });
    const swapiResponse = new SwapiResponse(response);
    const swapipeople = swapiResponse.data;
    const localPeople = swapipeople.map(person => (new PeopleSwapiModel(person)));

    const dto = new PeopleModelDto({
      swapiModels: localPeople,
    });
    return dto.getMany();
  }
}

module.exports = ListPeopleUseCase;