const chai = require('chai');

const { Fizzbuzz } = require('../src/fizzbuzz');
const expect = chai.expect;

describe('fizzbuzz', () => {
  it('should return 1 if 1 is entered', () => {
    expect(new Fizzbuzz(1).run()).to.equal(1);
  });

  it('should return 2 if 2 is entered', () => {
    expect(new Fizzbuzz(2).run()).to.equal(2);
  });

  it('should return fizz if 3 is entered', () => {
    expect(new Fizzbuzz(3).run()).to.equal('fizz')
  });

  it('should return buzz if 5 is entered', () => {
    expect(new Fizzbuzz(5).run()).to.equal('buzz');
  });

  it('should return fizzbuzz if 15 is entered', () => {
    expect(new Fizzbuzz(15).run()).to.equal('fizzbuzz');
  });
});
