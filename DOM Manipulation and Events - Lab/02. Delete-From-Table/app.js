function deleteByEmail() {

    let inputText = document.querySelector('input[name="email"]').value;
    let rowsList = Array.from(document.querySelector('tbody').children);

    let isRemoved = false;

    for (const row of rowsList) {
        let emailCell = row.children[1].textContent;

        if (emailCell === inputText) {
            row.remove();
            isRemoved = true;
        }
    }

    let result = document.getElementById('result');

    if (isRemoved) {
        result.textContent = "Deleted";
    } else {
        result.textContent = "Not found."
    }

}