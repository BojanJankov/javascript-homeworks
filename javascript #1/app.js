/* Write a JavaScript program that will calculate the price of 30 Phones,
 where the price of one phone is $119.95 and the tax rate is 5%. */

let priceOfThePhones = 119.95;
let numberOfPhones = 30;
let priceOfTax = (priceOfThePhones * 5) / 100;
let priceOfThePhoneWithTax = priceOfTax + priceOfThePhones;
let resultOfPriceOfPhones = priceOfThePhoneWithTax * numberOfPhones;

console.log(resultOfPriceOfPhones);
