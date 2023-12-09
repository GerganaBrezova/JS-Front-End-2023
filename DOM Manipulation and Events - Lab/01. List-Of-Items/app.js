function addItem() {
    
    let inputText = document.getElementById('newItemText').value;
    let newItem = document.createElement('li');

    newItem.textContent = inputText;

    let ulList = document.getElementById('items');
    ulList.appendChild(newItem);

    inputText = ""; 
}