var calculatorButtons = document.querySelectorAll('.js-calculator__button');

for (calculatorButton of calculatorButtons) {
  calculatorButton.addEventListener('click', function (evt) {
    displayButton.value += evt.currentTarget.value;
  });
}
