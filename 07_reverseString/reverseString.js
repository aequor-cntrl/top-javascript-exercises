const reverseString = function(string) {
  let letterArray = [];
  letterArray = string.split('');
  console.log(letterArray);
  for (let i = 0; i < Math.floor(letterArray.length / 2); i++){
    let tempLetter = letterArray[i];
    letterArray[i] = letterArray[letterArray.length-i-1];
    letterArray[letterArray.length-i-1] = tempLetter;
  }
  return letterArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
