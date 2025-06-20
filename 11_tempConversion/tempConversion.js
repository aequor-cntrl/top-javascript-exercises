const convertToCelsius = function(tempFahrenheit) {
  return Math.round(((tempFahrenheit - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  return Math.round((9/5 * tempCelsius + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
