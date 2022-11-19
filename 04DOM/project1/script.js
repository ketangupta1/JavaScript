var counter = document.querySelector(".counter");   // . is for selecting class # is for id


// var followers = document.getElementsByTagName("p");
var followers = document.getElementsByClassName("followers");

// the elements can be grabbed by all the above method but when we select
// by using getElement it gives array as output.


// setInterval(function, timeInMiliseconds)  - the function will keeps on executing at every timeInMiliseconds
// setTimeout(function,timeInmiliseconds)   - the function will start executing after timeInMiliseconds only once

let count =1;
setInterval( ()=>{
    if(count<1000){
        count++;
        counter.innerHTML = count;
    }
} ,1)

setTimeout( ()=>{
    followers[0].innerText = "Followers on Instagram"
} ,4300)