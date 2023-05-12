const inputBox = document.getElementById('calc_input');
const calculateBtn = document.getElementById('calc_submit');
const result = document.getElementById('result');





calculateBtn.addEventListener('click', function() {
  const inputValue = inputBox.value;
  const calculatedResult = inputValue * 2;
  result.textContent = `The result is: ${calculatedResult}`;
});