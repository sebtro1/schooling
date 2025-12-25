
const runner = function () {
    console.log('test runner für den Test');
}

const today = function () {
    return new Date();
}

const placeOrder = function (
    id, amount,
    shipping = (amount < 20 ? 5 : 10),
    date = today()) {

    const message = `shipping charge for id: ${id} is $${shipping} Date:${date.getDate()}`;
    console.log(message);
    return message;
}

// shipping, if not given is $5 if amount less than 20 else $10
// date is today's data unless given

placeOrder(1, 12.10, 3, new Date('05/15/2018'));
placeOrder(2, 25.20, 10);
placeOrder(3, 12.05);
placeOrder(4, 25.30);
placeOrder(5, 25.20);

module.exports = { placeOrder, runner, today };