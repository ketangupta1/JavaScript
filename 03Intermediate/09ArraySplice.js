var users = ["Tim","Tom","Ted","Tod","Sim","Kuo","Tiu"];

// console.log(users.slice(2));
// console.log(users.slice(2,5));


// users.splice(1,3,"HI")
// console.log(users); 
// It shows that start from position 1 and count 3 element from position 1 and replace "HI" 
// instead of all the elements that are counted in between


users.splice(1,3,"HI","BYE"); // we can pass multiple value in splice
console.log(users);