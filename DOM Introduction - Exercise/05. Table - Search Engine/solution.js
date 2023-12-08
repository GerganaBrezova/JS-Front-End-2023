function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let input = document.getElementById('searchField');
      let listOfRows = document.querySelectorAll('tbody tr');

      for (const row of listOfRows) {
         row.classList.remove('select');

         if (input.value !== '' && row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }

      input.value = '';

   }
}