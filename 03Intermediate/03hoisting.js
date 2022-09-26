// 1). Fuction declarations are scanned and made available 
// 2). Variable declarations are scanned and made undefined

tip("10")
function tip(a){
    var bill = parseInt(a);
    console.log(bill+5);
}
// tip function declare hone se phle call ho gya ra koi error ni de rha 
// this is bcz globally store ho gya h function (as in point 1)

// bigTipper("67")
var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill+60);
}
bigTipper("678")
//yha bigTipper ek variable h so isko declaration se phle use ni kr skte (as in point 2)