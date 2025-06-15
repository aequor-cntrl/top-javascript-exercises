const removeFromArray = function(array, ...valuesToRemove) {
  for (let j = 0; j < valuesToRemove.length; j++){
    while (array.includes(valuesToRemove[j])){
      array.splice(array.indexOf(valuesToRemove[j]), 1);
    }
  }
  console.log(array);
  return array;
};

const betterRemoveFromArray = function(array, ...valuesToRemove){
  return array.filter((item) => !valuesToRemove.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
