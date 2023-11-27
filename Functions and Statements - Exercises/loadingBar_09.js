function solve(number) {

    if (number === 100) {
        console.log(`100% Complete!`);
    } else {
        let percentageCount = number / 10;
        let dotsCount = 10 - percentageCount;
        console.log(`${number}% [${`%`.repeat(percentageCount)}${`.`.repeat(dotsCount)}]`);
        console.log(`Still loading...`);
    }
}

solve(30);