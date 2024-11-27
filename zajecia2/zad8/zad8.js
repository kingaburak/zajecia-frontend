const form = document.getElementById('addForm');
const input = document.getElementById('newItem');
const list = document.getElementById('myList');

form.addEventListener('submit', function (event) 
{
    event.preventDefault(); 

    const newItemText = input.value;
    
    const newListItem = document.createElement('li');
    newListItem.textContent = newItemText;

    list.appendChild(newListItem);

    input.value = '';
});
