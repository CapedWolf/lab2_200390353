const handleCalculations = (method, x, y) => {
    switch (method.toLowerCase()) {
        case 'subtract':
            return {
                result: x - y, operation: '+'
            };
        case 'multiply':
            return {
                result: x * y, operation: '*'
            };
        case 'divide':
            return {
                result: x / y, operation: '/'
            };
        case 'add':
            return {
                result: x + y, operation: '+'
            };
        default:
            return 'option invalid'
    }
};

const options = ['add', 'subtract', 'multiply', 'divide'];

const handleHttpCalculations = (request, response) => {
    request.query.x = Number(request.query.x);
    request.query.y = Number(request.query.y);
    const {
        x,
        y,
        method
    } = request.query;

    if (isNaN(x) || isNaN(y)) {
        return response.send('your inputs are not number');
    }
    if (!method) {
        return response.send(
            `Method can only be the following: ${options.join(
        ', '
      )}`
        );
    }


    const calculations = handleCalculations(method, x, y);

    response.send(`${x} ${ calculations.operation} ${y} = ${ calculations .result}`);
};
module.exports = handleHttpCalculations;
