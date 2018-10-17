const chai = require('chai');

const sut = require('../src/fizzbuzz');
const expect = chai.expect;

describe('fizzbuzz', () => {
  it('should return 1 if 1 is entered', () => {
    expect(sut.fizzbuzz(1)).to.equal(1);
  });

  it('should return 2 if 2 is entered', () => {
    expect(sut.fizzbuzz(2)).to.equal(2);
  });

  it('should return fizz if 3 is entered', () => {
    expect(sut.fizzbuzz(3)).to.equal('fizz')
  });

  it('should return buzz if 5 is entered', () => {
    expect(sut.fizzbuzz(5)).to.equal('buzz');
  });

  it('should return fizzbuzz if 15 is entered', () => {
    expect(sut.fizzbuzz(15)).to.equal('fizzbuzz');
  });
});
