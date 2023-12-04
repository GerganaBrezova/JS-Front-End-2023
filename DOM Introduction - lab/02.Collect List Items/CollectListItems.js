function extractText() {
    let nodesList = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');
    for (const node of nodesList) {
        textArea.value += node.textContent + '\n';
    }
}