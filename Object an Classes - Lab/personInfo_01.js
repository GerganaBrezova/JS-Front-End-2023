function person(firstName, lastName, age) {

    // let person = {};
    // person.firstName = firstName;
    // person.lastName = lastName;
    // person.age = age;

    // return person;

    return {
        firstName,
        lastName,
        age,
    };
}

console.log(person("Peter", "Pan", "20"));   