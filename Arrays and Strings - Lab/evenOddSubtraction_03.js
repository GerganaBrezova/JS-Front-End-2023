function solve(array) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        
        if (currentNum % 2 == 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }

    }

    console.log(evenSum - oddSum);
}

solve([3,5,7,9]);