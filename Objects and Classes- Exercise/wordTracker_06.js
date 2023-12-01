function findOccurrences(array) {

    let wordsToSearch = array.shift().split(" ");

    let occurrences = {};

    wordsToSearch.forEach(wordToSearch => {
        occurrences[wordToSearch] = 0;

        array.forEach(element => {
            if (element === wordToSearch) {
                occurrences[wordToSearch] += 1;
            }
        });
    });

    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }

}

findOccurrences([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);