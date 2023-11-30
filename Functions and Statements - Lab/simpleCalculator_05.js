function solve(n1, n2, operator) {

    const operations = {
        multiply: (n1, n2) => n1 * n2,
        divide: (n1, n2) => n1 / n2,
        add: (n1, n2) => n1 + n2,
        subtract: (n1, n2) => n1 - n2
    };

    const operationFunction = operations[operator];
    const result = operationFunction(n1, n2);
    console.log(result);
    
}

solve(5, 5, 'multiply');