(function() {
  const context = document.querySelector('.gallery');

  function switchCase(event) {
    const showCases = document.querySelectorAll('.exhib__show-item');
    const activeButton = document.querySelector('.exhib__type-button--active');
    const pressedButton = event.target;
    const pressedButtonType = pressedButton.dataset.type;
    const activeCase = document.querySelector('.exhib__show-item--active');
    const activeCaseType = activeCase.dataset.type;

    if (event.target.classList.contains('exhib__type-button') && pressedButtonType !== activeCaseType) {
      activeCase.classList.remove('exhib__show-item--active');

      activeButton.classList.remove('exhib__type-button--active');
      pressedButton.classList.add('exhib__type-button--active');

      showCases.forEach(a => {
        if (a.dataset.type === pressedButtonType) {
          setTimeout(() => a.classList.add('exhib__show-item--active'), 300);
        }
      });
    }
  }
  context.addEventListener('click', switchCase);
})();
