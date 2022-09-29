var user = {
    firstName : "Saurabh",  // Dont use '=' as it is there in line 1
    lastName : "Hisariya",
    role : "Admin",
    loginCount : 35,
    facebookSignedIn : true
}

// console.log(user.firstName);
// console.log(user["firstName"]);

user.loginCount = 78
console.log(user.loginCount);

console.table(user);