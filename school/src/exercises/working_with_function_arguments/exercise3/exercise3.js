
// TODO: Schreibe die Paramter der Funktion so, dass die console.log-Ausgaben korrekt sind, so wie es in den Kommentaren steht.

const purchaseItems = function (essential1, essential2, ...optionals) {  // here (...) is the rest parameter - Ein Array für alle restlichen Parameter!
    console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
}

purchaseItems('cheese'); // cheese, bread
purchaseItems('cheese', 'eggs'); // cheese, eggs

const items = ['cheese', 'milk', 'bread', 'eggs', 'butter'];
purchaseItems(...items); // cheese, milk, bread, eggs, butter // here (...) is the spread operator - Alle Parameter werden einzeln übergeben!

module.exports = { purchaseItems };