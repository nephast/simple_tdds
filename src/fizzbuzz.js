const fizzbuzz = (num) => {
  if (num%3 === 0) {
    if (num%5 === 0) {
      return 'fizzbuzz';
    }
    return 'fizz';
  }
  if (num%5 === 0) {
    return 'buzz';
  }
  return num;
};

module.exports = {
  fizzbuzz
};
