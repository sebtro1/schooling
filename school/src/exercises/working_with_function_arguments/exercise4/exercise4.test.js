const unit = require("./exercise4")

// Die Tests müssen alle durchlaufen. Hier darf nichts geändert werden.

test('just to run the JS file', () => {
    expect(unit.runner()).toBeUndefined();
});

test('test1', () => {
    expect(unit.placeOrder(1, 12.10, 3, new Date('05/15/2018'))).toBe('shipping charge for id: 1 is $3 Date:15');
});

test('test2', () => {
    expect(unit.placeOrder(2, 25.20, 10)).toBe(`shipping charge for id: 2 is $10 Date:${unit.today().getDate()}`);
});

test('test3', () => {
    expect(unit.placeOrder(3, 12.05)).toBe(`shipping charge for id: 3 is $5 Date:${unit.today().getDate()}`);
});

test('test4', () => {
    expect(unit.placeOrder(4, 25.30)).toBe(`shipping charge for id: 4 is $10 Date:${unit.today().getDate()}`);
});

test('test5', () => {
    expect(unit.placeOrder(5, 25.20)).toBe(`shipping charge for id: 5 is $10 Date:${unit.today().getDate()}`);
});
