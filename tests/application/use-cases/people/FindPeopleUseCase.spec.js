const FindPeopleUseCase = require("../../../../src/application/use-cases/people/FindPeopleUseCase");
const ConsumerBase = require("../../../../src/shared/ConsumerBase");
const PeopleMocks = require("../../../__mocks__/people.mocks");

const mock = new PeopleMocks();

jest.mock("../../../../src/shared/ConsumerBase", () => {
  return jest.fn().mockImplementation(() => {
    return {
      get: jest.fn().mockResolvedValue(mock.personResponseSwapiMock),
    };
  });
});

describe("FindPeopleUseCase", () => {
  describe("execute", () => {
    it("should return the expected PeopleModelDto", async () => {
      // Arrange
      const personId = 1;
      const expectedDto = mock.personResponseMock;
      // consumerBaseMock.get = jest.fn().mockResolvedValue(responseMock);

      // Act
      const findPeopleUseCase = new FindPeopleUseCase({ db: null });
      const result = await findPeopleUseCase.execute(personId);

      // Assert
      // expect(consumerBaseMock.get).toHaveBeenCalledWith({
      //   path: `/people/${personId}/`,
      // });
      expect(result).toEqual(expectedDto);
    });
  });
});
