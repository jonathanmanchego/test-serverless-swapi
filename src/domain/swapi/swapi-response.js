class SwapiResponse {
  constructor({ count, next, previous, results }) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }

  get data() {
    return this.results;
  }
}

module.exports = SwapiResponse;