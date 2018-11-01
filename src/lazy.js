class Lazy {
  constructor() {
    this.storage = [];
  }
  add(fn, ...args) {
    this.storage.push({ fn, args });
  }

  run() {
    this.storage.forEach(object => {
      object.fn(object.args);
    })
  }

}

module.exports = {
  Lazy
};
