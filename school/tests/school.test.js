const thisCanBeAnyName = require("../src/school")

thisCanBeAnyName.fizzBuzz();
thisCanBeAnyName.hiThere();


test('adds 1 + 2 to equal 3', () => {
  expect(thisCanBeAnyName.sum(1, 2)).toBe(3);
});