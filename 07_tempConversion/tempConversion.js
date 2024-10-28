const convertToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};

const convertToFahrenheit = function(celsius) {
  return (9/5) * celsius + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
