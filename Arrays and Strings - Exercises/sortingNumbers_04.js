function solve(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let newArray = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {

        if (i % 2 === 0){
            newArray.push(sortedArray.shift());
        } else {
            newArray.push(sortedArray.pop());
        }
    }

    return newArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);