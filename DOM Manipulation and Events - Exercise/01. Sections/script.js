function create(words) {
   let mainDiv = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      div.appendChild(p);
      mainDiv.appendChild(div);

      p.textContent = word;
      p.style.display = 'none';

      div.addEventListener('click', () => {
         p.style.display = '';
      });
   }
}