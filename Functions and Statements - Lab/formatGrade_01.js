function solve(grade) {

    if (grade < 2.00 || grade > 6.00) {
        console.log(`Invalid grade!`);
    } else if (grade < 3.00) {
        console.log(`Fail (${grade})`);
    } else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    } 
}

solve(2.00);