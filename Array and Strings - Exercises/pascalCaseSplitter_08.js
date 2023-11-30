function solve(text) {

    let regex = /[A-Z][a-z]*/gm;
    let textArr = text.match(regex);

    console.log(textArr.join(", "));
}

solve(`SplitMeIfYouCanHaHaYouCantOrYouCan`);