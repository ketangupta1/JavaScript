var sellingPrice = 899;
var listingPrice = 2999;

discountPrice = ((listingPrice-sellingPrice)/listingPrice)*100
console.log("Discount price is: "+discountPrice);

displayDiscountPrice = Math.round(discountPrice);
console.log(displayDiscountPrice+"% off");

var result = sellingPrice<listingPrice;
console.log(typeof result);