class Lazy {
  constructor() {
    this.storage = [];
  }

  add(fn, ...args) {
    this.storage.push({ fn, args });
  }

  run() {
    return this.storage.map(object => {
      return object.fn(...object.args);
    });
  }

}

module.exports = {
  Lazy
};
