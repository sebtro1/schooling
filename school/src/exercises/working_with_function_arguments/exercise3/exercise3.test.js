const thisCanBeAnyName = require("./exercise3")

const items = ['cheese', 'milk']

test('milk, bread', () => {
    expect(thisCanBeAnyName.purchaseItems(...items)).toBeUndefined();
});
