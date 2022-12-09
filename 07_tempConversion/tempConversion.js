const convertToCelsius = function(arg) {
  let result = Math.round((((arg - 32) * (5/9)))*10)/10
  return result
};

const convertToFahrenheit = function(arg) {
  let result = Math.round((arg * (9/5) + 32)*10)/10
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
