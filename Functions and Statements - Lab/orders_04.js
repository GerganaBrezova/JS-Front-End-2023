function solve(product, count) {
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };

    const price = prices[product];
    const total = price * count;
    console.log(total.toFixed(2));
}

solve("water", 5);