const unit = require("./exercise2solution")

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

test('bread, milk, eggs, donuts, tea', () => {
    expect(unit.purchaseItems(...mustHaves, ...andAlso)).toBe('bread, milk, eggs, donuts, tea');
});
