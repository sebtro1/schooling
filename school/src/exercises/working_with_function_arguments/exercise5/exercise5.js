
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

module.exports = { placeOrder, runner, today };