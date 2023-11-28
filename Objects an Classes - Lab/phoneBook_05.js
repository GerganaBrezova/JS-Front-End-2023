function getPhoneBook(array) {

    const phoneBook = {};

    for (const element of array) {
        const [name, phoneNumber] = element.split(" ");
        phoneBook[name] = phoneNumber;
    }

    // for (const entry of Object.entries(phoneBook)) {
    //     const [key, value] = entry;
    //     console.log(`${key} -> ${value}`);
    // }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

getPhoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);