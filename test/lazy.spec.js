// add functions and parameters lazily
// => add them to an array/object
// call them when required
// => check that each function is called
// check final global result

const chai = require('chai');
expect = chai.expect;

const { Lazy } = require('../src/lazy');

describe('add function and their arguments to Lazy instance', () => {
  it('should add an object to storage array', () => {
    const lazy = new Lazy();
    const fn = (...args) => {
      return args.reduce((acc, val) => {
        acc + val
      }, 0)
    };

    const args = [2, 3, 3];

    lazy.add(fn, ...args);
    expect(lazy.storage.length).to.equal(1);
    expect(lazy.storage[0]).to.have.key(fn);
  })
});

