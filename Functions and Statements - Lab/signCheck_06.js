function solve(n1, n2, n3) {

    const numNegatives = [n1, n2, n3].filter(num => num < 0).length;

    return numNegatives % 2 === 0 ? "Positive" : "Negative";
}

const resultSign = solve(5, 12, -15);
console.log(resultSign);
