class Lazy {
  constructor() {
    this.storage = [];
  }
  add(fn, ...args) {
    return this.storage.push({[fn]: args})
  }
}

module.exports = {
  Lazy
};
