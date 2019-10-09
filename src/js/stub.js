(function() {
  const stub = document.querySelector('.stub');
  stub.animation = 'stub 2s 1';
  document.addEventListener('click', event => {
    if (event.target.classList.contains('stub-needed')) {
      console.log(stub);
      event.preventDefault();
      stub.style.animation = 'stub 2s 1';
    }
  });
  stub.addEventListener('animationend', () => {
    stub.style.animation = 'none';
  });
})();
