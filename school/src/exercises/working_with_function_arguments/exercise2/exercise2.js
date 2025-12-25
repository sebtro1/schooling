
const purchaseItems = function (essential1, essential2, ...optionals) {
    console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
}

purchaseItems('bread', 'milk');
purchaseItems('bread', 'milk', 'jelly');

module.exports = { purchaseItems };