function solve(text, word) {
    // const regex = new RegExp(word, 'g');

    // const replacedText = text.replace(regex, match => '*'.repeat(match.length));

    // console.log(replacedText);

    while (text.includes(word)) {
        text = text.replace(word, "*".repeat(word.length));
    }

    console.log(text);
}

solve('A small sentence with some words', 'small');