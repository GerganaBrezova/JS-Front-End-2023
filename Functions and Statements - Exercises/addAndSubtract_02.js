function solve(n1, n2, n3) {
    
    function sum(n1, n2) {
        return n1 + n2;
    }

    function subtract(n3) {
        let n = sum(n1, n2);
        return n - n3;
    }

    let result = subtract(n3);
    console.log(result);

}

solve(23, 6, 10);