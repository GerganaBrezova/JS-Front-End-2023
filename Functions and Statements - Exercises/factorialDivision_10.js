function solve(n1, n2) {

if (n2 === 0) {
    console.log(`Cannot divide by zero!`);
    return;
}
    
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

let result = factorial(n1) / factorial(n2);
console.log(result.toFixed(2));
}

solve(5, 2);