function solve(array) {
    
    function isPalindrom(number) {
        let numAsString = number.toString();
        let reversedNum = numAsString.split("").reverse().join("");

        return numAsString === reversedNum;
    }

    for (let num of array) {
        console.log(isPalindrom(num));
    }
}

solve([123,323,421,121]);