/* 
Aufgabe: Schreibe hier die amountAfterTaxes Funktion.
Auf der Console müssen die Werte ausgegeben werden, die in den Kommentaren angegeben sind.  
Die Tests prüfen die Funktion auf ihre korrekten Werte und müssen alle bestehen.
 */


const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localeTax = 0.5;

console.log(amountAfterTaxes(amount)); // 25.12
console.log(amountAfterTaxes(amount, fedTax)); // 27.63
console.log(amountAfterTaxes(amount, fedTax, stateTax)); // 28.13
console.log(amountAfterTaxes(amount, fedTax, stateTax, localeTax)); // 28.26

module.exports = { amountAfterTaxes };