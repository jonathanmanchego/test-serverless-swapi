"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hola manchas, estoy vivo!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.swPeople = async (event) => {
  const PeopleController = require("./src/infrastructure/controllers/PeopleController");
  const peopleController = new PeopleController();
  const entityId = event.pathParameters?.id || null;
  let response = null;
  if (entityId) {
    response = await peopleController.getPerson(entityId);
  }

  if (!entityId) {
    response = await peopleController.getPeople();
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: response,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.swCreatePeople = async (event) => {
  const mysqlConnection = require("./src/infrastructure/database/mysql");
  const PeopleController = require("./src/infrastructure/controllers/PeopleController");
  const dbConnection = await mysqlConnection();
  const peopleController = new PeopleController({
    dbConnection,
  });
  const response = await peopleController.createPerson(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: response,
        input: event,
      },
      null,
      2
    ),
  };
};
