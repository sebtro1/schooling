const thisCanBeAnyName = require("./exercise1solution")

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localeTax = 0.5;

// AI

test('25.12', () => {
    expect(thisCanBeAnyName.amountAfterTaxesFromAI(amount)).toBe(25.12);
});

test('27.63', () => {
    expect(thisCanBeAnyName.amountAfterTaxesFromAI(amount, fedTax)).toBe(27.63);
});

test('28.13', () => {
    expect(thisCanBeAnyName.amountAfterTaxesFromAI(amount, fedTax, stateTax)).toBe(28.13);
});

test('28.26', () => {

    expect(thisCanBeAnyName.amountAfterTaxesFromAI(amount, fedTax, stateTax, localeTax)).toBe(28.26);
});


// Lösung

test('25.12', () => {
    expect(thisCanBeAnyName.amountAfterTaxes(amount)).toBe(25.12);
});

test('27.63', () => {
    expect(thisCanBeAnyName.amountAfterTaxes(amount, fedTax)).toBe(27.63);
});

test('28.13', () => {
    expect(thisCanBeAnyName.amountAfterTaxes(amount, fedTax, stateTax)).toBe(28.13);
});

test('28.26', () => {

    expect(thisCanBeAnyName.amountAfterTaxes(amount, fedTax, stateTax, localeTax)).toBe(28.26);
});

// Lösung mit Arrow Functions

test('25.12', () => {
    expect(thisCanBeAnyName.amountAfterTaxesWithArrowFunctions(amount)).toBe(25.12);
});

test('27.63', () => {
    expect(thisCanBeAnyName.amountAfterTaxesWithArrowFunctions(amount, fedTax)).toBe(27.63);
});

test('28.13', () => {
    expect(thisCanBeAnyName.amountAfterTaxesWithArrowFunctions(amount, fedTax, stateTax)).toBe(28.13);
});

test('28.26', () => {

    expect(thisCanBeAnyName.amountAfterTaxesWithArrowFunctions(amount, fedTax, stateTax, localeTax)).toBe(28.26);
});