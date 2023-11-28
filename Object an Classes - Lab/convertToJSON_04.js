function convertToJSON(name, lastName, hairColor) {
    
    const person = {name, lastName, hairColor};

    const convertedObject = JSON.stringify(person);

    console.log(convertedObject);
}

convertToJSON('George', 'Jones', 'Brown');