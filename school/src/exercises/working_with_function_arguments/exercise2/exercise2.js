const runner = function () {
    console.log('test runner für den Test');
}

const purchaseItems = function (essential1, essential2, ...optionals) { // (...) Das ist der JS "rest parameter" - Bildet einen Array für alle restlichen Parameter!
    console.log(`${essential1}, ${essential2}, ${optionals.join(', ')}`);
}

purchaseItems('bread', 'milk');
purchaseItems('bread', 'milk', 'jelly');

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

// Aufgabe: Rufe die Funktion purchaseItems so das 'bread, milk, eggs, donuts, tea' ausgegeben wird. 

module.exports = { purchaseItems, runner };