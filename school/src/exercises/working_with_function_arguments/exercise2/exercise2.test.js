const thisCanBeAnyName = require("./exercise2")

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

test('bread, milk, eggs, donuts, tea', () => {
    //TODO use the arrays to pass the arguments to the function, console should print 'bread, milk, eggs, donuts, tea'

    expect(thisCanBeAnyName.purchaseItems("bread", "milk", "eggs", "donuts", "tea")).toBeUndefined();
});
