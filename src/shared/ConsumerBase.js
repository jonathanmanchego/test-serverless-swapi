class ConsumerBase {
  constructor() {
    this.axios = require('./axios');
  }

  async get({ path, params }) {
    try {
      const response = await this.axios.get(path, {
        path,
        params
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ConsumerBase;