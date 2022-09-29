var countries = ["India","Australia","Russia","Japan"];

var states = new Array("Rajasthan","Punjab","Gujarat","Bihar");
console.log(states);

console.log(states.length);

var user =["Ketan","Lucky",9,90,'h'];
console.log(user);

user.pop();
console.log(user);

user.unshift("NEW_VALUE");  // shift and unshift are cost uneffective
console.log(user);

user.shift();
user.shift();
console.log(user);

console.log(user.indexOf("Lucky"));

console.log(Array.from("Ketan"));