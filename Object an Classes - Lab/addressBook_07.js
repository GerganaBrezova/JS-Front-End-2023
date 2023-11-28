function getPeopleInfo(array) {

    const peopleInfo = {};

    for (const person of array) {
        const [name, address] = person.split(":");
        peopleInfo[name] = address;
    }

    const peopleAdresses = Object.entries(peopleInfo).sort();

    for (const address of peopleAdresses) {
        console.log(`${address[0]} -> ${address[1]}`);
    }

}

getPeopleInfo(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);