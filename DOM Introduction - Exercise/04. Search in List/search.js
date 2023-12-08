function search() {

   let listItems = Array.from(document.querySelectorAll('li'));
   let searchText = document.getElementById('searchText').value;

   let matches = 0;

   for (const li of listItems) {
      li.style.fontWeight = '';
      li.style.textDecoration = '';
   }  

   for (const li of listItems) {
      if (li.textContent.includes(searchText)) {
         matches++;
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
      }
   }

   let result = document.getElementById('result');
   result.textContent = `${matches} matches found`;
}
