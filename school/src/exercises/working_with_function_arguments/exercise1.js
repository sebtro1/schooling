



const amountAfterTaxesFromAI = function (amount, fedTax = 0, stateTax = 0, localeTax = 0) {
    const totalTaxRate = (fedTax ?? 0) + (stateTax ?? 0) + (localeTax ?? 0);
    const totalAmount = amount * (1 + totalTaxRate / 100);
    return Math.round(totalAmount * 100) / 100;
}

const amountAfterTaxes = function (amount, ...taxes) {

    const computeTaxForAmount = function (tax) {
        let result = amount * tax / 100
        return result;
    }

    const totalValues = function (total, value) {
        return total + value;
    }

    const totalAmount = taxes
        .map(computeTaxForAmount)
        .reduce(totalValues, amount);

    return Math.round(totalAmount * 100) / 100;
}

const amountAfterTaxesWithArrowFunctions = function (amount, ...taxes) {
    const totalAmount = taxes
        .map(tax => amount * tax / 100) // [2.512, 0.5024, 0.1256] erzeugt ein neues Array mit den berechneten Werten für jede Steuer.
        .reduce((total, value) => total + value, amount)
        .toFixed(2);

    return Number(totalAmount);
}


const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localeTax = 0.5;

// console.log(amountAfterTaxes(amount)); // 25.12
// console.log(amountAfterTaxes(amount, fedTax)); // 27.63
// console.log(amountAfterTaxes(amount, fedTax, stateTax)); // 28.13
// console.log(amountAfterTaxes(amount, fedTax, stateTax, localeTax)); // 28.26

module.exports = { amountAfterTaxes, amountAfterTaxesFromAI, amountAfterTaxesWithArrowFunctions };