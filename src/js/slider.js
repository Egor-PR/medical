
let offset = 0; // начальная позиция
const sliderLine = document.querySelector('.slider__line');
document.querySelector('.block__button-next').addEventListener('click', function () {
  offset = offset + 1170;
  if (offset > 4680) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.block__button-prev').addEventListener('click', function () {
  offset = offset - 1170;
  if (offset < 0) {
    offset = 4680;
  }

  sliderLine.style.left = -offset + 'px';
});