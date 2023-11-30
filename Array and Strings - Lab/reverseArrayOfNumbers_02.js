function solve(n, array) {
    // let newArray = [];

    // for (let index = 0; index < n; index++) {
    //     newArray.push(array[index])
    // }

    // console.log(newArray.reverse().join(" "));

    let newArray = array.slice(0, n).reverse().join(" ");
    console.log(newArray);
}

solve(3, [10, 20, 30, 40, 50]);