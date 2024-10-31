const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	return numArray.reduce((theSum, num) => (theSum + num), 0);
};

const multiply = function(numArray) {
  return numArray.reduce((product, num) => (num * product), 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num) {
  let product = 1;
	for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
