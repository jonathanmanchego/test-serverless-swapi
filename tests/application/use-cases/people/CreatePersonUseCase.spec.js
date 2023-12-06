const CreatePersonUseCase = require("../../../../src/application/use-cases/people/CreatePersonUseCase");
const PersonRepository = require("../../../../src/infrastructure/database/mysql/repository/PersonRepository");

jest.mock(
  "../../../../src/infrastructure/database/mysql/repository/PersonRepository",
  () => {
    return jest.fn().mockImplementation(() => {
      return {
        create: jest.fn().mockImplementation((data) => {
          if (data) {
            return { affectedRows: 1 };
          }
          return { affectedRows: 0 };
        }),
      };
    });
  }
);

describe("CreatePersonUseCase", () => {
  it("should create a person and return created true", async () => {
    const body = { name: "John Doe", age: 30 };
    const createPersonUseCase = new CreatePersonUseCase({ db: null });
    const result = await createPersonUseCase.execute(body);
    expect(result).toEqual({ created: true });
  });

  it("should create a person and return created false", async () => {
    const body = null;

    const createPersonUseCase = new CreatePersonUseCase({ db: null });
    const result = await createPersonUseCase.execute(body);
    expect(result).toEqual({ created: false });
  });
});
