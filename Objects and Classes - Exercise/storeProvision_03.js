function store(stockArray, productsArray) {

    const stock = {};

    for (let index = 0; index < stockArray.length; index += 2) {

        let product = stockArray[index];
        let quantity = Number(stockArray[index + 1]);

        if (!stock.hasOwnProperty(product)) {
            stock[product] = quantity;
        } else {
            stock[product] += quantity;
        }

    }

    for (let index = 0; index < productsArray.length; index += 2) {

        let product = productsArray[index];
        let quantity = Number(productsArray[index + 1]);

        if (!stock.hasOwnProperty(product)) {
            stock[product] = quantity;
        } else {
            stock[product] += quantity;
        }

    }


    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }

}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);