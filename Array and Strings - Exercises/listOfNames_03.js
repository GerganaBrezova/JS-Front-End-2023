function solve(array) {

    array.sort((a, b) => {
        return a.localeCompare(b);
    })

    let index = 1;

    array.forEach(element => {
        console.log(`${index}.${element}`);
        index++;
    });
}

solve(["John", "Bob", "Christina", "Ema"]);