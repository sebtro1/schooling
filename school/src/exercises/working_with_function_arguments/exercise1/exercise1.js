// TODO: Write the function here

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localeTax = 0.5;

console.log(amountAfterTaxes(amount)); // 25.12
console.log(amountAfterTaxes(amount, fedTax)); // 27.63
console.log(amountAfterTaxes(amount, fedTax, stateTax)); // 28.13
console.log(amountAfterTaxes(amount, fedTax, stateTax, localeTax)); // 28.26

module.exports = { amountAfterTaxes };