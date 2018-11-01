const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { Brackets } = require('../src/brackets');

//takes an array
//returns true or false if all brackets can close


describe('add / not add to stack', () => {
 
  it('add closing barckets to stack', () => {
    const brackets = new Brackets();
    brackets.run(['}']);
    expect(brackets.stack).to.deep.equal(['}']);
  });

  it('NOT add opening barckets to stack', () => {
    const brackets = new Brackets();    
    brackets.run(['(']);
    expect(brackets.stack).to.deep.equal([]);
  });
});

describe('match a pair', () => {

  it('delete closing bracket from stack if match', () => {
    const brackets = new Brackets();
    brackets.run(['{', '(', ')', '}']);
    expect(brackets.stack).to.deep.equal([]);
  }); 
});

describe('return true or false', () => {

  it('returns true if all brackets match', () => {
    const brackets = new Brackets();
    expect(brackets.run(['{', '(', ')', '}'])).to.equal(true);
  });

  it('returns false if one or more brackets have no match', () => {
    const brackets = new Brackets();
    expect(brackets.run(['}', '(', '{', '[', ']', '}', ')'])).to.equal(false);
  });

  it('returns false if one or more brackets have no match', () => {
    const brackets = new Brackets();
    expect(brackets.run(['}', '}', '}', '{', '{', '{'])).to.equal(false);
  });

  it('returns false if one of the array elements is not a bracket', () => {
    const brackets = new Brackets();
    expect(brackets.run(['{', '}', '[', 'a', ']'])).to.equal(false);
  });

  it('returns false if empty array', () => {
    const brackets = new Brackets();
    expect(brackets.run([])).to.equal(false);
  })
});
