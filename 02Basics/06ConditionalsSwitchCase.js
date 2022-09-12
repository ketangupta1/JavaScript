var user = "user";

switch(user){
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete access");
        break;
    case "user":
        console.log("get access to consume content");
        break;
    default:
        console.log("Trial account");
        break;
}