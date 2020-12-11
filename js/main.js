const statements = ['+', '-', 'x', '/'];
let x = '', y = '', state;

var calculatorButtons = document.querySelectorAll('.js-calculator__button');

for (calculatorButton of calculatorButtons) {
  calculatorButton.addEventListener('click', function (evt) {
    for (statement of statements) {
      if (evt.currentTarget.value === statement) {
        state = evt.currentTarget.value;
      }
    }

    if (!state) {
      x += evt.currentTarget.value;
    } else if (!isNaN(Number(evt.currentTarget.value))) {
      y += evt.currentTarget.value;
    }

    if (x.length === 0 && state) {
      x = '0';
      displayButton.value = '0';
    }

    displayButton.value += evt.currentTarget.value;
  });
}

elClearButton.addEventListener('click', function () {
  displayButton.value = '', x = '', y = '', state = '';
});

elCalculateButton.addEventListener('click', function () {
  const calc1 = new Calculator(x, y);
  if (state === '+') {
    displayButton.value = calc1.addition();
  } else if (state === '-') {
    displayButton.value = calc1.difference();
  } else if (state === 'x') {
    displayButton.value = calc1.product();
  } else {
    displayButton.value = calc1.division();
  }

  if (displayButton.value === '0') {
    x = '';
  } else {
    x = displayButton.value;
  }

  y = '', state = '';
});
