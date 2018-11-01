const chai = require('chai');
const expect = chai.expect;
chai.use( require('chai-integer') );

const { add } = require('../src/add');

describe('add', () => {
  it('should return a integer', () => {
    expect(add(10)).to.be.an.integer();
  });

  it('should add the numbers as needed', () => {
    expect(add(10)).to.equal(23);
  });
});
