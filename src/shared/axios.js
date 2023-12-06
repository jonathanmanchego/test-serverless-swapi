const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api",
  timeout: 8000,
});

module.exports = axiosInstance;
