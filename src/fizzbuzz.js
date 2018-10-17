// const fizzbuzz = (num) => {
//   if (num%3 === 0) {
//     if (num%5 === 0) {
//       return 'fizzbuzz';
//     }
//     return 'fizz';
//   }
//   if (num%5 === 0) {
//     return 'buzz';
//   }
//   return num;
// };

class Fizzbuzz {
  constructor(num) {
    this.num = num;
  };

  run() {
    console.log('-=-=-', this.num)
    if (this.num%3 === 0) {
      if (this.num%5 === 0) {
        return 'fizzbuzz';
      }
      return 'fizz'
    } 
    if (this.num%5 === 0) {
      return 'buzz';
    }
    return this.num;
  }

}

module.exports = {
  Fizzbuzz
};
