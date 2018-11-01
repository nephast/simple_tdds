// add functions and parameters lazily
// => add them to an array/object
// call them when required
// => check that each function is called
// check final global result

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
expect = chai.expect;
chai.use(sinonChai);

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
    expect(lazy.storage[0]).to.have.keys(['fn', 'args']);
  });
});

describe('execute functions stored using their arguments', () => {
  it('should call each functions stored in lazy instance', () => {
    const functionSpy = sinon.spy();
    const lazy = new Lazy();
   
    const a = 2;
    const b = 3;

    lazy.add(functionSpy, a, b);
    lazy.run();
    expect(functionSpy).to.be.calledWith(a, b);
  });

  it('should return the result for each function called', () => {
    const lazy = new Lazy();
    const sum = (a, b) => {
      return a + b;
    };
    
    lazy.add(sum, 1, 2);
    lazy.add(sum, 24, 26)
    expect(lazy.run()).to.eql([3, 50]);
  })
});

