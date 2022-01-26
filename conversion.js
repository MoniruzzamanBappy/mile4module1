var firstName = "md.";
var lastName = "Bappy";
var fullName;
fullName = firstName + " " + lastName;
console.log(fullName);

var frutsPrice = '100';
var vegitablePrice = '58';
var total_price;
total_price = frutsPrice + vegitablePrice;
console.log(total_price);

frutsPrice = parseInt(frutsPrice);
vegitablePrice = parseInt(vegitablePrice);
total_price = frutsPrice + vegitablePrice;
console.log(total_price);
var priceCarrot = '25.54465';
priceCarrot = parseInt(priceCarrot);
console.log(priceCarrot);
priceCarrot += 0.254;
priceCarrot = parseFloat(priceCarrot);
console.log(priceCarrot);

// date define 

var today = new Date();
console.log(today);

var damOfJuta = 20.65465;
var damOfMuja = 5.126548;
var motDam = damOfJuta + damOfMuja;
console.log(motDam.toFixed(4));
