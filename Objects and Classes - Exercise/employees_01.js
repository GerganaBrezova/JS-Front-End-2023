function employees(array) {

    array.forEach(employee => {

        const employeeName = employee;
        const nameLength = employee.length;

        console.log(`Name: ${employeeName} -- Personal Number: ${nameLength}`);
    });
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);