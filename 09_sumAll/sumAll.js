const sumAll = function(number1, number2) {
  let sum = 0;
  if (number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)){
    return "ERROR";
  }
  if (number1 > number2){
    [number1, number2] = [number2, number1];
  }
  while (number1 <= number2){
    sum += number1;
    number1++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
