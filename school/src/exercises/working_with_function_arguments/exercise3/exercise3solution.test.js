const unit = require("./exercise3solution")


test('Test zum Ausführen der JS-Datei.', () => {
    expect(unit.runner()).toBeUndefined();
});

test('passing only cheese should return cheese, bread', () => {
    expect(unit.purchaseItems('cheese')).toBe('cheese, bread, ');
});

test('passing cheese and milk should return cheese, milk', () => {
    const items = ['cheese', 'milk']
    // Hier ist das (...) der JS "spread operator" - Das bedeutet alle Parameter werden einzeln übergeben!
    expect(unit.purchaseItems(...items)).toBe('cheese, milk, ');
});

test('passing nothing should return milk, bread', () => {
    expect(unit.purchaseItems()).toBe('milk, bread, ');
});

test('passing an array should return cheese, milk, bread, eggs, butter', () => {
    const items = ['cheese', 'milk', 'bread', 'eggs', 'butter'];
    expect(unit.purchaseItems(...items)).toBe('cheese, milk, bread, eggs, butter');
});
