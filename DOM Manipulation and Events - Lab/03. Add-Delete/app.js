function addItem() {

    let inputText = document.getElementById('newItemText');
    let newItem = document.createElement('li');

    newItem.textContent = inputText.value;

    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';

    deleteLink.addEventListener('click', deleteItem);

    newItem.appendChild(deleteLink);

    let ulList = document.getElementById('items');
    ulList.appendChild(newItem);

    inputText.value = "";

    function deleteItem(e) {
        const row = e.currentTarget.parentNode;
        row.remove();
    }
}