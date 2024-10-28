const convertToCelsius = function(fahrenheit) {
  return roundToDecimal((fahrenheit - 32) * (5/9), 1);
};

const convertToFahrenheit = function(celsius) {
  return roundToDecimal((9/5) * celsius + 32, 1);
};

const roundToDecimal = function(num, decimalPlaces) {
  const multiplier = 10**decimalPlaces;
  return Math.round(num * multiplier) / multiplier;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
