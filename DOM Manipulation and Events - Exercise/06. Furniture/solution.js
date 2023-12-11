function solve() {

  let generateTextBox = document.getElementsByTagName('textarea')[0];
  let generateBtn = document.getElementsByTagName('button')[0];

  let buyTextBox = document.getElementsByTagName('textarea')[1];
  let buyBtn = document.getElementsByTagName('button')[1];

  let tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    let furnitureInfo = JSON.parse(generateTextBox.value);

    for (const furniture of furnitureInfo) {
      let { name, img, price, decFactor } = furniture;

      let tr = document.createElement('tr');

      let tdImg = document.createElement('td');
      tdImg.innerHTML = `<img src="${img}" alt="${name}">`;
      tr.appendChild(tdImg);

      let tdName = document.createElement('td');
      tdName.textContent = name;
      tr.appendChild(tdName);

      let tdPrice = document.createElement('td');
      tdPrice.textContent = price;
      tr.appendChild(tdPrice);

      let tdDecFactor = document.createElement('td');
      tdDecFactor.textContent = decFactor;
      tr.appendChild(tdDecFactor);

      let tdCheckbox = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      tdCheckbox.appendChild(checkbox);
      tr.appendChild(tdCheckbox);

      tbody.appendChild(tr);
    }
  }

  function buy() {
    let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));

    let namesList = [];
    let pricesList = [];
    let dfsList = [];

    for (const checkbox of checkboxes) {
      let parentTr = checkbox.parentElement.parentElement;

      let furnitureName = parentTr.children[1].textContent;
      let furniturePrice = parseFloat(parentTr.children[2].textContent);
      let furnitureDF = parseFloat(parentTr.children[3].textContent);

      namesList.push(furnitureName);
      pricesList.push(furniturePrice);
      dfsList.push(furnitureDF);
    }

    let totalPrice = pricesList.reduce((sum, price) => sum + price, 0).toFixed(2);
    let decFactor = dfsList.reduce((sum, df) => sum + df, 0) / dfsList.length;

    let boughtFurnitureMessage = `Bought furniture: ${namesList.join(', ')}\nTotal price: ${totalPrice}\nAverage decoration factor: ${decFactor.toFixed(2)}`;
    buyTextBox.value = boughtFurnitureMessage;
  }
}