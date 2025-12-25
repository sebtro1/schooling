
const purchaseItems = function (essential1, essential2, ...optionals) {
    const message = `${essential1}, ${essential2}, ${optionals.join(', ')}`;
    console.log(message);
    return message;
}

module.exports = { purchaseItems };