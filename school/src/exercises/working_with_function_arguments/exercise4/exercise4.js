
const runner = function () {
    console.log('test runner für den Test');
}

const today = function () {
    return new Date();
}


/**
 * Die fehlenden Parameter dieser Funktion müssen hinzugefügt werden. Tipp: Es sind 4 Parameter.
 * 
 * Die Funktion soll folgendes machen:
 * 
 * Wenn die Shipping-Kosten nciht angegeben werden, dann sollen sie wie folgt berechnet werden
 * Wenn Amount < 20 dann sind die Shipping-Kosten 5, sonst sind die Shipping-Kosten 10 
 *  
 * Wenn die Datum nicht angegeben wird, dann soll das heutige Datum verwendet werden
 * 
 */
const placeOrder = function (undefined) {
    const message = `shipping charge for id: ${id} is $${shipping} Date:${date.getDate()}`;
    console.log(message);
    return message;
}

// Aufruf der Funktion mit den Parametern: ID, Amount, Shipping, Date
placeOrder(1, 12.10, 3, new Date('05/15/2018'));
// Aufruf der Funktion mit den Parametern: ID, Amount, Shipping - Das heutige Datum soll verwendet werden.
placeOrder(2, 25.20, 10);
// Aufruf der Funktion mit den Parametern: ID, Amount - Wenn Shipping nicht angegeben wird, soll der Wert berechnet werden (Erklärung sieh oben!)
placeOrder(3, 12.05);
placeOrder(4, 25.30);
placeOrder(5, 25.20);

module.exports = { placeOrder, runner, today };