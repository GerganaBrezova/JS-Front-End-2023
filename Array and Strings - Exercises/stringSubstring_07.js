function solve(word, text) {

    let textArr = text.toLowerCase().split(" ");
    let output = `${word} not found!`;

    for (let i = 0; i < textArr.length; i++) {
         let currentWord = textArr[i];

         if (currentWord === word) {
            output = word;
         }
        
    }

    console.log(output);
}

solve('javascript','JavaScript is the best programming language');