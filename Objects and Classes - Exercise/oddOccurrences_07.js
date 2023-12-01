function extractElements(input) {

    input = input.toLowerCase();
    let arrOfElements = input.split(" ");

    let map = new Map();

    arrOfElements.forEach((element) => {

        if (!map.has(element)) {
            map.set(element, 1);
        } else {
            let oldValue = map.get(element);
            let newValue = oldValue + 1;

            map.set(element, newValue);
        }
    });

    let result = [];

    map.forEach((value, key) => {
        if (value % 2 !== 0) {
            result.push(key);
        }
    });

    console.log(result.join(" "));

}

extractElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');