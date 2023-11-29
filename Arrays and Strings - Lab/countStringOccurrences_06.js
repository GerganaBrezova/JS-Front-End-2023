function solve(sentence, word) {
    let arrSen = sentence.split(/\s+/);

    let count = 0;
    for (let i = 0; i < arrSen.length; i++) {
        let currentWord = arrSen[i];

        if (currentWord === word) {
            count++;
        }

    }

    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');