function solve(pass) {

    function isLengthValid() {
        return pass.length >= 6 && pass.length <= 10;
    }

    function isOnlyDigitsAndLetters() {
        let regex = /^[A-Za-z0-9]+$/;
        return pass.match(regex);
    }

    function isAtLeastTwoDigits() {
        let digitsCounter = 0;

        for (const symbol of pass) {
            if (!isNaN(symbol)) {
                digitsCounter++;
            }
        }

        return digitsCounter >= 2;
    }

    if (!isLengthValid()) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (!isOnlyDigitsAndLetters()) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (!isAtLeastTwoDigits()) {
        console.log(`Password must have at least 2 digits`);
    }

    if (isLengthValid() && isOnlyDigitsAndLetters() && isAtLeastTwoDigits()) {
        console.log(`Password is valid`);
    }
}

solve('Pa$s$s');