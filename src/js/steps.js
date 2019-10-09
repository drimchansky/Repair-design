(function() {
  const context = document.getElementById('steps');

  const buttons = context.querySelectorAll('.steps__button');
  const bullets = context.querySelectorAll('.pagination__bullet');
  const images = context.querySelectorAll('.steps__image');
  const desks = context.querySelectorAll('.desk__item');

  const pressButton = event => {
    // currently active
    const currentBtn = context.querySelector('.steps__button--active');
    const currentImg = context.querySelector('.steps__image--active');
    const currentPag = context.querySelector('.pagination__bullet--active');
    const currentDesk = context.querySelector('.desk__item--active');

    const pressedIndex = event.target.dataset.index;

    if (event.target.dataset.index !== currentBtn.dataset.index) {
      // change button
      currentBtn.classList.remove('steps__button--active');
      buttons.forEach(item => {
        if (item.dataset.index === pressedIndex) {
          item.classList.add('steps__button--active');
        }
      });
      // change pagination
      currentPag.classList.remove('pagination__bullet--active');
      bullets.forEach(item => {
        if (item.dataset.index === pressedIndex) {
          item.classList.add('pagination__bullet--active');
        }
      });
      // change image
      currentImg.classList.remove('steps__image--active');
      images.forEach(item => {
        if (item.dataset.index === pressedIndex) {
          item.classList.add('steps__image--active');
        }
      });
      // change desk
      currentDesk.classList.remove('desk__item--active');
      desks.forEach(item => {
        if (item.dataset.index === pressedIndex) {
          item.classList.add('desk__item--active');
        }
      });
    }
  };
  const pressArrow = () => {
    console.log('arrow');
  };

  context.addEventListener('click', event => {
    if (event.target.id === 'steps-button') {
      pressButton(event);
    } else if (event.target.id === 'steps-arrow') {
      pressArrow(event);
    } else if (event.target.id === 'steps-pagination') {
      pressButton(event);
    }
  });
})();
