// User is only allowed to purchase if it meets all the 3 conditions
// logged-in
// Email-verified
// cardInfo-valid
// If anyone is missing stop purchasing

var isLoggedIn = true;
var emailVerified = false;
var cardInfo = true;

if(isLoggedIn)
{
    console.log("Logged in successfully");
    if(emailVerified)
    {
        console.log("email verified Successfully");
        if(cardInfo)
        {
            console.log("You are allowed to make the purchase");
        }
    }
}


if(isLoggedIn && emailVerified && cardInfo){
    console.log("Eligible for making purchase");
}
else{
    console.log("Oooh ho Sorry")
}