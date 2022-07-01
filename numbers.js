function twoSum(array1, array2) {
    let arr1 = Number(array1.join("")); 
    let arr2 = Number(array2.join("")); 
    return arr1 + arr2
}

function luckyNumber(value) {
  let reversed = Number(value.toString().split("").reverse().join(""));
  if (value === reversed) {
    return Boolean(1)
  }
  return Boolean(0)
}

function errorMessage(input) {
    if (!input) {
        return 'Required field'
      }
      return Number(input) ? '' : 'Must be a number besides 0'
}

console.log(errorMessage('123')); // => ''
console.log(errorMessage('')); // => 'Required field'
console.log(errorMessage('abc')); // => 'Must be a number besides 0'