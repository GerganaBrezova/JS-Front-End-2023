function solve() {

  let text = document.querySelector('#text').value.toLowerCase();
  let convention = document.querySelector('#naming-convention').value;
  let result = document.querySelector('#result');

  text = text.split(' ');

  let finalText = [];

  if (convention === 'Camel Case') {
    finalText.push(text[0]); 
    
    for (let i = 1; i < text.length; i++) {
      finalText.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));

      result.textContent = finalText.join('');
    }

  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      finalText.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));

      result.textContent = finalText.join('');
    }
  } else {
    result.textContent = 'Error!'
  }
}