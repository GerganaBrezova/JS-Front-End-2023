function solve(text) {

    let regex = /#[A-Za-z]+/gm;
    let matcher = text.match(regex);

    for (let word of matcher) {
        word = word.replace("#", "");
        console.log(word);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');