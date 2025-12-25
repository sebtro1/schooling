const unit = require("./exercise1solution")

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localeTax = 0.5;

// AI

test('25.12', () => {
    expect(unit.amountAfterTaxesFromAI(amount)).toBe(25.12);
});

test('27.63', () => {
    expect(unit.amountAfterTaxesFromAI(amount, fedTax)).toBe(27.63);
});

test('28.13', () => {
    expect(unit.amountAfterTaxesFromAI(amount, fedTax, stateTax)).toBe(28.13);
});

test('28.26', () => {

    expect(unit.amountAfterTaxesFromAI(amount, fedTax, stateTax, localeTax)).toBe(28.26);
});


// Lösung

test('25.12', () => {
    expect(unit.amountAfterTaxes(amount)).toBe(25.12);
});

test('27.63', () => {
    expect(unit.amountAfterTaxes(amount, fedTax)).toBe(27.63);
});

test('28.13', () => {
    expect(unit.amountAfterTaxes(amount, fedTax, stateTax)).toBe(28.13);
});

test('28.26', () => {

    expect(unit.amountAfterTaxes(amount, fedTax, stateTax, localeTax)).toBe(28.26);
});

// Lösung mit Arrow Functions

test('25.12', () => {
    expect(unit.amountAfterTaxesWithArrowFunctions(amount)).toBe(25.12);
});

test('27.63', () => {
    expect(unit.amountAfterTaxesWithArrowFunctions(amount, fedTax)).toBe(27.63);
});

test('28.13', () => {
    expect(unit.amountAfterTaxesWithArrowFunctions(amount, fedTax, stateTax)).toBe(28.13);
});

test('28.26', () => {

    expect(unit.amountAfterTaxesWithArrowFunctions(amount, fedTax, stateTax, localeTax)).toBe(28.26);
});