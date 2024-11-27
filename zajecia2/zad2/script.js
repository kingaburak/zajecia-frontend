// Pobieranie elementów z DOM
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

incrementButton.addEventListener('click', () => {
  let currentValue = parseInt(counterElement.textContent, 10);
  counterElement.textContent = currentValue + 1;
});

colorButton.addEventListener('click', () => {
    counterElement.classList.toggle('red');
  });
