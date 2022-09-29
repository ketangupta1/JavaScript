var isEven = (element) => {
    return element%2 === 0
}

// console.log(isEven(9))

// var result = [2,9,6,8].every(isEven);
// console.log(result);

var result = [2,4,6,8].every((e) => (e%2 === 0))  // if we would use {} then return should be there
console.log(result);