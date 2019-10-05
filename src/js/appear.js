// The checker
const apperarTest = el => {
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  };

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight,
  };

  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  );
};

// Usage.
document.addEventListener('DOMContentLoaded', () => {
  const tester = document.querySelector('#map');

  const handler = () => {
    if (apperarTest(tester)) {
      window.removeEventListener('scroll', handler);
      mapInitial();
    }
  };

  handler();
  window.addEventListener('scroll', handler);
});

function mapInitial() {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map('map', {
      center: [47.257613, 39.698118],
      zoom: 15,
    });
  }
}
