const thisCanBeAnyName = require("./exercise2")

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

test('bread, milk, eggs, donuts, tea', () => {
    //TODO use the spread operator to pass the mustHaves and andAlso arrays to the purchaseItems function
    expect(thisCanBeAnyName.purchaseItems(...mustHaves, ...andAlso)).toBeUndefined();
});
