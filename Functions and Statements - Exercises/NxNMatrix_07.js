function solve(number) {

    function rows(number) {
        return (number.toString() + " ").repeat(number);
    }

    for (let row = 0; row < number; row++) {
        console.log(rows(number))
        
    }
}

solve(3);