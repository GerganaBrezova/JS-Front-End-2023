function convertToAnObject(jsonObject) {

    const convertedObject = JSON.parse(jsonObject);

    for (const entry of Object.entries(convertedObject)) {
        const [key, value] = entry;
        console.log(`${key}: ${value}`);
    }
    
}

convertToAnObject('{"name": "George", "age": 40, "town": "Sofia"}');