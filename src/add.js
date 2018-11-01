const add = (num) => {
  let array = [...Array(num).keys()];
  let filtered = array.filter(num => (num%3 === 0 || num%5 === 0));
  let result = filtered.reduce((acc, val) => acc + val, 0);
  return result;
};

module.exports = {
  add
};
