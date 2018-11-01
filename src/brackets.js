class Brackets {
  constructor() {
    this.stack = [];
    this.openBrackets = ['(', '[', '{'];
    this.pairs = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  };

  run(arrayOfBrackets) {
    if (arrayOfBrackets.length === 0) {
      return false;
    }
    arrayOfBrackets.forEach(bracket => {
      if (!this.openBrackets.includes(bracket)) {
        this.stack.push(bracket);
        if (arrayOfBrackets[arrayOfBrackets.indexOf(bracket)- 1] === this.pairs[bracket]) {
          this.stack.pop();
          arrayOfBrackets.splice(arrayOfBrackets.indexOf(bracket)- 1, 1)
        } else {
          return false;
        }
      }
    });
      if (this.stack.length !== 0) {
        return false;
      }
      return true;
  };
}

module.exports = {
  Brackets
};


// ['(', '[', ']', ')']
// ['(', '[', , '{', '}', ]', ')']
