
const runner = function () {
    console.log('test runner für den Test');
}

// Aufgabe: Schreibe die Parameer der Funktion so, dass milk und bread die Standardwerte sind, wenn kein Wert übergeben wird an dieser Position.

const purchaseItems = function (essential1, essential2, ...optionals) { // Das (...) ist der JS "rest parameter" - Bildet einen Array für alle restlichen Parameter!
    const message = `${essential1}, ${essential2}, ${optionals.join(', ')}`;
    console.log(message);
    return message;
}


module.exports = { purchaseItems, runner };