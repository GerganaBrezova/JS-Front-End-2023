function cars(array) {

    let parkingLot = [];

    for (const car of array) {
        let [direction, carNumber] = car.split(", ");

        if (direction === "IN" && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber);
        } else if (direction === "OUT" && parkingLot.includes(carNumber)) {
            let index = parkingLot.indexOf(carNumber);
            parkingLot.splice(index, 1);
        }
    }

    if (parkingLot.length > 0) {
        let sortedCarNumbers = parkingLot.sort((a, b) => a.localeCompare(b));

        sortedCarNumbers.forEach(car => console.log(car));
    } else {
        console.log(`Parking Lot is Empty`);
    }

}

cars([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);