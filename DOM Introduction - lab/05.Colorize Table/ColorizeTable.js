function colorize() {
    let rowsList = document.querySelectorAll('table tr');

    let index = 0;
    for (let row of rowsList) {
        index++;
        if (index % 2 == 0)
            row.style.background = "teal";
    }
}